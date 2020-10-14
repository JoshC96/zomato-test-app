require('dotenv').config()

module.exports = {
    // WILL ADD AND REMOVE ITEMS FROM THE SELECTED CATEGORY AND CUISINE LISTS
    stateArrayHelper: function(id, selectedList){
        let updatedList = selectedList.split(",");
        let idToAdd = id.toString();

        if(updatedList[0] === ""){
            updatedList.shift()
        }

        if (updatedList.indexOf(idToAdd) > -1) {
            updatedList.splice(updatedList.indexOf(idToAdd), 1);
        }
        else
        {
            updatedList.push(idToAdd.toString())
        }
        return updatedList;
    },
    filterBySliders: function(data, priceFilters, ratingFilters){

        console.log(data.length)
        data.filter((item) => {
            let priceRange = parseInt(item.restaurant.price_range)
            let ratingRange = parseInt(item.restaurant.user_rating.aggregate_rating)

            if( priceRange >= parseInt(priceFilters[0]) && priceRange <= parseInt(priceFilters[1])  ){
                if(ratingRange >= parseInt(ratingFilters[0]) && priceRange <= parseInt(ratingFilters[1]) ){
                    return item;
                }
            }
        });
        console.log(data.length)
        return data;
    }
}