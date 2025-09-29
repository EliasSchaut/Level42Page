<template>
  <header>
    <nav class="flex flex-col">
      <div
        class="bg-prime-400 dark:bg-prime-500 flex w-full items-center justify-between p-5"
      >
        <a class="text-3xl font-bold" href="/">Level&nbsp;42</a>

        <ul class="flex items-center space-x-5 text-lg font-semibold">
          <li class="hidden sm:list-item">
            <a href="/#about">Über&nbsp;uns</a>
          </li>
          <li class="hidden sm:list-item"><a href="/#tutors">Tutoren</a></li>
          <li class="hidden sm:list-item"><a href="/#program">Programm</a></li>
          <li class="hidden sm:list-item"><a href="/#links">Links</a></li>
          <li>
            <SettingTheme />
          </li>
        </ul>
      </div>
      <div class="bg-prime-500 dark:bg-prime-400 h-1 px-1" />
      <!--<ButtonJoin label="Discord" href="https://discord.gg/KQrmnRcqVu" />-->
    </nav>
  </header>
</template>
