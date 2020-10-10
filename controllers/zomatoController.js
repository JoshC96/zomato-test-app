const axiosInstance = require("../routes/axiosInstance");

module.exports = {
    getPlaces: function(request, response) {

        axiosInstance.get('/search?lat=-34.9294563&lon=138.5939837')
            .then(function (res) {
                return res.json()
            }).catch(function(err){
                console.log(err)
            });

    },
    getPlaceDetails: function(request, response) {

        axiosInstance.get('/restaurant?res_id=16587463')
            .then(function (res) {
                return res.json()
            }).catch(function(err){
                console.log(err)
            });

    },
    allCategories: function(request, response) {

        axiosInstance.get('/categories')
            .then(function (res) {
                return res.json()
            }).catch(function(err){
                console.log(err)
            });
    },
    allCuisines: function(request, response) {

        axiosInstance.get('/cuisines')
            .then(function (res) {
                return res.json()
            }).catch(function(err){
                console.log(err)
            });
    }
};

