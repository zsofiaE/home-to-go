import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, useParams, createRoutesFromElements, Outlet } from "react-router-dom";


import RootLayout from './layouts/RootLayout'

import HomePage from './pages/HomePage'
import SeeAllCitiesPage from './pages/SeeAllCitiesPage'
import CityDetailsPage from './pages/CityDetailsPage'
import HomeDetailsPage from './pages/HomeDetailsPage'
import Contact from './pages/Contact'
import Error from './pages/ErrorPage'

import About from './pages/About'
import TermsConditions from './pages/TermsConditions'
import PrivacyCookiePolicies from './pages/PrivacyCookiePolicies';

function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
          <Route index element={<HomePage  />} />
          <Route path='cities' element={<SeeAllCitiesPage />}/>
          <Route path='cities/:cityId' element={<CityDetailsPage />}/>
          <Route path='cities/:cityId/:homeId' element={<HomeDetailsPage  />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shortlist' elemtn={<Shortlist />} />
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

export default App
