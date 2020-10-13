import React from 'react';
import parsePhoneNumber from 'libphonenumber-js'
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
                <p className="icon-holder">
                    {props.restaurant.has_online_delivery ? (
                        <> <img src={tick} alt="Bookings Available" />Delivery Available</>
                    ) : (
                        <><img src={cross} alt="No Delivery" />No Delivery</>
                    )}
                </p>
                <h4>Cuisines</h4>
                <h3>
                    {props.restaurant.cuisines !== "" ? (
                        <> {props.restaurant.cuisines}</>
                    ) : (
                        <>No listed cuisines</>
                    )}
                </h3>
                <h4>Phone</h4>
                <h3>
                    {/* 
                        CHECK IF PHONE NUMBER EXISTS AND IS A STRING
                        SPLIT OFF FIRST NUMBER WITH STRING.SPLIT()[0]
                        PARSE PHONE NUMBER INTO AU FORMAT
                    */}
                    {props.restaurant.phone_numbers && props.restaurant.phone_numbers !== "" ? (
                        <> {parsePhoneNumber(String(props.restaurant.phone_numbers.split(",")[0]), 'AU').formatNational()}</>
                    ) : (
                        <>No phone number available</>
                    )}
                </h3>
                <h4>Opening Hours</h4>
                <h3>
                    {props.restaurant.timings !== "" ? (
                        <> {props.restaurant.timings}</>
                    ) : (
                        <>No opening hours available</>
                    )}
                </h3>
            </div>

        </div>
    );
}

export default Restaurant;
