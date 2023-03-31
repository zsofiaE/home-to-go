import { useEffect, useState } from "react";
import AsyncSelect from "React-select/async";

function CitiesApi() 
{
  let [page, setPage] = useState(1);
  const [cities, setCities] = useState([]);
  const [err, setError] = useState(null);

  const handleChange = (selectedOption) => {
    console.log("handleChangeTest", selectedOption);
    };

  useEffect(() => {
    let abortController = new AbortController();
    let { signal } = abortController;
    fetch(`https://unilife-server.herokuapp.com/cities?limit=10&page=${page}`, {
      signal
    })
      .then((res) => res.json())
      .then((data) => {
        setCities([...cities, ...data.response ]);

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
  }, [page]);

  /*load options into the search bar*/
  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const mappedOptions = cities.map(item => ({
        ...item,
        label: item.name,
        value: item.name,
      }));
      console.log("loadOptionsTest", searchValue, mappedOptions);
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
                    isSearchable={true}
      />      
    </div>
  );
}

export default CitiesApi;