import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { GlobalProvider } from './contexts/GlobalContext'

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
                {movie.title} - {movie.original_title}
                (<img
                  src={`https://flagcdn.com/w40/${movie.original_language}.png`}
                  alt={movie.original_language}
                  style={{ maxWidth: "20px" }}
                />)
                {movie.vote_average}
              </li>
            ))}
          </ul>
        </main>
      </GlobalProvider>
    </>
  )
}

export default App
