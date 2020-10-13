import React, { createContext, useReducer, useContext } from "react";

const FilterContext = createContext({
    category: "",
    cuisine: "",
    price: ["$","$$$$"],
    rating: ["1", "5"]
});
const { Provider } = FilterContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "updateCuisines":
        return state.cuisine += "," + action.cuisineName;
    case "updateCategory":
        return state.category += "," + action.categoryName;
    case "updatePriceRange":
        return state.price = action.priceRange;
    case "updateRatingRange":
        return state.rating = action.ratingRange;
    default:
        throw new Error(`Invalid action: ${action.type}`);
  }
};

const FilterProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
