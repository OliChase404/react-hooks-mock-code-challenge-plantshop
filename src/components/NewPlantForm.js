import React, { useState } from "react";

function NewPlantForm({setAllPlants, setCurrentPlants}) {

  const [newPlant, setNewPlant] = useState({
    id: null,
    name: "",
    image: "",
    price: 1000000
  })

  function handleFormChange(e){
    setNewPlant({ ...newPlant, [e.target.name]: e.target.value})
  }

  function handleFormSubmit(e){
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then((resp) => resp.json())
    .then((respPlant) => {
      setCurrentPlants((prevPlants) => {
        return [respPlant, ...prevPlants]
      })
      setAllPlants((prevPlants) => {
        return [respPlant, ...prevPlants]
      })
      })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input onChange={(e) => handleFormChange(e)}  type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => handleFormChange(e)} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => handleFormChange(e)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
