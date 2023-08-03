import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Hotel from './Pages/Room_Page/Hotel.jsx'
import './index.css'
import Room from './Pages/Room_Page/Room.jsx'
import Home from "/src/Pages/Home_Page/Home.jsx"
import { BrowserRouter } from 'react-router-dom'
import Room_Reserve from './Pages/Room_Page/Room_Reserve.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
