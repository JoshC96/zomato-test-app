import React, { createContext, useReducer, useContext } from "react";
import helpers from "./helper-functions"

const defaultState = {
  category: "",
  cuisine: "",
  price: ["1","4"],
  rating: ["1", "5"],
  restaurants: []
};

const FilterContext = createContext(defaultState);
const { Provider } = FilterContext;

const filterReducer = (state, action) => {

  let returnValue;

  switch (action.type) {
    case "updateCuisine":
          let cuisineList = helpers.stateArrayHelper(action.cuisineId,state.cuisine).join()
          returnValue = action.cuisineId ? {...state, cuisine: cuisineList} : {...state};
        break;
    case "updateCategory":
          let categoryList = helpers.stateArrayHelper(action.categoryId,state.category).join()
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
    default: 
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
