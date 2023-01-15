const fontSize = Array.from(document.querySelectorAll('.font-size'));
const colorControl = document.querySelector('.book__control_color');
const color = Array.from(colorControl.querySelectorAll('.color'));
const backgroundControl = document.querySelector('.book__control_background');
const background = Array.from(backgroundControl.querySelectorAll('.color'));
const book = document.getElementById('book');
console.log(color.length);

fontSize.forEach((b) => {
  b.addEventListener('click', handler)
});

function handler(){
  event.preventDefault();
  fontSize.forEach(el => el.classList.remove('font-size_active'));
  this.classList.add('font-size_active');
  book.className = 'book';
  if (this.className == 'font-size font-size_small font-size_active'){
    book.classList.add('book_fs-small');  
  }
  if (this.className == 'font-size font-size_big font-size_active'){
    book.classList.add('book_fs-big');  
  }
}

color.forEach((b) => {
  b.addEventListener('click', handler1)
});

function handler1() {
  event.preventDefault();
  color.forEach(el => el.classList.remove('color_active'));
  this.classList.add('color_active');
  book.className = 'book';
  if (this.className == 'color color_gray color_active'){
    book.classList.add('book_color-gray'); 
    }
  if (this.className == 'color color_whitesmoke color_active'){
    book.classList.add('book_color-whitesmoke'); 
   }
}
 
background.forEach((b) => {
b.addEventListener('click', handler2)
});
 
function handler2() {
  event.preventDefault();
  background.forEach(el => el.classList.remove('color_active'));
  this.classList.add('color_active');
  book.className = 'book';
  if (this.className == 'color color_black color_active'){
    book.classList.add('book_bg-black');    
   }
  if (this.className == 'color color_gray color_active'){
    book.classList.add('book_bg-gray');  
   }
}