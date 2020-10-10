const fs = require("fs");

module.exports = {
    allCuisines: function(request, response) {
        fetch('/')
        .then(function(response) {
            return response.json()
        })
        .catch(function(err) {
            console.log(err);
        })
    }
};

