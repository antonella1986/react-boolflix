import { createContext } from "react";

const GlobalContext = createContext();

export default GlobalContext;

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
}