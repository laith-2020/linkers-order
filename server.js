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

let arr = ['hello'];





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
            console.log(resultData);
            let resultOBJ = new Restorant(result.body);
            res.render("index", { resultKey: resultOBJ, categoryKey: array, productKey: resultData });
        })
})

function Restorant(data) {
    this.coverImage = `http://orderlink.linkers.io:8096${data[0].availableBranches[0].storeDetails.coverImage}`;
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
    this.featureName = data.featuresList[0] ? data.featuresList[0].items.map(item => item.featureName) : [''];
    this.extraPrice = data.featuresList[0] ? data.featuresList[0].items.map(item => `+ ${item.extraPrice} $`) : [''];
    this.groupName = data.featuresList[0] ? data.featuresList[0].groupName : ['no addition'];
}



module.exports = {
    test: arr,
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Hey all from ${PORT}`));
    },
};