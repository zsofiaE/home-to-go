import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import CitiesContextProvider from './Context/CitiesContext'
import PropertiesContextProvider from './Context/PropertiesContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CitiesContextProvider>
      <PropertiesContextProvider>

      <App />

      </PropertiesContextProvider>
    </CitiesContextProvider>
  </React.StrictMode>,
)
