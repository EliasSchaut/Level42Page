<template>
  <form
    class="m-5 flex flex-col justify-start gap-4 sm:items-start"
    @submit.prevent="check_solution"
  >
    <h1 class="text-xl font-semibold text-prime-600 dark:text-prime-500">
      Gib eine Lösung ein:
    </h1>
    <input
      class="block rounded-md border-0 px-3 py-1.5 text-second-900 shadow-sm ring-1 ring-inset ring-second-300 placeholder:text-second-400 dark:bg-second-700 dark:text-white dark:ring-second-600 dark:placeholder:text-second-400 sm:text-sm sm:leading-6"
      placeholder="solution"
      type="text"
      name="guess"
      :maxlength="20"
      required
    />
    <button
      class="rounded-md bg-prime-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-prime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-prime-600"
      type="submit"
    >
      Prüfen
    </button>
  </form>

  <div class="m-5" v-html="guess"></div>
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
