import React from 'react';

function Restaurant(props) {

    const locationData = props.restaurant.location ? props.restaurant.location : false

    return (
        <div className="restaurant-wrap bg-light">
            
            <div className="restaurant-image-wrap">
                    {props.restaurant.featured_image !== "" ? (
                        <img src={props.restaurant.featured_image} alt={props.restaurant.name + "main photo"} crossOrigin="anonymous" />
                    ) : (
                        <>No image found</>
                    )}
            </div>

            <div className="restaurant-meta">
                <h1>{props.restaurant.name}</h1>
                <p>
                    {locationData.address ? (
                        locationData.address
                    ) : (
                        <>No location found</>
                    )}
                </p>
                <p>
                    {props.restaurant.is_table_reservation_supported ? (
                        <>Bookings Available</>
                    ) : (
                        <>No bookings</>
                    )}
                </p>
                <p>
                    {props.restaurant.has_online_delivery ? (
                        <>Delivery Available</>
                    ) : (
                        <>No delivery</>
                    )}
                </p>
            </div>

        </div>
    );
}

export default Restaurant;
