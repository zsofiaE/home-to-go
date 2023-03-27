import React from 'react'
import ApiCallAllCities from '../components/allCitiesDB'

const HomePage = () => {
  return (
    <div>
      <ApiCallAllCities />
      <h1>Content for the Home Page</h1>
      </div>
  )
}

export default HomePage