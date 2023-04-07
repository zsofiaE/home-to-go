import React, { useContext } from "react";
import Select from "React-select/async";
import { CitiesContext } from "../Context/CitiesContext";
import { PropertiesContext } from "../Context/PropertiesContext";
import CityListCard from "./CityListCard";



const SearchBarCityList = ({children}) => {

    const { cities } = useContext(CitiesContext);
    const { setSelectedCity } = useContext(PropertiesContext);

    const handleChange = (selectedOption) => {
        console.log("handleChangeTest", selectedOption);
       // selectedOption._id
       setSelectedCity(selectedOption._id)
       
        };


/*load options into the search bar*/
const loadOptions = (searchValue, callback) => {
  setTimeout(() => {
    const mappedOptions = cities.map(item => ({
      ...item,
      label: item.name,
      value: item.name,
    }));
    //console.log("loadOptionsTest", searchValue, mappedOptions);
    callback(mappedOptions);
  }, 250);
};

return (
        <div className="searchField">
        <Select  loadOptions={loadOptions} 
                      onChange={handleChange}   
                      backspaceRemovesValue
                      placeholder='Search by city'     
                      cacheOptions
                      isClearable={true}   
                      isSearchable={true}
        />      
        </div>
      );
    };
    
export default SearchBarCityList;
    