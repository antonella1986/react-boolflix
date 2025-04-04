import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './contexts/GlobalContext'
import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'


function App() {


  return (
    <>
      <GlobalProvider>
        <main>
          <input type="text" />
          <button placeholder="Search a movie" >Search</button>
        </main>
      </GlobalProvider>
    </>
  )
}

export default App
