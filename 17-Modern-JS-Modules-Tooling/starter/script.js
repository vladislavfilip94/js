// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 1);
// console.log(price, tq);
/*
console.log(`Importing module`);
// import * as ShoppingCart from './shoppingCart.js';
// console.log(ShoppingCart.addToCart('apple', 5));

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add from './shoppingCart.js';

add('pizza', 2);

// console.log(`Start fetching`);
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log(`Something`);

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
    
    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to a caart`);
    };
    const orderStok = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to a caart`);
    };
    return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2);

// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to a caart`);
};
// Inport 
cons { addToCart} =requestAnimationFrame('./shopingCart.js')
*/
import { cloneDeep } from './../node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'apple', quantity: 1 },
  ],
  user: { logeedIn: true },
};
