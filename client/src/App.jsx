// File: client/src/App.jsx

import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AboutPage from './pages/About/AboutPage'
import HomePage from './pages/Home/HomePage'
import TopupPage from './pages/Topup/TopupPage'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position='top-center' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='topup' element={<TopupPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
