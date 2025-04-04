import { createContext } from "react";
import { useEffect } from "react";

const GlobalContext = createContext();

export default GlobalContext;

export const GlobalProvider = ({ children }) => {

    useEffect(() => {
        fetch("https://developers.themoviedb.org/3")
            .then(res => res.json())
            .then(data => setSearch(data))
            .catch(err => console.error(err))
    }, []);


    return (
        <GlobalContext.Provider value={{}}>
        {children}
        </GlobalContext.Provider>
    );
}