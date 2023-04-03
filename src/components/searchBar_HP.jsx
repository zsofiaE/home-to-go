// import React, { useContext } from "react";
// import Select from "React-select/async";

// import { CitiesContext } from "../Context/CitiesContext";
// //import CityListCard from "./CityListCard";

// const SearchBarCityList = () => {
//     const { cities } = useContext(CitiesContext);

//     const handleChange = (selectedOption) => {
//         console.log("handleChangeTest", selectedOption);
//         };


// /*load options into the search bar*/
// const loadOptions = (searchValue, callback) => {
//   setTimeout(() => {
//     const mappedOptions = cities.map(item => ({
//       ...item,
//       label: item.name,
//       value: item.name,
//     }));
//     console.log("loadOptionsTest", searchValue, mappedOptions);
//     callback(mappedOptions);
//   }, 250);
// };


//       return (
//         <div className="SearchField">
//         <Select  loadOptions={loadOptions} 
//                       onChange={handleChange}   
//                       backspaceRemovesValue
//                       placeholder='Search by city'     
//                       cacheOptions
//                       isClearable={true}   
//                       isSearchable={true}
//         />      
//       </div>
//       );
//     };
    
//     export default SearchBarCityList;
    