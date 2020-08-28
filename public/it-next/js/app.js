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
    $(".deliveryFees").hide();
    viewOrder.style.display = "none";

})


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
        $("#productPriceParagraph").html(productPrices);

        $("#groupName").html(groupNames);
        $(".featureName").html(featureNames);
        $("#productimg").attr('src', productImgs);


        leftArrow.style.display = "block";
        addToCartSection.style.display = "block";

        var x = $("#productPage").html();
        $(".modal-body").html(x);

        $("#viewBascket").hide();
        addToCartBtn.style.display = "block";
        let decrease = document.querySelector("#decrease1");
        decrease.addEventListener("click", decreaseValue);
        let increase = document.querySelector("#increase1");
        increase.addEventListener("click", increaseValue);

    });

}

model2();




//// add to cart 
let products = [];
var count = 0;

function Item(productName, price, quantity, extra, extraPrice, deliveryFees) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
    this.extra = extra;
    this.extraPrice = extraPrice;
    this.deliveryFees = deliveryFees;
    products.push(this);
}


let viewBascket = document.querySelector('#viewBascket');
let addToCartBtn = document.querySelector('#addToCartBtn');

$("#viewCart").hide();


addToCartBtn.addEventListener('click', handleAddToCart);

let productNameHeader = document.querySelector('#productNameHeader');
let productPriceParagraph = document.querySelector('#productPriceParagraph');
let deliveryFees = document.querySelector('.deliveryFees');
let quantity1 = document.querySelector("#number");

$(".deliveryFees").hide();

var spano = document.querySelector('.spano');
var spano1 = document.querySelector('.spano1');

function handleAddToCart(event) {
    console.log(event);

    var productNames = productNameHeader.textContent.trim();
    var productPrices = productPriceParagraph.textContent;
    var deliveryFeesS = deliveryFees.textContent;

    /// to  get the checked extra feature and it's price 
    var priceArray = [];
    var featureArray = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        featureArray.push(checkboxes[i].value)
        priceArray.push(checkboxes[i].className)

    }

    console.log(featureArray);
    console.log(priceArray);
    console.log(productNames);
    // console.log(productPrices);
    console.log(deliveryFeesS);


    let mealsNum = $("#number").attr("value");
    productPrices = productPrices.split(":")[1] * mealsNum;

    new Item(productNames, productPrices, mealsNum, featureArray, priceArray, deliveryFeesS);

    count += 1;
    spano.textContent = `${count}`;
    spano1.textContent = `${count}`;


    $(".modal-body").html(goBack);
    addToCartBtn.style.display = "none";
    viewBascket.style.display = "block";
    leftArrow.style.display = "none";
    deliveryFees.style.display = "none";
    viewOrder.style.display = "none";
    $(".deliveryFees").hide();
    $("#addToCartSection").hide();

    model2();

}



$("#viewOrder").hide();
let viewOrder = document.querySelector('#viewOrder');


let viewCartBtn = document.querySelector('#viewCartBtn');
viewCartBtn.addEventListener('click', handleViewCart);

function handleViewCart(event) {


    $("#viewCart").empty();
    let subTotal = 0;
    let productsSum = 0;
    let extraSum = 0;
    let total = 0;

    for (var i = 0; i < products.length; i++) {

        var head1 = document.createElement("h1");
        head1.textContent = products[i].productName;
        $("#viewCart").append(head1);

        var quant = document.createElement("span");
        quant.setAttribute("class", "quant");
        quant.textContent = `Quantity: ${products[i].quantity}`;
        $("#viewCart").append(quant);

        var paragraph1 = document.createElement("p");
        productsSum += products[i].price;
        paragraph1.setAttribute("class", "pri");
        paragraph1.textContent = `Price: ${products[i].price}`;
        $("#viewCart").append(paragraph1);

        products[i].extra.forEach((pro) => {
            var paragraph2 = document.createElement("li");
            paragraph2.textContent = pro;
            paragraph2.style.listStyle = "none";
            $("#viewCart").append(paragraph2);
        });

        products[i].extraPrice.forEach((pri) => {
            let extraSumPrice = parseInt(pri.split(' ')[1]) * products[i].quantity;
            extraSum += extraSumPrice;
            console.log('extrasum', extraSumPrice);
            var paragraph3 = document.createElement("p");
            paragraph3.textContent = `+ ${extraSumPrice} RS`;
            $("#viewCart").append(paragraph3);
        });

        var button1 = document.createElement('button');
        button1.setAttribute('class', 'removeProduct');
        button1.id = i;
        button1.textContent = `Remove`;
        $("#viewCart").append(button1);


    }

    let removeProduct = document.querySelector('.removeProduct');
    removeProduct.addEventListener('click', handleRemoveProduct);

    function handleRemoveProduct(event) {
        console.log('clickkkkkk');

        // if (event.target.textContent === 'Remove') {
        //     products.splice(event.target.id, 1);
        //     console.log(event.target.id);

        // }

        var deleteId;

        if (event.target.textContent === 'Remove') {
            deleteId = event.target.id;
            // contT = 0;
            products.splice(deleteId, 1);

        }
    }




    subTotal = productsSum + extraSum;
    console.log('subTotal :', subTotal);

    var subTotalText = document.createElement('p');
    subTotalText.textContent = `Subtotal ${subTotal}`;
    $("#viewCart").append(subTotalText);


    var paragraph4 = document.createElement('p');
    paragraph4.textContent = products[products.length - 1].deliveryFees;
    $("#viewCart").append(paragraph4);



    let delevFeesTotal = parseInt(products[0].deliveryFees.trim().split(' ')[1]);

    total = subTotal + delevFeesTotal;
    console.log('delevFeesTotal =', delevFeesTotal)
    console.log('total =', total)

    var totalprice = document.createElement('p');
    totalprice.textContent = `Total ${total}`;
    $("#viewCart").append(totalprice);


    var x = $("#viewCart").html();
    $(".modal-body").html(x);
    $("#viewBascket").hide();
    leftArrow.style.display = "block";
    viewOrder.style.display = "block";


}





function decreaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 1 : value;
    value <= 1 ? (value = 1) : "";
    value--;
    count--;
    document.getElementById("number").value = value;
    document.getElementById("number").setAttribute("value", value);
    console.log("dec", $("#number").attr("value"));
    $("#quantityDiv").html($("#number").attr("value"));
    $("#quantityDiv").hide();
}

$("#quantityDiv").hide();

function increaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    count++;
    document.getElementById("number").value = value;
    document.getElementById("number").setAttribute("value", value);
    console.log("inc", $("#number").attr("value"));
    $("#quantityDiv").html($("#number").attr("value"));
    $("#quantityDiv").hide();
}