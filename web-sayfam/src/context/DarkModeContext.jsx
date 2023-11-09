import { createContext, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) =>{
  
    const [theme, setTheme] = useState ("LIGHT");
    const toggleTheme = () => {
        
        setTheme(currentTheme => {
            
            return currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT';
        });
    };
    return (
        <DarkModeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </DarkModeContext.Provider>
    )
}

