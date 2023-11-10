import "./App.css";
import { Images } from "./assets/photos/Images";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SwitchBar from "./components/SwitchBar";
import NavBar from "./components/NavBar";

import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { SiteContext } from "./context/SiteContext";
import { fetchAnother } from "./store/actions.js/dataActions";
import { useDispatch } from "react-redux";

function App() {
  
  const {toggleTheme} = useContext(DarkModeContext)
  
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(fetchAnother());
}, [dispatch]);
  return (
    <div  className={`${toggleTheme==="DARK" ? "dark" : ""} w-full pt-2 bg-white text-[#252128]  dark:text-white dark:bg-[#252128;]`}>
     
      <SwitchBar />
      <NavBar/>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      </div>
     
   
  );
}

export default App;
