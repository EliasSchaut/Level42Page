<template>
  <Body class="bg-white text-gray-900 dark:bg-zinc-900 dark:text-white" />
  <div class="selection:bg-amber-100 dark:selection:bg-amber-800">
    <LayoutNav />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped>
div {
  font-family: Montserrat, sans-serif;
}
</style>
<script setup lang="ts"></script>
