import { createContext, useEffect, useState } from 'react'

export const CitiesContext = createContext();
const CitiesContextProvider = ({children}) => {
    const[cities, setCities] = useState([]);
    let [page, setPage] = useState(1);
    const url = `https://unilife-server.herokuapp.com/cities?limit=10&page=${page}`;

    useEffect(() => {
        fetch(url)

        .then((res) => res.json())
        .then((data) => {
          console.log(data.response);
          setCities([...cities, ...data.response ]);
          console.log(cities);
        })
        .catch(err => console.log(err));

            return setCities(() => [...cities,...res.response])
       
        
    }, [page],)


  return (
    <CitiesContext.Provider value={{cities, setCities}}>
        {children}
    </CitiesContext.Provider>
   
  )
}


export default CitiesContextProvider;