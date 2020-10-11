import React, {useState, useEffect} from 'react';
import axios from "axios";

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
            .then(response => console.log(response.data)/*setCuisines(response.data)*/)
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        e.preventDefault();
        console.log()
        // TODO: UPDATE LISTINGS WITH FORM DATA
    };

    return (
    <div className="filters-container bg-white">
        <div className="container">

            <form>
            <div>
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
            <div>
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

            </form>

        </div>
    </div>
    );
}

export default Filters;
