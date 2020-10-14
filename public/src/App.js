import React, {useState, useEffect} from 'react';
import { FilterProvider } from "./reducers/filter-context";
import axios from "axios";
import './App.css';
import './styles.css';
import './responsive.css';
import Filters from "./components/filters"
import RestaurantDetails from "./components/restaurant-details"
import Sidebar from './components/sidebar';

function App() {

    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        getRestaurant()
    }, [])

    const getRestaurant = (id) => {
      let restaurantId = id ? id : "16588873" // default restaurant if one is not provided
      axios.get("/api/restaurants/"+restaurantId)
          .then(response => {
              setRestaurant(response.data)
          })
          .catch(err => console.log(err))
    }


    const handleSidebarButtonClick = (e) => {
        getRestaurant(e.target.dataset.id)
    }    

    return (
      <FilterProvider>
        <div className="App">
          <Filters />
          <div className="container d-flex">
            <Sidebar handleButtonClick={handleSidebarButtonClick}/>
            <RestaurantDetails restaurant={restaurant}/>
          </div>
        </div>
      </FilterProvider>
    );
}

export default App;
