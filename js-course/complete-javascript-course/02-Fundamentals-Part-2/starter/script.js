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
const sean = {
    firstName: 'sean',
    age:2027-2011,
    job:'coder',
    firends:['se','a','n']
};
console.log(sean);
console.log(sean.firstName);
console.log(sean['firstName']);

