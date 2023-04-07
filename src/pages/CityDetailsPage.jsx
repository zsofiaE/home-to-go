import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import CityPropertiesList from "../components/CityPropertiesList";

const CityDetailsPage = ({ cities }) => {

  const { id } = useParams();

  const city = cities.filter((city) => city._id === id)[0]
  return (
    <div>
      <div className="detailedPageTestMimi">
        <h3>{city.property_count} homes in {city.name}</h3>
      </div>
      <section>
        <CityPropertiesList  cityName={city.name} id={city._id} />
      </section>
    </div>
  )
}

export default CityDetailsPage


//cityName={city.name} key={city._id}