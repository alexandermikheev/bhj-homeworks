let cartSet = new Set;
let saveArr = new Array;
let cart = document.querySelector('.cart__products');

const local = JSON.parse(localStorage.getItem ('cart') );
if (local && local.length > 0) {
  document.querySelector('.cart').classList.add('cart__active'); 
  local.forEach((el) => {
   cart.innerHTML +=`<div class="cart__product" data-id=${el.id}><img class="cart__product-image" src="${el.src}"><div class="cart__product-count">${el.count}</div></div>`;
   saveArr.push(el);
   cartSet.add(el.id);
  });
};

const plus = [...document.querySelectorAll('.product__quantity-control')];
const productAdd = [...document.querySelectorAll('.product__add')];

plus.forEach((el) => el.addEventListener('click', pluser));
productAdd.forEach((el) => el.addEventListener('click', adder));

function pluser(){
  let parent = this.closest('.product__quantity-controls');
  let quantaty = parent.querySelector('.product__quantity-value');
  let number = Number(quantaty.textContent);
  if (this.classList.contains('product__quantity-control_inc')) {
    quantaty.textContent = String(number + 1);   
  } else {
    if (number == 1) return;
    quantaty.textContent = String(number - 1);
  }
}

function adder(){
  let product = this.closest('.product');
  let id = product.dataset.id;
  let count = product.querySelector('.product__quantity-value').textContent;
  let image = product.querySelector('img').src;

  if (cartSet.has(id)) {
    let cartProduct = [...cart.querySelectorAll('.cart__product')];
    cartProduct.forEach((el) => {
      if (el.dataset.id == id) {
        let cartCount = el.querySelector('.cart__product-count');
        cartCount.textContent = Number(count) + Number(cartCount.textContent);
      }
    });

    for (let i of saveArr) {
      if (i.id == id) i.count += Number(count);
    }

  } else {
    cart.innerHTML +=`<div class="cart__product" data-id=${id}><img class="cart__product-image" src="${image}"><div class="cart__product-count">${count}</div></div>`;
  
    let save = {
      'id': id,
      'src': image,
      'count': Number(count)
    }

    saveArr.push(save);
    
    if (cartSet.size == 0) document.querySelector('.cart').classList.add('cart__active');
    cartSet.add(id);
  }
  localStorage.setItem('cart', JSON.stringify(saveArr));
}

cart.onclick = function(event) {
  let target = event.target;
  if (target.classList.contains('cart__products')) return;
  const id = String(target.closest('.cart__product').dataset.id);

  if (target.classList.contains('cart__product-count') && target.textContent != 1) {
    target.textContent --;
    for (let i of saveArr){
      if (i.id == id) i.count--;
    }
  } else {
    for (let i in saveArr){
      if (saveArr[i].id == id) saveArr.splice(i,1);
    }
    target.closest('.cart__product').remove();
    cartSet.delete(id);

    if (cartSet.size == 0) document.querySelector('.cart').classList.remove('cart__active');
  }
  localStorage.setItem('cart', JSON.stringify(saveArr));
}