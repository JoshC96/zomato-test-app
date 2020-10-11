import React, {useState, useEffect} from 'react';
import axios from "axios";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function Filters() {

    const [categories, setCategories] = useState([]);
    const [cuisines, setCuisines] = useState([]);

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
                // console.log(response.data.cuisines)
                setCuisines(response.data.cuisines)
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        console.log("filter updated")
        // TODO: UPDATE LISTINGS WITH FORM DATA
    };

    return (
    <div className="filters-container bg-white">
        <div className="container">

            <form className="filters-form">
            <div className="filters-column">
                <h4>Category:</h4>
                <div className="category-list"> 
                    {categories.length ? (
                        categories.map((category, index) => {
                            return ( 
                                <label key={index}>
                                {category.categories.name}
                                <input
                                    name={"filter-"+category.categories.name}
                                    data-filterid={category.categories.id}
                                    type="checkbox"
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
                        cuisines.map((cuisine, index) => {
                            return ( 
                                <label key={index}>
                                {cuisine.cuisine.name}
                                <input
                                    name={"filter-"+cuisine.cuisine.name}
                                    data-filterid={cuisine.cuisine.id}
                                    type="checkbox"
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
                        range={{ min: 0, max: 5 }} 
                        step={1}
                        start={[2, 4]} 
                        onUpdate={handleChange}
                        connect />

                    <Nouislider 
                        range={{ min: 1, max: 4 }} 
                        step={1}
                        start={[1, 4]} 
                        onUpdate={handleChange}
                        connect />
                </div>
            </div>

            </form>

        </div>
    </div>
    );
}

export default Filters;
