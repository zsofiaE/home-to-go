import React, { useContext, useState } from "react";
import Select from 'react-select';
import { CitiesContext } from "../Context/CitiesContext";
import { PropertiesContext } from "../Context/PropertiesContext";
import { Link } from "react-router-dom";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";

const SearchBarProperties = () => {
  //const { options } = useContext(CitiesContext);
  const { selectedCity } = useContext(PropertiesContext);
  

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
    { value: 'id', label: 1 },
    { value: 'id', label: 2 },
    { value: 'id', label: 3 },
    { value: 'id', label: 4 },
    { value: 'id', label: 5 },
    { value: 'id', label: 6 }
  ]
  const optionsPrice = [
    { value: 'id', label: '1000' },
    { value: 'id', label: '2000' },
    { value: 'id', label: '3000' },
    { value: 'id', label: '4000' },
    { value: 'id', label: '5000' },
    { value: 'id', label: '6000' }
  ]
  const optionsType = [
    { value: 'id', label: 'Apartment' },
    { value: 'id', label: 'Semi-Detached' },
    { value: 'id', label: 'Detached' }
  ]
  const [inputVal, setInputVal] = useState("");

  const handleChangeBedroom = (selectedOption) => {
    console.log("handleChangeBeds", selectedOption);
    setSelectedBedrooms(selectedOption.label);
  };

  const handleChangeBathroom = (selectedOption) => {
    console.log("handleChangeBath", selectedOption);
    setSelectedBathrooms(selectedOption.label);
  };

  const handleChangePrice = (selectedOption) => {
    console.log("handleChangePrice", selectedOption);
    setSelectedPrice(selectedOption.label);
  };

  const handleChangeType = (selectedOption) => {
    console.log("handleChangeType", selectedOption);
    setSelectedType(selectedOption.label);
  };

 /* const handleInputValue = (str, event) => {
    console.log("string:  ", str, event);
    if (event.action === "menu-close") {
      if (!str) {
        setInputVal(inputVal);
      }
    } else setInputVal(str);
  };
  
    onInputChange={handleInputValue}
          inputValue={inputVal} 
  
  */

  /*load options for the search bar
  useEffect( ()=>{
   setBedroomCount(
     cityProperties.map((item) => ({
       label: item.bedroom_count,
       value: item._id,
     }))
   );
 }, [cityProperties]);
 */

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
          isSearchable={true} />
        <Select
          options={optionsPrice}
          onChange={handleChangePrice}
          backspaceRemovesValue
          placeholder="any price"
          cacheOptions
          isClearable={true}
          isSearchable={true}        />
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