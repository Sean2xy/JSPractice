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

//tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

// event delegiation
tabContainer.addEventListener('click',function(e) {
  const clicked = e.target.closest('.operations__tab');

  if(!clicked) return;

  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  tabContent.forEach(e=>e.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

  //selected
})

const nav = document.querySelector('.nav');

const mouseFade =  function(e) {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach( e => {
      if(e!==link) e.style.opacity=this;
    });
    logo.style.opacity=this;
  }
}
nav.addEventListener('mouseover',mouseFade.bind(0.5))
nav.addEventListener('mouseout',mouseFade.bind(1))

// // sticky navigation
// const iniital = section1.getBoundingClientRect();;
// window.addEventListener('scroll',function(e ) {
//   if(window.scrollY>iniital.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

// intersection observer API
const stickyNav = function(entries,observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
// const options = {
//   root:null,
//   threshold:0.1,
// };
// const observer = new IntersectionObserver(obsCallback,options);
// observer.observe(section1)

const header = document.querySelector('.header');
const navHight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav,{root:null,threshold:0,rootMargin:`-${navHight}px`,});
headerObserver.observe(header);

// reveal section
const allSes = document.querySelectorAll('.section')
const revealSection = function(entries,observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
}
const sectionObser = new IntersectionObserver(revealSection,{root:null,threshold:0.15})
allSes.forEach(function(s) {
  sectionObser.observe(s);
  s.classList.add('section--hidden');
})

// lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function(entries,observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;

  // replace src with data-scr
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load',function() {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg,{root:null,threshold:0.15,rootMargin:'200px'});
imgTargets.forEach(img=>imgObserver.observe(img));

// slider fun
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

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
// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.backgroundColor='white';
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.backgroundColor='red';
//
// // sublings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
//
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(e) {
//   if(e!==h1) e.style.transform='scale(0.5)';
// })


// const alertH1 = function(e) {
//   alert('zz');
//
//   // h1.removeEventListener('mouseenter',alertH1);
// }
//
// h1.addEventListener('mouseenter',alertH1);
// setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000);
//
// const randomInt = (min,max)=>Math.floor(Math.random()*(max-min+1)+min);
// const randomColor = ()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randomColor());
//
// // 点击子节点，这一事件会在bubbling阶段触发父节点
// // handling the exact same event
// document.querySelector('.nav__link').addEventListener('click',function(e) {
//   this.style.backgroundColor=randomColor();
//
//   // stop
//   // e.stopPropagation();
// })
//
// document.querySelector('.nav__links').addEventListener('click',function(e) {
//   this.style.backgroundColor=randomColor();
// },true);

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

