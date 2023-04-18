import React, { useEffect } from "react";
import { Fragment, useContext } from "react";
import PropertiesCard from "./PropertiesCard";
import PropertiesCount from "./PropertiesCount";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";

//------------------------------------------------------------------------------------------ 

const CityPropertiesList = ({id, name, universities, student_life}) => {
  
  const { filteredHomes,setSelectedCity, showProperties } = useContext(FilteredPropertiesContext);
console.log(filteredHomes)
useEffect(()=>  setSelectedCity(id), [] )

  return (
    <>
    <PropertiesCount key={id} name={name} />
      <div className="city-list-container properties-container">
       {showProperties ?
        filteredHomes.map(
          (property) => (
            (<PropertiesCard property={property} key={property._id} />)
          )
        ) : <div>loading...</div> }
      </div>
      <section className="section-compare-box students">
        <div>
          <h3>Being a student in {name}</h3>
          <p>{student_life}
            <br />
            <br />
            {universities}</p>
        </div>
        <div>
          <img src="../public/students.png" alt="happy young students laugting" />
        </div>
      </section>
    </>
  );
};

export default CityPropertiesList;
