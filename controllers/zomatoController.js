const axiosInstance = require("./axiosInstance");

module.exports = {
    getPlaces: function(req, res) {
        let cat =  req.query.category ? `&category=${req.query.category}` : "";
        let cui = req.query.cuisine ? `&cuisines=${req.query.cuisine}` : "";
        console.log(`/search?lat=-34.9294563&lon=138.5939837&count=20${cat}${cui}&start=${req.query.start}`)
        axiosInstance.get(`/search?lat=-34.9294563&lon=138.5939837&count=20${cat}${cui}&start=${req.query.start}`)
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

