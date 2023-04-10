import { createContext, useEffect, useState } from 'react'
export const PropertiesContext = createContext();
//------------------------------------------------------------------------------------------ 

const PropertiesContextProvider = ({children}) => {

    const [selectedCity, setSelectedCity] = useState("");
    const [cityProperties, setCityProperties] = useState([]);
    const [bedroomCount, setBedroomCount] = useState();
    const [bedroom, setBedroom] = useState([]);

    console.log("selectedCity", selectedCity);
    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;

        fetch(`https://unilife-server.herokuapp.com/properties/city/${selectedCity}`, {signal}
        )
        .then((res) => res.json())
        .then((data) => 
        {
          console.log("data",data.response)
          console.log("dataBeds", data.response[0].bedroom_count)
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

    //load options for the search bar
    useEffect( ()=>{
      setBedroomCount(
        cityProperties.map((item) => ({
          label: item.bedroom_count,
          value: item._id,
        }))
      );
    }, [cityProperties]);

    console.log("bedroomCount", bedroomCount);



    return (
    <PropertiesContext.Provider value={{cityProperties, setCityProperties, selectedCity, setSelectedCity, bedroomCount, setBedroomCount}}>
        {children}
    </PropertiesContext.Provider>   
  )
}

export default PropertiesContextProvider;

//https://unilife-server.herokuapp.com/properties/city/633a96a66893d471a68cc88d