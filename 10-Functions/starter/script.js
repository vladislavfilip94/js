'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  NumPassengers = 1,
  price = 199 * NumPassengers
) {
  //   ES5;
  //    NumPassengers= NumPassengers || 1
  //   price =  price || 199
  const booking = {
    flightNum,
    NumPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('Lh123', 2, 100);
createBooking('LH123', 4);
createBooking('LH123', 10);
createBooking('LH123', 100);
createBooking('LH123', 12);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const vlad = { name: 'Vlad Filip', passport: 23232132133453 };
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH676';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 23232132133453) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, vlad);
console.log(flight);
console.log(vlad);
// Is the same as doing...
const flightNum = flight;
const passenger = vlad;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(vlad);
checkIn(flight, vlad);
console.log(vlad);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('💩');
};
// JS uses callbacks all the time
document.body.addEventListener('click', high5);

['Vlad', 'Dana', 'Baiba'].forEach(high5);

const great = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greterHey = great('Hey');
greterHey('Vlad');
greterHey('Steven');
great('Hello')('Vlad');
const grt = great => name => {
  console.log(`${great} ${name}`);
};
grt('Hi')('Vlad');

const airMoldova = {
  airline: 'AirMolodova',
  iataCode: 'AirMDL',
  bokings: [],
  // book: function
  book(flightNum, name) {
    console.log(`${name} flight ${this.iataCode} ${flightNum}`);

    this.bokings.push({ flight: ` ${this.iataCode} ${flightNum}`, name });
  },
};
airMoldova.book(1234, 'Vlad Filip');
airMoldova.book(8568905, 'Daniela siminitschi');
console.log(airMoldova);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bokings: [],
};
const book = airMoldova.book;
// Does Not work
// book(897, 'Sarah Williams');
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(airMoldova, 752, 'Mary Cooper');
console.log(airMoldova);
const swiss = {
  name: 'Swiss air Lines',
  iataCode: 'LX',
  bokings: [],
};
book.call(swiss, 752, 'Mary Cooper');
console.log(swiss);
// Apply method
const flightData = [342, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
// Bind method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookMDL = book.bind(airMoldova);
const bookLX = book.bind(swiss);

bookEW(121234, 'Steven Williams');
console.log(eurowings);
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ion Ion');
console.log(bookEW23);
//  with event Listener
airMoldova.planes = 30;
airMoldova.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', airMoldova.buyPlane.bind(airMoldova));
// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVat = addTax.bind(null, 0.19);
// addVAT= value => value + value * rate

console.log(addVat(100));
console.log(addVat(367));
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);

console.log(addVat(367));
console.log(addVat(36));
*/
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
    console.log(this.answers);
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
console.log(poll.answers);
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate);
(() => console.log('This will never ALSO run again'))();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// Examole 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

h();
f();
console.dir(f);
// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 100;
boardPassengers(180, 3);
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const body = document
    .querySelector('body')
    .addEventListener('click', function () {
      header.style.color = 'blue5';
    });
})();
