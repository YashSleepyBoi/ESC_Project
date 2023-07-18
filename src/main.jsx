import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hotel from './Pages/Room_Page/Hotel.jsx'
import './index.css'
import Room from './Pages/Room_Page/Room.jsx'
import Room_Reserve from './Pages/Room_Page/Room_Reserve.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Room_Reserve/>
  </React.StrictMode>,
)
