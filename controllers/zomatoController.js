const { json } = require("body-parser");
const axiosInstance = require("./axiosInstance");

module.exports = {
    getPlaces: function(req, res) {

        const data = axiosInstance.get('/search?lat=-34.9294563&lon=138.5939837?max=20')
            .then(function (response) {
                return res.json(response.data);
            }).catch(function(err){
                console.log(err)
            });
    },
    getPlaceDetails: function(req, res) {

        axiosInstance.get('/restaurant?res_id=16587463')
            .then(function (response) {
                return res.json(response.data);
            }).catch(function(err){
                console.log(err)
            });

    },
    allCategories: function(req, res) {

        axiosInstance.get('/categories')
            .then(function (response) {
                return res.json(response.data);
            }).catch(function(err){
                console.log(err)
            });
    },
    allCuisines: function(req, res) {


        // return res.json({"item":"data"})

        axiosInstance.get('/cuisines?city_id=297')
            .then(function (response) {
                return res.json(response.data);
            }).catch(function(err){
                console.log(err)
            });
    }
};

