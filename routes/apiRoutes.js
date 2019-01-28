var express = require('express')
var router = express.Router()
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");
router.get("/car/:id", function (req, res) {

    let carUrl = `http://vinfreecheck.com/vin/${req.params.id}`
    //1FTFW1EF7DKD26755

    axios.get(carUrl).then(function (response) {

        // Load the HTML into cheerio

        try {
            var $ = cheerio.load(response.data);
            console.log(response.data);

        } catch (e) {
            console.log(e) // handle error
        }

        // Make an empty array for saving our scraped info
        var results = [];

        // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
        $("main.content").each(function (i, element) {

            /* Cheerio's find method will "find" the first matching child element in a parent.
             *    We start at the current element, then "find" its first child a-tag.
             *    Then, we "find" the lone child img-tag in that a-tag.
             *    Then, .attr grabs the imgs srcset value.
             *    The srcset value is used instead of src in this case because of how they're displaying the images
             *    Visit the website and inspect the DOM if there's any confusion
             */
            //var topic = $(element).find("div.flex-container-column.align-items-start.flex").find("ul.tag-list-wrapper").find("li").find("a").text();


            let year = $(element).find("tbody").eq(1).children("tr").eq(0).children("td").eq(1).html();
            let make = $(element).find("tbody").eq(1).children("tr").eq(1).children("td").eq(1).html();
            let model = $(element).find("tbody").eq(1).children("tr").eq(2).children("td").eq(1).html();
            let trimLevel = $(element).find("tbody").eq(1).children("tr").eq(3).children("td").eq(1).html();
            let style = $(element).find("tbody").eq(1).children("tr").eq(4).children("td").eq(1).html();
            let madeIn = $(element).find("tbody").eq(1).children("tr").eq(5).children("td").eq(1).html();
            let engine = $(element).find("tbody").eq(5).children("tr").eq(0).children("td").eq(1).html();
            let steeringType = $(element).find("tbody").eq(5).children("tr").eq(1).children("td").eq(1).text();
            let antiBrakeSystem = $(element).find("tbody").eq(5).children("tr").eq(2).children("td").eq(1).text();
            let fueltype = $(element).find("tbody").eq(5).children("tr").eq(3).children("td").eq(1).text();
            let tankSize = $(element).find("tbody").eq(5).children("tr").eq(4).children("td").eq(1).text();
            let overallHeight = $(element).find("tbody").eq(5).children("tr").eq(5).children("td").eq(1).text();
            let overallLength = $(element).find("tbody").eq(5).children("tr").eq(6).children("td").eq(1).text();
            let overallWidth = $(element).find("tbody").eq(5).children("tr").eq(7).children("td").eq(1).text();
            let standardSeating = $(element).find("tbody").eq(5).children("tr").eq(8).children("td").eq(1).text();
            let optionalSeating = $(element).find("tbody").eq(5).children("tr").eq(9).children("td").eq(1).text();
            let hightwayMilage = $(element).find("tbody").eq(5).children("tr").eq(10).children("td").eq(1).text();
            let cityMilage = $(element).find("tbody").eq(5).children("tr").eq(11).children("td").eq(1).text();
            let driveType = $(element).find("tbody").eq(5).children("tr").eq(12).children("td").eq(1).text();
            let transmission = $(element).find("tbody").eq(5).children("tr").eq(13).children("td").eq(1).text();







            let carObj = {

                year: year,
                make: make,
                model: model,
                trimLevel: trimLevel,
                style: style,
                madeIn: madeIn,
                engine: engine,
                steeringType: steeringType,
                antiBrakeSystem:antiBrakeSystem,
                fueltype:fueltype,
                tankSize:tankSize,
                overallHeight:overallHeight,
                overallLength:overallLength,
                overallWidth: overallWidth,
                standardSeating:standardSeating,
                optionalSeating:optionalSeating,
                hightwayMilage:hightwayMilage,
                cityMilage:cityMilage,
                driveType:driveType,
                transmission:transmission
            



            }
            results.push(carObj);


        })
        console.log(results);
        res.json(results);



    })

})



module.exports = router