import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import HomeDetails from "../components/HomeDetails";
import { PropertiesContext } from "../Context/PropertiesContext";
//------------------------------------------------------------------------------------------

const HomeDetailsPage = () => {
  const { cityProperties } = useContext(PropertiesContext);

  const { id } = useParams();

  const props = cityProperties.filter((props) => props._id === id)[0]

  return (
    <div className="HOME">
        <HomeDetails cityProps={props} key={props._id} id={props._id}/>
    </div>
  );
};

export default HomeDetailsPage;
