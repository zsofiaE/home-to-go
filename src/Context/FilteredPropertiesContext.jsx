import React, { useState, useEffect, createContext } from "react";
export const FilteredPropertiesContext = createContext();
//----------------------------------------------------------------------------------

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const FilteredPropertiesContextProvider = ({ children }) => {

  const [selectedCity, setSelectedCity] = useState("");
  const [filteredHomes, setFilteredHomes] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState();
  const [selectedBathrooms, setSelectedBathrooms] = useState();
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState();
  const [flatDetails, setFlatDetails] = useState([]);

// function to fetch Properties
const fetchProperties = (id) =>
{
  const rawQuery = JSON.stringify({
    query: {
      city_id: id,
      bedroom_count: selectedBedrooms,      
      bathroom_count: selectedBathrooms,
      rent: selectedPrice,
      property_type: selectedType,
    },
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawQuery,
    redirect: "follow",
  };

  fetch(
    "https://unilife-server.herokuapp.com/properties/filter",
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => {
      setFilteredHomes(data.response);
    })
    .catch((error) => console.log("error", error));
}

// clear the searchBarProperties when city ID changes
useEffect(() => {
  setSelectedBedrooms();
  setSelectedBathrooms();
  setSelectedPrice("");
  setSelectedType();
}, [selectedCity]);

  return (
    <FilteredPropertiesContext.Provider
      value={{
        selectedBedrooms, setSelectedBedrooms,
        selectedBathrooms, setSelectedBathrooms,
        selectedPrice, setSelectedPrice,
        selectedType, setSelectedType,
        filteredHomes, setFilteredHomes,
        selectedCity, setSelectedCity, 
        fetchProperties
      }}
    >
      {children}
    </FilteredPropertiesContext.Provider>
  );
};

export default FilteredPropertiesContextProvider;
