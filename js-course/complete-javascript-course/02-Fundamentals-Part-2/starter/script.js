'use strict';

// let hasLecene = false;
// const passTest = true;
// if(passTest){
//     hasLecene = true;
// }
// if(hasLecene){
//     console.log('strict mode')
// }

// const interface = 'new';


// function
// function logger(){
//     console.log('first function');
// }
// logger();
// // function makes dry code,reusable,maintainable
// function fruitProcessor(orange,apple){
//     console.log(orange,apple);
//     const juice = `juice with ${orange} oranges and ${apple} apples`;
//     return juice;
// }
//
// console.log(fruitProcessor(5,0));
// const sentence = fruitProcessor(2,2);
// console.log(sentence);

// function calAge(birthYear){
//     const curYear = 2031;
//     const age = curYear-birthYear;
//     return age;
// }
//
// const age = calAge(2001);
// console.log(age);
//
// // function expression
// // function is a value
// const calAge2 = function (birthYear){
//     return 2031-birthYear;
// }
// console.log(calAge2(22));

//ES6 arrow function
// const culAge3 = birthYear => 2035-birthYear;
// const age3 = culAge3(2022);
// console.log(age3);
//
// const yearLeftRetire = (birthYear,age) => {
//     const year = birthYear-age;
//     const retirement = 65-year;
//     return retirement;
// }
// console.log(yearLeftRetire(3,5));

// function calls function
// const piece = function (fruit){
//     return fruit * 4;
// }
// // const fruitProcess = function (orange,apple){
// //     orange = piece(orange);
// //     apple = piece(apple);
// //     const juice = `juice with ${orange} oranges and ${apple} apples`;
// //     return juice;
// // }
// //
// // console.log(fruitProcessor(5,0));
// // const sentence = fruitProcessor(2,2);
// // console.log(sentence);

// const culAge3 = birthYear => 2035-birthYear;
// const age3 = culAge3(2022);
// console.log(age3);
// const calYear = function(birthYear){
//     birthYear--;
// }
// const yearLeftRetire = (birthYear,age) => {
//     const year = calYear(birthYear);
//     const retirement = 65-year;
//     if(retirement>0){
//         console.log(`${birthYear} year retires`);
//         return retirement;
//     }else{
//         return -1;
//     }
//     return retirement;
// }
// console.log(yearLeftRetire(3,5));

// const calcAverage = (score1,score2,score3) =>{
//     const avgS = (score1+score2+score3) / 3;
//     return avgS;
// }
// const teamD = calcAverage(44,23,71);
// const teamK = calcAverage(5,5,49);
// const checkWinner = function (teamD,teamK) {
//     if(teamD >= 2 * teamK){
//         console.log(`teamD wins (${teamD} vs ${teamK})`);
//     }else if(teamK >= 2 * teamD){
//         console.log(`teamK wins (${teamK} vs ${teamD})`)
//     }else if(teamK === teamD){
//         console.log(`draw`)
//     }else{
//         console.log('nobody wins');
//     }
// }
// const win = checkWinner(teamD,teamK);
// console.log(win);

// const friends = ['ss','zz','cc'];
// const years = new Array(11,22,33,44);
// console.log(years);
// console.log(friends[0]);
// console.log(friends.length);
// friends[0]='jay';
// console.log(friends[0]);
//
// const job = 'coder';
// const sean = [job,'sean',11,2035-1991,friends];
// console.log(sean);
//
// //ex
// const calAge = function (birthYear) {
//     return 2037-birthYear;
// }
// const calAge1 = calAge(years[0]);
// console.log(calAge1);

// array methods
// const friends = ['ss','zz','cc'];
// friends.push('jay');
// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);
// friends.unshift('sonn');
//
// friends.pop();
// console.log(friends);
//
// friends.shift();
// console.log(friends);
//
// console.log(friends.indexOf('jay'));
// console.log(friends.includes('jay'));//strict equal
//
// if(friends.includes('jay')){
//     console.log('oh lala');
// }

// code challenge 2

// const calcTip = function (bill) {
//     const percent = (bill>=50 && bill<=300)?0.15:0.2;
//     const tip = bill * percent;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip+bill}`);
//     return tip;
// }
// const arrays=[125,555,44];
// const tip1 = calcTip(arrays[0]);
// const tip2 = calcTip(arrays[1]);
// const tip3 = calcTip(arrays[2]);
// const totals = [arrays[0]+tip1,arrays[1]+tip2,arrays[2]+tip3];
// console.log(totals);

//object
// order of properties does not matter
// const sean = {
//     firstName: 'sean',
//     lastName:'zhu',
//     age:2027-2011,
//     job:'coder',
//     firends:['se','a','n']
// };
// console.log(sean);
// console.log(sean.firstName);
// //put expression
// console.log(sean['firstName']);
// const nameKey = 'Name';
// console.log(sean['first'+nameKey]);
// console.log(sean['last'+nameKey]);
//
// // const age = prompt('what do you wanna know');
// // if(age){
// //     console.log(sean[age]);
// //     console.log(sean.age);
// // }else{
// //     console.log('no');
// // }
// sean.location = 'dublin';
// sean['ig']='zz';
//
// // sean has 3 friends, best friend is n
// console.log(`${sean.firstName} has ${sean.firends.length} friends, and his best firends is ${sean.firends[2]}`);

// function is also a type of value
// const sean = {
//     firstName: 'sean',
//     lastName:'zhu',
//     birthYear:1991,
//     job:'coder',
//     firends:['se','a','n'],
//     hasDriver: true,
//
//     // calAge: function (birthYear) {
//     //     return 2037-birthYear
//     // }
//     // calAge: function (){
//     //     return 2037-this.birthYear;
//     // }
//     // can not use arrow function because this keyword
//     calAge:function () {
//         this.age = 2037-this.birthYear;
//         return this.age;
//     },
//
//     getSummary:function () {
//         return `${this.firstName} is a ${this.calAge()}
//         years old ${this.job}, and he has
//         ${this.hasDriver?'a':'no'} driver license`;
//     }
//
// };
//
// console.log(sean.calAge());
// console.log(sean['calAge']());
// console.log(sean.age);
// console.log(sean.getSummary());

// code challenge 3
// const mark = {
//     fullName : 'Marlk Miller',
//     mass:78,
//     height:1.69,
//
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// }
//
// const john = {
//     fullName : 'John Smith',
//     mass:92,
//     height:1.95,
//
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// }
//
// console.log(`${john.fullName}'s${john.calcBMI()} is lower than ${mark.fullName}'s${mark.calcBMI()}!`);

// for(let i=1;i<=10;i++){
//     console.log(`lift do ${i}`);
// }

// const seanArray = [
//     'sean',
//     'zhu',
//     2037-2031,
//     'teacher',
//     ['ss','z','xx']
// ];
// const newArray = new Array(seanArray.length);
// const newArray = [];
// for (let i=0;i<seanArray.length;i++){
//     console.log(seanArray[i], typeof seanArray[i]);
//
//     // one way
//     newArray[i]=typeof seanArray[i];
//     // console.log(newArray[i]);
//     // newArray.push(typeof seanArray[i]);
// }
// console.log(newArray);
//
// const years=[1991,2002,2015,2035];
// const ages=[];
// for(let i=0;i<years.length;i++){
//     ages[i]=2037-years[i];
// }
// console.log(ages);

// continue and break
// for(let i=1;i<=10;i++){
//     // if(i!==5) continue;
//     // omit when i!==5
//     if(i===5) break;
//     console.log(`lift do ${i}`);
// }

// loop with loop and backwards loop
const seanArray = [
    'sean',
    'zhu',
    2037-2031,
    'teacher',
    ['ss','z','xx']
];

// for(let i = seanArray.length-1;i>=0;i--){
//     console.log(seanArray[i]);
// }
//
// for(let e = 1;e<=3;e++){
//     console.log(`exercise ${e}`);
//     for(let rep=1;rep<=5;rep++){
//         console.log(`${e}: lift do ${rep}`);
//     }
// }

// let i = 1;
// while(i<=10){
//     console.log(`${i} times`);
//     i++;
// }

// while loop used for no counter used
// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice!==6){
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice===6) console.log('loop is end');
// }

const bills = [22,295,176,440,37,105,10,1100,86,52]
const tips = [];
const totals = [];

const calcTip = function (bill) {
    const percent = (bill>=50 && bill<=300)?0.15:0.2;
    const tip = bill * percent;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip+bill}`);
    return tip;
}

for(let i =0;i<bills.length;i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}
console.log(tips);
console.log(totals);

const calcAvg = (arr) =>{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(calcAvg(totals));
