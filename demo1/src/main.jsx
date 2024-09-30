import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkContext, DarkContextProvider } from './contexts/DarkContext.jsx'
import { ReviewsProvider } from './components/ReviewsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewsProvider>
    <DarkContextProvider>
    <App />
    </DarkContextProvider>
    </ReviewsProvider>
  </StrictMode>,
)
