document.querySelector('.interests_main').onchange = 
function(event) {
  const parent = event.target.closest('.interest');
  //let intCheck = [...parent.querySelectorAll('.interest__check')];
  //intCheck.forEach((el) => el.checked ? el.checked = false : el.checked = true);
  
  const intCheck = parent.querySelectorAll('.interest__check');

  for (i = 1; i< intCheck.length; i++){
    if (intCheck[i].checked) {
      intCheck[i].checked = false;
     } else {
      intCheck[i].checked = true;
    }
  }
  
  const grandParent = parent.parentNode.closest('.interest');
  if (grandParent){
    const check = [...grandParent.querySelectorAll('.interest__check')];
    const grand = check[0];
    check.splice(0,1);

    if (check.every(isTrue)) {
      grand.indeterminate = false;
      grand.checked = true;
    } else if (check.every(isFalse)) {
      grand.indeterminate = false;
      grand.checked = false;
    } else {
      grand.indeterminate = true;
    }

  }
}  

function isTrue(el){
  return el.checked;
}

function isFalse(el){
  if (el.checked == false) return true;
  return false;
}