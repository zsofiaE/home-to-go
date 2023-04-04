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
      <div className="city-list-container">
        {/*  if statement -  index number*/}
        {/* if(let i=0; i < 9; i++)  */}
       
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
