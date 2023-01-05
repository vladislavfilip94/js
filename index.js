var $3UW9m$lodashes = require("lodash-es");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 1);
// console.log(price, tq);
// Exporting module
console.log("Exporting module");
// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');
const $8e6022b292f0cc85$var$shippingCost = 10;
const $8e6022b292f0cc85$export$e79499a77ba07702 = [];
const $8e6022b292f0cc85$export$576b6dd9d68b37bc = function(product, quantity) {
    $8e6022b292f0cc85$export$e79499a77ba07702.push({
        product: product,
        quantity: quantity
    });
    console.log(`${quantity} ${product} added to cart`);
};
const $8e6022b292f0cc85$export$da0715255d0ed324 = 237;
const $8e6022b292f0cc85$export$5b07eba68643ad41 = 23;
function $8e6022b292f0cc85$export$2e2bcd8739ae039(product, quantity) {
    $8e6022b292f0cc85$export$e79499a77ba07702.push({
        product: product,
        quantity: quantity
    });
    console.log(`${quantity} ${product} added to cart`);
}



console.log(`Importing module`);
(0, $8e6022b292f0cc85$export$2e2bcd8739ae039)("pizza", 2);
const $65622d8d7d95445f$var$state = {
    cart: [
        {
            product: "bread",
            quantity: 5
        },
        {
            product: "apple",
            quantity: 1
        }
    ],
    user: {
        logeedIn: true
    }
};
const $65622d8d7d95445f$var$stateClone = Object.assign({}, $65622d8d7d95445f$var$state);
const $65622d8d7d95445f$var$stateDeepClone = (0, ($parcel$interopDefault($3UW9m$lodashes)))($65622d8d7d95445f$var$state);
$65622d8d7d95445f$var$state.user.logeedIn = false;
console.log($65622d8d7d95445f$var$stateClone);
console.log($65622d8d7d95445f$var$stateDeepClone);
if (null) null.accept();


//# sourceMappingURL=index.js.map
