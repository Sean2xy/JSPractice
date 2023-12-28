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

// class PersonCL {
//   constructor(name,birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//
//   // will be added to the prototype
//   calAgee(){
//     console.log(2037-this.birthYear);
//   }
// };
//
// const PersonC = class{
//   constructor(name,birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
// }
//
// const sean = new PersonCL('sean',22);
// console.log(sean);
// sean.calAgee();

// // seter and geter for object
// const account = {
//   owner:'sean',
//   movements:[200,50,60],
//
//   get latest(){
//     return this.movements.slice(-1).pop();
//   },
//
//   set latest(mov){
//     this.movements.push(mov);
//   }
// }
//
// console.log(account.latest);
// account.latest=20;
// console.log(account.movements);

// class Person{
//   constructor(fn,birthYear) {
//     this.fn=fn;
//     this.birthYear = birthYear;
//   }
//
//   get age(){
//     return 2037-this.birthYear;
//   }//property
//
//   set fn(name){
//     console.log(name);
//     if(name.includes(' ')) this._fn=name;
//   }
//
//   get fn(){
//     return this.fn;
//   }
//
//   static greet(){
//     console.log('lll');
//   }
// }
//
// const sean = new Person('Sean Zhu',2001);
// console.log(sean.age);
//
// console.log(sean);
//
// Person.hey = function() {
//   console.log(`nice day`);
// }
// Person.hey();
//
// Person.greet();
// console.log(sean);
// // sean.hey();

// const PersonProto = {
//   calcAge(){
//     console.log(2037-this.birthYear);
//   },
//
//   init(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }
// const sean = Object.create(PersonProto);
// sean.birthYear=2001;
// sean.name='sean';
// sean.calcAge();
//
// const zz = Object.create(PersonProto);
// zz.init('zz',1999);
// console.log(zz);
//
// class Car{
//   constructor(name,speed) {
//     this.name = name;
//     this.speed = speed;
//   }
//
//   get speedUS() {
//     return this.speed/1.6;
//   }
//
//   set speedUS(speed) {
//     this.speed = speed*1.6;
//   }
//
//   accelearte(){
//     this.speed+=10;
//   }
//
//   brake(){
//     this.speed-=5;
//   }
// }
//
// const BMW = new Car('BMW',120);
// console.log(BMW.speedUS);
// console.log(BMW);
// BMW.speedUS=50;
// console.log(BMW);

// const Car = function(name,speed) {
//   this.name = name;
//   this.speed=speed;
// };
// // prototype chain function
// Car.prototype.accelerate=function() {
//   this.speed+=10;
//   console.log(this.speed);
// }
//
// const BenZ = function(name,speed,owner) {
//   Car.call(this,name,speed);
//   this.owner = owner;
// };
// // linking prototpye
// BenZ.prototype =Object.create(Car.prototype);
//
// // poloymorinsm
// BenZ.prototype.accelerate = function() {
//   this.speed+=100;
//   console.log('benz');
// }
//
// BenZ.prototype.int= function() {
//   console.log('hey');
// };
// const benZ = new BenZ('benz',20,'sean');
//
// benZ.accelerate();
//
// console.log(benZ);
// benZ.int();


// inheritance using es6 class
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//
//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//
//   get age() {
//     return 2037 - this.birthYear;
//   }
//
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//
//   get fullName() {
//     return this._fullName;
//   }
//
//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }
//
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear) {
//     super(fullName, birthYear);
//   }
//
//   calcAge() {
//     console.log('override');
//   }
// }
// const sean = new StudentCl('sean zhu',2001,'cs');
// console.log(sean);
// sean.calcAge();// it apperas firstly in the prototype chain

const PersonProto = {
  calcAge(){
    console.log(2037-this.birthYear);
  },

  init(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}
const sean = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
  PersonProto.init.call(this,firstName,birthYear);
  this.course=course;
}
const jay = Object.create(StudentProto);
jay.init('hay',2001,'cs');
console.log(jay);

class Account{
  // public
  locale = navigator.language;
  // private
  #movements=[];
  constructor(onwer,currency,pin) {
    this.owner = onwer;
    this.currency = currency;
    this.pin = pin;
    // this.movements=[];

    // protected properites
    this._personalInfo = [];
  }

  getMovements(){
    return this.#movements;
  }
  deposit(v){
    this.#movements.push(v);
    return this;
  }
  withdraw(v){
    this.deposit(-v);
  }

  // private method
  #approveLoan(val){
    return true;
  }
};
const acc1 = new Account('sean');
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(1000);
console.log(acc1);
console.log(acc1.getMovements());

acc1.deposit(390).deposit(200).withdraw(200);
console.log(acc1);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make,speed,charge) {
    super(make,speed);
    this.#charge=charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
