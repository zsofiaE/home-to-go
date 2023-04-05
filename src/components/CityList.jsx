import React  from 'react'
import CityListCard from './CityListCard'
import { Fragment, useContext } from 'react';
import { CitiesContext} from '../Context/CitiesContext'

const CityList = () => {
  
  const {cities} = useContext(CitiesContext);
  // const firtsnine = cities.slice(0, 9);
  // firtsnine.map((city) => )
  
  return (
    <>
      <h3>Student accommodations in our top cities</h3>
      <div className="city-list-container">
        {/*  if statement -  index number*/}
        {/* {index < 9 : } */}
       
      {cities.slice(0, 9).map((city) => (
        
          <CityListCard      
            city={city}
            key={city._id}
          />
          // let firstnine = cities.slice(0, 9)
          // console.log(first9);
      ))}
      </div>

    </>
  );
};

export default CityList;
