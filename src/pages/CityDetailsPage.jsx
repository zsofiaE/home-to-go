import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import CityPropertiesList from "../components/CityPropertiesList";
import { PropertiesContext } from "../Context/PropertiesContext";
import PostRequestHooks from "../Context/test";

const CityDetailsPage = ({ cities }) => {

  const { id } = useParams();

  const { cityProperties } = useContext(PropertiesContext);

  return (
    <div>
      <div className="detailedPageTestMimi">
      <h3>{cityProperties.length} homes in {cityProperties[0].address.city}</h3>

      </div>
      <section>
      {cityProperties.map((property) => (

          <CityPropertiesList property={property} key={property._id} />
      ))}
      </section>
    </div>
  )
}

export default CityDetailsPage

/* 


original code below
import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import CityPropertiesList from "../components/CityPropertiesList";

const CityDetailsPage = ({ cities }) => {

  const { id } = useParams();

console.log("ID", id);
console.log("cities", cities);


  const city = cities.filter((city) => city._id === id)[0]

  return (
    <div>
      <div className="detailedPageTestMimi">
        <h3>{city.property_count} homes in {city.name}</h3>
      </div>

      <section>

        <CityPropertiesList city={city} key={city._id}
 />
      </section>
    </div>
  )
}

export default CityDetailsPage

*/