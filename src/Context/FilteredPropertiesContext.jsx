import React, { useState, useEffect, useContext, createContext } from "react";
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
  const [showProperties, setShowProperties] = useState(false);

 
  console.log("selectedBedrooms",selectedBedrooms);
  
  useEffect(() => {
    var raw = JSON.stringify({
      query: {
        city_id: selectedCity,
        bedroom_count: selectedBedrooms,
        bathroom_count: selectedBathrooms,
        rent: selectedPrice,
        property_type: selectedType,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://unilife-server.herokuapp.com/properties/filter",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setFilteredHomes(data.response);
        setShowProperties(true)
      })
      .catch((error) => console.log("error", error));
  }, [
    selectedCity,
    selectedBedrooms,
    selectedBathrooms,
    selectedPrice,
    selectedType,
  ]);

  // clear the searchBarProperties when city changes
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
        selectedCity, setSelectedCity, showProperties
      }}
    >
      {children}
    </FilteredPropertiesContext.Provider>
  );
};

export default FilteredPropertiesContextProvider;
