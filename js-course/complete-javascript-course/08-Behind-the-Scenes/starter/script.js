'use strict';

// const a = 'sean';
// first();
//
// function first(){
//   const b = 'hello!';
//   second();
//
//   function second(){
//     const c = 'hi!';
//     third();
//   }
// }
//
// function third(){
//   const d = 'hey!';
//   // console.log(d+c+b+a);
//   console.log(d+a);
// }

// function calAge(birth) {
//   let age = 2037-birth;
//   console.log(firName);
//
//   function printAge(){
//     // age = 2;
//
//     const output = `you are ${age},borned in ${birth}`;
//     console.log(output);
//
//
//   }
//   printAge();
//   return age;
// }
// const firName = 'sean';
// calAge(2010);


// console.log(me);
// console.log(job);
// console.log(year);
// var me ='me';
// let job = 'coder';
// const year = 2001;

function add1(a,b) {
  return a+b;
};
// function expression
const add = function(a,b) {
  return a+b;
};

const add3 = (a,b)=>{
  return a+b;
};


// if(!numProduccts) del();
// var numProduccts = 10;
// function del() {
//   console.log('ddd');
// };
// using const, declaring your variables on top, declare function first
// let and const variables are not added to the window property

// const calAge = function(birth) {
//   console.log(203-birth);
//   console.log(this);
// }
// calAge(2);//undefined
//
// const arrpw = (birth)=>{
//   console.log(22-birth);
//   console.log(this);
// }
// arrpw(2);//window
//
// const sean = {
//   year:22,
//   calAge:function() {
//     console.log(2037-this.year);
//   }
// }
//
// const hhh = {
//   year:1,
// }
// hhh.calAge = sean.calAge;
// hhh.calAge();
//
// const f = hhh.calAge;
// f();
//
// const sean = {
//   year:22,
//   calAge:function() {
//     console.log(2037-this.year);
//
//     // const isM=()=>{
//     //   console.log(this.year);
//     // };
//     // isM();
//
//     const self = this;
//     const isM = function() {
//       // console.log(this.year);// will not work
//       console.log(self.year);
//     };
//     isM();
//   }
// };
//
// sean.calAge();

// const add2 = function(a,b) {
//   console.log(arguments);
//   return a+b;
// }
// add2(2,5,8,10);
//
// const sean = {
//   age:27,
//   job:'coder',
// };
//
// const me = sean;
// me.age=18;
// console.log(me);
// console.log(sean);

const add2 = function(a,b) {
  console.log(arguments);
  return a+b;
}
add2(2,5,8,10);

const sean = {
  age:27,
  job:'coder',
  friends:['alice','bob'],
};
const me = Object.assign({},sean);//object insides a object is not work, a shadow copy which only copies the properties
// deep copy can work
// const me = sean;
me.age=18;

me.friends.push('zz');

console.log(me);
console.log(sean);