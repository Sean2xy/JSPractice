'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterM,mainIndex) {
    return [this.starterMenu[starterM],this.mainMenu[mainIndex]];
  },
  orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(starterIndex);
    console.log(time);
  },
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`paster is ${ing1} and ${ing3}`);
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient,otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
restaurant.orderPizza('mashrooms','oninos','aarr');
restaurant.orderPizza('mushrooms');
restaurant.orderDelivery({starterIndex:2});
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

const test = [1,2,...[3,4]];
const [a,b,...others] = [1,2,3,4,5];
console.log(...others);

const [pizza ,, re,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,re,otherFood);

// rest element must be last element,only one rest

const {sat,...workDay} = restaurant.openingHours;
console.log(sat,workDay);

// functions
//rest
const add = function(...argus) {
  console.log(argus);
}
add(2,3);
add(1,2,3,4,5);

const x = [23,5,7];
add(...x);//spread

console.log(3||'sean');// short circuiting first true
console.log(''||'sean');// last false
console.log(true || 0);
console.log(undefined||null); //null
// return the first true value
restaurant.number=0;
const guess1 = restaurant.number?restaurant.number:10;
console.log(guess1);
const guess2 = restaurant.number||10;
console.log(guess2);

// nullish values are null and undefined
// only nullish value will short circuiting there, if undefined then return 10
const guess3 = restaurant.number??10;
console.log(guess3);

console.log(0 && 'sean');//first fathy
console.log(7 && 'sean');// last true

restaurant.orderPizza && restaurant.orderPizza('zz','bb','wz');