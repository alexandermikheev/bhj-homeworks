const sideText = [...document.getElementsByClassName('chat-widget__side')];
const widget = document.getElementsByClassName('chat-widget');
const inputLine = document.getElementById('chat-widget__input');
const messenger = document.getElementById('chat-widget__messages');
let time = function(){
  return `${new Date().getHours()}:${new Date().getMinutes()}`
  };
let timer;
inputLine.addEventListener('change', onInput);
const answer = [
  'Чего надо?',
  'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
  'К сожалению все операторы заняты. Не звоните нам больше',
  'Если вы хотите послать нас одни раз нажмите один. Если вы хотите послать нас два раза нажмите два',
  'Добрый день, до свидания!'
];

function robotAnswer(){
  let rand = Math.round(0 - 0.5 + Math.random() * (answer.length));
  messenger.innerHTML += `<div class="message__time">${time()}</div><div class="message__text">${answer[rand]}</div></div>`;
  messenger.scrollIntoView(false);
}

sideText.forEach((b) => {
  b.addEventListener('click', e => {
    widget[0].classList.add('chat-widget_active');
    timer = setTimeout(robotAnswer, 30000);
  });
});

function onInput(){
  clearTimeout(timer);
  messenger.innerHTML += `<div class="message message_client"><div class="message__time">${time()}</div><div class="message__text">${inputLine.value}</div></div>`;
  messenger.scrollIntoView(false);
  inputLine.value = '';
  robotAnswer();
  timer = setTimeout(robotAnswer, 30000);
};