'use strict';

// const { assign } = require('comment-json');

/*
Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
*/
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(allFruits, unwantedFruit) {
  return allFruits.filter(
    (sanitizedFruits) => sanitizedFruits !== unwantedFruit
  );
}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    const actual = sanitizeFruitBasket.length;
    const expected = 2;
    expect(actual).toBe(expected);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    expect(originalFruitBasketContents).toEqual(fruitBasket);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const actualResult = sanitizeFruitBasket(fruitBasket, 'lemon');
    const expectedResult = ['apple', 'grapefruit', 'banana', 'watermelon'];
    expect(expectedResult).toEqual(actualResult);
  });
});
