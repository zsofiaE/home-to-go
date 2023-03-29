import React, { Fragment } from "react";

const CityListCard = () => {
  return (
    <>
      <div className="city-list-card">
        <img className="city-list-bg" src="/placeholder-unsplash.jpg" alt="" />
        {/* <div className="city-list-bg" ></div> */}
        <div className="city-list-details">
          <h2>PlaceholderCity</h2>
          <h5>2 Properties</h5>
        </div>
      </div>
     
    </>
  );
};

export default CityListCard;
