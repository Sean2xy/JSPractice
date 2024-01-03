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
const whereAMI = function(lat,lng) {
  fetch(`https://geocode.xyz/${lat},${lng}geoit=json`)
    .then(response=>{
      if(!response.ok){
        throw new Error(`problem with ${response.status}`);
      }
      return response.json()
    })
    .then(data=>{
      console.log(`You are in${data.city},${data.country}`)

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res=>{
      if(!res.ok) throw new Error('country')

      return res.json()
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
whereAMI(52.508, 13.381 )
whereAMI(19.037, 72.873)
whereAMI(-33.933, 18.474 )