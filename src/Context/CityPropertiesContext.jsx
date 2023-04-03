import { createContext, useEffect, useState } from 'react'

export const CityPropertiesContext = createContext();

const CityPropertiesContextProvider = ({children}) => {

    const[cityProperties, setCityProperties] = useState([]);

    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;
        fetch(`https://unilife-server.herokuapp.com/properties/city/633a96b96893d471a68cc891`, {signal}
        )
        .then((res) => res.json())
        .then((data) => {
          setCityProperties([...cityProperties, ...data.response]);
          
        })

        .catch((err) => {
          if (err.name === "AbortError") {
          }
        });

        return () => {
          abortController.abort();
        };      
        
    }, [],);
    // Note: the empty deps array [] means this useEffect will run once

    return (
    <CityPropertiesContext.Provider value={{cityProperties, setCityProperties}}>
        {children}
    </CityPropertiesContext.Provider>   
  )
}

export default CityPropertiesContextProvider;
