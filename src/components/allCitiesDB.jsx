import React, { useState, useEffect, useCallback } from "react";
import AsyncSelect from "React-select/async";
import axios from "axios";
/*-------------------------------------------------------------------------*/

export default function ApiCall_AllCities() {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleChange = (selectedOption) => {
  console.log("handleChange", selectedOption);
    };

  /* fetch the date from the uni server and write object directly in data -> response.data.response */
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://unilife-server.herokuapp.com/cities`
        );
        setData(response.data.response);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const mappedOptions = data.map(item => ({
        ...item,
        label: item.name,
        value: item.name,
      }));

      console.log("loadOptions", searchValue, mappedOptions);
      callback(mappedOptions);
    }, 250);
  };

  return (
    <div className="SearchField">
      <AsyncSelect  loadOptions={loadOptions} 
                    onChange={handleChange}   
                    backspaceRemovesValue
                    placeholder='Search by city'     
                    cacheOptions
                    isClearable={false}    
      />      
    </div>
  );
}

