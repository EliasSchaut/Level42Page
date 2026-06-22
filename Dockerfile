# syntax=docker/dockerfile:1

# ── Basis ───────────────────────────────────────────────────────────────────
# Debian-slim statt Alpine, da sharp (Bildoptimierung via @nuxt/image) damit
# zuverlaessiger laeuft (glibc statt musl). Node-Version erfuellt engines (>=20.19).
FROM node:22-bookworm-slim AS base
ENV PNPM_HOME="/pnpm" \
    PATH="/pnpm:$PATH"
# pnpm via corepack in exakt der in package.json gepinnten Version aktivieren
RUN corepack enable
WORKDIR /app

# ── Dependencies ────────────────────────────────────────────────────────────
# Eigene Stage, damit der Layer nur bei Aenderung von Lockfile/package.json
# neu gebaut wird. --ignore-scripts: keine fremden Install-Skripte; die fuer
# sharp/esbuild noetigen Binaries kommen als vorgebaute optionalDependencies.
FROM base AS deps
COPY package.json pnpm-lock.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

# ── Build ───────────────────────────────────────────────────────────────────
FROM base AS build
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# erzeugt das in sich geschlossene Nitro-Bundle unter .output
RUN pnpm run build

# ── Runtime ─────────────────────────────────────────────────────────────────
# Nur das .output-Bundle wird uebernommen -> schlankes, abhaengigkeitsfreies Image.
FROM node:22-bookworm-slim AS runtime
ENV NODE_ENV=production \
    NITRO_HOST=0.0.0.0 \
    NITRO_PORT=3000 \
    PORT=3000
WORKDIR /app
COPY --from=build /app/.output ./.output

# als non-root laufen (User 'node' ist im Image vorhanden)
USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD node -e "require('http').get('http://127.0.0.1:'+(process.env.PORT||3000)+'/',r=>process.exit(r.statusCode<500?0:1)).on('error',()=>process.exit(1))"

CMD ["node", ".output/server/index.mjs"]
