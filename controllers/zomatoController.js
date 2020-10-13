const axiosInstance = require("./axiosInstance");

module.exports = {
    getPlaces: function(req, res) {
        console.log("places cuisine "+req.params.cuisine)
        console.log("places category "+req.params.category)
        console.log("places start "+req.params.start)
        axiosInstance.get('/search?lat=-34.9294563&lon=138.5939837?count=20')
            .then(function (response) {
                return res.json(response.data);
            }).catch(function(err){
                console.log(err)
            });
    },
    getPlaceDetails: function(req, res) {
        axiosInstance.get('/restaurant?res_id='+req.params.id)
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
        axiosInstance.get('/cuisines?city_id=297&count=20')
            .then(function (response) {
                return res.json(response.data);
            }).catch(function(err){
                console.log(err)
            });
    }
};

