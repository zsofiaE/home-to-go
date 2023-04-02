import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import PropertyDetails from "../components/PropertyDetails";

const HomeDetailsPage = ({cityProperties}) => {

const { id } = useParams();

const cityProperty = cityProperties.filter((cityProperty) => cityProperty._id === id)[0]

return (
    <div className="HOME">
      <div>HomeDetailsPage</div>
      <PropertyDetails key={cityProperty._id} propertyId={cityProperty._id} property={cityProperty.property_description}/>
    </div>
  )
}

export default HomeDetailsPage
