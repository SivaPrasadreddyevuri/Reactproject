import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx' // Component names should be PascalCase


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar /> {/* Render the navbar component */}  
    {/* <App /> */}
  </StrictMode>,
)
