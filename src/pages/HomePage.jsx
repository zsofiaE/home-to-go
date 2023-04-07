import React, {useState, useContext} from 'react'
import CityList from '../components/CityList'
import HP_Section from '../components/HP_Section'
import SearchBarCityList from '../components/searchBar_HP'
//import SearchFilter from '../components/SearchFilter'

//import CityListNew from '../components/cityListNEw'

const HomePage = () => {
 
  return (
    <div>
      <SearchBarCityList />    
      <CityList /> 

      <hr />
      <button onClick={() => setSeeAllCities(true)}>See All Cities</button>

      <HP_Section />


      </div>
      
  )
}

export default HomePage;