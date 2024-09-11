<template>
  <header>
    <nav>
      <div
        class="flex items-center justify-between bg-primary-400 p-5 dark:bg-primary-500"
      >
        <a class="text-3xl font-bold" href="/">Level&nbsp;42</a>

        <ul class="flex items-center space-x-5 text-lg font-semibold">
          <li class="hidden sm:list-item"><a href="/#about">Über&nbsp;uns</a></li>
          <li class="hidden sm:list-item"><a href="/#tutors">Tutoren</a></li>
          <li class="hidden sm:list-item"><a href="/#program">Programm</a></li>
          <li class="hidden sm:list-item"><a href="/#links">Links</a></li>
          <li>
            <SettingTheme />
          </li>
        </ul>
      </div>
      <div class="h-1 bg-primary-500 px-1 dark:bg-primary-400" />
    </nav>
  </header>
</template>