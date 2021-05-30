/*prodct-*/
document.querySelectorAll('.doet').forEach(function(dote) {
    dote.addEventListener('click', function(e) {
        document.querySelectorAll('.producte').forEach(function(producte) {
            producte.classList.remove('active');
        });
        document.querySelector(`.producte:nth-child(${[...dote.parentElement.querySelectorAll('.doet')].indexOf(dote) + 1})`).classList.add('active');
    });
});
/*prodct-*/
/*product -ofer*/
var slideIndex = 1;
showSlides(slideIndex);

var sliderTimer;

// Next/previous controls
function plusSlides(n) {
  clearTimeout(sliderTimer);
    showSlides(slideIndex = slideIndex + n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(sliderTimer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slidr');
    var dets = document.getElementsByClassName("dot");
    slideIndex = n;
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 

    }
    for (i = 0; i < dets.length; i++) {
      dets[i].className = dets[i].className.replace("active", "");

    }
      slides[slideIndex-1].style.display = "block"; 
      dets[slideIndex-1].className += " active";
  /*sliderTimer = setTimeout(function() {
    showSlides(slideIndex+1);
  }, 2000);*/
}
/*product-offer*/