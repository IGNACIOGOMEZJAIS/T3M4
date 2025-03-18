import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
  <CartProvider>
    <App />
  </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
