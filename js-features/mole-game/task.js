const holes = document.querySelectorAll('.hole')
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let bach = 0;
let oops = 0;

for (i = 0; i < holes.length; i++){
  holes[i].onclick = game;
}

function game(){
  let kill = this.classList.contains('hole_has-mole');
  if(kill){
    bach += 1;
    dead.textContent = bach;
    } else {
      oops += 1;
      lost.textContent = oops;
    }
  if (bach == 10){
    alert('Ура, вы победили!');
    gameOver()
  }
  if (oops == 10){
    alert('Кроты победили. Надо больше тренироваться...');
    gameOver()
  }
}

function gameOver(){
  bach = 0;
  dead.textContent = bach;
  oops = 0;
  lost.textContent = oops;
}