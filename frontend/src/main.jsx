// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from "./components/Footer"
import Temp from './components/Temp'
import {store} from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Footer></Footer>
    <Temp></Temp>
  </Provider>,
)
