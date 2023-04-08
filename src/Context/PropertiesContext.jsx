/*import { createContext, useEffect, useState } from 'react'
export const PropertiesContext = createContext();
//------------------------------------------------------------------------------------------ 

const PropertiesContextProvider = ({children}) => {

    const [selectedCity, setSelectedCity] = useState("");
    const [cityProperties, setCityProperties] = useState([]);

    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;
       //console.log(selectedCity)
        fetch(`https://unilife-server.herokuapp.com/properties/city/${selectedCity}`, {signal}
        )
        .then((res) => res.json())
        .then((data) => {
          console.log("data",data.response)
          setCityProperties(data.response);
        })

        .catch((err) => {
          if (err.name === "AbortError") {
          }
        });

        return () => {
          abortController.abort();
        };      
        
    }, [selectedCity],);

    return (
    <PropertiesContext.Provider value={{cityProperties, setCityProperties, selectedCity, setSelectedCity}}>
        {children}
    </PropertiesContext.Provider>   
  )
}

export default PropertiesContextProvider;
*/
import { createContext, useEffect, useState } from 'react'
export const PropertiesContext = createContext();
import CityPropertiesList from "../components/CityPropertiesList";
//------------------------------------------------------------------------------------------ 

const PropertiesContextProvider = ({children}) => {

    const [selectedCity, setSelectedCity] = useState("");
    const [cityProperties, setCityProperties] = useState([]);

    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;
       //console.log(selectedCity)
        fetch(`https://unilife-server.herokuapp.com/properties/city/${selectedCity}`, {signal}
        )
        .then((res) => res.json())
        .then((data) => {
          console.log("data",data.response)
          setCityProperties(data.response);
        })

        .catch((err) => {
          if (err.name === "AbortError") {
          }
        });

        return () => {
          abortController.abort();
        };      
        
    }, [selectedCity],);

    return (
    <PropertiesContext.Provider value={{cityProperties, setCityProperties, selectedCity, setSelectedCity}}>
        {children}
    </PropertiesContext.Provider>   
  )
}

export default PropertiesContextProvider;

//https://unilife-server.herokuapp.com/properties/city/633a96a66893d471a68cc88d