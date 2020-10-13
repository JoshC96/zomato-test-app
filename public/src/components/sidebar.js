import React, {useState,useEffect} from 'react';
import { useFilterContext } from "../reducers/filter-context";
import axios from "axios";

function Sidebar(props) {

    const [state, dispatch] = useFilterContext();

    useEffect(() => {
        getRestaurants().then(function(result) {
            dispatch({
                type: "updateRestaurants",
                restaurants: result
            });
        })
    },[])

    const getRestaurants = async () => {
        let queryParams = {params: {cuisine:state.cuisine,category:state.category,start:1}};
        return await axios.get("/api/restaurants",queryParams)
            .then(response => {
                return response.data.restaurants;
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="sidebar bg-grey">
            <h5>Results: </h5>
            <ul className="restaurant-list">
                {state.restaurants.length ? (
                    state.restaurants.map((item, index) => {
                        return ( 
                            <li key={index}>
                                <button onClick={props.handleButtonClick} data-id={item.restaurant.id}>
                                    {item.restaurant.name}
                                </button>
                            </li>
                        )
                    })
                ) : (
                    <>
                    <p>Preloader here</p>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;
