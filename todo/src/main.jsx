import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TryProvider } from './contex/TryContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TryProvider>
    <App />
    </TryProvider>
  </StrictMode>,
)
