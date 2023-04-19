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

console.log("selectedCity", selectedCity);
console.log("selectedBedrooms", selectedBedrooms);

  /*
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

    const requestOptions = {
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
*/
  

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

/*function to fetch Home Details
const fetchHomeDetails = (id) =>
{

  console.log("ididid", id);
  const rawQuery2 = JSON.stringify({
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
    body: rawQuery2,
    redirect: "follow",
  };

  fetch(
    "https://unilife-server.herokuapp.com/properties/filter",
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("data.", data.response);

      setFlatDetails(data.response);
    })
    .catch((error) => console.log("error", error));
}

*/


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
//fetchProperties, flatDetails, setFlatDetails, fetchHomeDetails