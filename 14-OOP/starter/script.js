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
Person.hey = function () {
  console.log(`Hey there`);
  console.log(this);
};
Person.hey();
/*
// //////////
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


//Class expresion
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullNAme = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullNAme;
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes NOT hoisted
// 2.Class are first-class citizes
// 3. Classes are executed in stric mode
const walter = new PersonCl('Walter', 1965);
const account = {
  owner: 'Vlad',
  movements: [200, 530, 123, 343],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);
const sahah = Object.create(PersonProto);
sahah.init('Sarah', 1979);
sahah.calcAge();
// // Class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullNAme = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullNAme;
//   }
// }
class Car {
  constructor(brnad, speed) {
    this.brnad = brnad;
    this.speed = speed;
  }
  acelerete() {
    this.speed += 10;
    console.log(`${this.speed}`);
  }
  decelerate() {
    this.speed -= 5;
    console.log(`${this.speed}`);
  }
  speedUS() {
    return (this.speed /= 1.6);
    console.log(`${this.speed}`);
  }
}

const ford = new Car('Ford', 120);
// console.log(ford.acelerete());
ford.acelerete();
ford.acelerete();

ford.acelerete();

ford.acelerete();

console.log(ford.speedUS());

const Person = function (firstName, birrthYear) {
  // Instance propertes
  this.firstName = firstName;
  this.birrthYear = birrthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birrthYear);
};
const Student = function (firstName, birthYear, cource) {
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.cource = cource;
};
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(` My name is ${this.firstName} and I study ${this.cource}`);
};
const mike = new Student('Mike', 2020, 'Computer Since');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.speed}km/h`);
};
Car.prototype.decelerate = function () {
  this.speed -= 5;
  console.log(`${this.speed}km/h`);
};

const EV = function (carName, speed, battery) {
  Car.call(this, carName, speed);
  this.battery = battery;
};
EV.prototype = Object.create(Car.prototype);
const tesla = new EV('Tesla', 120, 100);
console.log(tesla);

EV.prototype.charfeBattery = function (chargeto) {
  this.battery = chargeto;
  console.log(this.battery);
};
tesla.charfeBattery(90);
console.log(tesla);
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.battery -= 1;
  console.log(
    `${this.carName} going at ${this.speed}km/h, with a charge of ${this.battery}`
  );
};
tesla.accelerate();
tesla.decelerate();
tesla.accelerate();
*/
