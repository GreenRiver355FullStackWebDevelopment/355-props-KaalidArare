import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";

import { useState } from "react";


function App() {
  
  {/*passing a copy of the restaurant data to the RestaurantContainer*/}
  const [restaurantState, setRestaurants] = useState([...restaurants])

  return (
    <div className="App">
      <RestaurantsContainer restaurants = {restaurantState}/>
    </div>
  );
}

export default App;