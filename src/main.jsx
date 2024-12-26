import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterProvider } from './CounterContext.jsx'
import App from './App.jsx'
import Render from './Render.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <App />
      <Render/>
    </CounterProvider>
  </StrictMode>,
)
