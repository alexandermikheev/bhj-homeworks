const list = document.getElementById('tasks__list');
let tasksArr = new Array();
console.log(localStorage.getItem('tasks'));

const local = JSON.parse(localStorage.getItem('tasks'));
if (local) local.forEach((el) =>{
  list.innerHTML += `<div class="task"><div class="task__title">${el}</div><a href="#" class="task__remove">&times;</a></div>`;
  tasksArr.push(el);
});

document.getElementById('tasks__add').onclick = function(event){
  event.preventDefault();
  const task = document.getElementById('task__input');
  if (task.value == '') return;
  tasksArr.push(task.value);
  list.innerHTML += `<div class="task"><div class="task__title">${task.value}</div><a href="#" class="task__remove">&times;</a></div>`;
  task.value = '';
  localStorage.setItem('tasks', JSON.stringify(tasksArr));
}

list.onclick = function(event) {
  let target = event.target;
  if (!target.classList.contains('task__remove')) return;
  const text1 = target.closest('.task').textContent;
  const text = text1.slice(0,text1.length-1)
  const index = tasksArr.indexOf(text);
  tasksArr.splice(index,1);
  localStorage.setItem('tasks', JSON.stringify(tasksArr));
  target.closest('.task').remove();
}