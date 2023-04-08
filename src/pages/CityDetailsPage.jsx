import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import CityPropertiesList from "../components/CityPropertiesList";

const CityDetailsPage = ({ cities }) => {

  const { id } = useParams();

console.log("ID", id);
console.log("cities", cities);


  const city = cities.filter((city) => city._id === id)[0]
  console.log("cityID", city._id)

  return (
    <div>
      <div className="detailedPageTestMimi">
        <h3>{city.property_count} homes in {city.name}</h3>
      </div>

      <section>

        <CityPropertiesList  city={city} id={city._id} key={city._id}/>
      </section>
    </div>
  )
}

export default CityDetailsPage


