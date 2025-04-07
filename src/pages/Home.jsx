import { useState } from "react";

export default function Home() {

//all'inizio movie è una lista vuota, setMovie è la funzione che ci serve ad aggiornare la lista dei film
const [movie, setMovie] = useState([]);
//searchMovie all'inizio è vuota, qui ci metteremo il testo che l'utente scriverà nella ricerca, set aggiorna il testo scritto
const [searchMovie, setSearchMovie] = useState("");

const handleSearch = () => {
  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchMovie}`
  const base_tvshow_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchMovie}`

  fetch(base_movies_api_url)
    .then((response) => response.json())
    //prendiamo i film dalla risposta e li mettiamo nella nostra lista movie. se non ci sono film, mettiamo una lista vuota
    .then((data) => {
      setMovie(data.results || []);
    })
    .catch((err) => {
      console.error(err);
    });

    fetch(base_tvshow_api_url)
    .then((response) => response.json())
    //prendiamo le serie TV dalla risposta e li mettiamo nella nostra lista movie. se non ci sono film, mettiamo una lista vuota
    .then((data) => {
      setMovie(data.results || []);
    })
    .catch((err) => {
      console.error(err);
    });
};

//definisco una funzione per ottenere le stelle, che riceve "vote" come parametro
function getStars(vote) {
  //Math.ceil arrotonda per eccesso
  //vote/2 divide il voto per 2
  const fullStars = Math.ceil(vote / 2); // da 1 a 5
  let stars = '';

  for (let i = 1; i <= 5; i++) {
    //se l'index è minore uguale a fullStars (cioè 5), il risultato è *stella piena*, altrimenti è *stella vuota*
    if (i <= fullStars) {
      stars = stars + '★';
    } else {
      stars = stars + '☆';
    }
  }
  return stars;
}

    return (
        <>
            <header>
                <img className="logo" src="./logo.png" alt="" srcSet="" />
                <div className="menu-dx">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search a movie"
                        //mostriamo il testo scritto dall'utente
                        value={searchMovie}
                        //ogni volta che l'utente scrive qualcosa, aggiorniamo searchMovie
                        onChange={e => setSearchMovie(e.target.value)}
                        />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </header>
            <h2>elenco film</h2>
            <ul>
                {/*movie è l'array che contiene i film trovati. con map prendiamo ogni film della lista e li trasforniamo in <li>*/}
                {movie.map((movie, index) => (
                  <li key={index} style={{ marginBottom: '2rem' }}>
                    <img
                      src={movie.poster_path
                          ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                          : 'https://via.placeholder.com/342x513?text=No+Image'
                      }
                      alt={movie.title}
                      style={{ width: '150px', borderRadius: '10px' }}
                    />
                    {movie.title} - {movie.original_title}
                    <div>
                      Vote: {movie.vote_average}
                      <div>{getStars(movie.vote_average)}</div>
                    </div>
                  </li>
                ))}
              </ul>
        </>
    )
}



 