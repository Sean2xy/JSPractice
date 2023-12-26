'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formattingMoney = function(value,locale,currency) {
  return new Intl.NumberFormat(locale,{style:'currency',currency:currency}).format(value);
}
const formatter = function(now,locale) {
  const dayPass = (date1,date2)=> Math.round(Math.abs((date2-date1)) / (1000 * 60 *60 *24));

  const passed = dayPass(new Date(),now);
  console.log(passed);
  if(passed===0) return 'today';
  if(passed===1) return 'yesterday';
  if(passed<=7) return `${passed}days ago`
  else{
    const day = `${now.getDate()}`.padStart(2,0);

    const month = `${now.getMonth()}`.padStart(2,0);
    const year = now.getFullYear();

    return new Intl.DateTimeFormat(locale).format(now);
  }

}
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const now = new Date(acc.movementsDates[i]);


    const displayDate=formatter(now,acc.locale);

    const formatting = formattingMoney(mov,acc.locale,acc.currency)

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatting}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formatting = formattingMoney(acc.balance,acc.locale,acc.currency)
  labelBalance.textContent = `${formatting}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formattingMoney(incomes,acc.locale,acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formattingMoney(out,acc.locale,acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formattingMoney(interest,acc.locale,acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

const locale = navigator.language;

const now = new Date();
// labelDate.textContent = new Intl.DateTimeFormat('zh-CN').format(now);

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long'  // Corrected property name
};

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

//
// const now = new Date();
// const date = `${now.getDate()}`.padStart(2,0);
// const day = now.getDay();
// const month = now.getMonth()+1;
// const year = now.getFullYear();
// const hour = now.getHours();
// const min = now.getMinutes();
// labelDate.textContent=date+'/'+month+'/'+year +` ,${hour} ${min}`;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;


    const locale = navigator.language;

    const now = new Date();
// labelDate.textContent = new Intl.DateTimeFormat('zh-CN').format(now);

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      weekday: 'long'  // Corrected property name
    };

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23===23.0);
//
// console.log(0.1+0.2);
//
// console.log(+'23'); // convert string to number
//
// console.log(Number.parseInt('30.5p',10));
// console.log(Number.parseFloat('30.5px',10));
//
// // checking value is NaN
// console.log(Number.isNaN(20));
//
// // checking if value is a number
// console.log(Number.isFinite(20));
//
// console.log(Math.sqrt(25));
// console.log(8**(1/3));
//
// console.log(Math.max(1,2,3,'4'));
//
// const randomInt = (min,max)=>Math.trunc(Math.random()*(max-min)+1)+min;
//
// // rounding
// console.log(Math.trunc(23.5555));
// console.log(Math.round(23.9));
// console.log(Math.floor(23.8));
// console.log(Math.floor(-22.2));
//
// console.log((2.7).toFixed(3));

// reminder
// console.log(5%2);
// console.log(6%2===0?'even':'odd');
//
// const even = n => n%2===0;
//
// labelBalance.addEventListener('click',function() {
//   [...document.querySelectorAll('.movements__row')].forEach(function(row,index) {
//     if(index%2===0){
//       row.style.backgroundColor='orange';
//     }
//   })
// })
//
// const diamter = 276449000;
// // 276,449,000
// const easi = 276_449_000; // easy to read
// console.log(easi);
//
// const priceCent = 345_99;
// console.log(priceCent);
//
// console.log(+'3.14_15');// can not
//
// // BigInt
// console.log(2**53-1);
// console.log(Number.MAX_SAFE_INTEGER);
//
// console.log(4535454353534535n);
// console.log(BigInt(423432454336465));
//
// console.log(1000n + 1000n);
//
// console.log(28n>15);
//
// // Math.sqrt(16n);
//
// console.log(10n / 3n);

// date & time
// const now = new Date();
// console.log(now);
//
// console.log(new Date('Decemeber 24,2015'));
// console.log(new Date(2023,11,26,16,23));
// console.log(new Date(account1.movementsDates[0]));
//
// console.log(new Date(3*24*60*60*1000));
//
// const future = new Date(2023,11,26,16,23);
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.toISOString());
//
// console.log(future.getTime());
// console.log(new Date(future.getTime()));
// console.log(Date.now());
// future.setFullYear(2055);
// console.log(future);

// const dayPass = (date1,date2)=> Math.abs((date2-date1)) / (1000 * 60 *60 *24);
// console.log(dayPass(new Date(2023,10,2),new Date(2023,10,5)));
//
// const num = 35645645.23
//
// const opinions = {
//   style:'currency',
//   currency:'EUR'
// };
//
// console.log(new Intl.NumberFormat('en-US',opinions).format(num));