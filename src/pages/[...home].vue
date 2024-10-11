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
    <SectionTitle class="text-4xl"
      >Level&nbsp;42 – Das nächste Level
    </SectionTitle>
  </section>

  <!-- About -->
  <section id="about" class="mx-auto px-5">
    <div
      class="flex flex-col items-center justify-around space-x-4 space-y-5 md:flex-row"
    >
      <div class="text-left text-lg lg:w-[700px]">
        <b class="text-primary-600 dark:text-primary-500"
          >Hey! Wir sind die Master O-Phasen-Gruppe Level 42!</b
        ><br />
        Ihr startet in den Master am KIT - mit uns seid ihr bereit für
        <i>das nächste Level</i>! Neben Einblicken in das Masterstudium am KIT
        geht es bei uns in der O-Phase vor allem darum, gleichgesinnte
        Kommilitonen kennenzulernen. Dafür haben wir unter anderem einen
        Cocktailabend, eine Kneipentour sowie sportlichere Aktivitäten wie den
        Besuch bei Ninja World, einer Lasertag-Halle oder einem Bowling Center
        und gemeinsame Essen geplant. Wir freuen uns auf euch und stehen euch
        gerne mit Rat und Tat zur Seite.
      </div>
      <img
        class="h-[184px] w-[220px] select-none"
        src="/img/logo_mushroom.png"
        alt="Logo Mushroom"
      />
    </div>
  </section>

  <!-- Tutors -->
  <section id="tutors" class="mx-auto px-5">
    <SectionTitle>Tutoren</SectionTitle>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li>
        <Tutor
          name="Adrian Junge"
          title="4. Semester Info Master"
          image_src="/img/tutors/adrian_junge.png"
        />
      </li>
      <li>
        <Tutor
          name="Chrissy Wenzel"
          title="1. Semester Info Master"
          image_src="/img/tutors/chrissy_wenzel.jpg"
        />
      </li>
      <li>
        <Tutor
          name="Daniel Scheerer"
          title="1. Semester Info Master"
          image_src="/svg/placeholder.svg"
        />
      </li>
      <li>
        <Tutor
          name="Dominic Brestel"
          title="3. Semester Info Master"
          image_src="/img/tutors/dominic_brestel.png"
        />
      </li>
      <li>
        <Tutor
          name="Eileen Fix"
          title="3. Semester Info Master"
          image_src="/svg/placeholder.svg"
        />
      </li>
      <li>
        <Tutor
          name="Elias Schaut"
          title="1. Semester Info Master"
          image_src="/img/tutors/elias_schaut.png"
        />
      </li>
      <li>
        <Tutor
          name="Fabian Merz"
          title="2. Semester Info Master"
          image_src="/img/tutors/fabian_merz.png"
        />
      </li>
      <li>
        <Tutor
          name="Kaan Göbül"
          title="1. Semester Info Master"
          image_src="/img/tutors/kaan_goebuel.png"
        />
      </li>
      <li>
        <Tutor
          name="Lam Vo"
          title="1. Semester Info Master"
          image_src="/img/tutors/lam_vo.png"
        />
      </li>
      <li>
        <Tutor
          name="Laura Blechschmidt"
          title="7. Semester Info im Mastervorzug"
          image_src="/img/tutors/laura_blechschmidt.jpg"
        />
      </li>
      <li>
        <Tutor
          name="Paul Städter"
          title="1. Semester WMathe Master"
          image_src="/img/tutors/paul_staedter.png"
        />
      </li>
    </ul>
  </section>

  <!-- Program -->
  <section id="program" class="mx-auto">
    <SectionTitle>Programm</SectionTitle>
    <div
      class="mx-5 mb-4 flex flex-col items-center justify-center gap-6 text-center text-lg font-medium text-primary-600 dark:text-primary-400 md:flex-row"
    >
      <a
        href="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBerlin&bgcolor=%23EF6C00&showTz=0&mode=WEEK&showTabs=0&showCalendars=0&showTitle=0&showPrint=0&showDate=0&showNav=0&src=ZTkwODM3Y2ZmZWI0ZGI3OTE4M2Y3ZDc4NDc0NGNiZjdhZDZhNjQ5NjE2M2E4YzNmMmJmYTk0ODdhN2MyM2Q2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00&dates=20241014/20241020"
        target="_blank"
        >Detaillierter Wochenplan</a
      >
      <a
        href="https://calendar.google.com/calendar/u/0?cid=ZTkwODM3Y2ZmZWI0ZGI3OTE4M2Y3ZDc4NDc0NGNiZjdhZDZhNjQ5NjE2M2E4YzNmMmJmYTk0ODdhN2MyM2Q2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
        target="_blank"
        >Wochenplan integrieren (Google)</a
      >
      <a
        href="https://calendar.google.com/calendar/ical/e90837cffeb4db79183f7d784744cbf7ad6a6496163a8c3f2bfa9487a7c23d6e%40group.calendar.google.com/public/basic.ics"
        >Wochenplan herunterladen (iCal)</a
      >
    </div>

    <img class="m-auto px-8" src="/img/wochenplan.png" alt="wochenplan" />
  </section>

  <!-- Links -->
  <section id="links" class="mx-auto mb-10 px-10">
    <SectionTitle>Dateien&nbsp;& Links</SectionTitle>
    <div
      class="grid grid-cols-1 space-y-12 md:grid-cols-3 md:space-x-12 md:space-y-0"
    >
      <div class="flex flex-col space-y-5">
        <h1 class="text-xl font-bold text-primary-600 dark:text-primary-500">
          O-Phase
        </h1>
        <div class="flex flex-col space-y-3">
          <LinkItem
            title="o-phase.com"
            description="Die offizielle Website der Fachschaft Mathe/Info zur O-Phase"
            href="https://o-phase.com"
          />
          <LinkItem
            title="AStA Notunterkünfte"
            description="Unterkünfte im HaDiKo (Oststadt) für alle, die während der O-Phase noch keinen Schlafplatz in KA haben
"
            href="https://www.asta-kit.de/de/notunterkuenfte"
          />
          <LinkItem
            title="Offizieller Campusplan"
            description="ist auch nicht so übersichtlich, hilft aber trotzdem"
            href="https://www.kit.edu/campusplan/"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-5">
        <h1 class="text-xl font-bold text-primary-600 dark:text-primary-500">
          Rund um Studium
        </h1>
        <div class="flex flex-col space-y-3">
          <LinkItem
            title="Offizielles Vorlesungsverzeichnis"
            description="Alle Module auf einem Blick"
            href="https://campus.studium.kit.edu/events/catalog.php"
          />
          <LinkItem
            title="KIT-Ilias"
            description="Lernplattform des KIT"
            href="https://ilias.studium.kit.edu/"
          />
          <LinkItem
            title="Fachschaft Mathe/Info"
            description="Eure Vertretung gegenüber der Fakultät"
            href="https://www.fsmi.uni-karlsruhe.de/"
          />
          <LinkItem
            title="Allgemeiner Studierenden-Ausschuss (AStA)"
            description="Eure Vertretung gegenüber der Uni"
            href="https://www.asta-kit.de/"
          />
          <LinkItem
            title="Studierendenwerk Karlsruhe (StuWe)"
            description="Betreibt Mensa, Wohnheime und mehr"
            href="https://www.sw-ka.de/"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-5">
        <h1 class="text-xl font-bold text-primary-600 dark:text-primary-500">
          Karlsruhe
        </h1>
        <div class="flex flex-col space-y-3">
          <LinkItem
            title="Z10"
            description="Das selbstverwaltete Studierendenzentrum mit Bar in der Zähringerstraße 10"
            href="https://www.z10.info/"
          />
          <LinkItem
            title="Karlsruher Verkehrsverbund (KVV)"
            description="Öffentlicher Nahverkehr mit Online-Ticketshop und aktueller Störungs- bzw. Umleitungsübersicht"
            href="https://www.kvv.de/"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Links -->
  <section id="sponsors" class="mx-auto mb-10 px-10">
    <SectionTitle>Sponsoren</SectionTitle>
    <div
      class="-mt-8 flex w-full flex-col items-center justify-center md:flex-row md:space-x-48 md:space-y-0"
    >
      <a href="https://www.billy-boy.de/" target="_blank"
        ><img
          class="mx-auto h-44"
          src="/img/sponsors/BillyBoy.png"
          alt="Billy Boy Logo"
      /></a>
      <a href="https://andrena.de/" target="_blank"
        ><img
          class="mx-auto"
          src="/img/sponsors/Andrena.png"
          alt="Andrena Logo"
      /></a>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
