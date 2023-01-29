const modal = window.modal_main;
const success = window.modal_success;
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const btn = Array.from(document.getElementsByClassName('btn'))

modal.classList.add("modal_active");

modalClose.forEach((b) => {
  b.addEventListener('click', handler)
});

btn.forEach((b) => {
  b.addEventListener('click', modalsuccess)
});

function handler(){
  this.closest(".modal").classList.remove("modal_active");
};

function modalsuccess(){
  success.classList.add("modal_active");
};