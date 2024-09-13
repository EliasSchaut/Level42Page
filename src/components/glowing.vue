<template>
  <div class="relative">
    <slot class="relative z-10" />
  </div>
</template>

<style scoped>
div {
  background: radial-gradient(
    circle,
    rgba(246, 92, 25, 1) 0%,
    rgba(255, 255, 255, 0) 60%
  );
}
</style>
