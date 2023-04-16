import React, { useContext, useState } from "react";
import Select from 'react-select';
import { CitiesContext } from "../Context/CitiesContext";
//import { PropertiesContext } from "../Context/PropertiesContext";
import { Link } from "react-router-dom";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";

const SearchBarProperties = () => {
  //const { options } = useContext(CitiesContext);
  const { selectedCity } = useContext(FilteredPropertiesContext);
  
  const { setFilteredHomes } = useContext(FilteredPropertiesContext);

  const { setSelectedBedrooms } = useContext(FilteredPropertiesContext);
  const { setSelectedBathrooms } = useContext(FilteredPropertiesContext);
  const { setSelectedPrice } = useContext(FilteredPropertiesContext);
  const { setSelectedType } = useContext(FilteredPropertiesContext);

  const optionsBedroom = [
    { value: selectedCity, label: 1 },
    { value: selectedCity, label: 2 },
    { value: selectedCity, label: 3 },
    { value: selectedCity, label: 4 },
    { value: selectedCity, label: 5 },
    { value: selectedCity, label: 6 }
  ]
  const optionsBathroom = [
    { value: selectedCity, label: 1 },
    { value: selectedCity, label: 2 },
    { value: selectedCity, label: 3 },
    { value: selectedCity, label: 4 },
    { value: selectedCity, label: 5 },
    { value: selectedCity, label: 6 }
  ]
  const optionsPrice = [
    { value: selectedCity, label: '1000' },
    { value: selectedCity, label: '2000' },
    { value: selectedCity, label: '3000' },
    { value: selectedCity, label: '4000' },
    { value: selectedCity, label: '5000' },
    { value: selectedCity, label: '6000' }
  ]
  const optionsType = [
    { value: selectedCity, label: 'Apartment' },
    { value: selectedCity, label: 'Semi-Detached' },
    { value: selectedCity, label: 'Detached' }
  ]

  const handleChangeBedroom = (selectedOption) => {
    setSelectedBedrooms(selectedOption.label);
  };

  const handleChangeBathroom = (selectedOption) => {
    setSelectedBathrooms(selectedOption.label);
  };

  const handleChangePrice = (selectedOption) => {
    setSelectedPrice(selectedOption.label);
  };

  const handleChangeType = (selectedOption) => {
    setSelectedType(selectedOption.label);
  };

  return (
    <form >
      <div className="searchField">
        <Select
          backspaceRemovesValue
          placeholder="Any bedroom"
          cacheOptions
          isClearable={true}
          isSearchable={true}
          options={optionsBedroom}
          onChange={handleChangeBedroom}
        />
        <Select
          options={optionsBathroom}
          onChange={handleChangeBathroom}
          backspaceRemovesValue
          placeholder="Any bathroom"
          cacheOptions
          isClearable={true}
          isSearchable={true} 
        />
        <Select
          options={optionsPrice}
          onChange={handleChangePrice}
          backspaceRemovesValue
          placeholder="any price"
          cacheOptions
          isClearable={true}
          isSearchable={true}        
        />
        <Select
          options={optionsType}
          onChange={handleChangeType}
          backspaceRemovesValue
          placeholder="any type"
          cacheOptions
          isClearable={true}
          isSearchable={true}
        />
      </div>
    </form>
  );
};

export default SearchBarProperties;
/*
   <Link to={"cities/"+ setSelectedCity} >
    <button>Find Homes</button>
    </Link>
*/