import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from "./components/Footer"
import Temp from './components/Temp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer></Footer>
    <Temp></Temp>
  </React.StrictMode>,
)
