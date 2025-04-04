import { createContext, useContext } from "react";
import { useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState("");

    return (
        <GlobalContext.Provider
            value={{
                movies,
                setMovies,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

//definisco la funzione useGlobal per utilizzare il contesto in altri componenti
//questa funzione mi permette di accedere al contesto in altri componenti
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}
//esporto il contesto e la funzione useGlobal
//in questo modo posso utilizzare il contesto in altri componenti
export {GlobalProvider, useGlobal}








/* export default GlobalContext;

export const GlobalProvider = ({ children }) => {

    useEffect(() => {
        fetch()
            .then(res => res.json())
            .then(data => setSearch(data))
            .catch(err => console.error(err))
    }, []);


    return (
        <GlobalContext.Provider value={{}}>
        {children}
        </GlobalContext.Provider>
    );
} */

/* "https://developers.themoviedb.org/3/apy_key=9a9ff049c4dbaad0ec878d76120e8689" */