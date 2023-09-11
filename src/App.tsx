import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RoutesConfig from './RoutesConfig'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <BrowserRouter>
    <RoutesConfig />
    <ToastContainer position='bottom-right' />
  </BrowserRouter>
)

export default App
