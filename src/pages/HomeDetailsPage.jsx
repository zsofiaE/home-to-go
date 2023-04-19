import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HomeDetails from "../components/HomeDetails";
import {FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";
//------------------------------------------------------------------------------------------

const HomeDetailsPage = () => {
  const { filteredHomes } = useContext(FilteredPropertiesContext);

  const { id } = useParams();/*
  console.log("id2", id);

  useEffect(() => {
    console.log("id2 inside", id);
    fetchProperties(id, "fetchHomeID");
  },[])

*/
  console.log("filteredHomes", filteredHomes);


  const props = filteredHomes.filter((props) => props._id === id)[0]
  //console.log("pr", props);

  return (
    <div className="HOME">
      <HomeDetails cityProps={props} id={props._id}/>
    </div>
  );
};

export default HomeDetailsPage;
//         
