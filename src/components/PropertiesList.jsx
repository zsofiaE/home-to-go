import React from "react";
import { Fragment, useContext } from "react";
//import { PropertiesContext } from "../Context/PropertiesContext";
import PropertiesCard from "./PropertiesCard";
import PropertiesCount from "./PropertiesCount";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";

//------------------------------------------------------------------------------------------ 

const CityPropertiesList = () => {
  
  //const { cityProperties } = useContext(PropertiesContext);
  const { filteredHomes } = useContext(FilteredPropertiesContext);
console.log
  return (
    <>
    <PropertiesCount />
      <div className="city-list-container properties-container">
        {filteredHomes.map(
          (property) => (
            (<PropertiesCard property={property} key={property._id} />)
          )
        )}
      </div>
      <section className="section-compare-box students">
        <div>
          <h3>Being a student in Leeds</h3>
          <p>Leeds is a lively and multicultural city with a large student population. 
            It is quite a compact city, so it is easy to get around and has a community feel. 
            Leeds is the perfect mix of city and town life and has something to offer to anyone who calls it home. 
            <br />
            <br />
            Leeds is home to three universities, the University of Leeds, Leeds Trinity University and Leeds Beckett University</p>
        </div>
        <div>
          <img src="../public/students.png" alt="happy young students laugting" />
        </div>

      </section>
    </>
  );
};

export default CityPropertiesList;
