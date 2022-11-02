import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Lodgement from './pages/Lodgement'
import About from './pages/About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logement/:id" element={<Lodgement />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={'/404'} replace />} />
        {/*prop replace: bool
        When true, clicking the link will replace the current entry in the history stack instead of adding a new one */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
