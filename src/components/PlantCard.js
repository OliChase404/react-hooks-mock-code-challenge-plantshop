import React, {useState} from "react";

function PlantCard({plant, deletePlant, handlePriceFormSubmit}) {

  const [inStock, setInStock] = useState(true)

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <form onSubmit={(e) => handlePriceFormSubmit(e, plant)}>
        <input type='number' placeholder="Enter New Price..."></input> 
        <button type="submit" className="primary">Set Price</button>
      </form>
      {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)}>Sold Out</button>
      )}
        <button onClick={() => deletePlant(plant)} className="secondary">Delete</button>
    </li>
  );
}

export default PlantCard;
