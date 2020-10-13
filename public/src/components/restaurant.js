import React from 'react';
import tick from '../images/green-tick.svg';
import cross from '../images/red-cross.svg';

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
                <p className="icon-holder">
                    {props.restaurant.is_table_reservation_supported ? (
                        <> <img src={tick} alt="Bookings Available" /> Bookings Available</>
                    ) : (
                        <><img src={cross} alt="No Bookings" />No Bookings</>
                    )}
                </p>
                <p  className="icon-holder">
                    {props.restaurant.has_online_delivery ? (
                        <> <img src={tick} alt="Bookings Available" />Delivery Available</>
                    ) : (
                        <><img src={cross} alt="No Delivery" />No Delivery</>
                    )}
                </p>
            </div>

        </div>
    );
}

export default Restaurant;
