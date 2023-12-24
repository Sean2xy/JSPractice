'use strict';
const booking=[];
const createBooking = function(flightNum,numberOfPass=1,price=199 * numberOfPass) {

  const bookin = {
    flightNum,
    numberOfPass,
    price
  }
  console.log(bookin);
  booking.push(bookin);
};

createBooking('ss')

createBooking('zz',undefined,1000);

const flight ='Ae306';
const sean = {
  name:'sean',
  passport:'122122',
}

const checkIn = function(fightN,name) {
  fightN = 'AAA';
  name='Mr.' + name;

}
checkIn(flight,sean.name);
console.log(sean);
console.log(flight);

const newPassport = function(person) {
  person.passport = Math.random()*1000;
}


const oneWord = function(str) {
  return str.replace(/ /g,'').toLowerCase();
}

const upperFir = (str) => {
    const [f,...o] = str.split(' ');
    return [f.toUpperCase(),...o].join(' ')
}

const transformer = (str,fn) => {
  console.log(`${fn(str)}`);
  console.log(`${fn.name}`);
}

transformer('sean zhu',upperFir);
transformer('sean zhu',oneWord);

const high5 = ()=>{
  console.log('hh');
}
document.body.addEventListener('click',high5);

['zz','aa','bb'].forEach(high5);

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}
const greeter = greet('hey');
greeter('sean');

greet('hello')('ww');
// const greeA = (greeting) => name => console.log(`${greeting} ${name}`);

const HaiNan = {
  airLine:'HaiNan',
  iatCode:'LH',
  bookings:[],
  book(flightN,name){
    console.log(`${name} booked a seat on ${this.airLine} flight ${flightN}`);
    this.bookings.push({flight:`${this.iatCode} ${flightN}`,name});
  },
};

HaiNan.book(231,'zz');
const book = HaiNan.book;

const euroWings = {
  airLine:'er',
  iatCode:'EW',
  bookings:[],
}

book.call(euroWings,23,'sean');
book.call(HaiNan,16,'zz');
console.log(HaiNan);

book.apply(HaiNan,[583,'zz']);
// book.call(HaiNan,...data)

//bind methods
const bookEW = book.bind(euroWings);
bookEW(23,'steven');

// specific
const bookEW2 = book.bind(euroWings,2);
bookEW2('ll');

HaiNan.planes = 300;
HaiNan.buyPlan = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click',HaiNan.buyPlan.bind(HaiNan));

// preset paras
const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1,100));

const addVat = addTax.bind(null,0.23);
console.log(addVat(50));

const addTax1 = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}
const addVat2 = addTax1(0.23);
console.log(addVat2(20));


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  register(){
    const input = Number(prompt(`${this.question}\n ${this.options.join('\n')} \n write option`));
    if(input>3 || input<0){
      console.log('false');
    }else{
      this.answers[input]++;
    }
    this.displayResults();
  },
  displayResults(type='array'){
    if(type==='array'){
      console.log(this.answers);
    }else{
      console.log(`Poll results are ${this.answers.join(',')}`);

    }
  }
};
document.querySelector('.poll').addEventListener('click',poll.register.bind(poll));
// object
poll.displayResults.call({answers:[5,2,3]},'string');

// imeedidately invoked function expression
(function runOnce() {
  console.log('run once');
  const isPrivate = 23;
})();

(()=>console.log('amaazing'))();

{
  const privateIs = 23;
}

const secureBooking = function() {
  let pasCount = 0;

  return function (){
    pasCount++;
    console.log(pasCount);
  }
}

const bookes = secureBooking();
bookes();
bookes();

let f;

const g= function() {
  const a = 23;
  f= function() {
    console.log(a*2);
  }
};

const h = function() {
  const b=777;
  f= function() {
    console.log(b*2);
  }
}

g();
f();

h();
f();

const boardPass = function(n, wait) {
  const perG = n/3;

  setTimeout(function() {
    console.log(`we are boarding all ${n}`);

  },1000*wait);

  console.log(`will start boarding in ${wait} secnods`);
}

boardPass(100,3);

//closures
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  console.log('test');

  document.body.addEventListener('click',function() {
    // console.dir(header);
    header.style.color = 'blue';
  })
})();

