import React from "react";
import PlantCard from "./PlantCard";

function PlantList({currentPlants, deletePlant, handlePriceFormSubmit}) {

  const displayPlants = currentPlants.map((p) => {
    return <PlantCard handlePriceFormSubmit={handlePriceFormSubmit} deletePlant={deletePlant} key={p.id} plant={p} />
  })

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
