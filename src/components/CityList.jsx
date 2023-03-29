import React from 'react'
import CityListCard from './CityListCard'

const CityList = () => {
  return (
    <>
      <div className="city-list-container">
          <CityListCard />
          <CityListCard />
          <CityListCard />
      </div>
    </>
  )
}

export default CityList