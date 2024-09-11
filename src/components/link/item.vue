<template>
  <div class="flex flex-col justify-start space-y-1 align-middle">
    <a
      :href="href"
      class="text-lg font-semibold text-primary-500 dark:text-primary-600"
    >
      {{ title }}</a
    >
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>
