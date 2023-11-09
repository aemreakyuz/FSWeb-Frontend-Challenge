import React from "react";
import { Images } from "../assets/photos/Images";
import "./Hero.css"

function Hero() {
  return (
    <div className="w-[80%] mx-auto flex-column flex-wrap items-start mt-[8rem] justify-between min relative">
      <div className="flex items-center  ">
        <hr className="h-px mr-[1rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[6.375rem]"/>
        <h1 className="text-indigo-800 dark:text-[#B7AAFF]">Emre Akyüz</h1>
        
      </div>
    <div className="flex flex-wrap justify-between mt-8">
      <div className="w-[57%]">
          <h2 className="text-gray-800 dark:text-[#AEBCCF] text-[4.5rem] leading-[4.5rem] ">Creative Thinker <br/>
          Minimalism Lover</h2>
          <div className="h-[2rem]"/>
          <p className="text-[1.125rem] leading-[1.75rem]">Hi, I'm Emre. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.</p>
          <div className="h-[2rem]"/>
          <div className="flex gap-4 text-[18px]">
          <button className="button-hire text-[#E1E1FF] border-indigo-800 bg-indigo-800 dark:bg-[#E1E1FF] dark:text-indigo-800">
            Hire Me</button>
          <a href="https://github.com/aemreakyuz" className=" button-light flex items-center justify-center gap-2 dark:text-[#E1E1FF] dark:border-[#E1E1FF]" ><img className="w-[24px]" src={Images.socials.githubLogo} alt=""/> Github</a>
          <a href="https://www.linkedin.com/in/emreakyuz1/" className=" button-light flex items-center justify-center gap-2 dark:text-[#E1E1FF] dark:border-[#E1E1FF]">
          <img className="w-[24px] h-[25px] fill-[#3730A3]" src={Images.socials.linkedinLogo} alt=""/> LinkedIn</a>
          </div>
      </div>
          <img className="pl-4 pt-4 w-[29.75rem]" src={Images.profile.profilePhoto} alt=""/>
         
    </div>
   

        
  </div>
  );
}

export default Hero;
