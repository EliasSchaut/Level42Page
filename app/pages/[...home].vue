<template>
  <!-- Hero -->
  <section
    class="mx-auto my-16 flex flex-col items-center justify-center space-y-5 p-5"
  >
    <Glowing>
      <img
        class="h-60 sm:h-96"
        src="/svg/lvl42_logo_full.svg"
        alt="Level 42 Logo"
      />
    </Glowing>
    <SectionTitle class="text-4xl font-bold"
      >Level&nbsp;42 – {{ $t('common.tagline') }}
    </SectionTitle>
  </section>

  <!-- About -->
  <section id="about" class="mx-auto px-5">
    <div
      class="flex flex-col items-center justify-around space-y-5 space-x-4 md:flex-row"
    >
      <div class="text-left text-lg lg:w-[700px]">
        <b class="text-prime-600 dark:text-prime-500">{{
          $t('home.about.title')
        }}</b
        ><br />
        {{ $t('home.about.desc') }}
      </div>
      <img
        class="h-[184px] w-[220px] select-none"
        src="/img/logo_mushroom.png"
        alt="Logo Mushroom"
      />
    </div>
  </section>

  <!-- Program -->
  <section id="program" class="mx-auto">
    <SectionTitle>{{ $t('home.program.title') }}</SectionTitle>
    <div
      class="text-prime-600 dark:text-prime-400 mx-5 mb-4 flex flex-col items-center justify-center gap-6 text-center text-lg font-medium md:flex-row"
    >
      <a
        href="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBerlin&bgcolor=%23EF6C00&showTz=0&mode=WEEK&showTabs=0&showCalendars=0&showTitle=0&showPrint=0&showDate=0&showNav=0&src=ZTkwODM3Y2ZmZWI0ZGI3OTE4M2Y3ZDc4NDc0NGNiZjdhZDZhNjQ5NjE2M2E4YzNmMmJmYTk0ODdhN2MyM2Q2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00&dates=20241014/20241020"
        target="_blank"
        >{{ $t('home.program.plan.detailed') }}</a
      >
      <a
        href="https://calendar.google.com/calendar/u/0?cid=ZTkwODM3Y2ZmZWI0ZGI3OTE4M2Y3ZDc4NDc0NGNiZjdhZDZhNjQ5NjE2M2E4YzNmMmJmYTk0ODdhN2MyM2Q2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
        target="_blank"
        >{{ $t('home.program.plan.google') }}</a
      >
      <a
        href="https://calendar.google.com/calendar/ical/e90837cffeb4db79183f7d784744cbf7ad6a6496163a8c3f2bfa9487a7c23d6e%40group.calendar.google.com/public/basic.ics"
        >{{ $t('home.program.plan.ical') }}</a
      >
    </div>

    <img class="m-auto px-12" src="/img/wochenplan.png" alt="wochenplan" />
  </section>

  <!-- Tutors -->
  <section id="tutors" class="mx-auto px-5">
    <SectionTitle>{{ $t('home.tutors.title') }}</SectionTitle>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li>
        <Tutor
          name="Adrian Junge"
          semester="5"
          image_src="/img/tutors/adrian_junge.png"
        />
      </li>
      <li>
        <Tutor
          name="Anna Kaiser"
          semester="3"
          image_src="/img/tutors/anna_kaiser.png"
        />
      </li>
      <li>
        <Tutor
          name="Chrissy Wenzel"
          semester="3"
          image_src="/img/tutors/chrissy_wenzel.jpg"
        />
      </li>
      <li>
        <Tutor name="Eileen Fix" semester="6" image_src="/img/tutors/sun.png" />
      </li>
      <li>
        <Tutor
          name="Elias Schaut"
          semester="3"
          image_src="/img/tutors/elias_schaut.png"
        />
      </li>
      <li>
        <Tutor
          name="Joannes Gölz"
          semester="3"
          image_src="/img/tutors/johannes_goelz.png"
        />
      </li>
      <li>
        <Tutor
          name="Laura Blechschmidt"
          semester="1"
          image_src="/img/tutors/laura_blechschmidt.png"
        />
      </li>
      <li>
        <Tutor
          name="Lukas Zetto"
          semester="3"
          image_src="/img/tutors/lukas_zetto.png"
        />
      </li>
      <li>
        <Tutor
          name="Max Wurthmann"
          semester="3"
          image_src="/img/tutors/max_wurthmann.png"
        />
      </li>
      <li>
        <Tutor
          name="Natalie Abels"
          semester="3"
          image_src="/img/tutors/natalie_abels.png"
        />
      </li>
      <li>
        <Tutor
          name="Nick Poser"
          semester="3"
          image_src="/img/tutors/nick_poser.png"
        />
      </li>
      <li>
        <Tutor
          name="Paul Städter"
          semester="3"
          field="WMathe"
          image_src="/img/tutors/paul_staedter.png"
        />
      </li>
    </ul>
  </section>

  <!-- Links -->
  <section id="links" class="mx-auto mb-10 px-10">
    <SectionTitle>{{ $t('home.links.title') }}</SectionTitle>
    <div
      class="grid grid-cols-1 space-y-12 md:grid-cols-3 md:space-y-0 md:space-x-12"
    >
      <div class="flex flex-col space-y-5">
        <h1 class="text-prime-600 dark:text-prime-500 text-xl font-bold">
          {{ $t('home.links.o-phase.title') }}
        </h1>
        <div class="flex flex-col space-y-3">
          <LinkItem
            :title="$t('home.links.o-phase.website.title')"
            :description="$t('home.links.o-phase.website.desc')"
            href="https://o-phase.com"
          />
          <LinkItem
            :title="$t('home.links.o-phase.asta.title')"
            :description="$t('home.links.o-phase.asta.desc')"
            href="https://www.asta-kit.de/de/notunterkuenfte"
          />
          <LinkItem
            :title="$t('home.links.o-phase.map.title')"
            :description="$t('home.links.o-phase.map.desc')"
            href="https://www.kit.edu/campusplan/"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-5">
        <h1 class="text-prime-600 dark:text-prime-500 text-xl font-bold">
          {{ $t('home.links.study.title') }}
        </h1>
        <div class="flex flex-col space-y-3">
          <LinkItem
            :title="$t('home.links.study.cms.title')"
            :description="$t('home.links.study.cms.desc')"
            href="https://campus.studium.kit.edu/events/catalog.php"
          />
          <LinkItem
            :title="$t('home.links.study.ilias.title')"
            :description="$t('home.links.study.ilias.desc')"
            href="https://ilias.studium.kit.edu/"
          />
          <LinkItem
            :title="$t('home.links.study.fsmi.title')"
            :description="$t('home.links.study.fsmi.desc')"
            href="https://www.fsmi.uni-karlsruhe.de/"
          />
          <LinkItem
            :title="$t('home.links.study.asta.title')"
            :description="$t('home.links.study.asta.desc')"
            href="https://www.asta-kit.de/"
          />
          <LinkItem
            :title="$t('home.links.study.sw-ka.title')"
            :description="$t('home.links.study.sw-ka.desc')"
            href="https://www.sw-ka.de/"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-5">
        <h1 class="text-prime-600 dark:text-prime-500 text-xl font-bold">
          {{ $t('home.links.karlsruhe.title') }}
        </h1>
        <div class="flex flex-col space-y-3">
          <LinkItem
            :title="$t('home.links.karlsruhe.z10.title')"
            :description="$t('home.links.karlsruhe.z10.desc')"
            href="https://www.z10.info/"
          />
          <LinkItem
            :title="$t('home.links.karlsruhe.kvv.title')"
            :description="$t('home.links.karlsruhe.kvv.desc')"
            href="https://www.kvv.de/"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Links -->
  <section id="sponsors" class="mx-auto mb-10 px-10">
    <SectionTitle>{{ $t('home.sponsors.title') }}</SectionTitle>
    <div class="flex items-center justify-center gap-12">
      <Sponsor link="https://andrena.de/" name="andrena" />
      <Sponsor link="https://objektkultur.de/" name="objektkultur" has_dark />
    </div>
  </section>
</template>
