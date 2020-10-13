import React from 'react';
import Restaurant from "./restaurant"

function RestaurantDetails(props) {

    return (
        <div className="restaurant-container bg-light">
            {props.restaurant.name !== "" ? (
                <>
                    <Restaurant restaurant={props.restaurant} />
                </>
            ) : (
                <>
                {/* ERROR LOG HERE */}
                <p>No restaurant selected</p>
                </>
            )}
        </div>
    );
}

export default RestaurantDetails;
