'use strict';
/*------------------------------------------------------------------------------
You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  orange: 1.75,
  banana: 3.88,
  kiwi: 2.5,
  cauliflower: 3.5,
  pumpkin: 5,
};

function calculateTotalPrice(obj) {
  const sum = Object.keys(obj).reduce((a, b) => a + obj[b], 0);
  return `Total: €${sum}`;
}
console.log(calculateTotalPrice(cartForParty));

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const cartForParty = {
    orange: 1.75,
    banana: 3.88,
    kiwi: 2.5,
    cauliflower: 3.5,
    pumpkin: 5,
  };

  function calculateTotalPrice(obj) {
    const sum = Object.keys(obj).reduce((a, b) => a + obj[b], 0);
    return `Total: €${sum}`;
  }
  console.log(calculateTotalPrice(cartForParty));
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const cartForParty = {
    orange: 1.75,
    banana: 3.88,
    kiwi: 2.5,
    cauliflower: 3.5,
    pumpkin: 5,
  };

  function calculateTotalPrice(obj) {
    const sum = Object.keys(obj).reduce((a, b) => a + obj[b], 0);
    return `Total: €${sum}`;
  }
  console.log(calculateTotalPrice(cartForParty));
}

function test() {
  test1();
  test2();
}

test();
