<template>
  <Dropdown
    :items="[
      {
        label: 'Hell',
        callback: () => settings.setTheme('light'),
        icon: SunIcon,
      },
      {
        label: 'Dunkel',
        callback: () => settings.setTheme('dark'),
        icon: MoonIcon,
      },
      {
        label: 'System',
        callback: () => settings.setTheme('system'),
        icon: ComputerDesktopIcon,
      },
    ]"
  >
    <SunIcon
      v-if="settings.theme === 'light'"
      class="h-5 w-5 text-prime-800"
      aria-hidden="true"
    />
    <MoonIcon
      v-else-if="settings.theme === 'dark'"
      class="h-5 w-5 text-prime-800"
      aria-hidden="true"
    />
    <ComputerDesktopIcon
      v-else
      class="h-5 w-5 text-prime-800"
      aria-hidden="true"
    />
  </Dropdown>
</template>

<script setup lang="ts">
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from '@heroicons/vue/24/outline';
import { settingsStore } from '~/store/settings';
const settings = settingsStore();
</script>
