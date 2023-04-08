/*import { createContext, useEffect, useState } from 'react'
export const CitiesContext = createContext();
//------------------------------------------------------------------------------------------ 

const CitiesContextProvider = ({children}) => {
   
    const[cities, setCities] = useState([]);
    let [page, setPage] = useState(1);

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

  return (
    <CitiesContext.Provider value={{cities, setCities}}>
        {children}
    </CitiesContext.Provider> 
  )
}

export default CitiesContextProvider;
*/

import { createContext, useEffect, useState } from 'react'
export const CitiesContext = createContext();
//------------------------------------------------------------------------------------------ 

const CitiesContextProvider = ({children}) => {
   
    const[cities, setCities] = useState([]);
    let [page, setPage] = useState(1);
    const [options, setOptions] = useState([]);

    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;
        fetch(`https://unilife-server.herokuapp.com/cities?limit=10&page=${page}`, {signal}
        )
        .then((res) => res.json())
        .then((data) => {
          setCities([...cities, ...data.response]);

          /// loop over pages in the database 
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

  return (
    <CitiesContext.Provider value={{cities, setCities, options, setOptions}}>
        {children}
    </CitiesContext.Provider> 
  )
}

export default CitiesContextProvider;
