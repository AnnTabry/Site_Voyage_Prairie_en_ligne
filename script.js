//SLIDESHOW ::::::::::::::::::::::::::::::::::::::::::::::::::

// déclarations des variables :

var slides = document.querySelectorAll('#slides .slide'); /* en reference  à notre id slides (ul) et notre classe slide (li)*/
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2500); /*toutes les 2,5s la fonction est appelée*/


// création du slideshow automatique avec une fonction

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length; /*incrémentation*/
  slides[currentSlide].className = 'slide showing';
}
