let userName: string = 'sean';
let hasLoggedIn: boolean = true;
// console.log(userName + hasLoggedIn);
let myNumber: number = 10;
let myRegex: RegExp = /food/;
userName += ' zhu';
const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}
const sean: Person = {
  first: 'sean',
  last: 'zhu'
};

// mapping
const ids:Record<number, string> = {
  10: 'a',
  20: 'b'
};
ids[30] = 'c';
console.log(ids);

const numbers:number[] = [1,2,3].map(v=>v*10);