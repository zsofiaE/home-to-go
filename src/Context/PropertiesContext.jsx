import { createContext, useEffect, useState } from 'react'
export const PropertiesContext = createContext();
//------------------------------------------------------------------------------------------ 

const PropertiesContextProvider = ({children}) => {

    const [selectedCity, setSelectedCity] = useState("");
    const [cityProperties, setCityProperties] = useState([]);
    const [homeDetails, setHomeDetails] = useState([]);
    const [bedroomCount, setBedroomCount] = useState();
    const [bedroom, setBedroom] = useState([]);
    let [page, setPage] = useState(1);

    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;

        fetch(`https://unilife-server.herokuapp.com/properties/city/${selectedCity}?page=${page}`, {signal}
        )
        .then((res) => res.json())
        .then((data) => 
        {
          console.log("dataResponse", data)

          // loop over pages in the database 
          if (data.totalPages > 1) {
            setCityProperties([...cityProperties, ...data.response]);
            setHomeDetails(data);
            return;
          }
          setCityProperties(data.response);
          setHomeDetails(data);
        })

        .catch((err) => {
          if (err.name === "AbortError") {
          }
        });

        return () => {
          abortController.abort();
        };      
        
    }, [selectedCity, page],);

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
    <PropertiesContext.Provider value={{cityProperties, setCityProperties, selectedCity, setSelectedCity, bedroomCount, setBedroomCount, homeDetails, setHomeDetails}}>
        {children}
    </PropertiesContext.Provider>   
  )
}

export default PropertiesContextProvider;

