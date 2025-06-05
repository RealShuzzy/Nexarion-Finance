import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './layouts/AppLayout.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Budget } from './components/Budget.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Budget" element={<Budget/>}/>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
