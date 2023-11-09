import { createContext, useState } from "react";
import {Data} from "../assets/data/Data.jsx"

export const SiteContext = createContext()

export const SiteContextProvider = ({children}) =>{
    const [lang, setLang] = useState("en");
   
    const localizedTexts = Data;

    const texts = localizedTexts[lang];
    
    const toggleLang = () => {
        setLang(lang==="en" ? "tr" : "en");
    }

    return (
        <SiteContext.Provider value = {{lang, toggleLang, texts}}>
            {children}
        </SiteContext.Provider>
    )
}

