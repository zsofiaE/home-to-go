import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CitiesContextProvider from "./Context/CitiesContext";
//import PropertiesContextProvider from "./Context/PropertiesContext";
import FilteredPropertiesContextProvider from "./Context/FilteredPropertiesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CitiesContextProvider>
     
        <FilteredPropertiesContextProvider>
          <App />
         </FilteredPropertiesContextProvider>
    </CitiesContextProvider>
  </React.StrictMode>
);

// <PropertiesContextProvider>
//      </PropertiesContextProvider>
