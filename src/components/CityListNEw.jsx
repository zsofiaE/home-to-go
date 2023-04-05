import React, {useCallback, useRef, useState}  from 'react'
import CityListCard from './CityListCard'
import { Fragment, useContext } from 'react';
import { CitiesContext} from '../Context/CitiesContext'

const CityListNew = () => {
  
  const {cities} = useContext(CitiesContext);
  // const firtsnine = cities.slice(0, 9);
  // firtsnine.map((city) => )

//   const allCities = useRef(cities)

  const [visibleCities, setVisibleCities] = useState(cities.current.slice(0, 9));
  console.log(cities.current.slice(0, 9));
  console.log(setVisibleCities(cities));
  
  // const showAllCities = useCallback(() => {
  //   if(allCities.current.length > 10) {
  //     setVisibleCities(allCities.current.slice(0, 9));
  //   }
  // }


  const showAllCities = useCallback(() => {
    return (
    <>
      <h3>Student accommodations in our top cities</h3>
      <div className="city-list-container">

        {visibleCities.map((city) => {
        
        return(
          <CityListCard      
            city={city}
            key={city._id}
          />
          // let firstnine = cities.slice(0, 9)
          // console.log(first9);
        );
        })}
       
      </div>
      <div>
      <button onClick={() => setVisibleCities(visibleCities)}>See All Cities</button>
     
      {/* {seeAllCities && <CityList showAllCities={setSeeAllCities} />} */}
      </div>
    </>
  );
}

)}

export default CityListNew;
