const cases = Array.from(document.querySelectorAll('.rotator__case'));
let s = 0;
let timerId = setInterval(() => {
  cases[s].classList.remove('rotator__case_active');
  s += 1;
  if (s == cases.length) {s = 0};
  cases[s].classList.add('rotator__case_active');
}, 1000);