const start = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
const btn = document.querySelectorAll('.btn');

const close = Array.from(document.getElementsByClassName(' modal__close_times'));

start.className = 'modal modal_active';

close.forEach((b) => {
  b.addEventListener('click', handler)
})

function handler(){
  this.closest(".modal").classList.remove("modal_active");
}

btn.forEach((b) => {
  b.addEventListener('click', clicker)
})

function clicker(){
  start.classList.remove('modal_active');
  success.classList.toggle('modal_active');
}