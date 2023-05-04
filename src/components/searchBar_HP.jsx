import React, { useContext } from "react";
import Select from 'react-select';
import { CitiesContext } from "../Context/CitiesContext";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";
import { Link } from "react-router-dom";
//------------------------------------------------------------------------------------------

const SearchBarCityList = () => {
  const { options } = useContext(CitiesContext);
  const { setSelectedCity, selectedCity, setSelectedBedrooms } = useContext(FilteredPropertiesContext);

  const optionsBedroom = [
    { value: selectedCity, label: 1 },
    { value: selectedCity, label: 2 },
    { value: selectedCity, label: 3 },
    { value: selectedCity, label: 4 },
    { value: selectedCity, label: 5 },
    { value: selectedCity, label: 6 }
  ]

  const handleChange = (selectedOption) => { 
    setSelectedCity(selectedOption.value);
  };

  const handleChange2 = (selectedOption2) => {
    setSelectedBedrooms(selectedOption2.label);
  };

  return (
    <form>
    <div className="searchField">
      <Select
        options={options}
        onChange={handleChange}
        backspaceRemovesValue
        placeholder="Search by city"
        cacheOptions
        isClearable={true}
        isSearchable={true}
      />
      <Select
        options={optionsBedroom}
        onChange={handleChange2}
        backspaceRemovesValue
        placeholder="Any bedroom"
        cacheOptions
        isClearable={true}
        isSearchable={true}
  />
    </div>
    <Link to={"cities/"+ selectedCity} >
    <button>Find Homes</button>
    </Link>

    </form>
  );
};

export default SearchBarCityList;
