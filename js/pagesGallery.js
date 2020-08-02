/*women gallery*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var womSlides = document.getElementsByClassName("womSlide");
  var womDots = document.getElementsByClassName("womDemo");
  var womCaptionText = document.getElementById("womCaption");
  if (n > womSlides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = womSlides.length}
  for (i = 0; i < womSlides.length; i++) {
    womSlides[i].style.display = "none";
  }
  for (i = 0; i < womDots.length; i++) {
    womDots[i].className = womDots[i].className.replace(" active", "");
  }
  womSlides[slideIndex-1].style.display = "block";
  womDots[slideIndex-1].className += " active";
  womCaptionText.innerHTML = womDots[slideIndex-1].alt;
}

/*men gallery*/

var slideIndexMen = 1;
showSlidesMen(slideIndexMen);

function plusSlidesMen(x) {
  showSlidesMen(slideIndexMen += x);
}

function currentSlideMen(x) {
  showSlidesMen(slideIndexMen = x);
}

function showSlidesMen(x) {
  var v;
  var menSlides = document.getElementsByClassName("menSlide");
  var menDots = document.getElementsByClassName("menDemo");
  var menCaptionText = document.getElementById("menCaption");
  if (x > menSlides.length) {slideIndexMen = 1}
  if (x < 1) {slideIndexMen = menSlides.length}
  for (v = 0; v < menSlides.length; v++) {
    menSlides[v].style.display = "none";
  }
  for (v = 0; v < menDots.length; v++) {
    menDots[v].className = menDots[v].className.replace(" active", "");
  }
  menSlides[slideIndexMen-1].style.display = "block";
  menDots[slideIndexMen-1].className += " active";
  menCaptionText.innerHTML = menDots[slideIndexMen-1].alt;
}

/*massage gallery*/

var slideIndexMas = 1;
showSlidesMas(slideIndexMas);

function plusSlidesMas(y) {
  showSlidesMas(slideIndexMas += y);
}

function currentSlideMas(y) {
  showSlidesMas(slideIndexMas = y);
}

function showSlidesMas(y) {
  var p;
  var masSlides = document.getElementsByClassName("masSlide");
  var masDots = document.getElementsByClassName("masDemo");
  var masCaptionText = document.getElementById("masCaption");
  if (y > masSlides.length) {slideIndexMas = 1}
  if (y < 1) {slideIndexMas = masSlides.length}
  for (p = 0; p < masSlides.length; p++) {
    masSlides[p].style.display = "none";
  }
  for (p = 0; p < masDots.length; p++) {
    masDots[p].className = masDots[p].className.replace(" active", "");
  }
  masSlides[slideIndexMas-1].style.display = "block";
  masDots[slideIndexMas-1].className += " active";
  masCaptionText.innerHTML = masDots[slideIndexMas-1].alt;
}

/*hockey gallery*/

var slideIndexHock = 1;
showSlidesHock(slideIndexHock);

function plusSlidesHock(z) {
  showSlidesHock(slideIndexHock += z);
}

function currentSlideHock(z) {
  showSlidesHock(slideIndexHock = z);
}

function showSlidesHock(z) {
  var b;
  var hockSlides = document.getElementsByClassName("hockSlide");
  var hockDots = document.getElementsByClassName("hockDemo");
  var hockCaptionText = document.getElementById("hockCaption");
  if (z > hockSlides.length) {slideIndexHock = 1}
  if (z < 1) {slideIndexHock = hockSlides.length}
  for (b = 0; b < hockSlides.length; b++) {
    hockSlides[b].style.display = "none";
  }
  for (b = 0; b < hockDots.length; b++) {
    hockDots[b].className = hockDots[b].className.replace(" active", "");
  }
  hockSlides[slideIndexHock-1].style.display = "block";
  hockDots[slideIndexHock-1].className += " active";
  hockCaptionText.innerHTML = hockDots[slideIndexHock-1].alt;
}