<template>
  <div class="relative">
    <slot class="relative z-10" />
  </div>
</template>

<style scoped>
div {
  background: radial-gradient(
    circle,
    rgba(255, 191, 0, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
}
</style>
