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

const updateUI = function(acc) {
  // movement, balance, summary
  displayMovements(acc.movements);
  calcBalance(acc);
  calDisplaySummary(acc);
};

// log in
let currentAccount;
btnLogin.addEventListener('click',function(e) {
  e.preventDefault();

  currentAccount = accounts.find(acc=>acc.username=== inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin===Number(inputLoginPin.value)){
    console.log('log in');
    // display UI
    labelWelcome.textContent=`welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    // clear fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    // movement, balance, summary
    // displayMovements(currentAccount.movements);
    // calcBalance(currentAccount);
    // calDisplaySummary(currentAccount);
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click',function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc=>acc.username===inputTransferTo.value);

  inputTransferTo.value = inputTransferAmount.value='';
  if(amount>0 && receiverAccount && amount<=currentAccount.balance && receiverAccount?.username!==currentAccount.username){
    console.log('valid');
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);

  }
})

const calDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent = `${incomes} Euro`;
  const out = acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0);
  labelSumOut.textContent = `${Math.abs(out)} Euro`;

  const interest = acc.movements.filter(mov=>mov>0).map(mov=>mov*acc.interestRate/100).filter(inte=>inte>=1).reduce((acc,mov)=>acc+mov,0);
  labelSumInterest.textContent = `${interest} Euro`;
}
// calDisplaySummary(account1.movements);
const calcBalance = function(acc) {
  const balance = acc.movements.reduce((acc,cur)=>acc+cur);
  labelBalance.textContent = `${balance} EUR`;
  acc.balance = balance;
};
// calcBalance(account1.movements);

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
const displayMovements = function(movements,sort=false) {
  containerMovements.innerHTML='';

  const movs = sort?movements.slice().sort((a,b)=>a-b):movements;

  movs.forEach(function(mov,i) {
    const type = mov>0?'deposit':'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
         
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html);
  })
};

btnLoan.addEventListener('click',function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount>0 && currentAccount.movements.some(mov=>mov*0.1)){
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  };
  inputLoanAmount.value='';
})
btnClose.addEventListener('click',function(e) {
  e.preventDefault();
  if(currentAccount.username === inputCloseUsername.value &&currentAccount.pin===Number(inputClosePin.value)){
    accounts.splice(accounts.findIndex(acc=>acc.username===currentAccount.username),1);
    containerApp.style.opacity=0;
  };
  inputClosePin.value = inputCloseUsername.value = '';

});

let sorted = false;
btnSort.addEventListener('click',function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted = !sorted;
});
// displayMovements(account1.movements);


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
//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // return the first element that satisfies the condition
// console.log(movements.find(function(mov) {
//   return mov<0;
// }));
//
// console.log(accounts.find(acc=>acc.owner==='Jessica Davis'));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.some(mov=>mov>6000));

// every
console.log(movements.every(mov=>mov>0));

// seperate call back
const depoist = mov=>mov>0;
console.log(movements.some(depoist));

// flat & flatmap
const arr =[[[2,1],3],[4,5,6]];
// create a new array
console.log(arr.flat());
console.log(arr.flat(2));

const accountAllMo = accounts.map(mov => mov.movements);
const all = accountAllMo.flat();
console.log(all);
const overBalance = all.reduce((arr,cur)=>arr+cur,0);
console.log(overBalance);

const newBalance = accounts.flatMap(acc=>acc.movements).reduce((acc,cur)=>acc+cur);
console.log(newBalance);

//sort method change the original array
// sort based on string
// return <0 A,B keep order
// >0 B,A switch order

// movements.sort((a,b)=>{
//   // if(a>b) return 1;
//   // if(b>a) return -1;
//
// });
// for number to rewrite compareFn
movements.sort((a,b)=>a-b)// asc

console.log(movements);

const x = new Array(7).fill(2,2,3);
console.log(x);

const from = Array.from({length:7},(_,i)=>i+1);
console.log(from);

const collected = Array.from(document.querySelectorAll('.movements__value'));
console.log(collected);
collected.map(e=>Number(e.textContent.replace('Euro','')));

const bankDepositSum = accounts.map(acc=>acc.movements).flat().filter(mov=>mov>0).reduce((acc,cur)=>acc+cur,0);
console.log(bankDepositSum);

const numOne = accounts.flatMap(acc=>acc.movements).filter(m=>m>=1000).length;
// can not be acc++, using ++acc
const numTwo = accounts.flatMap(acc=>acc.movements).reduce((acc,cur)=>cur>=1000?acc+1:acc,0);// ++acc
console.log(numTwo);

const sum = accounts.flatMap(acc=>acc.movements).reduce((acc,cur)=>{
  // can used object[]
  cur>0?acc.deposits+=cur:acc.withdrawals+=cur;
  return acc;
},{deposits:0,withdrawals:0});
console.log(sum);

// this is a nice title -> This Is a Nice Title
const convertT = function(str) {
  const exceptions = ['a','an','the','but'];
  return str.toLowerCase().split(' ').map(s=>exceptions.includes(s)?s:s[0].toUpperCase() + s.slice(1)).join(' ');
};
console.log(convertT('this is a nice title'));
