import React, { useState } from "react";
import CityListCard from "./CityListCard";
import { Fragment, useContext } from "react";
import { CitiesContext } from "../Context/CitiesContext";

const CityList = () => {
  const { cities } = useContext(CitiesContext);

  const [visible, setVisible] = useState(9);

  const loadMore = () => {
    setVisible(visible + 11);
  };

  return (
    <>
      <h3>Student accommodations in our top cities</h3>
      <div className="city-list-container">
        {cities.slice(0, visible).map((city) => (
          <CityListCard
            city={city}
            key={city._id}
            cityId={city._id}
            cityName={city.name}
          />
        ))}
         </div>
         <hr />
        <div>
          {visible < cities.length && (
            <button onClick={loadMore}> See All cities</button>
          )}
        </div>  
    </>
  );
};

export default CityList;
