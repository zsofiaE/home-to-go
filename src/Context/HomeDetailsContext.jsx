import { createContext, useEffect, useState } from 'react'

export const HomeDetailsContext = createContext();

const HomeDetailsContextProvider = ({children}) => {

    const[homeDetails, setHomeDetails] = useState([]);

    useEffect(() => {
      let abortController = new AbortController();
      let { signal } = abortController;
        fetch(`https://unilife-server.herokuapp.com/properties/6364c5fdfff841b8724baccd`, {signal}
        )
        .then((res) => res.json())
        .then((data) => {
          setHomeDetails([...homeDetails, ...data.response]);
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
    <HomeDetailsContext.Provider value={{homeDetails, setHomeDetails}}>
        {children}
    </HomeDetailsContext.Provider>   
  )
}

export default HomeDetailsContextProvider;
