import { createContext, useEffect, useState } from 'react'
export const CitiesContext = createContext();
//------------------------------------------------------------------------------------------ 

const cityTemplate = {_id: '', name: '', universities: '', student_life: '', image_url: '',}

const CitiesContextProvider = ({children}) => {
   
    const[cities, setCities] = useState([]);
    const [options, setOptions] = useState([]);
    let [page, setPage] = useState(1);
    const[singleCity, setSingleCity] = useState(cityTemplate);

    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;
        fetch(`https://unilife-server.herokuapp.com/cities?limit=10&page=${page}`, {signal}
        )
        .then((res) => res.json())
        .then((data) => {
          setCities([...cities, ...data.response]);

          // loop over pages in the database 
          if (page < 2) {
            setPage(page + 1);
          }
        })

        .catch((err) => {
          if (err.name === "AbortError") {
          }
        });

        return () => {
          abortController.abort();
        };      
        
    }, [page],);

    //load options for the search bar
    useEffect( ()=>{
      setOptions(
        cities.map((item) => ({
          label: item.name,
          value: item._id,
        }))
      );
    }, [cities])

    const fetchCity = (id) =>
    {
      fetch(`https://unilife-server.herokuapp.com/cities/${id}`
      )
      .then((res) => res.json())
      .then((response) => {
        setSingleCity(response.data[0]);
      })        
    }

  return (
      <CitiesContext.Provider value={{cities, setCities, options, setOptions, fetchCity, singleCity}}>
          {children}
      </CitiesContext.Provider> 
    )
}

export default CitiesContextProvider;
