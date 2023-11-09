import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) =>{
  
    const [theme, setTheme] = useState ("DARK");

    useEffect(() => {
        if (theme === "DARK") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, []); 

    const toggleTheme = () => {
        const newTheme = theme === "LIGHT" ? "DARK" : "LIGHT";
        setTheme(newTheme );
        if(newTheme === "DARK") {
            document.body.classList.add('dark');
          } else {
            document.body.classList.remove('dark');
          }
    };
    return (
        <DarkModeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </DarkModeContext.Provider>
    )
}

