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
        setTheme(newTheme);
        localStorage.setItem("darkMode", JSON.stringify(newTheme));
        if(newTheme === "DARK") {
            document.body.classList.add('dark');
          } else {
            document.body.classList.remove('dark');
          }
    };

    useEffect(() => {
        const themeLS = JSON.parse(localStorage.getItem("darkMode"));
        if(themeLS) {
            setTheme(themeLS);
            document.body.classList.toggle('dark', themeLS === 'DARK');
        }
    }, []);
    return (
        <DarkModeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </DarkModeContext.Provider>
    )
}

