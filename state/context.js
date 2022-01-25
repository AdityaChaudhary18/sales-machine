import React, { useState, useContext, useReducer, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedtab] = useState(null);
  return (
    <AppContext.Provider value={{ tabs, setTabs, selectedTab, setSelectedtab }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
