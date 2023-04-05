import React, {useState, useContext} from 'react'
import CityList from '../components/CityList'
import HP_Section from '../components/HP_Section'
import SearchBarCityList from '../components/searchBar_HP'
import SearchFilter from '../components/SearchFilter'

const HomePage = () => {
 const [seeAllCities, setSeeAllCities] = useState(false);
 
 
  return (
    <div>
      <SearchBarCityList /> 
      <SearchFilter />
      <CityList />
      <button onClick={() => setSeeAllCities(true)}>See All Cities</button>
      <HP_Section />
      {seeAllCities && <CityList showAllCities={setSeeAllCities} />}
      {/* {seeAllCities ? <CityList /> : <CityList {...cities.slice(0, 9)} /> } */}

      </div>
  )
}

export default HomePage;