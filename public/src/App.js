import React, {useState, useEffect} from 'react';
import { FilterProvider } from "./reducers/filter-context";
import axios from "axios";
import './App.css';
import './styles.css';
import Filters from "./components/filters"
import RestaurantDetails from "./components/restaurant-details"
import Sidebar from './components/sidebar';

function App() {

    const defaultFilterState = {
      category: "",
      cuisine: "",
      price: ["1","4"],
      rating: ["1", "5"]
    }

    const [restaurant, setRestaurant] = useState([]);
    const [filterSettings, setFilterSettings] = useState(defaultFilterState);

    useEffect(() => {
        getRestaurant()
    }, [])

    const getRestaurant = (id) => {
      let restaurantId = id ? id : "19431060" // default restaurant if one is not provided
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
            <Sidebar handleButtonClick={handleSidebarButtonClick} filterSettings={filterSettings}/>
            <RestaurantDetails restaurant={restaurant}/>
          </div>
        </div>
      </FilterProvider>
    );
}

export default App;
