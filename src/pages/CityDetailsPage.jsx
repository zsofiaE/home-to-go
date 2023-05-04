import React, { useContext, useEffect } from "react";
import PropertiesList from "../components/PropertiesList";
import SearchBarProperties from "../components/SearchBarProperties";
import { useParams } from "react-router-dom";
import { CitiesContext } from "../Context/CitiesContext";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";
//---------------------------------------------------------------------------------

const CityDetailsPage = () => {

const {id} = useParams();
const { singleCity, fetchCity } = useContext(CitiesContext);
const { fetchProperties, filteredHomes, setSelectedCity, selectedBedrooms, selectedBathrooms, selectedPrice,selectedType } = useContext(FilteredPropertiesContext);

useEffect(()=>{
  fetchProperties(id)
  fetchCity(id)
  setSelectedCity(id)
},[id, selectedBedrooms, selectedBathrooms, selectedPrice, selectedType])

return (
    <>
      <SearchBarProperties/>
      <section>
      <PropertiesList filteredHomes={filteredHomes} name={singleCity.name} universities={singleCity.universities} student_life={singleCity.student_life} image_url={singleCity.image_url} />
      </section>
    </>
  );
};

export default CityDetailsPage;



