import React, { useState, useContext } from "react";
import CityList from "../components/CityList";
import HP_Section from "../components/Section_Desktop";
import SearchBarCityList from "../components/searchBar_HP";
import Section_Desktop from "../components/Section_Desktop";
import SectionCompare_hp from "../components/SectionCompare_hp";
import useWindowSize from "../components/useWindowSize";
//---------------------------------------------------------------------- 

const HomePage = () => {

  const size = useWindowSize();
  return (
    <div>
      <SearchBarCityList />
      <CityList />
      <SectionCompare_hp />
      {size.width > 1200 && <Section_Desktop />}
      {/* this HP-Section is just for Desktop- min-width: 1200px visible */ }
    </div>
  );
};

export default HomePage;
