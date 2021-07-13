const shoppingCart = ['bananas', 'milk'];

// ! Function to be tested
function addToShoppingCart(items) {
  shoppingCart.push(items);
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }
  console.log(`'You bought ${shoppingCart.join(', ')}!'`);
}

addToShoppingCart('chocolate');
addToShoppingCart('waffles');
console.log(addToShoppingCart.length);

const cartForParty = {
  chips: 0.99,
  chocolate: 1.5,
  tea: 0.5,
  coffee: 2.75,
  snack: 4,
};

function calculateTotalPrice(items) {
  let totalAmonut = 0;
  for (let value in items) {
    totalAmonut += items[value];
  }
  console.log(`'Total: € ${totalAmonut}'`);
}

calculateTotalPrice(cartForParty);
