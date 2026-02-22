import { useState } from 'react'
import './App.css'
import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false} />
    </BrowserRouter >
  )
}

export default App
