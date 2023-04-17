import React, { useState, useContext } from "react";
import CityList from "../components/CityList";
import HP_Section from "../components/Section_Desktop";
import SearchBarCityList from "../components/searchBar_HP";
import Section_Desktop from "../components/Section_Desktop";
import SectionCompare_hp from "../components/SectionCompare_hp";
//---------------------------------------------------------------------- 

const HomePage = () => {

  return (
    <div>
      <SearchBarCityList />
      <CityList />
      <SectionCompare_hp />
      <Section_Desktop />
      {/* this HP-Section is just for Desktop- min-width: 1200px or 1000px */ }
    </div>
  );
};

export default HomePage;
