'use strict';

const overLay = document.querySelector('.overlay');
const modalsOpen = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closedModals = document.querySelector('.close-modal');

const closedModal = function() {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

const openModal = function() {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

for(let i=0;i<modalsOpen.length;i++){
  modalsOpen[i].addEventListener('click',openModal);
}

closedModals.addEventListener('click',closedModal);
overLay.addEventListener('click',closedModal);

// keyboard events -> global event
document.addEventListener('keydown',function(e) {
  console.log(e);
  if(e.key==='Escape' && !modal.classList.contains('hidden')) {
    closedModal();
  }
})

