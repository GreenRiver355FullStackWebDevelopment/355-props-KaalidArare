import { useState } from "react";

function Restaurant(props) {
  {/*Setting the states to false and checking if they are true to display the unorder lists for the hours 
    and menu section */}

  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleHours = () => {
    setHours((prev) => !prev);
  }

  const handleMenu = () => {
    setMenu((prev) => !prev);
  }

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      {/*Passing the handles to the buttons to check if true or false */}
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>

      {/*checking if the menu and hours exist and then mapping through them to display the content*/}
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}

      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default Restaurant;
