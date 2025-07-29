import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NotesProvider } from './context/notesContext.jsx'
import { AnimationProvider } from './context/animationContext.jsx'
import { ThemeProvider } from './context/themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NotesProvider>
      <AnimationProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AnimationProvider>
    </NotesProvider>
    </BrowserRouter>
  </StrictMode>,
)
