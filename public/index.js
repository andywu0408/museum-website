var slideIndex = 1;
var curVisits = 3622705;
document.getElementById("visits").innerHTML = curVisits.toLocaleString();

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log(`slide${n}`)
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(function () {
    curVisits--;
    document.getElementById("visits").innerHTML = curVisits.toLocaleString();
    if (curVisits < 0) {
        document.getElementById("visits").innerHTML = "EXPIRED";
    }
}, 1000);