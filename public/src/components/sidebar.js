import React, {useState, useEffect} from 'react';
import { useFilterContext } from "../reducers/filter-context";
import axios from "axios";

function Sidebar(props) {

    const [restaurants, setRestaurants] = useState([]);
    const [state, dispatch] = useFilterContext();

    useEffect(() => {
        getRestaurants()
    }, [])
  
    const getRestaurants = () => {
        // TODO: SEND FILTER PROPERTIES TO RESTAURANT ROUTE
        axios.get("/api/restaurants")
            .then(response => {
                setRestaurants(response.data.restaurants)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="sidebar bg-grey">
            <h5>Results</h5>
            <ul className="restaurant-list">
                {restaurants.length ? (
                    restaurants.map((item, index) => {
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
                    {/* ERROR LOG HERE */}
                    <p>Preloader here</p>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;
