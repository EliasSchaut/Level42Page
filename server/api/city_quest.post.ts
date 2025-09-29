import solutions from '../solutions.json';

const WRONG_SOLUTION = '<p>Wrong solution!</p>';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const guess = (body.guess).toLowerCase() as string;

  if (Object.keys(solutions).includes(guess)) {
    return { body: solutions.blubb };
  } else {
    return { body: WRONG_SOLUTION };
  }
});
