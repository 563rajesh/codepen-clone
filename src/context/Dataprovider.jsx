import { createContext, useState } from "react";

export const DataContext = createContext();

const Dataprovider = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <DataContext.Provider
      value={{
        html,
        css,
        js,
        setCss,
        setHtml,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;
