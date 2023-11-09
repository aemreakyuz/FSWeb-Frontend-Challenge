import React from "react";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
function Profile() {
   const {texts} = useContext(SiteContext)

  return ( 
  <div className="w-[80%] mx-auto flex-column ">
   <hr className="h-px my-[4rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[full]"/>
   <div>

   <h3 className="text-[48px]  dark:text-[#AEBCCF] m:text-center">{texts.profile.title}</h3>   
   
   <div className="flex-column  gap-[50%]  ">
  
   <div className="flex justify-between flex-wrap items-start ">

   
   <div className="flex-column  ">
   <h3 className="text-[30px] mb-8 mt-4 dark:text-[#B7AAFF] ">{texts.profile.title}</h3>
   <div className="flex leading-[36px] ">
   <div className="font-semibold mr-[5rem] ">
   
   <p>{texts.profile.birthDateTitle}</p>
   <p>{texts.profile.locationTitle}</p>
   <p>{texts.profile.eduTitle}</p>
   <p>{texts.profile.roleTitle}</p>


   </div>
   <div>
    <p>{texts.profile.birthDate}</p>
    <p>{texts.profile.location}</p>
    <p>{texts.profile.edu}</p>
   <p>{texts.profile.role}</p>
   </div>
   </div>
   </div>
   <div className="w-[50%] m:w-screen leading-[27px]">
    <h3 className="text-[30px] mb-8 mt-4 dark:text-[#B7AAFF]">{texts.profile.aboutTitle}</h3>
    {texts.profile.about1}
    <div className="h-[2rem]"/>
    {texts.profile.about2}
   </div>
   </div>

   </div>
    
    </div>
    
   
   
  <div>

  </div>
  <hr className="h-px my-[4rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[full]"/>
  </div>)
}

export default Profile;
