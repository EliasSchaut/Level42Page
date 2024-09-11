<template>
  <div class="mx-3 mb-8 flex flex-col items-center space-y-5">
    <img
      height="160"
      width="160"
      class="rounded-full"
      :src="image_src"
      :alt="`image of ${name}`"
    />
    <div class="text-center">
      <p class="text-lg font-bold text-primary-600 dark:text-primary-500">
        {{ name }}
      </p>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image_src: {
    type: String,
    required: true,
  },
});
</script>
