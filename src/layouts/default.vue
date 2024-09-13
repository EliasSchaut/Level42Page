<template>
  <Body
    class="bg-white text-secondary-900 selection:bg-primary-100 dark:bg-secondary-900 dark:text-white dark:selection:bg-primary-800"
  />
  <div class="flex flex-col h-screen justify-between">

    <LayoutNav />
    <main class="mb-auto">
      <slot />
    </main>
    <LayoutFooter />
  </div>
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
