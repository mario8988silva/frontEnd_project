import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import './assets/reset.css';
import './assets/style.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
