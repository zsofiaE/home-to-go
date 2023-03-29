import React from 'react'
import CitiesApi from '../components/citiesApi_cmp'
import CityList from '../components/CityList'
import HP_Section from '../components/HP_Section'


const HomePage = () => {
  return (
    <div>
      <CitiesApi />
      <h3>Cards for the first 9 City results</h3>
      <CityList />
      <button>See All Cities</button>
      <HP_Section />
      
      </div>
  )
}

export default HomePage;