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
    viewBascket.style.display = "block";
    addToCartSection.style.display = "none";

    model2();
    $(".deliveryFees").hide();
    viewOrder.style.display = "none";

})
var count = 1;


function model2() {
    $(".theProduct").click(function(event) {
        count = 1;
        spano.textContent = `${count}`;


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
$("#nothingDiv").hide();


$(".deliveryFees").hide();

var spano = document.querySelector('.spano');
var spano1 = document.querySelector('.spano1');

let alQuantity = 0;

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
    console.log(productPrices);
    console.log(deliveryFeesS);


    let mealsNum = $("#number").attr("value");
    productPrices = productPrices.split(":")[1] * mealsNum;

    new Item(productNames, productPrices, mealsNum, featureArray, priceArray, deliveryFeesS);

    products.forEach(itm => {
        alQuantity += parseInt(itm.quantity);
        console.log(itm);
        console.log(alQuantity);

    })

    // count += 1;
    // spano.textContent = `${count}`;
    spano1.textContent = `${alQuantity}`;


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


let minOrderClass = document.querySelector('.minOrd');
let reviewCartBtn = document.querySelector('#reviewCartBtn');
let minOrder = parseInt(minOrderClass.textContent.trim().split(' ')[2]); // to get the numb (minimum)
let minOrderText = minOrderClass.textContent.trim(); // to get the text ( minimum order )
console.log('minOrer number', minOrder);
console.log(minOrderText);


function handleViewCart(event) {

    if (!products.length) {
        alert("Nothing in your cart");
    } else {
        $("#viewCart").empty();
        let subTotal = 0;
        let productsSum = 0;
        let extraSum = 0;
        var total = 0;

        var minOrdPar = document.createElement("p");
        minOrdPar.setAttribute('class', 'minimunOrderPar');
        $("#viewCart").append(minOrdPar);


        for (var i = 0; i < products.length; i++) {

            var button1 = document.createElement('button');
            button1.setAttribute('class', 'removeProduct');
            button1.id = i;
            button1.textContent = `Remove`;
            $("#viewCart").append(button1);

            var quant = document.createElement("span");
            quant.setAttribute("class", "quant");
            quant.textContent = `Quantity: ${products[i].quantity}`;
            $("#viewCart").append(quant);

            var head1 = document.createElement("h1");
            head1.setAttribute("class", 'viewProdName')
            head1.textContent = products[i].productName;
            $("#viewCart").append(head1);


            var paragraph1 = document.createElement("p");
            productsSum += products[i].price;
            paragraph1.setAttribute("class", "priceView");
            paragraph1.textContent = `Price: ${products[i].price}`;
            $("#viewCart").append(paragraph1);



            products[i].extra.forEach((pro) => {
                var featureNameList = document.createElement("li");
                featureNameList.textContent = pro;
                featureNameList.setAttribute("class", "featureNameView");
                featureNameList.style.listStyle = "none";
                $("#viewCart").append(featureNameList);
            });

            products[i].extraPrice.forEach((pri) => {
                let extraSumPrice = parseInt(pri.split(' ')[1]) * products[i].quantity;
                extraSum += extraSumPrice;

            });

        }

        function handleReviewCart(event) {
            event.preventDefault()
            console.log('total <= minOrder', total <= minOrder);
            console.log('total', total);

            if (total <= minOrder) {
                console.log('pric less than minimum order');
                let minimunOrderPar = document.querySelector('.minimunOrderPar')
                minimunOrderPar.textContent = `${minOrderText} add more item`;
                console.log(total);


            } else if (total > minOrder) {
                let minimunOrderPar = document.querySelector('.minimunOrderPar')
                minimunOrderPar.style.display = "none";
                console.log('pay');
                // window.location.href = "http://www.google.com";
                // handleRemoveProduct();
            }


        }



        subTotal = productsSum + extraSum;
        console.log('subTotal :', subTotal);

        var subTotalText = document.createElement('p');
        subTotalText.setAttribute('class', 'subTotalView');
        subTotalText.textContent = `Subtotal ${subTotal}`;
        $("#viewCart").append(subTotalText);


        var deliveryFeesText = document.createElement('p');
        deliveryFeesText.setAttribute('class', 'deliveryFeesView');
        deliveryFeesText.textContent = products[products.length - 1].deliveryFees.trim();
        $("#viewCart").append(deliveryFeesText);



        let delevFeesTotal = parseInt(products[0].deliveryFees.trim().split(' ')[1]);

        total = subTotal + delevFeesTotal;
        console.log('delevFeesTotal =', delevFeesTotal)
        console.log('total =', total)

        var totalpriceText = document.createElement('p');
        totalpriceText.setAttribute('class', 'totalpriceView');
        totalpriceText.textContent = `Total ${total}`;
        $("#viewCart").append(totalpriceText);


        var x = $("#viewCart").html();
        $(".modal-body").html(x);
        $("#viewBascket").hide();
        leftArrow.style.display = "block";
        viewOrder.style.display = "block";
        let deleteProduct = document.querySelector(".modal-body");
        deleteProduct.addEventListener("click", handleRemoveProduct);
        reviewCartBtn.addEventListener('click', handleReviewCart);



    }
}

function handleRemoveProduct(event) {
    var deleteId;
    console.log("clickkkkkk", event);

    if (event.target.textContent === "Remove") {
        deleteId = event.target.id;

        alQuantity = alQuantity - products[deleteId].quantity; // to delete the quantity number of deleted item
        spano1.textContent = `${alQuantity}`;

        products.splice(deleteId, 1); // to delete the product from array 


        if (products.length) { //  to render the exist products in the cart page
            handleViewCart();

        } else { // if you dont have any thing in the cart 
            let nothingDiv = $("#nothingDiv").html();
            $(".modal-body").html(nothingDiv);
            leftArrow.style.display = "block";
            viewOrder.style.display = "none";


        }
    }
}


let mainBody = $(".modal-body").html();


function decreaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 2 : value;
    value <= 2 ? (value = 2) : "";
    value--;
    if (count > 1) {
        count--;
        spano.textContent = `${count}`;

    }

    document.getElementById("number").value = value;
    document.getElementById("number").setAttribute("value", value);
    console.log("dec", $("#number").attr("value"));
    $("#quantityDiv").html($("#number").attr("value"));
    $("#quantityDiv").hide();
}

$("#quantityDiv").hide();

function increaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 2 : value;
    value++;
    count++;
    spano.textContent = `${count}`;

    document.getElementById("number").value = value;
    document.getElementById("number").setAttribute("value", value);
    console.log("inc", $("#number").attr("value"));
    $("#quantityDiv").html($("#number").attr("value"));
    $("#quantityDiv").hide();
}