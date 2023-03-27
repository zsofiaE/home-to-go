import React, { useState } from "react";

import HomePage from "./pages/HomePage";
import SeeAllCitiesPage from "./pages/SeeAllCitiesPage";
import CityDetailsPage from "./pages/CityDetailsPage";
import HomeDetailsPage from "./pages/HomeDetailsPage";
import CitiesApi from "./components/citiesApi_cmp";

function App() {
  const [count, setCount] = useState(0);

    return (
    <div className="App">
      <h1>home to go</h1>

      <div>
        <HomePage />
        <CitiesApi />
        <SeeAllCitiesPage />
        <CityDetailsPage />
        <HomeDetailsPage />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
