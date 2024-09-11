<template>
  <Body
    class="bg-white text-gray-900 selection:bg-primary-100 dark:bg-zinc-900 dark:text-white dark:selection:bg-primary-800"
  />
  <LayoutNav />
  <main>
    <slot />
  </main>
  <LayoutFooter />
</template>

<style scoped>
* {
  font-family: Montserrat, 'sans-serif';
}
</style>

<style>
a {
  @apply hover:underline
}
</style>
