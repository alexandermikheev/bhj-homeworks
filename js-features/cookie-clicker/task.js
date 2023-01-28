const element = document.getElementById('cookie');
const screenCount = document.getElementById('clicker__counter');

let average = document.createElement('div');
average.id ="average__counter"
average.setAttribute("style", "margin-top: 30px");

let clickerStatus = document.getElementById('clicker__status');

clickerStatus.append(average)


let count = Number(element.textContent);
let data1 = new Date();
let sum = 0;
element.onclick = function() {
  let data = new Date();
  count ++;
  screenCount.textContent = count;
  if (count %2 == 0) {element.width = 200} else {element.width = 180};
  sum += (data - data1)/1000 
  average.textContent = `Скорость клика ${(sum/count).toFixed(2)}`;
  data1 = data;
};