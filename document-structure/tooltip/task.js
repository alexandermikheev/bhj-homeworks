document.onclick = function(event) {
    event.preventDefault();
    const active = document.querySelector('.tooltip_active');
    if (active) active.classList.remove('tooltip_active');
  
    let target = event.target;
    if (!target.classList.contains('has-tooltip')) return;
    
    target.insertAdjacentHTML('afterend', `<div class = "tooltip tooltip_active">${target.title}</div`);
  
    const newAcitve = document.querySelector('.tooltip_active');
  
    let coords = target.getBoundingClientRect();
  
    let left = coords.left + (target.offsetWidth - newAcitve.offsetWidth) / 2;
    if (left < 0) left = 0; // не заезжать за левый край окна
  
    let top = coords.top - newAcitve.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + target.offsetHeight + 5;
      } // если подсказка не помещается сверху, то отображать её снизу
  
    newAcitve.style.left = left + 'px';
    newAcitve.style.top = top + 'px';
  }