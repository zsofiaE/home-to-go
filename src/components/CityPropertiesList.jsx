import React from "react";
import { Fragment, useContext } from "react";
import { PropertiesContext } from "../Context/PropertiesContext";
import { CitiesContext } from "../Context/CitiesContext";

import CityPropertiesCard from "./CityPropertiesCard";
import PropertiesCount from "./PropertiesCount";
import { useParams } from "react-router-dom";

/*------------------------------------------------------------------------------------------ */

const CityPropertiesList = () => {
  const { cityProperties } = useContext(PropertiesContext);
  /*const { cities } = useContext(CitiesContext);

  const { id } = useParams();
  const city = cities.filter((city) => city.name === id)[0]
  console.log("properte",city);

if (cities.filter((city) => city.name === id)[0]) 
{
  cityPar = city;
} 
  else if (cities.filter((city) => city.name !== id)[0])
{
  cityPar = cityProperties[0].address.city;

}

console.log("newparam", cityPar);
*/
  

  return (
    <>
    <PropertiesCount  propsCount={cityProperties.length}/>

      <div className="city-list-container">
        {cityProperties.map(
          (property) => (
            (<CityPropertiesCard property={property} key={property._id} />)
          )
        )}
      </div>
    </>
  );
};

export default CityPropertiesList;
//propsName={cityProperties.name }