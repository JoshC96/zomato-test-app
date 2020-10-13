import React, {useState, useEffect} from 'react';
import { useFilterContext } from "../reducers/filter-context";
import axios from "axios";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function Filters() {

    // REMOVE CATEGORIES AND CUISINE - USE GLOBAL STATE
    const [categories, setCategories] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [state, dispatch] = useFilterContext();

    useEffect(() => {
        getCategories()
        getCuisines()
    }, [])
  
    const getCategories = () => {
        axios.get("/api/categories")
            .then(response => setCategories(response.data.categories))
            .catch(err => console.log(err))
    }

    const getCuisines = () => {
        axios.get("/api/cuisines")
            .then(response => {
                setCuisines(response.data.cuisines)
            })
            .catch(err => console.log(err))
    }

    // USING TWO DIFFERENT FUNCTIONS AS THE NOUISLIDER COMPONENT CAN'T TAKE A REF
    // DISLIKE REPEATING SIMILAR FUNCTION
    const handleRatingSliderChange = targetValues => {
        dispatch({
            type: "updateRatingRange",
            ratingRange: targetValues
        });
    };
    const handlePriceSliderChange = targetValues => {
        dispatch({
            type: "updatePriceRange",
            priceRange: targetValues
        });
    };

    return (
    <div className="filters-container bg-white">
        <div className="container">

            <form className="filters-form" >
            <div className="filters-column">
                <h4>Category:</h4>
                <div className="category-list"> 
                    {categories.length ? (
                        categories.map((category, index) => {
                            return ( 
                                <label key={index}>
                                {category.categories.name}
                                <input
                                    name={"category-"+category.categories.name}
                                    data-filterid={category.categories.id}
                                    type="checkbox"
                                    onChange={() => dispatch({ type: "updateCategory",categoryId:category.categories.id })} />
                                </label>
                            )
                        })
                    ) : (
                        <>
                        {/* ERROR LOG HERE */}
                        <p>No categories to show</p>
                        </>
                    )}
                </div>
            </div>
            <div className="filters-column">
                <h4>Cuisine:</h4>
                <div className="cuisine-list"> 
                    {cuisines.length ? (
                        cuisines.slice(110).map((cuisine, index) => {
                            return ( 
                                <label key={index}>
                                {cuisine.cuisine.cuisine_name}
                                <input
                                    name={"cuisine-"+cuisine.cuisine.cuisine_name}
                                    data-filterid={cuisine.cuisine.cuisine_id}
                                    type="checkbox"
                                    onChange={() => dispatch({ type: "updateCuisine",cuisineId:cuisine.cuisine.cuisine_id })} />
                                </label>
                            )
                        })
                    ) : (
                        <>
                        {/* ERROR LOG HERE */}
                        <p>No cuisines to show</p>
                        </>
                    )}
                </div>
            </div>
            <div className="filters-column">
                <h4>Rating:</h4>
                <div className="rating-wrap"> 
                    <Nouislider 
                        data-filterid="filter-rating"
                        range={{ min: 1, max: 5 }} 
                        step={1}
                        start={[2, 4]} 
                        onUpdate={handleRatingSliderChange}
                        connect
                        tooltips  />
                <h4>Cost:</h4>
                    <Nouislider 
                        data-filterid="filter-price"
                        range={{ min: 1, max: 4 }} 
                        step={1}
                        start={["1",  "4"]} 
                        onUpdate={handlePriceSliderChange}
                        connect
                        tooltips
                        />
                </div>
            </div> 

            </form>

        </div>
    </div>
    );
}

export default Filters;
