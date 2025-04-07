import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { GlobalProvider, useGlobal } from './contexts/GlobalContext'
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
