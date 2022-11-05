import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Lodgement from './pages/Lodgement'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={'/accueil'} />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:lodgementId" element={<Lodgement />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={'/404'} replace />} />
        {/*prop replace: bool
        When true, clicking the link will replace the current entry in the history stack instead of adding a new one */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
