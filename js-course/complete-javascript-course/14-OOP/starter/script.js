'use strict';
// const Person = function(fN,birthYear) {
//   this.firstName = fN;
//   this.birthYear = birthYear;
//
//
// };
// const sean = new Person('sean',2001);
// console.log(sean);
// // how new wokrs
// // 1. new {} is created
// // 2. function is called, tihs ={}
// // 3. {}linked to prototype
// // 4. function automatically return {}
// const zz = new Person('zz',1990);
// console.log(zz);
//
// console.log(zz instanceof Person);
//
// // prototypes
// Person.prototype.calAge = function (){
//   console.log(2037-this.birthYear);
// };
//
// sean.calAge();
// console.log(sean.__proto__);
// console.log(sean.__proto__===Person.prototype);
// console.log(Person.prototype.isPrototypeOf(sean));
// console.log(Person.prototype.isPrototypeOf(Person));
// // . prototypeOfLinkedObjects
// Person.prototype.weight = 55;
// console.log(sean);
// console.log(sean.weight=22);
// console.log(sean);
// console.log(sean.hasOwnProperty('weight'));
//
// console.log(sean.__proto__.__proto__);
// console.log(sean.__proto__.__proto__.__proto__);
//
// const arr = [1,2,3,1];
// console.log(arr.__proto__);
// console.log(arr.__proto__===Array.prototype);
//
// Array.prototype.unique = function() {
//  return[...new Set(this)];
// }
// console.log(arr.unique());

//constructor function
// const Car = function(name,speed) {
//   this.name = name;
//   this.speed=speed;
// };
// // prototype chain function
// Car.prototype.accelerate=function() {
//   this.speed+=10;
//   console.log(this.speed);
// }
// Car.prototype.brake=function() {
//   this.speed-=5;
//   console.log(this.speed);
// }
// // new operator to create instance
// const BMW = new Car('BMW',120);
// const Mer = new Car('BenZ',95);
// console.log(BMW);
// Mer.accelerate();

class PersonCL {
  constructor(name,birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  // will be added to the prototype
  calAgee(){
    console.log(2037-this.birthYear);
  }
};

const PersonC = class{
  constructor(name,birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
}

const sean = new PersonCL('sean',22);
console.log(sean);
sean.calAgee();