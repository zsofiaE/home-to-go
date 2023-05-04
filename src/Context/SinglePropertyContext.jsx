import { createContext, useState } from "react";
export const SinglePropertyContext = createContext();
//------------------------------------------------------------------------------------------

const SinglePropertyContextProvider = ({children}) => {
    
    const [singleProperty, setSingleProperty] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const fetchSingleProperty = (homes_id) =>{
        fetch('https://unilife-server.herokuapp.com/properties/'+ homes_id)
        .then((response)=> response.json())
        .then((data) => setSingleProperty(data))
        .finally(() => setIsLoading(false))
     };

     return (
        <SinglePropertyContext.Provider value={{fetchSingleProperty, singleProperty, isLoading}}>
        {children}
        </SinglePropertyContext.Provider>
    );
}

export default SinglePropertyContextProvider;

