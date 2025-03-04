let star = document.getElementById('star');
let meteor = document.getElementById('meteor');
let ufo = document.getElementById('ufo');
let teks = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  star.style.left = value * 0.25 + 'px';
  ufo.style.top = value * -3.5 + 'px';
  text.style.marginBottom = value * 1 + 'px';
  button.style.marginBottom = value * 1 + 'px';
})