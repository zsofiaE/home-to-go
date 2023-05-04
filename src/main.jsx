import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CitiesContextProvider from "./Context/CitiesContext";
import SinglePropertyContextProvider from "./Context/SinglePropertyContext";
import FilteredPropertiesContextProvider from "./Context/FilteredPropertiesContext";
//------------------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CitiesContextProvider>
      <FilteredPropertiesContextProvider>
        <SinglePropertyContextProvider>
          <App />
        </SinglePropertyContextProvider>
      </FilteredPropertiesContextProvider>
    </CitiesContextProvider>
  </React.StrictMode>
);
