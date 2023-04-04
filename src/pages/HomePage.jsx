import React from 'react'
import CityList from '../components/CityList'
import HP_Section from '../components/HP_Section'
import SearchBarCityList from '../components/searchBar_HP'

const HomePage = () => {


  return (
    <div>
      <SearchBarCityList /> 
      <CityList />
      <button>See All Cities</button>
      <HP_Section />
      
      </div>
  )
}

export default HomePage;