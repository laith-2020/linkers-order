'use strict';

require("dotenv").config();
const express = require("express");
const superagent = require("superagent");
const { get } = require("superagent");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {


    let url = `http://orderlink.linkers.io:8096/Landing/GetMenu/?storeManagerId=5e97b15d02c81e1547ca5c8d`;
    superagent.get(url)
        .then((result) => {

            var array = [];
            let resultData = result.body.map(item => {
                array.push(item.category); //To store the keywords for the options
                array = array.filter(function(item, index, inputArray) { //Filter to delet the repeated keywords;
                    return inputArray.indexOf(item) == index;
                });
                return new Category(item);
            })
            let resultOBJ = new Restorant(result.body);
            res.render("index", { resultKey: resultOBJ, categoryKey: array, productKey: resultData });
        })
})

function Restorant(data) {
    this.shopName = data[0].availableBranches[0].storeDetails.shopName;
    this.city = data[0].availableBranches[0].storeDetails.city;
    this.district = data[0].availableBranches[0].storeDetails.district;
    this.deliveryTime = data[0].availableBranches[0].storeDetails.deliveryTime;
    this.minimumOrder = data[0].availableBranches[0].storeDetails.minimumOrder;
    this.deliveryFees = data[0].availableBranches[0].storeDetails.deliveryFees;
    this.isEnabled = data[0].availableBranches[0].storeDetails.isEnabled;
    this.isClosed = data[0].availableBranches[0].storeDetails.isClosed;
    this.category = data.category;

}

function Category(data) {
    this.category = data.category;
    this.productName = data.productName;
    this.description = data.description;
    this.price = data.price;
    this.productImages = `http://orderlink.linkers.io:8096${data.productImages}`;

}



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});