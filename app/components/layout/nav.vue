<template>
  <header>
    <nav class="flex flex-col">
      <div
        class="bg-prime-400 dark:bg-prime-500 flex w-full items-center justify-between p-5"
      >
        <a class="text-3xl font-bold" href="/">Level&nbsp;42</a>

        <ul class="flex items-center space-x-5 text-lg font-semibold">
          <li class="hidden sm:list-item">
            <a href="/#about" v-html="$t('nav.about')" />
          </li>
          <li class="hidden sm:list-item">
            <a href="/#program">{{ $t('nav.program') }}</a>
          </li>
          <li class="hidden sm:list-item">
            <a href="/#tutors">{{ $t('nav.tutors') }}</a>
          </li>
          <li class="hidden sm:list-item">
            <a href="/#links">{{ $t('nav.links') }}</a>
          </li>
          <SettingTheme />
          <SettingLang />
        </ul>
      </div>
      <div class="bg-prime-500 dark:bg-prime-400 h-1 px-1" />
      <ButtonJoin label="Discord" href="https://discord.gg/KQrmnRcqVu" />
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
