import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext(undefined);

const GlobalContextProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const value = {
    role,
    setRole,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export default GlobalContextProvider;
