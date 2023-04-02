import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import PropertyDetails from "../components/PropertyDetails";

const HomeDetailsPage = ({cityProperties}) => {

console.log(cityProperties, "cityHOMECheck")

const { id } = useParams();

const cityProperty = cityProperties.filter((cityProperty) => cityProperty._id === id)[0]
console.log(cityProperty, "cityProperty");
  return (
    <div className="HOME">
      <div>HomeDetailsPage</div>
      <PropertyDetails />
    </div>
  )
}

export default HomeDetailsPage

 /* <{city.property_count} homes in {city.name}
      <section>
      <CityPropertiesList cityName={city.name} key={city._id}/>
      </section>
      </div>*/



/*import React from 'react'

const HomeDetailsPage = () => {
  return (
    <div>HomeDetailsPage</div>
  )
}

export default HomeDetailsPage*/