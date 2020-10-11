import React from 'react';
import axios from "axios";
import './App.css';
import './styles.css';
import Filters from "./components/filters"

function App() {

  // const getPlaceItems = async () => {
  //   await axios.get("/api/restaurants")
  //     .then(function(response){
  //       return response;
  //     }).catch(function(err){
  //       console.log(err)
  //     })
  // }
  // getPlaceItems();


  return (
    <div className="App">
      <Filters />
    </div>
  );
}

export default App;
