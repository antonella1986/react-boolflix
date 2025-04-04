import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './contexts/GlobalContext'

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
