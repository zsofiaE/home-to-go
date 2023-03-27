import React from 'react'
import ApiCallAllCities from '../components/allCitiesDB'
import Banner from '../components/banner'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ApiCallAllCities />
      <h1>Content for the Home Page</h1>
      </div>
  )
}

export default HomePage