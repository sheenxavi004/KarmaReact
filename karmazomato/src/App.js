import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import  City  from './components/CityComponent'
import RestaurantView from './components/DisplayRestaurant'

function App() {
  const [selectedCity, setSelectedCity] = useState('Select a City');
  const [resturants, setRestaurants] = useState(() => {});
  const [isComplete, setComplete] = useState(false);
  const [count, setCount] = useState(0);
  
  function changeCity(name){
    setSelectedCity(prevState => name);
  }

  function search() {
    fetch('https://developers.zomato.com/api/v2.1/locations?query='+ selectedCity +'&count=1', {
      headers: {
        'user-key': process.env.REACT_APP_API_KEY
      }
    }).then(res => res.json())
    .then(result => {
      var lat = result.location_suggestions[0].latitude;
      var lon = result.location_suggestions[0].longitude;
      fetch("https://developers.zomato.com/api/v2.1/search?count=10&lat="+ lat +"&lon=" + lon + "&radius=3000", 
      {
          headers:{
              'user-key': process.env.REACT_APP_API_KEY
          }
      }).then(res => res.json())
      .then(result => {
          setRestaurants(result.restaurants);
          setCount(result.results_found);
          setComplete(true);
      });
    })
  }

  return (
    <div className="App">
      <div class ="jumbotron jumbotron-fluid">
        <img src="zomato-logo-0.png" width="200px" alt="Zomato Logo"/>
        <p>Implementation of Zomato API to display resturants and their dishes in a particular city !</p>
      </div>
      <p className="row offset-sm-4" style={{fontSize:"25pt"}}>Select your city to search for restaurants !</p>
      <div className="row">
        <div className="col-md-1 offset-sm-5">
          <City selectedCity={selectedCity} change={changeCity}/>
        </div>
        <div className="col-md-2">
          <Button className="search" color="danger" onClick={search} >Find Restaurants!</Button>
        </div>
      </div>
      <div className="container">
        <RestaurantView complete={isComplete} count={count} restaurants={resturants}/>
      </div>
    </div>
  );
}

export default App;
