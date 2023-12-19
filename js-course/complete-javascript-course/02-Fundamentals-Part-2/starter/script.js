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

const calcAverage = (score1,score2,score3) =>{
    const avgS = (score1+score2+score3) / 3;
    return avgS;
}
const teamD = calcAverage(44,23,71);
const teamK = calcAverage(65,54,49);
const checkWinner = function (teamD,teamK) {
    if(teamD >= 2 * teamK){
        console.log(`teamD wins (${teamD} vs ${teamK})`);
    }else if(teamK >= 2 * teamD){
        console.log(`teamK wins (${teamK} vs ${teamD})`)
    }else if(teamK === teamD){
        console.log(`draw`)
    }else{
        console.log('nobody wins');
    }
}
const win = checkWinner(teamD,teamK);
console.log(win);