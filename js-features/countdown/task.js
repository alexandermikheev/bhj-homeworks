// let timer; 
// let x = Number(document.getElementById('timer').textContent);
// countdown(); 
// function countdown(){  
//   document.getElementById('timer').innerHTML = x;
//   x--; 
//   if (x<0){
//     clearTimeout(timer); 
//     document.getElementById('timer').innerHTML = "Вы победили в конкурсе!"
//     alert(`Вы победили в конкурсе!`)
//   }
//   else {
//     timer = setTimeout(countdown, 1000);
//   }
// }
// Задание #0

let timer = document.getElementById('timer');

setInterval(timerupdate,1000)

clock = 5

function timerupdate(){
  let hours = clock > 0 ? Math.floor(clock / 60 / 60) % 24 : 0;
  let minutes = clock > 0 ? Math.floor(clock  / 60) % 60 : 0;
  let seconds = clock > 0 ? clock  % 60 : 0;
  seconds = seconds < 10 ? "0" + seconds: seconds;
  minutes = minutes < 10 ? "0" + minutes: minutes;
  hours = hours < 10 ? "0" + hours: hours;
  timer.innerHTML =`${hours}:${minutes}:${seconds}`;
  clock--

  if(clock < 0){
    var oldLocation = location;
    location = "https://static-forum.gipsyteam.ru/post-88160-1489909878_thumb.jpg";
  }

}

//  Я конечно мог вставить зипник со своего серва с этой картинкой,
//  но это задание меня выбесило, прошу заценить мое отчание