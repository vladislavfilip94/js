'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let outpout = `${firstName}, you are the ${age}, born in ${birthYear}`;
    console.log(outpout);
    if (birthYear >= 181 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      // Reassinging outer scope's variable
      outpout = 'NEW OUTPUT!';
    }
    console.log(outpout);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Vlad';
calcAge(1994);

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Vlad';
let job = 'Qa';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow);
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;
`
// Example
if (!numProducts) deleteShoppingCart();
console.log(numProducts);
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}
var x = 1;
let y = 2;
const z = 3;-


const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1994);
const calcAgeArrw = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrw(1993);

const vlad = {
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
vlad.calcAge();

const matilda = {
  year: 2000,
};

matilda.calcAge = vlad.calcAge;
matilda.calcAge();
const f = vlad.calcAge;
console.log(f);



// var firstName = 'Dana';
const vlad = {
  firstName: 'Vlad',
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
    //Solution nr1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    //Solution nr2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
vlad.greet();
vlad.calcAge();
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 8);
var addArrow = (a, b) => a + b;

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Vlad',
  age: 30,
};

const fiend = me;
fiend.age = 27;
console.log('Friend', fiend);
console.log('Me', me);
*/
// primitive types
let lastName = 'Wiliams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJasica = jessica;
marriedJasica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJasica);

//Copying object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jesssicaCoppy = Object.assign({}, jessica2);
jesssicaCoppy.lastName = 'Davis';

jesssicaCoppy.family.push('Mary');
jesssicaCoppy.family.push('John');
console.log('Before marriage', jessica2);
console.log('After marriage', jesssicaCoppy);
