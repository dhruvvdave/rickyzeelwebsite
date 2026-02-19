import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { GuestProvider } from './context/GuestContext.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GuestProvider>
        <App />
      </GuestProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
