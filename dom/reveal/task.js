//event.preventDefault()
const reveal = Array.from(document.querySelectorAll('.reveal'));
//let coord = reveal.map(el=>el.getBoundingClientRect());

window.addEventListener('scroll', function() {
  //let scrolling = window.pageYOffset;
  let scroll = window.innerHeight;
  let coord = reveal.map(el=>el.getBoundingClientRect());

  for (i=0;i<reveal.length;i++){
    if (coord[i].top - 50 < scroll) {
    reveal[i].classList.add('reveal_active');
    }
  }
});