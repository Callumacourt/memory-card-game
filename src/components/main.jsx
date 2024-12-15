import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/Users/callu/projects/memory-card-game/styling/App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
