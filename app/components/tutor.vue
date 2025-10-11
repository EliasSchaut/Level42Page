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
      <p class="text-prime-600 dark:text-prime-500 text-lg font-bold">
        {{ name }}
      </p>
      <p>
        {{ semester }}. {{ $t('home.tutors.semester') }}
        {{ field ?? $t('home.tutors.computer_science') }}
        {{ $t('home.tutors.master') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    default: null,
  },
  image_src: {
    type: String,
    required: true,
  },
});
</script>
