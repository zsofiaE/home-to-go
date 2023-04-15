import React, { Fragment } from "react";
import PropertiesList from "../components/PropertiesList";
import SearchBarProperties from "../components/SearchBarProperties";
import FilteredPropertiesContext from "../Context/FilteredPropertiesContext";
//---------------------------------------------------------------------------------

const CityDetailsPage = () => {
 
  return (
    <>
          <SearchBarProperties/>

      <section>
      <FilteredPropertiesContext/>
        <PropertiesList />
      </section>
    </>
  );
};

export default CityDetailsPage;


