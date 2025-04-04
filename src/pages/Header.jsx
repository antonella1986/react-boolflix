import { useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Header() {

    const { search, setSearch, movies, setFilteredMovies } = useState(GlobalContext)

    const handleSearch = () => {
        setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())));
    }

    return (
        <header>
            <h1>Boolflix</h1>
            <div className="searchbar">
                <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
                <button type="submit" onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
}