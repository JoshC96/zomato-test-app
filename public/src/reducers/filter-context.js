import React, { createContext, useReducer, useContext } from "react";

const defaultState = {
  category: "",
  cuisine: "",
  price: ["1","4"],
  rating: ["1", "5"],
  restaurants: []
};

let count = 0;

const FilterContext = createContext(defaultState);
const { Provider } = FilterContext;

const filterReducer = (state, action) => {

  let returnValue;

  switch (action.type) {
    case "updateCuisine":
        returnValue = action.cuisineId ? {...state, cuisine: state.cuisine+ "," + action.cuisineId} : {...state};
        break;
    case "updateCategory":
        returnValue = action.categoryId ? {...state, category: state.category+ "," + action.categoryId} : {...state};
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
