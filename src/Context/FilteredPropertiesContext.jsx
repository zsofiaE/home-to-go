import React, { useState, useEffect, useContext, createContext } from "react";
import { PropertiesContext } from "../Context/PropertiesContext";
export const FilteredPropertiesContext = createContext();

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const FilteredPropertiesContextProvider = ({ children }) => {

  const { selectedCity } = useContext(PropertiesContext);
  const [selectedBedrooms, setSelectedBedrooms] = useState();
  const [selectedBathrooms, setSelectedBathrooms] = useState();
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState();

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
      .then((data) => console.log("filtered", data.response))
      .catch((error) => console.log("error", error));
  }, [selectedCity, selectedBedrooms, selectedBathrooms, selectedPrice, selectedType]);

  return (
    <FilteredPropertiesContext.Provider
      value={{
        selectedBedrooms,
        setSelectedBedrooms,
        selectedBathrooms,
        setSelectedBathrooms,
        selectedPrice,
        setSelectedPrice,
        selectedType,
        setSelectedType,
      }}
    >
      {children}
    </FilteredPropertiesContext.Provider>
  );
}


export default FilteredPropertiesContextProvider;

/*import React, { useState, useEffect } from 'react';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function FilteredPropertiesContext() {

var raw = JSON.stringify({
  "query": {
    "city_id": "633a96b96893d471a68cc891",
    "bedroom_count": 0,
    "bathroom_count": 0,
    "property_type": "",
    "rent": 0
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://unilife-server.herokuapp.com/properties/filter", requestOptions)
.then((res) => res.json())
.then(data => console.log("filter",data.response))
  .catch(error => console.log('error', error));


  

  return (
    <div className="card text-center m-3">
        <h5 className="card-header">POST Request with React Hooks</h5>
        <div className="card-body">
           
        </div>
    </div>
);
}
export default  FilteredPropertiesContext;
*/
