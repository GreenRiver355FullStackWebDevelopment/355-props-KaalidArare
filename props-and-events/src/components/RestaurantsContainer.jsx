import Restaurant from "./Restaurant.jsx";
import { restaurants } from  "../data/data.js";

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {/*iterating over the restaurant data and passing and passing it as a prop to the restaurant.jsx */}
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id}/>
      ))}
    </div>
  );
}

export default RestaurantsContainer;
