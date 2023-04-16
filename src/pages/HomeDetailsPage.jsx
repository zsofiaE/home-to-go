import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import HomeDetails from "../components/HomeDetails";
import {FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";
//------------------------------------------------------------------------------------------

const HomeDetailsPage = () => {
  const { filteredHomes } = useContext(FilteredPropertiesContext);

  const { id } = useParams();

  const props = filteredHomes.filter((props) => props._id === id)[0]

  return (
    <div className="HOME">
        <HomeDetails cityProps={props} key={props._id} id={props._id}/>
    </div>
  );
};

export default HomeDetailsPage;
