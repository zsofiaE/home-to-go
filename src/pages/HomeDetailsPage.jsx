import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import HomeDetails from "../components/HomeDetails";
import { PropertiesContext } from "../Context/PropertiesContext";
//------------------------------------------------------------------------------------------

const HomeDetailsPage = () => {
  const { cityProperties } = useContext(PropertiesContext);

  return (
    <div className="HOME">
      {cityProperties.map((cityProps) => (
        <HomeDetails cityProps={cityProps} key={cityProps._id} id={cityProps._id}/>
      ))}
    </div>
  );
};

export default HomeDetailsPage;
