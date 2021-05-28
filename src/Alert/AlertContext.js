import React, { useContext, useState } from 'react';

const AlertContext = React.createContext();
const AlertTogglecontext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const useAlertToggle = () => {
  return useContext(AlertTogglecontext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);

  const toggle = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={alert}>
      <AlertTogglecontext.Provider value={toggle}>
        {children}
      </AlertTogglecontext.Provider>
    </AlertContext.Provider>
  );
};
