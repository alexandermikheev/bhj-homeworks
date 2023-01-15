const element = document.getElementById('cookie');
const screenCount = document.getElementById('clicker__counter');
const average = document.getElementById('average__counter');
let count = Number(element.textContent);
let data1 = new Date();
let sum = 0;
element.onclick = function() {
  let data = new Date();
  count ++;
  screenCount.textContent = count;
  if (count%2 == 0) {element.width = 200} else {element.width = 180};
  sum += (data - data1)/1000 
  average.textContent = (sum/count).toFixed(2);
  data1 = data;
};