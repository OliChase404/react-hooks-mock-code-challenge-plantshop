import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([])
  const [currentPlants, setCurrentPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((plants) => {
      setAllPlants(plants)
      setCurrentPlants(plants)
    })
  }, [])

  function deletePlant(plant){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then(() => {
      setAllPlants((prevPlants) => {
        return prevPlants.filter((p) => p.id !== plant.id)
      })
      setCurrentPlants((prevPlants) => {
        return prevPlants.filter((p) => p.id !== plant.id)
      })
    })
  }

  function handlePriceFormSubmit(e, p){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${p.id}`,{
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        price: e.target[0].value
      }),
    })
    .then((resp) => resp.json())
    .then((updatedPlant) => {
      setAllPlants((prevPlants) => {
        return prevPlants.map((plant) => plant.id === p.id ? updatedPlant : plant)
      })
      setCurrentPlants((prevPlants) => {
        return prevPlants.map((plant) => plant.id === p.id ? updatedPlant : plant)
      })
    })
  }

  return (
    <main>
      <NewPlantForm setAllPlants={setAllPlants} setCurrentPlants={setCurrentPlants} />
      <Search allPlants={allPlants} setCurrentPlants={setCurrentPlants} />
      <PlantList handlePriceFormSubmit={handlePriceFormSubmit} deletePlant={deletePlant} currentPlants={currentPlants} />
    </main>
  );
}

export default PlantPage;
