import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

import CitiesContextProvider from './Context/CitiesContext'
import CityPropertiesContextProvider from './Context/CityPropertiesContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CitiesContextProvider>
      <CityPropertiesContextProvider>
      <App />
      </CityPropertiesContextProvider>
    </CitiesContextProvider>
  </React.StrictMode>,
)
