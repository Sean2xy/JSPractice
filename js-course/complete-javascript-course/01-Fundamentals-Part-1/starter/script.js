// let js = 'amazing';
// if(js==='amazing') alert('js is fun')
//
// console.log(40+8+3-2);
//
// console.log('sean');
//
// let firstName = 'sean';
// console.log(firstName);
//
// let PI = 3.1415;
// // 见名知意，常量开头大写
// let myFirstJob = 'programmer';

// console.log(hasAte);
// let hasAte = true;
// console.log(hasAte);
// // console.log(typeof hasAte);
// // console.log(typeof 'Sean');
//
// hasAte='Ate'
// console.log(typeof hasAte);
//
// var unde;
// console.log(unde);
//
// let fined;
// console.log(fined);
//
// unde = 2;
// console.log(typeof unde);
//
// console.log(typeof null);
//
// let age = 30;
// age = 31;
// const birthYear = 2001;

// using const by default

// const currentYear = 2023;
// const ageSean = currentYear-2001;
// const agePP = currentYear-2000;
//
// console.log(ageSean,agePP);
//
// const firstName ='Sean';
// const LastName = 'Zhu';
//
// console.log(firstName+ " " + LastName);
//
// let x = 10+5;
// x+=15;
// console.log(x);
//
// console.log(ageSean<agePP);
//
// const youngerThan = ageSean<agePP;
//
// // operator precedence
// console.log(currentYear-1991 > currentYear-2018);
//
// let x,y;
// // higher precedence of - subtraction than =
// x=y=25-10-5;
// console.log(x,y);

// group () has highes precedence

// code ex1:
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
//
// const markBMIs = markMass/(markHeight * markHeight);
// const johnBMIs = johnMass/(johnHeight * johnHeight);
// const markHigherBMI = markBMIs > johnBMIs;
//
// console.log(markHigherBMI);

// const firstName = 'sean';
// const job = 'programmer';
// const birthYear = '2001';
// const curYear = 2023;
// const personalInfo = "I'm " + firstName + ', a ' + (curYear-birthYear) + ' years old ' +job+'!';
// console.log(personalInfo);
//
// // template literals
// const newInfor = `I'm ${firstName}, a ${curYear-birthYear} years old ${job}!`;
// console.log(newInfor);
// const easyString = `I really love it!`
// console.log(easyString);
//
// console.log(`String with
// muitiple
// lines`);

// const age = 12;
// const legalAge = age >= 18;
// if(legalAge){
//     console.log('can start drive');
// }else{
//     const leftYear = 18-age;
//     console.log(`You are young, plz wait for ${leftYear} years`);
// }
//
// // to make decision about century based on birthYear
// const birthYear = 2011;
// let century;
// if(birthYear <=2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);

// code ex2:
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
//
// const markBMIs = markMass/(markHeight * markHeight);
// const johnBMIs = johnMass/(johnHeight * johnHeight);
// const markHigherBMI = markBMIs > johnBMIs;
//
// if(markHigherBMI){
//     // template literal
//     console.log(`Marker BMI ${markBMIs} is higher than john BMI ${johnBMIs}`);
// }else{
//     console.log(`John BMI ${johnBMIs} is higher than Marker ${markBMIs}`);
// }
// console.log(markHigherBMI);

//type conversion - explicitly
// const inputYear = '1991';
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear)+18);
//
// console.log(Number('sean'));
// // NAN is not a valid number, but it is a number
//
// // type coercion
// console.log("I am " + 23 + " years old");
// console.log('20'-'10'-'3');
// console.log('20' * '2');

// falsy values are values but not exactly false,but will be converted into false
// 0 '' null,NaN, undefined
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('sean'));
// console.log(Boolean({}));
// console.log(Boolean(''));
//
// const money = 0;
// if(money){
//     console.log('do not spend it all');
// }else{
//     console.log('poor');
// }
//
// let height;
//
// if(height){
//     console.log('wuhu')
// }else{
//     console.log('undefined');
// }
//
// const age = '18';
// always use === by default
// // === does not perform type coreation but == does
// if(age === 18) console.log('you are an adult');
//
// if(age == 18) console.log('you are an adult');
//
// const fav = Number(prompt("what's your favourite"));
// console.log(fav);
// console.log(typeof fav);
//
// if(fav===99){
//     console.log(`you are awesome`);
// }else if(fav===7){
//     console.log(`you are also awesome`);
// }else{
//     console.log('you suck');
// }
//
// if(fav!==99){
//     console.log('should be 99');
// }

// const hasEnglish = true;
// const hasTech = true;
// const hasLuck = true;
// console.log(hasEnglish && hasTech);
// console.log(hasEnglish || hasTech);
// console.log(!hasEnglish);
//
// const onboard = hasEnglish && hasTech && hasLuck;
// if(onboard){
//     console.log(`Keep going and work hard`);
// }else{
//     console.log('you are the best');
// }

// code chanllenge 3
// const avgDolpScore = (96+108+89) / 3;
// const avgKoalsScore = (88+91+110) / 3;
//
// if(avgDolpScore > avgDolpScore && avgDolpScore>=100){
//     console.log('Dolh win');
// }else if(avgDolpScore===avgKoalsScore && (avgDolpScore>=100 && avgKoalsScore>=100)){
//     console.log('draw');
// }else if(avgKoalsScore > avgDolpScore && avgKoalsScore>=100){
//     console.log('koal win')
// }else{
//     console.log('no one wins');
// }

// switch

// const day = 'monday';
//
// switch (day){
//     // using strict equal
//     // day === monday
//     case "monday":
//         console.log('happy monday');
//         break;
//     case 'tuesday':
//     case 'wednesday':
//         console.log('aaa');
//         console.log('eat teco');
//         break;
//     case 'thrusday':
//         console.log('hhh');
//     default:
//         console.log('not a valid day');
// }
//
// if(day==='monday'){
//
// }else if(day==='tuesday' || day==='wednesday'){
//     console.log('aaa');
//     console.log('eat teco');
// }else{
//
// }
// conditional operator
// const age = 23;
// const canDrink = age >= 18 ?console.log(`drink!`):console.log('no permitted');
// console.log(canDrink);// undefined
// // ternary operator used for takes a quick decision
// console.log(`I like to drink ${age>=18?'wine':'water'}`);

const bill = 275;
const percent = (bill>=50 && bill<=300)?0.15:0.2;
const tip = bill * percent;
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip+bill}`);