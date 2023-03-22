import React from "react";


function Search({allPlants, setCurrentPlants}) {

  function handleSearch(etv){
    if(etv !== ''){
      const filteredPlants = allPlants.filter((plants) => plants.name.toLowerCase().includes(etv.toLowerCase()))
      setCurrentPlants(filteredPlants)
    } else {setCurrentPlants(allPlants)}
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
