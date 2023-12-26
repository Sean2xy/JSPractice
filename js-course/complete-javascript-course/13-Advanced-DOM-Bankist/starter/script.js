'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(function(b) {
  b.addEventListener('click',openModal)
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click',function() {
  const s1coords = section1.getBoundingClientRect();

  // window.scrollTo(s1coords.left + window.pageXOffset,s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior:'smooth',
  // });

  section1.scrollIntoView({behavior:'smooth'})
});

// document.querySelectorAll('.nav__link').forEach(function(e) {
//   e.addEventListener('click',function(e) {
//     e.preventDefault();
//
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// });

//1: add event listener to common parent element
//2: determine what element originated the event
document.querySelector('.nav__links').addEventListener('click',function(e) {
  e.preventDefault();
  console.log(e.target);
  // match strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});

// crud html element
// console.log(document.documentElement);
// console.log(document.body);
// const header= document.querySelector('.header');
//
// const allSects = document.querySelectorAll('.section');
// console.log(allSects);// nodelist collection
//
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons); // html collection
//
// // insertAdjacentHTML
// const msg = document.createElement('div');
// msg.classList.add('cookie-message');
// // msg.textContent = 'we use cookied for improving.';
// msg.innerHTML = 'we use cookied for improving. <button class="btn btn--close-cookie">Go it</button>';
// //
// header.prepend(msg);
// header.append(msg);
// header.append(msg.cloneNode(true));
// before, after

// document.querySelector('.btn--close-cookie').addEventListener('click',function() {
//   msg.remove();
//   // msg.parentElement.removeChild(msg);
// })






//events
const h1 = document.querySelector('h1');
const alertH1 = function(e) {
  alert('zz');

  // h1.removeEventListener('mouseenter',alertH1);
}

h1.addEventListener('mouseenter',alertH1);
setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000);

const randomInt = (min,max)=>Math.floor(Math.random()*(max-min+1)+min);
const randomColor = ()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
console.log(randomColor());

// 点击子节点，这一事件会在bubbling阶段触发父节点
// handling the exact same event
document.querySelector('.nav__link').addEventListener('click',function(e) {
  this.style.backgroundColor=randomColor();
  
  // stop
  // e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click',function(e) {
  this.style.backgroundColor=randomColor();
},true);

// event delegation

// inline style
// msg.style.backgroundColor='orange';
// msg.style.width='120%';
//
// console.log(getComputedStyle(msg).width);
//
// msg.style.height = Number.parseFloat(getComputedStyle(msg).height,10)+40+'px';
//
// document.documentElement.style.setProperty('--color-primary','orange');
//
// // attributes
// const logo =document.querySelector('.nav__logo');
// // standard
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.src);
// logo.alt = 'sean';
// console.log(logo.getAttribute('src'));
// // console.log(logo.getAttribute('src'));
// // non standard
// //logo.getAttribute('youdefined')
// // setAttribute(k,v)
//
// // data attributes
// console.log(logo.dataset.versionNumber);

// class
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

