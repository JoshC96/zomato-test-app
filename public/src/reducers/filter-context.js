import React, { createContext, useReducer, useContext } from "react";

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
  switch (action.type) {
    case "updateCuisine":
        return state.cuisine !== "undefined" ? {...state, cuisine: state.cuisine+ "," + action.cuisineId} : state;
    case "updateCategory":
        return state.category !== "undefined" ? {...state, category: state.category+ "," + action.categoryId} : state;
    case "updatePriceRange":
        return {...state, price: action.priceRange}
    case "updateRatingRange":
        return {...state, rating: action.ratingRange}
    case "updateRestaurants":
      return {...state, restaurants: action.restaurants}
    default:
        return state;
  }
};

const FilterProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(filterReducer, defaultState);

  return <Provider value={[state, dispatch]} {...props} />;
}

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
