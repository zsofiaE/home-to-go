import React, { Fragment } from "react";
import PropertiesList from "../components/PropertiesList";
import SearchBarProperties from "../components/SearchBarProperties";

//---------------------------------------------------------------------------------

const CityDetailsPage = () => {
 
  return (
    <>
          <SearchBarProperties/>

      <section>
        <PropertiesList />
      </section>
    </>
  );
};

export default CityDetailsPage;


//      <FilteredPropertiesContext/>
