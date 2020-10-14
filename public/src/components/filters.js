import React, {useState, useEffect} from 'react';
import { useFilterContext } from "../helpers/filter-context";
import axios from "axios";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function Filters() {

    // REMOVE CATEGORIES AND CUISINE - USE GLOBAL STATE
    const [categories, setCategories] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [state, dispatch] = useFilterContext();

    // USED IN FILTER FUNCTION BELOW TO USE THE SET.HAS() FUNCTION FOR FASTER LOOPING
    const pickedCategoryIds = new Set([1, 2, 5, 11]);
    const pickedCuisineIds = new Set([3, 5, 25, 40, 55, 304,983,110, 161,82]);

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
            <div className="filters-column w-15">
                <h4>Category:</h4>
                <div className="category-list"> 
                    {categories.length ? (
                        categories.filter((value) => pickedCategoryIds.has(value.categories.id)).map((category, index) => {
                            return ( 
                                <label key={index}>
                                    {category.categories.name}
                                    <input
                                        name={"category-"+category.categories.name}
                                        data-filterid={category.categories.id}
                                        type="checkbox"
                                        onChange={() => dispatch({ type: "updateCategory",categoryId:category.categories.id })} />
                                    <span className="checkbox-marker"></span>
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
            <div className="filters-column w-40 mr-auto">
                <h4>Cuisine:</h4>
                <div className="cuisine-list"> 
                    {cuisines.length ? (
                        cuisines.filter((value) => pickedCuisineIds.has(value.cuisine.cuisine_id)).map((cuisine, index) => {
                            return ( 
                                <label key={index}>
                                    {cuisine.cuisine.cuisine_name}
                                    <input
                                        name={"cuisine-"+cuisine.cuisine.cuisine_name}
                                        data-filterid={cuisine.cuisine.cuisine_id}
                                        type="checkbox"
                                        onChange={() => dispatch({ type: "updateCuisine",cuisineId:cuisine.cuisine.cuisine_id })} />
                                    <span className="checkbox-marker"></span>
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
            <div className="filters-column w-25">
                <h4>Rating:</h4>
                <div className="rating-wrap"> 
                <span className="slider-label left">1</span>
                    <Nouislider 
                        data-filterid="filter-rating"
                        range={{ min: 1, max: 5 }} 
                        step={1}
                        start={["1",  "5"]} 
                        onSlide={handleRatingSliderChange}
                        connect  />
                    <span className="slider-label right">5</span>
                </div>
                <h4>Cost:</h4>
                <div className="rating-wrap">
                    <span className="slider-label left">$</span>
                    <Nouislider 
                        data-filterid="filter-price"
                        range={{ min: 1, max: 4 }} 
                        step={1}
                        start={["1",  "4"]} 
                        onSlide={handlePriceSliderChange}
                        connect />
                    <span className="slider-label right">$$$$</span>
                </div>
            </div> 

            </form>

        </div>
    </div>
    );
}

export default Filters;
