<template>
  <!-- Hero -->
  <section
    class="mx-auto my-16 flex flex-col items-center justify-center space-y-5 px-5"
  >
    <Glowing>
      <img class="h-96" src="/img/lvl42_logo_full.png" alt="Level 42 Logo" />
    </Glowing>
    <SectionTitle class="text-4xl">Level 42 – Das nächste Level</SectionTitle>
  </section>

  <!-- About -->
  <section id="about" class="mx-auto">
    <div class="flex justify-around">
      <div class="w-[700px] text-left text-lg">
        <b class="text-amber-600 dark:text-amber-500"
          >Hey! Wir sind die Master O-Phasen-Gruppe Level 42!</b
        ><br />
        Bereitet euch auf <i>das nächste Level</i> vor – unser Programm ist
        speziell auf Master-Erstis zugeschnitten! Dabei bieten wir:
        <ul
          class="list-disc pl-6 marker:text-amber-600 marker:dark:text-amber-500"
        >
          <li>Spannende Einblicke in Master-Themen</li>
          <li>Coole und entspannte Aktivitäten zum Kennenlernen</li>
          <li>Unterstützung von erfahrenen Master-Studierenden am KIT</li>
        </ul>
        Wir freuen uns auf euch und stehen euch gerne mit Rat und Tat zur Seite.
      </div>
      <img
        class="h-[184px] w-[220px]"
        src="/img/logo_mushroom.png"
        alt="Logo Mushroom"
      />
    </div>
  </section>

  <!-- Tutors -->
  <section id="tutors" class="mx-auto">
    <SectionTitle>Tutoren</SectionTitle>
    <ul class="grid grid-cols-4 p-10">
      <li>
        <Tutor
          name="Adrian Junge"
          title="4. Semester Info Master"
          image_src="/svg/placeholder.svg"
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
          name="Eileen"
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
          title="3. Semester Info Master"
          image_src="/svg/placeholder.svg"
        />
      </li>
      <li>
        <Tutor
          name="Kaan Göbül"
          title="1. Semester Info Master"
          image_src="/svg/placeholder.svg"
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
          title="5. Semester Info Bachelor"
          image_src="/svg/placeholder.svg"
        />
      </li>
      <li>
        <Tutor
          name="Madlena Kollien"
          title="1. Semester WMathe Master"
          image_src="/svg/placeholder.svg"
        />
      </li>
      <li>
        <Tutor
          name="Paul Städter"
          title="1. Semester WMathe Master"
          image_src="/svg/placeholder.svg"
        />
      </li>
    </ul>
  </section>

  <!-- Program -->
  <section id="program" class="mx-auto">
    <SectionTitle>Programm</SectionTitle>
    <iframe
      class="mx-auto rounded-md"
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBerlin&bgcolor=%23F6BF26&showTz=0&mode=WEEK&showTabs=0&showCalendars=0&showTitle=0&showPrint=0&showDate=0&showNav=0&src=ZTkwODM3Y2ZmZWI0ZGI3OTE4M2Y3ZDc4NDc0NGNiZjdhZDZhNjQ5NjE2M2E4YzNmMmJmYTk0ODdhN2MyM2Q2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&dates=20241014/20241020"
      width="800"
      height="600"
    ></iframe>
  </section>

  <!-- Links -->
  <section id="links" class="mx-auto mb-10 px-10">
    <SectionTitle>Dateien&nbsp;& Links</SectionTitle>
    <div class="grid grid-cols-3 space-x-12">
      <div class="flex flex-col space-y-5">
        <h1 class="text-xl font-bold text-amber-600 dark:text-amber-500">
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
            description="ist auch nicht so übersichtlich, hilft aber trotzdem."
            href="https://www.kit.edu/campusplan/"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-5">
        <h1 class="text-xl font-bold text-amber-600 dark:text-amber-500">
          Rund um Studium
        </h1>
        <div class="flex flex-col space-y-3">
          <LinkItem
            title="Offizielles Vorlesungsverzeichnis"
            description="Alle Module auf einem Blick."
            href="https://campus.studium.kit.edu/events/catalog.php"
          />
          <LinkItem
            title="Fachschaft Mathe/Info"
            description="Eure Vertretung gegenüber der Fakultät"
            href="https://www.fsmi.uni-karlsruhe.de/"
          /><LinkItem
            title="Allgemeiner Studierenden-Ausschuss (AStA)"
            description="Eure Vertretung gegenüber der Uni"
            href="https://www.asta-kit.de/"
          /><LinkItem
            title="Studierendenwerk Karlsruhe (StuWe)"
            description="Betreibt Mensa, Wohnheime und mehr"
            href="https://www.sw-ka.de/"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-5">
        <h1 class="text-xl font-bold text-amber-600 dark:text-amber-500">
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
</template>
<script setup lang="ts"></script>
