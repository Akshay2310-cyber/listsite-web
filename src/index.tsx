
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App.tsx'

// This is an alternative entry point request in the structure. 
// Standard Vite apps use main.tsx. 
// If specific tooling requires index.tsx, it can be used here.
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
