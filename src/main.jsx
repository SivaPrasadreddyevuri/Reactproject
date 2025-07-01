import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx' // Component names should be PascalCase
import Banner from './pages/banner.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Banner /> 
    
  </StrictMode>,
)
