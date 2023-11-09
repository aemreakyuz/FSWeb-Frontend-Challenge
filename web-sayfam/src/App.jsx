import "./App.css";
import { Images } from "./assets/photos/Images";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SwitchBar from "./components/SwitchBar";
import NavBar from "./layouts/NavBar";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { SiteContext } from "./context/SiteContext";
function App() {
  
  const {theme} = useContext(DarkModeContext)
  const {lang} = useContext(SiteContext)

  const skillsData = [
    { image: Images.skills.jsLogo, title: "JAVASCRIPT" },
    { image: Images.skills.reactLogo, title: "REACT" },
    { image: Images.skills.reduxLogo, title: "REDUX" },
    { image: Images.skills.nodeLogo, title: "NODE" },
    { image: Images.skills.vsCodeLogo, title: "VSCODE" },
    { image: Images.skills.figmaLogo, title: "FIGMA" },
  ];
  return (
    <div className={`w-full pt-2 bg-white text-[#252128]  dark:text-white dark:bg-[#252128;]`}>
      
      <SwitchBar/>
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
