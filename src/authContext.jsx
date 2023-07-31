import { createContext, useContext, useState } from "react";

const authContext = createContext({});

function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return JSON.parse(window.localStorage.getItem("isAuthenticated")) || false;
  });
  function updateIsAuthenticated(newValue) {
    // const dbReference = "nnjwrgbpiytdeqrhmmna";

    setIsAuthenticated(newValue);
    window.localStorage.setItem("isAuthenticated", JSON.stringify(newValue));
  }
  const contextObject = {
    isAuthenticated,
    updateIsAuthenticated,
  };
  return (
    <authContext.Provider value={contextObject}>
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  const { isAuthenticated, updateIsAuthenticated } = useContext(authContext);
  return { isAuthenticated, updateIsAuthenticated };
}

export default AuthContextProvider;
