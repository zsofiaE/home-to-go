/*import React, { useContext } from "react";
import Select from 'react-select';
import { CitiesContext } from "../Context/CitiesContext";
import { PropertiesContext } from "../Context/PropertiesContext";
import { Link } from "react-router-dom";

const SearchBarCityList = () => {
  const { options } = useContext(CitiesContext);
  const { setSelectedCity } = useContext(PropertiesContext);
  const { bedroomCount } = useContext(PropertiesContext);
  
  const handleChange = (selectedOption) => {
    console.log("handleChangeTest", selectedOption);
    setSelectedCity(selectedOption.value);
  };

  const handleChange2 = (selectedOption2) => {
    console.log("handleChangeTest2", selectedOption2);
    setBedroom(selectedOption2.value);
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
        options={bedroomCount}
        onChange={handleChange2}
        backspaceRemovesValue
        placeholder="Any bedroom"
        cacheOptions
        isClearable={true}
        isSearchable={true}
  />
    </div>
    <Link to={"cities/"+ setSelectedCity} >
    <button>Find Homes</button>
    </Link>

    </form>
  );
};

export default SearchBarCityList;
*/