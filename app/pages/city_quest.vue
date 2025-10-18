<template>
  <form
    class="m-5 flex flex-col justify-start gap-4 sm:items-start"
    @submit.prevent="check_solution"
  >
    <h1 class="text-prime-600 dark:text-prime-500 text-xl font-semibold">
      Gib eine Lösung ein:
    </h1>
    <input
      class="text-second-900 ring-second-300 placeholder:text-second-400 dark:bg-second-700 dark:ring-second-600 dark:placeholder:text-second-400 block rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 dark:text-white"
      placeholder="solution"
      type="text"
      name="guess"
      :maxlength="20"
      required
    />
    <button
      class="bg-prime-600 hover:bg-prime-500 focus-visible:outline-prime-600 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      type="submit"
    >
      Prüfen
    </button>
  </form>

  <div class="m-5 h-full" v-html="guess"></div>
  <div class="hidden h-[80vh]" />
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    return { guess: ref<string>('') };
  },
  methods: {
    async check_solution(e: Event) {
      const form = e.target as HTMLFormElement;
      const guess = form.guess.value;
      const { body } = await $fetch('/api/city_quest', {
        method: 'post',
        body: { guess },
      });
      this.guess = body as any;
    },
  },
});
</script>
