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
        var groupNames = $(`#${productId} .groupName`).html();
        var featureNames = $(`#${productId} .featureName2`).html();


        $("#productName").html(productNames);
        $("#productDesc").html(productDescs);
        $("#groupName").html(groupNames);
        $(".featureName").html(featureNames);
        $("#productimg").attr('src', productImgs);


        leftArrow.style.display = "block";
        addToCartSection.style.display = "block";

        var x = $("#productPage").html();
        $(".modal-body").html(x);
    });

}

model2();




//// add to cart 
let items = [];

function Item(productName, price, quantity, extra) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
    this.extra = extra;
    items.push(this);
}



let addToCartBtn = document.querySelector('addToCartBtn');
let productName = document.querySelector('productName');


addToCartBtn.addEventListener('click', handleAddToCart);


function handleAddToCart() {
    console.log(productName.textContent);

    let myItem = new Item(productName.textContent);

}








// var count = 0;
// var spano = document.querySelector('#spano');
// var products = [];

// function Products(name, price, quantity, extra) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.extra = extra;

//     this.total = this.quantity * this.price;
//     products.push(this);
// }

// for (var i = 0; i < products.length; i++) {
//     new Products(products[i]);
// }


// var addToCart = document.querySelectorAll('.productC');
// for (var i = 0; i < addToCart.length; i++) {
//     addToCart[i].addEventListener('click', handelAddToCart);
// }
// console.log('sssssss', addToCart);
// // var cartBtn = document.querySelector('.cartBtn');
// // cartBtn.addEventListener('click', handelAddToCart);

// getProduct();


// function handelAddToCart(event) {
//     getProduct();
//     event.preventDefault();
//     if (event.target.textContent == 'Add To Cart') {
//         // Reach the name of the product
//         console.log('click')
//         console.log(event);

//         var productName = event.path[2].children[0].children[1].textContent;
//         // console.log(productName);
//         // console.log(event.path[2].children[0].children[0].attributes[1].nodeValue);
//         // Reach the price of the product
//         // var productPrice = event.path[2].children[0].children[0].attributes[1].nodeValue;
//         // console.log(productPrice);
//         //Reach the quantity
//         var productQuantity = event.path[1].children[1].value;
//         if (productQuantity == 0) {
//             productQuantity = 1;
//         }
//         //creat p
//         // console.log(productQuantity);
//         new Products(productName, productPath, productPrice, productQuantity);
//         count += 1;
//         spano.textContent = `${count}`;
//         // console.log(products);
//         setProduct();
//     }
// }
// //send the selected Product to the local srorage
// function setProduct() {
//     var item = JSON.stringify(products);
//     localStorage.setItem('item', item);
//     var item2 = JSON.stringify(count);
//     localStorage.setItem('count', item2);
// }
// // get the item that stored in the local storage 
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