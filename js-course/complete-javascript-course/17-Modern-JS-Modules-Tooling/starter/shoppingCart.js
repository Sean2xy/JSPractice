// exporting module
console.log('exporting module');

console.log('fetch user');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('finish');

const shippingCost = 10;
export const cart=[];

export const addToCart = function(product,quantity) {
  cart.push({product,quantity})
  console.log(`${product} ${quantity} added to cart`);
}

const totalPrice = 237;
const totalQ = 23;
export {totalQ as q,totalPrice}

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

const sp2= (function () {
  const cart = [];
  const shippingCost = 10;


  return{
    shippingCost,
  };
})();

console.log(sp2.shippingCost);

//Common JS
