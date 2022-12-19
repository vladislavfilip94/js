'use strict';
/*
const Person = function (firstName, birrthYear) {
  // Instance propertes
  this.firstName = firstName;
  this.birrthYear = birrthYear;
  // Never to this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birrthYear);
  //   };
};
const vlad = new Person('Vlad', 1994);
console.log(vlad);

// 1. New {} is created
// 2. function is called , this={}
// 3.{} linked to prototype
// 4. fucntion automaticaly return {}
const matilda = new Person('Matilda', '1999');
const jack = new Person('Jack', '1989');
console.log(matilda, jack);

const jay = 'jay';

console.log(vlad instanceof Person);
console.log(jay instanceof Person);

// Prororypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birrthYear);
};

vlad.calcAge();
matilda.calcAge();

console.log(vlad.__proto__);
console.log(vlad.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(vlad));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(vlad.species, matilda.species);
console.log(vlad.hasOwnProperty('firstName'));
console.log(vlad.hasOwnProperty('species'));

console.log(vlad.__proto__);
console.log(vlad.__proto__.__proto__);
console.log(vlad.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 3, 6, 7, 4, 2, 4, 6, 7, 2]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');

console.dir(x => x + 1);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birrthYear);
// };

const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};

const Bmw = new Car('BMW', '120km/h');
const Mercedes = new Car('Mercedes', '95km/h');
Car.prototype.accelerate = function () {
  let newsped = parseFloat(this.speed) + 10;
  console.log(`${newsped}km/h`);
};
Car.prototype.decelerate = function () {
  let newsped = parseFloat(this.speed) - 5;
  console.log(`${newsped}km/h`);
};
// console.log(Bmw.accelerate());
Bmw.accelerate();
Bmw.decelerate();
Bmw.accelerate();
Bmw.accelerate();
Bmw.accelerate();
Bmw.accelerate();
Bmw.accelerate();
Bmw.accelerate();
Bmw.accelerate();

Mercedes.accelerate();
Mercedes.decelerate();
*/
