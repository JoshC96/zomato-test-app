import React, {useState, useEffect} from 'react';
import axios from "axios";

function Sidebar(props) {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants()
    }, [])

  
    const getRestaurants = () => {
        axios.get("/api/restaurants")
            .then(response => {
                console.log(response.data.restaurants)
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
