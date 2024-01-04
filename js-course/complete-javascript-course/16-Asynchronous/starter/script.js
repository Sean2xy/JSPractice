'use strict';





const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const renderCountry = function(data) {
//   const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//     +data.population / 1000000
//   ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//
//   countriesContainer.insertAdjacentHTML('beforeend',html);
//   countriesContainer.style.opacity=1;
// }
//
// // get the data from the Internet using public API
// const getCountryData= function(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//
//   request.addEventListener('load',function() {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//
//
//     renderCountry(data)
//
//
//     const [neighbour] = data.borders;
//
//     const request2 = new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.com/v3.1/name/${neighbour}`);
//     request2.send();
//
//     request2.addEventListener('load',function() {
//       const data2 = JSON.parse(this.responseText);
//
//       renderCountry(data2);
//     });
//   })
// }
// setTimeout(function() {
//   console.log('1');
//   setTimeout(function() {
//     console.log('2');
//     setTimeout(function() {
//       console.log(3);
//       setTimeout(function() {
//         console.log('4');
//       },1000)
//     },1000)
//   },1000)
// },1000)
// sequence of AJAX call
// nested call backs
// when have lots of, call back hell
// using Promise to solve call back hell


// fetch api
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountry = function(c) {
//   fetch(`https://restcountries.com/v3.1/name/${c}`).then(function(response) {
//     console.log(response);
//     return response.json()
//   }).then(function(data) {
//     console.log(data);
//
//   });
// };
// const renderError = function(msg) {
//   countriesContainer.insertAdjacentText('beforeend',msg);
//   countriesContainer.style.opacity=1;
//
// }
//
// const getJson = function(url,errMsg) {
//   fetch(url).then(response=>{
//     if(!response) throw new Error('country not found');
//     return response.json();
//     });
// }
// const getCountry = function(c) {
//   fetch(`https://restcountries.com/v3.1/name/${c}`)
//     .then(response=>{
//
//       if(!response.ok){
//         throw new Error(`country not found ${response.status}`); // reject promise on purpose
//       }
//
//       return response.json()
//
//     })// using json() to read the body
//     .then(data=>{
//       console.log(data)
//
//       return 23;
//     })
//     .then(data=>alert(data))
//     .catch(err=>console.log(err))
//     .finally(()=>{
//       console.log('zz');
//     })
// };
// getCountry('zzz');

// handle error
// const whereAMI = function(lat,lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}geoit=json`)
//     .then(response=>{
//       if(!response.ok){
//         throw new Error(`problem with ${response.status}`);
//       }
//       return response.json()
//     })
//     .then(data=>{
//       console.log(`You are in${data.city},${data.country}`)
//
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res=>{
//       if(!res.ok) throw new Error('country')
//
//       return res.json()
//     })
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
// }
// whereAMI(52.508, 13.381 )
// whereAMI(19.037, 72.873)
// whereAMI(-33.933, 18.474 )

// console.log('Test start');
// setTimeout(()=>console.log('zero timer'),0);
// Promise.resolve('Resolve promise1').then(res=>console.log(res));
// console.log('test end');;
// test start, end,resolve promise1, zero timer

// takes one argument - executor
// const lottery = new Promise(function(resolve,reject) {
//   console.log(`lottery start`);
//
//   setTimeout(function() {
//     if(Math.random()>=0.5){
//       resolve('you win')
//     }else {
//       reject(new Error('you lose'))
//     }
//   },2000)
// })
// lottery.then(response=>console.log(response)).catch(err=>console.log(err));
//
// promisfiy
// const wait = function(second) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve,second*1000);
//   });
// };
// nested call back
// wait(2)
//   .then(()=>{
//   console.log(`wait two second`)
//   return wait(1)
// })
//   .then(()=>{
//     console.log('i waited for 1 second')
//     return wait(2);
//   })
//   .then(()=>console.log('Another 2 second'));

// Promise.resolve('abc').then((x=>console.log(x)));
//
//
// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err=>reject(err)
//     // )
//     navigator.geolocation.getCurrentPosition(resolve,reject);
//   })
// }
// getPosition().then(p=>console.log(p))
// const imgContainer = document.querySelector('.images');
// const createImage = function(imgPath) {
//   return new Promise(function(resolve, reject) {
//     const img = document.createElement('img')
//     img.src=imgPath
//     img.addEventListener('load',function() {
//       imgContainer.append(img)
//       resolve(img)
//     });
//
//     img.addEventListener('error',function() {
//       reject(new Error('not found'));
//     })
//   })
// };
// let curImg;0
// createImage('img/img-1.jpg')
//   .then(img=>{
//   curImg=img;
//   console.log(`first`);
//   return wait(2)
// })
//   .then(()=>{
//     curImg.style.display='none';
//     return createImage('img/img-2.jpg')
//   })
//   .then((img)=>{
//     curImg = img;
//     console.log('second');
//     return wait(2);
//   })
//   .then(()=>{
//     curImg.style.display='none';
//     return createImage('img/img-3.jpg')
//   })
//   .then(img=>{
//     curImg = img;
//     console.log('third');
//     return wait(2);
//   }).then(()=>{
//   curImg.style.display='none';
//   }).catch(err=>console.log(err));


// const whereAMI = async function(c) {
//
//   // fetch(`https://restcountries.com/v3.1/name/${c}`).then(res=>console.log(res));
//   try{
//     const res = await fetch(`https://restcountries.com/v3.1/name/${c}`);
//     if(!res.ok) throw new Error('can not get data')
//     const data = await res.json();
//     // const p = await fetch(`https://geocode.xyz/${lat},${lng}geoit=json`);
//     // const data2 = await p.json();
//     console.log(data);
//
//     return `You are in ${data.city}`;
//   }catch (e){
//     console.log(e);
//
//     // reject promise returned from async function
//     throw e;
//   }
//
//
// }
// console.log('first');
// // whereAMI('portugal')
// //   .then(city=>console.log(city))
// //   .catch(e=>console.log(e));
// (async function(){
//   try{
//     const city = await whereAMI('portugal')
//     console.log(city);
//   }catch (e) {
//     console.error(e.message)
//   }
//   console.log('3');
// })();
//
//
// console.log('second');
// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err=>reject(err)
//     // )
//     navigator.geolocation.getCurrentPosition(resolve,reject);
//   })
// }
// try{
//   let y= 1;
//   const x = 2;
//
// }catch (e) {
//   alert(e.message)
// }
//
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//
//     return response.json();
//   });
// };
// const getThreeCountry = async function(c1,c2,c3) {
//   try{
//    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//    //  const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//    //  const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//
//     const data = await Promise.all([
//         getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//         getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//         getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//       ]);
//     console.log(data);
//     console.log(data.map(d=>d[0].capital));
//   }catch (e){
//     console.error(e);
//   }
// }
//
// (async function(){
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })()


// const timeout = function(s) {
//   return new Promise(function(_,reject) {
//     setTimeout(function() {
//       reject(new Error('too long'));
//     },s)
//   })
// };
//
// Promise.race([getJSON(`https://restcountries.com/v3.1/name/mexico`),timeout(1),])
//   .then(res=>console.log(res[0]))
//   .catch(err=>console.log(err));
// 3 array
// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another')
// ]).then(res=>console.log(res)).catch(error=>console.log(error))
// // error
// Promise.all([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another')
// ]).then(res=>console.log(res)).catch(error=>console.log(error))
//
// // success, return the first fulfield value
// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another')
// ]).then(res=>console.log(res)).catch(error=>console.log(error))
//

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');
const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img')
    img.src=imgPath
    img.addEventListener('load',function() {
      imgContainer.append(img)
      resolve(img)
    });

    img.addEventListener('error',function() {
      reject(new Error('not found'));
    })
  })
};
let curImg;0

const loadN = async function(){
  try {
    let img = await createImage('img/img-1.jpg');
    await wait(2);
    img.style.display='none';

    img = await createImage('img/img-2.jpg');
    await wait(2);
    img.style.display='none';
  }catch (err) {
    console.log(err);
  }
}

loadN();

const loadALL = async function(imgArr){
  const imgs = imgArr.map(async i => await createImage(i));
  const obj = await Promise.all(imgs)

  console.log(obj);
  obj.forEach(img=>img.classList.add('parallel'))
}
loadALL(['img/img-1.jpg','img/img-2.jpg'])
// createImage('img/img-1.jpg')
//   .then(img=>{
//   curImg=img;
//   console.log(`first`);
//   return wait(2)
// })
//   .then(()=>{
//     curImg.style.display='none';
//     return createImage('img/img-2.jpg')
//   })
//   .then((img)=>{
//     curImg = img;
//     console.log('second');
//     return wait(2);
//   })
//   .then(()=>{
//     curImg.style.display='none';
//     return createImage('img/img-3.jpg')
//   })
//   .then(img=>{
//     curImg = img;
//     console.log('third');
//     return wait(2);
//   }).then(()=>{
//   curImg.style.display='none';
//   }).catch(err=>console.log(err));