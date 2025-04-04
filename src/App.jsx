import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { GlobalProvider } from './contexts/GlobalContext'
import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'


function App() {
  const [movie, setMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const handleSearch = () => {
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchMovie}`

    fetch(base_movies_api_url)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.results || []);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <GlobalProvider>
        <main>
          <input
            type="text"
            placeholder="Search a movie"
            value={searchMovie}
            onChange={e => setSearchMovie(e.target.value)}
            />
          <button onClick={handleSearch}>Search</button>
          <ul>
            {movie.map((movie, index) => (
              <li key={index}>
                {movie.title} - {movie.original_title} ({movie.original_language}) {movie.vote_average}
              </li>
            ))}
          </ul>
        </main>
      </GlobalProvider>
    </>
  )
}

export default App
