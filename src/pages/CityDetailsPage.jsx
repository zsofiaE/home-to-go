import React, { Fragment, useContext } from "react";
import PropertiesList from "../components/PropertiesList";
import SearchBarProperties from "../components/SearchBarProperties";
import { useParams } from "react-router-dom";
import { CitiesContext } from "../Context/CitiesContext";


//---------------------------------------------------------------------------------

const CityDetailsPage = () => {

const {id} = useParams();
const { cities } = useContext(CitiesContext);


const props = cities.filter((props) => props._id === id)[0]

  return (
    <>
      <SearchBarProperties/>
      <section>
        <PropertiesList key={props._id} id={props._id} name={props.name} universities={props.universities} student_life={props.student_life}/>
      </section>
    </>
  );
};

export default CityDetailsPage;


