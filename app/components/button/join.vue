<template>
  <div class="relative">
    <div class="absolute top-0 right-0 translate-x-3 translate-y-6">
      <a
        :href="href"
        target="_blank"
        aria-label="Join our Discord server (opens in a new tab)"
        class="group to-prime-500 relative inline-flex transform items-center gap-3 rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-orange-600 px-5 py-2 font-semibold text-white italic shadow-2xl transition hover:scale-105 focus-visible:ring-4 focus-visible:ring-orange-300 focus-visible:ring-offset-2 motion-safe:animate-[bounce_1.6s_infinite]"
      >
        <span
          class="absolute -top-2 -left-4 -rotate-12 rounded-sm bg-white px-2 py-0.5 text-xs font-medium tracking-wide text-orange-600 uppercase shadow-sm"
        >
          Join
        </span>

        <span>{{ label }}</span>

        <span
          class="absolute inset-0 rounded-tr-lg rounded-bl-lg opacity-20 blur-md transition group-hover:opacity-40"
        ></span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>
