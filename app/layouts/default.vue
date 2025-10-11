<template>
  <Body
    class="font-montserrat text-second-900 selection:bg-prime-100 dark:bg-second-900 dark:selection:bg-prime-800 overflow-x-hidden bg-white dark:text-white"
  />
  <div class="flex h-screen flex-col justify-between">
    <LayoutNav />
    <main class="mb-auto">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style>
a {
  @apply hover:underline;
}
</style>
