# Level42Page

Landing page for 'Level 42' group

## Development

This project uses [pnpm](https://pnpm.io) (pinned via the `packageManager` field;
enable it with `corepack enable`).

```bash
pnpm install      # install dependencies
pnpm dev          # start dev server on http://localhost:3000
pnpm build        # production build (.output)
pnpm start        # run the production build
```

## Docker

Build and run the production image via Docker Compose:

```bash
docker compose up --build      # build image and start (http://localhost:3000)
docker compose up -d           # run detached
docker compose down            # stop and remove
```

Override the host port with the `PORT` env var, e.g. `PORT=8080 docker compose up`.
