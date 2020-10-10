import React from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  const getPlaceItems = async () => {
    console.log("awaiting")
    await axios.get("/api/restaurants")
      .then(function(response){
        console.log(response)
        return response;
      }).catch(function(err){
        console.log(err)
      })
  }
  getPlaceItems();

  const getCuisines = async () => {
    console.log("awaiting")
    await axios.get("/api/cuisines")
      .then(function(response){
        console.log(response)
        return response;
      }).catch(function(err){
        console.log(err)
      })
  }
  getCuisines();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
