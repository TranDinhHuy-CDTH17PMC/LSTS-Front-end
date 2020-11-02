var classNames = ["slide", "slide__new"];
var dotIndexs  = ["slide--index","slide--new"];
var slideIndex = [0, 0];



function plusSlides(n , no){
  showSlideNumber(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlideNumber(slideIndex[no] = n , no);
}

function showSlide(no) {
  var i = 0;
  var slides = document.getElementsByClassName(classNames[no]);
  var dots = document.getElementById(dotIndexs[no]).getElementsByClassName("fa-circle");


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex[no] ++;
  if (slideIndex[no] > slides.length) {
    slideIndex[no] = 1;
  }

  slides[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";
  setTimeout(showSlide, 3000, no);

}

function showSlideNumber(n, no) {
  var i = 0;
  var slides = document.getElementsByClassName(classNames[no]);
  var dots = document.getElementById(dotIndexs[no]).getElementsByClassName("fa-circle");
  console.log(slideIndex);
  if (n < 1) {
    slideIndex[no] = slides.length;
  }
  if (n > slides.length) {
    slideIndex[no] = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";

}
