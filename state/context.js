import React, { useState, useContext, useReducer, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        tabs,
        setTabs,
        selectedTab,
        setSelectedTab,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
