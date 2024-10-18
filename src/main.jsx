import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import './header.css';
import './guide.css';
import './css/main.css';
import './css/input.css';
import './css/items.css';
import './css/buttons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
