// importing module


import { addToCart, cart, q, totalPrice as p } from './shoppingCart.js';
console.log('importing module');
// console.log(shippingCost);
addToCart(q,p);

// import * as ShoppingCart from '../final/shoppingCart.js';
// ShoppingCart.addToCart(2,3)
// console.log(ShoppingCart.totalPrice);
//
// import add,{cart} from './shoppingCart.js'
// add(2,2)
// add(3,1)
// console.log(cart);
//
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(res);
// const data = await res.json();
// console.log(data);
// console.log('something');// blocking the entire execution of this module

// const getLastPost = async function(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   // console.log(res);
//   const data = await res.json();
//   // console.log(data);
//
//   return{title:data.at(-1).title,text:data.at(-1).body}
// }
// const lastPost = getLastPost();
// console.log(lastPost);
// // lastPost.then(last=>console.log(res))
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//Common JS
// export.addToCart = function(product,quantity) {
//   cart.push({product,quantity})
//   console.log(`${product} ${quantity} added to cart`);
// }
//
// const {addToCart} = require('./shoppingCart.js')
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es'
const state = {
  cart:[
    {product:'zz',quantyty:5},
    {product:'bb',quantyty:5},
  ],
  user:{loggedIn:true},
}

const deepClone = cloneDeep(state);
state.user.loggedIn=false;
console.log(deepClone);

if(module.hot){
  module.hot.accept();
}

Promise.resolve('Test').then(function(x) {
  return console.log(x)
})