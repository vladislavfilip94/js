'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starerIndex, mainIndex) {
    return [this.starterMenu[starerIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starerIndex = 0, mainIndex = 1, time = '20:30', address }) {
    console.log(
      `Order recived! ${this.starterMenu[starerIndex]} and ${this.mainMenu[mainIndex]}will be delivered to ${address} at ${time}`
    );
  },
  // es 6 enhance object literals
  openingHours,
  orederPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicius pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  oderPizza(mainIngridiant, ...otherIngrediants) {
    console.log(mainIngridiant);
    console.log(otherIngrediants);
  },
};

console.log('a+very+nice+string'.split('+'));
console.log('Vlad Filip'.split(' '));
const [firsNAme, lastName] = 'Vlad Filip'.split(' ');

const newName = ['Mr.', firsNAme, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalization = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
});
/*
let passagers = 'jesica ann smith davis';
// capitalization(passagers);
capitalization('jesica ann smith davis');
capitalization('vlad filip');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(35, '+'));
console.log('Vlad'.padStart(20, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(95434048302934));
console.log(maskCreditCard('73945764238567482957239804'));
// Repeat
const message2 = 'Bad weather ... All Departures Delayed...';
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(7);
planesInLine(40);
planesInLine(100);


const airLine = 'TAP Air Portugal';
console.log(airLine.toLocaleLowerCase());
console.log(airLine.toUpperCase());
// Fix capitalization in name
const pasager = 'vLaD';
const pasagerLowe = pasager.toLowerCase();
console.log(pasagerLowe);
const pasagerCorrect =
  pasagerLowe[0].toLocaleUpperCase() + pasagerLowe.slice(1);
console.log(pasagerCorrect);
const pasagerUper = pasager.toUpperCase();
console.log(pasagerUper);
// Comparing email
const email = 'vlad@vlad.vl';
const loginemail = 'Vlad@Vlad.Vl \n';
const loweEmail = loginemail.toLowerCase();
const trimedEmail = loweEmail.trim();
console.log(trimedEmail);
const normalaizeEmail = loginemail.toLowerCase().trim();
console.log(normalaizeEmail);
console.log(email === normalaizeEmail);
// Remplacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
  'All the passagers come to barding door 23. Bording door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
// Bolleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part pf the new ARibus family');
}

// Practice
const checkBagage = function (item) {
  const bagage = item.toLowerCase();
  if (bagage.includes('knife') || bagage.includes('gun')) {
    console.log(`You are not alowed on bord`);
  } else {
    console.log(`Welcome on bord`);
  }
};
checkBagage('I have a laptop, some Food and a pcket Knife');
checkBagage('Socks and camera');
checkBagage('Got some snacks and a gun for protection');


const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airLine.length);
console.log('B737'.length);
console.log(airLine.indexOf('r'));
console.log(airLine.indexOf('portugal'));
console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));
console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));
const cehckMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat 😢`);
  } else {
    console.log(`You are lucky 🥳`);
  }
};
cehckMiddleSeat('11B');
cehckMiddleSeat('23C');
cehckMiddleSeat('3E');

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// first
let uniqueval = [...gameEvents.values()];
uniqueval = [new Set(uniqueval)];
console.log(uniqueval);
// second
gameEvents.delete(64);
console.log(gameEvents.size);
// third
function calc() {
  let size = gameEvents.size;
  let calc = 90 / size;
  console.log(`Am event hapened every ${calc} min`);
}
calc();
// fourt
for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`First Half ${key} :${value}`);
  } else {
    console.log(`Second Half ${key} :${value}`);
  }
}


const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risoto',
  'Pasta',
  'Pizza',
]);
const question = new Map([
  ['question', 'What is the best programming language in the word ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Go'],
  [4, 'JS'],
  [true, 'correct'],
  [false, 'Try again'],
]);

console.log(question);
// convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} :${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);
const answer = 3;
console.log(question.get(question.get('correct') === answer));
// Convert ma to array
console.log([...question]);
console.log([question.entries()]);

console.log([...question.keys()]);

console.log([...question.values()]);

// if (answer === 3) {
//   console.log(`${question.get('Corect')}`);
// }

const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Firence,Italy');
rest.set(2, 'Lisbon,Portugal');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('Close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest);
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));



console.log(orderSet);
console.log(new Set('Vlad'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risoto');
// orderSet.clear();
console.log(orderSet);
for (const order of orderSet) console.log(order);
// Exampel
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef']).size);


// Chalende nr 2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }
// 1
// let gols = {};
// for (const item of game.score.valueOf)
// bonus shomunssss
// let goals = {};
// let goal = 0;
// console.log(game.scored.entries());
// for (const [item, item1] of game.scored.entries()) {
//   // console.log(item, item1);
//   console.log(item1);
//   goal = item1 === Object.entries(goals) ? 2 : 1;
//   goals = { item1: goal };
//   console.log(goals);
// }
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

for (const item of game.scored.entries()) {
  console.log(`${item[0] + 1} ${item[1]}`);
}
let entries = Object.values(game);
console.log(entries);
const avods = Object.values(game.odds);
let newaver = Object.entries(game.odds);
// console.log(newaver.length);
// function killer(todo, todo1) {
//   for (const key of todo) {
//     sum = 0;
//     sum + key[1];
//   }
//   return sum / todo1;
// }
// console.log(killer(newaver, newaver.length));
// 2
function test(arr) {
  for (var i = 0, sum = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / i;
}
console.log(test(avods));
// Variation with new type of loop
const oddss = Object.values(game.odds);
let average = 0;
for (const odd of oddss) average += odd;
average /= oddss.length;
console.log(average);
// 3 exercice

for (const [key, keyy] of Object.entries(game.odds)) {
  const strOds = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${strOds} : ${keyy}`);
  // console.log(`Odd of victory ${} :${keyy}`);
}
// for (const [key, { team1, x, team2 }] of oddss) {
//   console.log(key);
// }
// console.log(game.odds);
// property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
// Property VALUES
const values = Object.values(openingHours);
console.log(values);
const entries = Object.entries(openingHours);
// console.log(entries);
// [key,value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

///////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.monm.open);
// With optional chainig
console.log(restaurant.openingHours.monm?.open);
console.log(restaurant.openingHours?.monm?.open);

// Exampel
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const userss = [{ name: 'Vlad', email: 'vlad@vlad.vlad' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

console.log(restaurant.openingHours.mon);
// console.log([...menu.entries()]);

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// nullish assigment operator(null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assigment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);


restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT   or'')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// 1)Setructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//Objects
const { sat, ...weakdays } = restaurant.openingHours;
console.log(sat, weakdays);

// 2) Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
console.log('---OR---');

//Use ANY type, return ANY data tape, short-circuiting.
console.log(3 || 'Vlad');
console.log('' || 'Vlad');
console.log(true || 0);
console.log(undefined || null);
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;

console.log(guests2);

console.log('---AND---');
console.log(0 && 'Vlad');
console.log(7 && 'Vlad');

console.log('Hello' && 23 && null && 'Vlad');

//Practical exampel
if (restaurant.oderPizza) {
  restaurant.oderPizza('mushrooms', 'spinach');
}
restaurant.oderPizza && restaurant.oderPizza('mushrooms', 'spinach');

add(2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);
const x = [23, 5, 7];
add(...x);

restaurant.oderPizza('mushromms', 'onion', 'chees', 'olives', 'spinatch');

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const neeArr = [1, 2, ...arr];
console.log(neeArr);

console.log(...neeArr);

const newMenu = [...restaurant.starterMenu, 'Gnocci'];
console.log(newMenu);

//copi array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays,strings,maps,sets. NOT objects
const str = 'Jonas';
const letter = [...str, '', 'S.'];
console.log(letter);
console.log(...str);
//Real word example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient1?"),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];

// restaurant.orederPasta(...ingredients);

//Objects
const newRestaurant = { FoundedIn: 1998, ...restaurant, faunder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);

//functiona
restaurant.orderDelivery({
  time: '22:30',
  address: 'Bariera Orhei 5/1',
  mainIndex: 2,
  starerIndex: 2,
});

restaurant.orderDelivery({
  address: 'Bariera Orhei 5/1',
  starerIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// start
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [secondary, main];
console.log(main, secondary);
//Recive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, k, r);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const teams1 = game.team1;
const teams2 = game.team2;
const Bayern = game.players[0];
const Borrussia = game.players[1];
console.log(Bayern, Borrussia, teams1, teams2);
//2
const [gk, ...fieldPlayers] = Bayern;
// const gkT1 = [Bayern[0]];
// const gkT2 = [Borrussia[0]];
// console.log(gkT1, gkT2);
// const fieldPlayers = Bayern.shift();
// console.log(fieldPlayers);
// 3
const allPlayers = [...Bayern, ...Borrussia];
console.log(allPlayers);
//4
const players1Final = [...Bayern, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
// const newteam1 = game.odds.team1;
// const draw = game.odds.x;
// const newteam2 = game.odds.team2;
//6
let printgoals = function (...players) {
  return console.log(` ${players.length} goal was scored by ${players}`);
};
printgoals(...game.scored);

// 7
team1 < team2 && console.log(`Team 1 is more likley to win`);
team1 > team2 && console.log(`Team 1 is more likley to win`);
// console.log(winers);
*/
