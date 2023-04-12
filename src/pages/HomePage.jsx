import React, { useState, useContext } from "react";
import CityList from "../components/CityList";
import HP_Section from "../components/HP_Section";
import SearchBarCityList from "../components/searchBar_HP";

const HomePage = () => {
  return (
    <div>
      <SearchBarCityList />
      <CityList />
      <HP_Section />
    </div>
  );
};

export default HomePage;
