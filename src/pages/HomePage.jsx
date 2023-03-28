import React from 'react'
import CitiesApi from '../components/citiesApi_cmp'
import CityList from '../components/CityList'


const HomePage = () => {
  return (
    <div>
      <CitiesApi />
      <h3>Cards for the first 9 City results</h3>
      <CityList />
      </div>
  )
}

export default HomePage;