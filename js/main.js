//slider//
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:8000,
        // nav:true,
        tauchDrag:true,
        items:1,
        dots:false,
        navtext:false
    });
    });

//search bar//
var modal = document.getElementById('modalsrch');
var btn = document.getElementById('search');
var span = document.getElementsByClassName("closemodal") [0];
btn.onclick = function() {
    modal.style.display="block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('modalsrch');
var btna = document.getElementById('searchAd');
var span = document.getElementsByClassName("closemodal") [0];
btna.onclick = function() {
    modal.style.display="block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Modal join us//

var modalj = document.getElementById('modalJoin');
var btnj = document.getElementById('joinUs');
var spanj = document.getElementsByClassName("closemodal-join") [0];
btnj.onclick = function() {
    modalj.style.display="block";
}
spanj.onclick = function () {
    modalj.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalj) {
        modalj.style.display = "none";
    }
}

var modalj = document.getElementById('modalJoin');
var btnja = document.getElementById('joinUsAd');
var spanj = document.getElementsByClassName("closemodal-join") [0];
btnja.onclick = function() {
    modalj.style.display="block";
}
spanj.onclick = function () {
    modalj.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalj) {
        modalj.style.display = "none";
    }
}

//adapt nav//

var adpt = document.getElementById("adaptNav");
function change(y) {
y.classList.toggle("change");
if (y.classList.contains('change')) {
openNav();
} else {
closeNav();
}
}

function openNav() {
adpt.style.height = "100%";
adpt.style.display = "block";
adpt.style.transition = "2s";
}

function closeNav() {
adpt.style.height = "0";
adpt.style.display = 'none';
adpt.style.transition = '2';
}

var acc = document.getElementsByClassName("accordionNav");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("activeNav");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        panel.style.borderBottom = "none";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.borderBottom = "1px solid red";
      }
    });
  }

/*map */

function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {
        center: new google.maps.LatLng(50.085527, 14.425072),
        zoom: 20,
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

/*blog*/
//var BlogbtnCont = document.getElementById("blog-btn-cont");


//var btnsBlog = BlogbtnCont.getElementsByClassName("btn-num");


//for (var i = 0; i < btnsBlog.length; i++) {
 // btnsBlog[i].addEventListener("click", function() {
   // var current = document.getElementsByClassName("active-nav");
   // current[0].className = current[0].className.replace(" active-nav", "");
   // this.className += " active-nav";
 // });
//}