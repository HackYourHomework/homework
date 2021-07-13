'use strict';
/*------------------------------------------------------------------------------
Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
  Give each array five random values that have to do with the name of 
  the variable.

2. Complete the function `selectRandomly`. This function should take an array 
  as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

  - It should take four arguments (in the order listed): 
     * number of children (`number`), 
     * partner's name (`string`), 
     * geographic location (`string`) and 
     * job title (`string`).
  - It should use the `selectRandomly` function to randomly select values from 
    the arrays.
  - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
  console.log` to display the results.

Note: The DRY is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/
const numKids = [2, 3, 1, 3, 5];

const partnerNames = ['Amalia', 'Hany', 'Gloria', 'George', 'Tom'];

const locations = ['Paris', 'Cairo', 'Rome', 'Amsterdam', 'Bali'];

const jobTitles = ['Web Developer', 'Dancer', 'Actor/Actress', 'Driver', 'CEO'];

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function tellFortune(param1, param2, param3, param4) {
  return `You will have ${selectRandomly(
    param1
  )} Kids, you partner's name is ${selectRandomly(
    param2
  )}, you will live in ${selectRandomly(
    param3
  )}, and your job will be ${selectRandomly(param4)}`;
}

console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));

// ! Do not change or remove the code below
module.exports = tellFortune;
