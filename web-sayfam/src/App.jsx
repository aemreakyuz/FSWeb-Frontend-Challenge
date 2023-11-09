import "./App.css";
import { Images } from "./assets/photos/Images";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SwitchBar from "./components/SwitchBar";
import NavBar from "./layouts/NavBar";



function App() {
  
  
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
