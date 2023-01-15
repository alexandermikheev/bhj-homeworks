const local = JSON.parse(localStorage.getItem('id'));
const welcome = document.getElementById('welcome');

if (local && local !=""){
    welcome.classList.add('welcome_active');
    welcome.textContent += local;
} else {
  document.getElementById('signin').classList.add('signin_active');
};

const form = document.getElementById('signin__form');

document.getElementById('signout__btn').onclick = function(){
  localStorage.removeItem('id');
  location.reload();
};

form.addEventListener('submit', (e) => {
   let formData = new FormData(form);
   const xhr = new XMLHttpRequest();
   const loginData = document.getElementsByClassName('control');
   
   e.preventDefault();
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php',true, loginData[0].value, loginData[1].value);
   xhr.send(formData);
   xhr.onload = () => {
     //console.log(xhr.responseText);
     response = JSON.parse(xhr.responseText);
     if (response.success){
       welcome.classList.add('welcome_active');
       welcome.textContent = `Добро пожаловать, пользователь #${response.user_id}`;
       localStorage.setItem('id', response.user_id);
       document.getElementById('signin').classList.remove('signin_active');
       document.getElementById('signout__btn').classList.add('signin_active');
    } else {
      alert('Неверный логин/пароль');
    };
    form.reset();
   }; 
}); 