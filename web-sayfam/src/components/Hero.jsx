import React from "react";
import { Images } from "../assets/photos/Images";
import "./Hero.css"
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import "../index.css"
function Hero() {

  const {texts} = useContext(SiteContext)
  return (
    <div className="w-[80%] mx-auto flex-column flex-wrap items-start mt-[8rem] justify-between min relative min-h-[80vh]">
      <div className="flex items-center  ">
        <hr className="h-px mr-[1rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[6.375rem]"/>
        <h1 className="text-indigo-800 dark:text-[#B7AAFF]">Emre Akyüz</h1>
        
      </div>
    <div className="flex flex-wrap justify-between mt-8 m:w-full m:justify-center">
      <div className="w-[57%] m:w-screen m:text-center ">
          <h2 className="light-text-header-bold dark:text-[#AEBCCF] text-[4.5rem] leading-[4.5rem] ">{texts.hero.title[0]} <br/>
          {texts.hero.title[1]}</h2>
          <div className="h-[2rem]"/>
          <p className="light-text-paragraph-medium leading-[1.75rem] dark:text-white">{texts.hero.description}</p>
          <div className="h-[2rem]"/>
          <div className="flex gap-4 text-[18px] m:justify-center">
          <a href="mailto:aemreakyuz@gmail.com" className="button-hire  text-[#E1E1FF] border-indigo-800 bg-indigo-800 hover:bg-[#E1E1FF] hover:text-indigo-800 dark:bg-[#E1E1FF] dark:text-indigo-800 dark:hover:bg-indigo-800 dark:hover:text-[#E1E1FF]">
            {texts.nav.hire}</a>
          <a href= "https://github.com/aemreakyuz" className="button-light flex items-center justify-center gap-2 dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:bg-[#383838;]" ><img className="w-[24px]" src={Images.socials.githubLogo} alt=""/> Github</a>
          <a href="https://www.linkedin.com/in/emreakyuz1/" className=" button-light flex items-center justify-center gap-2 dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:bg-[#383838;]">
          <img className="w-[24px] h-[25px]   fill-[#3730A3]" src={Images.socials.linkedinLogo} alt=""/> LinkedIn</a>
          </div>
      </div>
          <img className="pl-4 pt-4 w-[29.75rem]" src={Images.profile.profilePhoto} alt=""/>
         
    </div>
   

        
  </div>
  );
}

export default Hero;
