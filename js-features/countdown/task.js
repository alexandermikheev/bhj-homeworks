const p = document.getElementById('timer');
let arrStr = p.textContent.split(':');
let arr = arrStr.map(item=> Number(item));
let sec = arr[0]*3600 + arr[1]*60 + arr[2]
let zero = (str) => {if (str.length == 1){return '0'+str} else{return str}};

function ret(a){
  let hh = Math.floor(a/3600);
  let mm = Math.floor((a-hh*3600)/60);
  let ss = a - hh*3600 - mm*60;
  return zero(String(hh))+':'+zero(String(mm))+':'+zero(String(ss));
}

let timerId = setInterval(() => {
  p.textContent = ret(sec - 1);
  sec -= 1;
  if (sec == 0) {
    clearInterval(timerId);
    location ='https://aldebaran.ru/author/evgenevich_borisov_konstantin/kniga_kak_horoshemu_razrabotchiku_ne_stat_ploh/download.fb2.zip';

    //alert("You are win!");
    }
  }, 1000);