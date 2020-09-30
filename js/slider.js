var slideIndex = 1;
showSlide(slideIndex);


function plusSlides(n){
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}
function showSlide(n) {
  var i = 0;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("fa-circle");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slideIndex.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  
}
