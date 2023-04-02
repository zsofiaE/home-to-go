import { useState, useContext } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, useParams, createRoutesFromElements, Outlet } from "react-router-dom";


import RootLayout from './layouts/RootLayout'

import { CitiesContext } from "./Context/CitiesContext";
import { CityPropertiesContext } from "./Context/CityPropertiesContext";

import HomePage from './pages/HomePage'
import SeeAllCitiesPage from './pages/SeeAllCitiesPage'
import CityDetailsPage from './pages/CityDetailsPage'
import HomeDetailsPage from './pages/HomeDetailsPage'
import Shortlist from './pages/Shortlist'
import Contact from './pages/Contact'
import Error from './pages/Error'

import About from './pages/About'
import TermsConditions from './pages/TermsConditions'
import PrivacyCookiePolicies from './pages/PrivacyCookiePolicies';


function App() {

  const { cities } = useContext(CitiesContext);
  const { cityProperties } = useContext(CityPropertiesContext);

console.log(cityProperties, "APPdebug1")
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
          <Route index element={<HomePage  />} />
          <Route path='cities' element={<SeeAllCitiesPage />}/>
          <Route path='cities/:id/' element={<CityDetailsPage cities={cities}/>}/>
          <Route path='homes/:id/' element={<HomeDetailsPage  cityProperties={cityProperties}/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='shortlist' element={<Shortlist />} />
          <Route path='about' element={<About/>}/>
          <Route path='terms'element={<TermsConditions/>} />
          <Route path='privacy' element={<PrivacyCookiePolicies/>} />
          <Route path="*" element={<Error />} />
      </Route>
    )
  )
  
    return (
        <RouterProvider router={router}/>
  )

}

export default App;
