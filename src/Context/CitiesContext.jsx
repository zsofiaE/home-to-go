import { createContext, useEffect, useState } from 'react'

export const CitiesContext = createContext();
const CitiesContextProvider = ({children}) => {
    const[cities, setCities] = useState([]);
    let [page, setPage] = useState(1);
    const url = `https://unilife-server.herokuapp.com/cities?limit=10&page=${page}`;

    useEffect(() => {
        fetch(url)
        .then(arr => arr.json())
        .then(function(res) {

            return setCities(() => [...cities,...res.response])
        });
    }, []);



    console.log(cities)

  return (
    <CitiesContext.Provider value={{cities, setProducts}}>
        {children}
    </CitiesContext.Provider>
   
  )
}


export default CitiesContextProvider;