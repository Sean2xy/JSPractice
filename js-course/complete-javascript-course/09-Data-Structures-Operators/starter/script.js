'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//
//   order:function(starterM,mainIndex) {
//     return [this.starterMenu[starterM],this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(starterIndex);
//     console.log(time);
//   },
//   orderPasta: function(ing1, ing2, ing3) {
//     console.log(`paster is ${ing1} and ${ing3}`);
//   },
//   orderPizza: function(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient,otherIngredients);
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// restaurant.orderPizza('mashrooms','oninos','aarr');
// restaurant.orderPizza('mushrooms');
// restaurant.orderDelivery({starterIndex:2});
// const arr = [2,3,4];
// //destructing
// const [x,y,z] = arr;
// console.log(x);
// let [ first,,third] = restaurant.categories;
// console.log(first,third);
//
// // swap
// [first,third] = [third,first];
// console.log(first,third);
//
//
// console.log(restaurant.order(2,0));
// const[s,m] = restaurant.order(2,0);
//
// const nested = [2,4,[1,2],3];
// // const [i,,j] = nested;
// // console.log(i,j);
//
// const[i,,[j,k]]=nested;
// console.log(i,j,k);
//
// const [p=1,q=1,r=1] = [2,2];
// console.log(p,q,r);

// const {name,openingHours,categories} = restaurant;
// console.log(name,openingHours,categories);
//
// const{name:rn,openingHours:h,categories:tags} = restaurant;
// console.log(rn,h,tags);
//
// const {menu=[],starterMenu:starters=[]} = restaurant;
// console.log(menu,starters);
//
// // mutating variables
// let a,b;
// const object ={a:23,b:27};
// ({a,b} = object);
// console.log(a,b);
//
// // nested object
// const {fri:{open:c=0,close:d}} = openingHours;
// console.log(c,d);
//
// const arr = [7,8,9]
// const newArray = [1,2, ...arr];
// console.log(newArray);
//
// console.log(...newArray);
// // spread operator used for using indivdual element in array
// const newM = [...restaurant.mainMenu,'zz'];
// console.log(newM);
//
// // copy array
// const mainMC = [...restaurant.mainMenu];
// const menuWhole = [...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menuWhole);
//
//
// // iterables : string,arrays,maps,set
// const str ='sean';
// const letter = [...str,'','s'];
// console.log(letter);
//
// console.log(...str);
//
// const ingS = ['zz','bb','ww'];
// restaurant.orderPasta(...ingS);
//
// // objects
// const newRe = {...restaurant,founder:'ss'};
// console.log(newRe);
//
// const resCopy = {...restaurant};
// //shallow copy
// resCopy.name='sean';
// console.log(resCopy.name);
// console.log(restaurant.name);

// const test = [1,2,...[3,4]];
// const [a,b,...others] = [1,2,3,4,5];
// console.log(...others);
//
// const [pizza ,, re,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(pizza,re,otherFood);
//
// // rest element must be last element,only one rest
//
// const {sat,...workDay} = restaurant.openingHours;
// console.log(sat,workDay);
//
// // functions
// //rest
// const add = function(...argus) {
//   console.log(argus);
// }
// add(2,3);
// add(1,2,3,4,5);
//
// const x = [23,5,7];
// add(...x);//spread
//
// console.log(3||'sean');// short circuiting first true
// console.log(''||'sean');// last false
// console.log(true || 0);
// console.log(undefined||null); //null
// // return the first true value
// restaurant.number=0;
// const guess1 = restaurant.number?restaurant.number:10;
// console.log(guess1);
// const guess2 = restaurant.number||10;
// console.log(guess2);
//
// // nullish values are null and undefined
// // only nullish value will short circuiting there, if not nullish then return it immedidately
// const guess3 = restaurant.number??10;
// console.log(guess3);
//
// console.log(0 && 'sean');//first fathy
// console.log(7 && 'sean');// last true
//
// restaurant.orderPizza && restaurant.orderPizza('zz','bb','wz');
//
//
// const res1 = {
//   name:'ss',
//   numberOfGue:0,
// };
// const res2 = {
//   name:'lala',
//   onwer:'sean',
// }
// res2.numberOfGue = res2.numberOfGue||10;
//
// // res1.numberOfGue ||=10;
// res1.numberOfGue ??=10;
//
// res2.numberOfGue ||=10;
// console.log(res2);
// console.log(res1);
//
// res2.onwer &&= 'anymous';
// console.log(res2);
//
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//
// const [player1,player2] = game.players;
// const[goalKeeper,...fieldPlayer] = player1;
// console.log(goalKeeper);
// console.log(fieldPlayer);
//
// const allPlayers = [...player1,...player2];
// console.log(allPlayers);
//
// const players1Final = [...player1,'TH','COut','Per'];
// console.log(players1Final);
// // const tema1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;
//
// const { odds: {team1,x:draw,team2}} = game;
// const printGoals = function(...players) {
//   console.log(players);
//   console.log(`${players.length} goals`);
//
// };
//
// team1<team2 && console.log('tema 1 win');
//
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu];

// for(const i of menu) console.log(i);

// for (const entry of restaurant.starterMenu.entries()) {
//   console.log(`${entry[0]}:${entry[1]}`);
// }
// for (const [i,e] of restaurant.starterMenu.entries()) {
//   console.log(`${i}:${e}`);
// };
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   [`day ${7-1}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
//
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//
//   openingHours,
//
//
//   order:function(starterM,mainIndex) {
//     return [this.starterMenu[starterM],this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(starterIndex);
//     console.log(time);
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`paster is ${ing1} and ${ing3}`);
//   },
//   orderPizza: function(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient,otherIngredients);
//   },
//
// };
// console.log(restaurant);
//
// // optional : avoid error, if it is null or undefined, return undefined immediately
// console.log(restaurant.openingHours.mon?.open);
//
// const week = ['mon','tues','wed','thu','fri','sun','sat'];
// for (const day of week) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(open);
// };
//
// console.log(restaurant.open?.(1,2) ?? 'method not exist');
//
// const users = ['ss','zz','bb'];
// console.log(users[0]?.name ?? 'no name');
//
//
// const properties = Object.keys(openingHours);
// console.log(properties);
//
// const values = Object.values(openingHours);
// console.log(values);
//
// const entries = Object.entries(openingHours);
//
//
// for (const [key,{open,close}] of entries) {
//   console.log(key,open,close);
// }

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

for (const score of game.scored.entries()) {
  console.log(`${score[0]+1},${score[1]}`);
}
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
  avg+=odd;

}
avg=avg/odds.length;
console.log(avg);
const entries = Object.entries(game.odds)
for (const [k,v] of entries) {
  console.log(`Odd of ${game?.[k]??'draw'} : ${v}`);
};

const scores ={};
for (const score of game.scored) {
  scores[score]?scores[score]++:scores[score]=1;
}
console.log(scores);

// sets & maps
const orderSet = new Set(['ss','zz','bb','ss','ss']);
// unique,order not matter
console.log(orderSet.size);
console.log(orderSet.has('bb'));
console.log(orderSet.add('ww'));
console.log(orderSet.size);
console.log(orderSet.delete('zz'))
console.log(orderSet.size);

// no index
// orderSet.clear();
console.log(orderSet.size);

for (const string of orderSet) {
  console.log(string);
};
// unpack using sepreator
const stuff =['waiter','higher','manager','waiter'];
const uniqueStaff = [...new Set(stuff)]; // remove duplicate
console.log(uniqueStaff);

// map can have different types of key
// while object only has string
// const rest = new Map();
// rest.set('name','ss');
// rest.set(1,2);
//
// rest.set('categ',['it','zz']).set(true,'hh');
// console.log(rest.get(1));
// console.log(rest.get(true));
// console.log(rest);
//
// console.log(rest.has('categ'));
// rest.delete('name');
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// // rest.set([1,2],'test');
// // console.log(rest.get([1,2]));
// const arr = [1,2];
// rest.set(arr,'test');
// console.log(rest.get(arr));
//
// const que = new Map([
//   ['q','a'],
//   ['z','b'],
//   [1,2],
//   [1,'a'],
// ]);
// console.log(que);
//
// // convert object to map
// // const hourMap = new Map(Object.entries(openingHours));
// // console.log(hourMap);
//
// for (const [k,v] of que) {
//   console.log(k,v);
// }
//
// // convert map to array
// const array = [...que];
// console.log(array);

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

const events = [...new Set(gameEvents.values())];

console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

const times = [...gameEvents.keys()].pop();
console.log(`an event happened, every ${times/gameEvents.size} minuyes`);
for (const [k,v] of gameEvents.entries()) {
  const temp = `${k,v}`
  if(k<=45){
    console.log('First half' + temp);
  }else{
    console.log('Second half' + temp);
  }
};
console.log(gameEvents.size);


const airLine = 'TAP AIR CN';
const plane = 'AE336';
console.log(plane[0]);
console.log(airLine.length);

console.log(airLine.indexOf(' '));
console.log(airLine.lastIndexOf(' '));

console.log(airLine.indexOf('CN'));
console.log(airLine.slice(4));// split
console.log(airLine.slice(4,7));//length will be 7-4
console.log(airLine.slice(0,airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ')+1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1,-1));

const checkMiddle = function(seat) {
  // B and E are middle
  const s = seat.slice(-1);
  if(s==='B' || s==='e') console.log('the middle seat');
}
checkMiddle('11B');

console.log(airLine.toLowerCase());

let passenger = 'jONAs';
passenger = passenger.toLowerCase();
passenger=passenger[0].toUpperCase() + passenger.slice(1);
console.log(passenger);

// check user input
const email = 'hh@gmail.com';
const logInEmail = '  Hh@gmail.com  ';

const lowerE = logInEmail.toLowerCase();
const nospace = lowerE.trim();
console.log(nospace);

const normalizeEmail = lowerE.toLowerCase().trim();

const priceGB = '288,97*';
const priceUS = priceGB.replace('*','$').replace(',','.');
console.log(priceUS);

const announceMnet = 'All boarding to All 23';
console.log(announceMnet.replace('All','some'));
console.log(announceMnet.replace(/door/g,'some'));

const planet = 'B A320neo';
console.log(planet.includes('A32'));
console.log(planet.startsWith('A32'));//  endsWith

const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('go away');
  }else{
    console.log('welcome');
  }
}
checkBaggage('I have laptop, food, snack')

console.log('A+very+B+nice'.split('+'));

const [fN,lN] = 'Sean Zhu'.split(" ");
console.log(fN,lN);

const joint = ['Mr.',fN,lN.toUpperCase()].join(" ");
console.log(joint);

const capitName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const name1 of names) {
    // namesUpper.push(name1[0].toUpperCase()+name1.slice(1));
    namesUpper.push(name1.replace(name1[0],name1[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitName('sean zhu');

const message = 'Go to gate 23';

console.log(message.padStart(25,"+"));
console.log(message.padEnd(26,'b'));

const mask = function(card) {
  const str = card +'';
  const masked = str.slice(-4);
  return masked.padStart(str.length,'*');
}
console.log(mask(233352352332768));

//repeat
const msg = 'bad weather all delays';
console.log(msg.repeat(6));

const palneInline = function(n) {
  console.log(`there are ${n} planes, with ${'🎉'.repeat(n)}`);
};
palneInline(2);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  let res = '';
  for (const [i,row] of rows.entries()) {
    const twoWord = row.toLowerCase().trim().split("_");
    const upperSecond = twoWord[1][0].toUpperCase() + twoWord[1].slice(1);
    res = res + twoWord[0] + upperSecond +'\n';
  }
  console.log(res);
})

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25' +
  '+_Arrival;bru0943384722;fao93766109;11:45' +
  '+_Delayed_Arrival;hel7439299980;fao93766109;12:05' +
  '+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0,3).toUpperCase();

console.log(flights.split('+'));
for (const flight of flights.split("+")) {
  const [type,from,to,time] = flight.split(";");
  const res = `${type.startsWith('_Delayed')?'dan':''} ${type.replaceAll('_','')} ${from.slice(3).toUpperCase()} ${to.slice(0,3).toUpperCase()} ${time.replace(':','h')}`.padStart(20);
  console.log(res);
}