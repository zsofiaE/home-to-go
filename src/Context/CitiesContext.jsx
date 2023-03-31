import { createContext, useEffect, useState } from 'react'

export const CitiesContext = createContext();
constCitiesContextProvider = ({children}) => {
    const[cities, setCities] = useState([]);
    const url = `https://unilife-server.herokuapp.com/cities?limit=10&page=${page}`;

    useEffect() => {
        fetch(url)
        .then(arr => arr.json())
        .then(function(res) {

            return setCities(() => [...cities,res.response])
        });
    }; []};

  return (
    <CitiesContext.Provider value={{cities, setProducts}}>
        {children}
    </CitiesContext.Provider>
   
  )


export default CitiesContextProvider;