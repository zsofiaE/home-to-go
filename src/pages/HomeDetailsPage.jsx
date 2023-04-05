import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import HomeDetails from "../components/HomeDetails";

const HomeDetailsPage = ({cityProperties}) => {

const { id } = useParams();

const cityProperty = cityProperties.filter((cityProperty) => cityProperty._id === id)[0]

return (
    <div className="HOME">
      <h3>HomeDetailsPage grid-Container</h3>
      <HomeDetails key={cityProperty._id} propertyId={cityProperty._id} property={cityProperty.property_description}/>
    </div>
  )
}

export default HomeDetailsPage
