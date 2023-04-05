import { createContext, useEffect, useState } from 'react'

export const PropertiesContext = createContext();

const PropertiesContextProvider = ({children}) => {

    const [selectedCity, setSelectedCity] = useState("");
    const[cityProperties, setCityProperties] = useState([]);

    const [cityId, setcityId] = useState()
    


    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;
       console.log(selectedCity)
        fetch(`https://unilife-server.herokuapp.com/properties/city/${selectedCity}`, {signal}
        )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.response)
          setCityProperties([...cityProperties, ...data.response]);
          
        })

        .catch((err) => {
          if (err.name === "AbortError") {
          }
        });

        return () => {
          abortController.abort();
        };      
        
    }, [selectedCity],);
    // Note: the empty deps array [] means this useEffect will run once

    return (
    <PropertiesContext.Provider value={{cityProperties, setCityProperties, selectedCity, setSelectedCity}}>
        {children}
    </PropertiesContext.Provider>   
  )
}

export default PropertiesContextProvider;
