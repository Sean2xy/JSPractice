const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// freeze can only freeze the first level
const getLimit = (limit,user)=>limit?.[user] ?? 0;

const addExpense = function (state,limit,value, description, user= 'jonas') {
  // if (!user) user = 'jonas';

  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user]?spendingLimits[user]:0;

  // const limit = spendingLimits?.[user] ?? 0;

  // side effect

  // if (value <= getLimit(cleanUser)) {
  //   return [...state,{ value: -value, description, user: cleanUser }]
  //   // budget.push({ value: -value, description, user: cleanUser });
  // }
  return value <= getLimit(limit,cleanUser)?[...state,{ value: -value, description, user: cleanUser }]:state;

};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const check = function () {
//   for (var el of budget) {
//     var lim;
//     if (spendingLimits[el.user]) {
//       lim = spendingLimits[el.user];
//     } else {
//       lim = 0;
//     }
//
//     if (el.value < -lim) {
//       el.flag = 'limit';
//     }
//   }
// };
const checkUpgrade = function(state,limit) {
  // add a property
  return state.map(entry=>{
    return entry.value<-getLimit(limit,entry.user)?{...entry,flag:'limit'}:entry;
  })
}
checkUpgrade(newBudget3,spendingLimits);

console.log(budget);

const  logBigExpenses = function (state,limit) {
  // let output = '';
  // for (const el of budget) {
  //   // if (el.value <= -limit) {
  //   //   output += `${el.description.slice(-2)} + /` ; // Emojis are 2 chars
  //   // }
  //   output+= el.value <= -limit?`${el.description.slice(-2)} + /`:'';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);

  const bigExpenses = state.filter(e=>e.value<=-limit).map(e=>e.description.slice(-2)).join('./');

  // const bigExpenses = state.filter(e=>e.value<=-limit).reduce((str,cur)=>`${str} / ${cur.description.slice(-2)}`,'')
};

const arrayN = [1,2,3,4,5];
const sum = arrayN.reduce((acc,cur)=>acc+cur,0);
console.log(sum);
