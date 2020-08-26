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

$(".groupName").hide();
$(".featureName2").hide();
$("#addToCartSection").hide();


var goBack = $(".modal-body").html();

var addToCartSection = document.getElementById("addToCartSection");
var leftArrow = document.getElementById("leftArrow");


$("#leftArrow").click(function() {
    $(".modal-body").html(goBack);
    leftArrow.style.display = "none";
    addToCartSection.style.display = "none";

    model2();
    viewBascket.style.display = "block";

})


// var clickDiv = document.querySelectorAll('.theProduct');
// for (var i = 0; i < clickDiv.length; i++) {
//     clickDiv[i].addEventListener('click', model2);
// }

function model2() {
    $(".theProduct").click(function(event) {
        event.preventDefault();
        console.log("event", event.target.id);
        var productId = event.target.id;

        var productImgs = $(`#${productId} .productImg`).attr('src');

        var productNames = $(`#${productId} .productName`).html();
        var productDescs = $(`#${productId} .productDesc`).html();
        var productPrices = $(`#${productId} .productPrice`).html();

        var groupNames = $(`#${productId} .groupName`).html();
        var featureNames = $(`#${productId} .featureName2`).html();


        $("#productNameHeader").html(productNames);
        $("#productDesc").html(productDescs);
        $("#productPriceParagraph").html(`Price: ${productPrices}`);

        $("#groupName").html(groupNames);
        $(".featureName").html(featureNames);
        $("#productimg").attr('src', productImgs);


        leftArrow.style.display = "block";
        addToCartSection.style.display = "block";

        var x = $("#productPage").html();
        $(".modal-body").html(x);

        $("#viewBascket").hide();
        addToCartBtn.style.display = "block";


    });

}

model2();




//// add to cart 
let products = [];
var count = 0;

function Item(productName, price, quantity, extra) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
    this.extra = extra;
    products.push(this);
}



let viewBascket = document.querySelector('#viewBascket');
let addToCartBtn = document.querySelector('#addToCartBtn');
let viewCartBtn = document.querySelector('#viewCartBtn');

$("#viewCart").hide();


addToCartBtn.addEventListener('click', handleAddToCart);

let productNameHeader = document.querySelector('#productNameHeader');
let productPriceParagraph = document.querySelector('#productPriceParagraph');
let featureName = document.querySelector('.featureName');


var spano = document.querySelector('.spano');
var spano1 = document.querySelector('.spano1');


function handleAddToCart(event) {
    console.log(event);

    let productNames = productNameHeader.textContent.trim();
    let productPrices = productPriceParagraph.textContent;
    let featureNames = featureName.textContent;


    console.log(productNames);
    console.log(productPrices);
    console.log(featureNames);

    new Item(productNames, productPrices, featureNames);

    count += 1;
    spano.textContent = `${count}`;
    spano1.textContent = `${count}`;


    $(".modal-body").html(goBack);
    addToCartBtn.style.display = "none";
    viewBascket.style.display = "block";
    leftArrow.style.display = "none";

    model2();

}



viewCartBtn.addEventListener('click', handleViewCart);

function handleViewCart() {
    console.log('viewwwwww');
    $("#viewCart").html(`<h1 class="productName3"></h1>`);
    $("#viewCart").html(`<p class="productPrice3"></p>`);
    $("#viewCart").html(`<form><label class="featureName3"></label></form>`);



    for (var i = 0; i < products.length; i++) {

        var head1 = document.createElement('h1');
        head1.textContent = products[i].productName;
        $("#viewCart").append(head1);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = products[i].price;
        $("#viewCart").append(paragraph1);

        var paragraph2 = document.createElement('p');
        paragraph2.textContent = products[i].extra;
        $("#viewCart").append(paragraph2);
    }



    var x = $("#viewCart").html();
    $(".modal-body").html(x);
    $("#viewBascket").hide();
    leftArrow.style.display = "block";

}


// getProduct();

// send the selected Product to the local srorage
// function setProduct() {
//     var item = JSON.stringify(products);
//     localStorage.setItem('item', item);
//     var item2 = JSON.stringify(count);
//     localStorage.setItem('count', item2);
// }

// function getProduct() {
//     var getproduct = localStorage.getItem('item');
//     if (getproduct) {
//         products = JSON.parse(getproduct);
//     }
//     var getCount = localStorage.getItem('count');
//     if (getCount) {
//         count = JSON.parse(getCount);
//         spano.textContent = `${count}`;
//     }
// }