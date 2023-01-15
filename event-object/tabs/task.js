const pages = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));
page = 0;

pages.forEach((b) => {
  b.addEventListener('click', clicker)
});

function clicker(){
  pages[page].classList.remove('tab_active');
  content[page].classList.remove('tab__content_active');
  this.classList.add('tab_active');
  page = pages.findIndex(it => it ==this);
  content[page].classList.add('tab__content_active');
}