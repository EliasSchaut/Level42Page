import solutions from '../solutions.json';

const WRONG_SOLUTION = '<p>Wrong solution!</p>';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const guess = (body.guess as string).toLowerCase();

  if (Object.keys(solutions).includes(guess)) {
    return { body: solutions[guess] };
  } else {
    return { body: WRONG_SOLUTION };
  }
});
