const press = document.querySelector('.dropdown__value');
const drop = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
press.onclick = function(){
    drop.classList.toggle('dropdown__list_active');
}

items.forEach((b) => {
    b.addEventListener('click', handler)
})
function handler(){
    event.preventDefault();
    drop.classList.remove('dropdown__list_active');
    press.textContent = this.textContent;
}