'use strict';

// $(function() {
function gett() {


    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });


};

gett();


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}




///// module 

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}



$("#productPage").hide();
$("#leftArrow").hide();
$(".featureName2").hide();
// $("#chartIcon").hide();

var goBack = $(".modal-body").html();

var leftArrow = document.getElementById("leftArrow");


$("#leftArrow").click(function() {
    console.log('arrow')
    modal.style.display = "block";
    // var x = $(".modal-body").html();
    // $(".modal-body").html(goBack);
    leftArrow.style.display = "none";

})


$(".theProduct").click(function(event) {
    console.log("event", event.target.id);
    var productId = event.target.id;

    var productImgs = $(`#${productId} .productImg`).attr('src');
    var productNames = $(`#${productId} .productName`).html();
    var productDescs = $(`#${productId} .productDesc`).html();
    var featureNames = $(`#${productId} .featureName2`).html();


    $("#productName").html(productNames);
    $("#productDesc").html(productDescs);
    $(".featureName").html(featureNames);

    $("#productimg").attr('src', productImgs);


    leftArrow.style.display = "block";
    var x = $("#productPage").html();
    $(".modal-body").html(x);
});