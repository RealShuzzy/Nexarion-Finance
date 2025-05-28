import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App_Routes from './routes/routes.tsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App_Routes	/>
    </HashRouter>
  </StrictMode>
)
