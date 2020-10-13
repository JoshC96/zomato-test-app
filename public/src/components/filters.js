import React, {useState, useEffect} from 'react';
import { useFilterContext } from "../reducers/filter-context";
import axios from "axios";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function Filters(props) {

    // REMOVE CATEGORIES AND CUISINE - USE GLOBAL STATE
    const [categories, setCategories] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    // KEEP
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

    // REMOVE 
    const handleChange = e => {
        if(e.target.name.includes('category'))
        {
            props.filterSettings.category = e.target.dataset.filterid;
        }
        else if(e.target.name.includes('cuisine'))
        {
            props.filterSettings.cuisine = e.target.dataset.filterid;
        }
        props.setFilterSettings(props.filterSettings)
    };


    // USING TWO DIFFERENT FUNCTIONS AS THE NOUISLIDER COMPONENT CAN'T TAKE A REF
    // DISLIKE REPEATING SIMILAR FUNCTION
    // REPLACE FUNCTIONS WITH STATE DISPATCH ACTION
    const handleRatingSliderChange = targetValues => {
        props.filterSettings.rating = targetValues;
        props.setFilterSettings(props.filterSettings)
    };
    const handlePriceSliderChange = targetValues => {
        props.filterSettings.price = targetValues;
        props.setFilterSettings(props.filterSettings)
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
                                    // REPLACE WITH FILTERCONTEXT DISPATCH
                                    onChange={handleChange} />
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
                        cuisines.slice(100).map((cuisine, index) => {
                            return ( 
                                <label key={index}>
                                {cuisine.cuisine.cuisine_name}
                                <input
                                    name={"cuisine-"+cuisine.cuisine.cuisine_name}
                                    data-filterid={cuisine.cuisine.cuisine_id}
                                    type="checkbox"
                                    // REPLACE WITH FILTERCONTEXT DISPATCH
                                    onChange={handleChange} />
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
