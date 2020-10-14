import React, { createContext, useReducer, useContext } from "react";

const defaultState = {
  category: "",
  cuisine: "",
  price: ["1","4"],
  rating: ["1", "5"],
  restaurants: []
};

// WILL ADD AND REMOVE ITEMS FROM THE SELECTED CATEGORY AND CUISINE LISTS
const arrayHelper = (id, selectedList) => {

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
}

const FilterContext = createContext(defaultState);
const { Provider } = FilterContext;

const filterReducer = (state, action) => {

  let returnValue;

  switch (action.type) {
    case "updateCuisine":
          let cuisineList = arrayHelper(action.cuisineId,state.cuisine).join()
          returnValue = action.cuisineId ? {...state, cuisine: cuisineList} : {...state};
        break;
    case "updateCategory":
          let categoryList = arrayHelper(action.categoryId,state.category).join()
          returnValue = action.categoryId ? {...state, category:categoryList} : {...state};
        break;
    case "updatePriceRange":
          returnValue = {...state, price: action.priceRange}
        break;
    case "updateRatingRange":
          returnValue = {...state, rating: action.ratingRange}
        break;
    case "updateRestaurants":
          returnValue = action.restaurants ? {...state, restaurants: action.restaurants} : {...state};
        break;
  }

  return returnValue;

};

const FilterProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(filterReducer, defaultState);

  return <Provider value={[state, dispatch]} {...props} />;
}

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
