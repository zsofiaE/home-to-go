import React  from 'react'
import CityListCard from './CityListCard'
import { Fragment, useContext } from 'react';
import { CitiesContext} from '../Context/CitiesContext'

const CityList = () => {
  
  const {cities} = useContext(CitiesContext);
  
  return (
    <>
      <div className="city-list-container">
      {cities.map((city) => (
          <CityListCard
        
            city={city}
            key={city._id}
          />
      ))}
      </div>

    </>
  );
};

export default CityList;
