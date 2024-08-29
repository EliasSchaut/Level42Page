<template>
  <Body
    class="bg-white text-gray-900 selection:bg-amber-100 dark:bg-zinc-900 dark:text-white dark:selection:bg-amber-800"
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
