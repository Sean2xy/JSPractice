'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const calDisplaySummary = function(movements) {
  const incomes = movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent = `${incomes} Euro`;
  const out = movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0);
  labelSumOut.textContent = `${Math.abs(out)} Euro`;

  const interest = movements.filter(mov=>mov>0).map(mov=>mov*1.2/100).filter(inte=>inte>=1).reduce((acc,mov)=>acc+mov,0);
  labelSumInterest.textContent = `${interest} Euro`;
}
calDisplaySummary(account1.movements);
const calcBalance = function(movements) {
  const balance = movements.reduce((acc,cur)=>acc+cur);
  labelBalance.textContent = `${balance} EUR`
};
calcBalance(account1.movements);

const createUserName = function(accs){
  accs.forEach(function(acc) {
    acc.username  = acc.owner.toLowerCase().split(' ').map(e=>e[0]).join('');
  });
  // const userName = user.toLowerCase().split(' ').map(e=>e[0]).join('');
  // return userName;
};
// console.log(createUserName('sean zhu'));
createUserName(accounts);
console.log(accounts);
const displayMovements = function(movements) {
  containerMovements.innerHTML='';
  movements.forEach(function(mov,i) {
    const type = mov>0?'deposit':'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
         
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html);
  })
};
displayMovements(account1.movements);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
//
// currencies.forEach(function(v,k) {
//   console.log(k,v);
// });
// const currUni = new Set(['USD','SUD','USD','EUR']);
// currUni.forEach(function(k,v) {
//   console.log(k,v);
// })
// // entries, index, element
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // e,index,array
// movements.forEach(function(m,i,array) {
//   // call back
//   if(m>0) console.log(`${i},${m}`);
//   else console.log('zz');
// })

// /////////////////////////////////////////////////
// let arr = ['a','b','c'];
// console.log(arr.slice(1,3));
// console.log(arr.slice(-1));
// console.log(arr.slice(1));
//
// const newArray = [...arr];
// console.log(newArray);
//
// // splice, it changes the origin array
// arr.splice(1);//delete b and c
// // arr.splice(-1);// delete last one e
// console.log(arr);
//
// // reverse mutates the origin array
// const arr2 = [1,2,3,4,5,6,7];
// console.log(arr2.reverse());
// console.log(arr2);
//
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr,...arr2]);
//
// //join
// console.log(arr2.join('-'));
//
// const arr3 = [1,2,3,4];
// console.log(arr3[arr3.length-1]);
// console.log(arr3.at(-1));
// console.log(arr3.slice(-1)[0]);
//
// console.log('sean'.at(-1));
// const a = [1,2,3,4,5];
// const b = a.slice(1,a.length-2);
//
// console.log(b);
// const checkDogs = function(dogsJ,dogsK) {
//   const corrected=dogsJ.slice(1,dogsJ.length-2);
//   const newArray = [...corrected,...dogsK];
//   newArray.forEach(function(v,i) {
//     const litre = `${v} ${i}`;
//     console.log(`${v>=3?'Adult':'puppy'} Dog number ${i+1} is ${v}years old`);
//   })
// }
// checkDogs([3,5,2,12,7],[4,1,15,8,3]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // call back functions
// const deposit = movements.filter(mov=>mov>0);
// console.log(deposit);
// const balance = movements.reduce(function(acc,cur) {
//   return acc+cur;
// },0)
// console.log(balance);
// const sum = movements.filter(mov=>mov>0).reduce((acc,cur) =>acc+cur);
// console.log(sum);
// //get max value
// const max = movements.reduce((acc,cur)=>Math.max(acc,cur),movements[0]);
// console.log(max);
//
// const calDogHuman = function(ages) {
//   const sumA = ages.map(a=>{
//     if(a<=2){
//       return 2*a;
//     }else{
//       return 16 + a*4;
//     }
//   }).filter(a=>a>18).reduce((acc,cur,i,array)=>acc+cur / array.length,0);
//   return sumA;
// }
// console.log(calDogHuman([5,2,4,1,15,8,3]));

// const calDogHuman = function(ages) {
//   const modifiedAges = ages.map(a => {
//     if (a <= 2) {
//       return 2 * a;
//     } else {
//       return 16 + a * 4;
//     }
//   });
//
//   const filteredAges = modifiedAges.filter(a => a > 18);
//   const sumAges = filteredAges.reduce((acc, cur) => acc + cur, 0);
//
//   return sumAges / filteredAges.length;
// }
//
// const result = calDogHuman([5, 2, 4, 1, 15, 8, 3]);
// console.log(result);

// const eurToUsd = 1.1;
// // call back function
// const movementsUSD = movements.map(function(mov,index) {
//   console.log(index);
//   return mov*eurToUsd;
// });
// console.log(movementsUSD);
// // map with arrow function
// const movUSDArrow  = movements.map(mov=>mov*eurToUsd);
// console.log(movUSDArrow);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// return the first element that satisfies the condition
console.log(movements.find(function(mov) {
  return mov<0;
}));

console.log(accounts.find(acc=>acc.owner==='Jessica Davis'));