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
    
   /* useEffect(()=> {
      setCityProperties([]);
    },[selectedCity])*/


    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;

        fetch(`https://unilife-server.herokuapp.com/properties/city/${selectedCity}?page=${page}`, {signal}
        )
        .then((res) => res.json())
        .then((data) => 
        {
          console.log("dataResponse", data)
          console.log("page",page)

          if (data.totalPages > 1) {
          //  setPage(page + 1);
            setCityProperties([...cityProperties, ...data.response]);
            setHomeDetails(data);
            return;
          }
          setCityProperties(data.response);
          setHomeDetails(data);
        })

          /// loop over pages in the database 

        .catch((err) => {
          if (err.name === "AbortError") {
          }
        });

        return () => {
          abortController.abort();
        };      
        
    }, [selectedCity, page],);
    console.log("pageSecondTry",page)

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

//https://unilife-server.herokuapp.com/properties/city/633a96a66893d471a68cc88d