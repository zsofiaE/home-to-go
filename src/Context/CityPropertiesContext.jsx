import { createContext, useEffect, useState } from 'react'

export const CityPropertiesContext = createContext();

const CityPropertiesContextProvider = ({children}) => {

    const[cityProperties, setCityProperties] = useState([]);
    const[cityProperties2, setCityProperties2] = useState([]);

    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;
        fetch(`https://unilife-server.herokuapp.com/properties/city/633a96b96893d471a68cc891`, {signal}
        )
        .then((res) => res.json())
        .then((data) => {
          setCityProperties([...cityProperties, ...data.response]);
          setCityProperties2([...cityProperties2, ...data.response]);

        })

        .catch((err) => {
          if (err.name === "AbortError") {
          }
        });

        return () => {
          abortController.abort();
        };      
        
    }, [],);

  return (
    <CityPropertiesContext.Provider value={{cityProperties, setCityProperties, cityProperties2, setCityProperties2}}>
        {children}
    </CityPropertiesContext.Provider>   
  )
}

export default CityPropertiesContextProvider;
