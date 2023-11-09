import React from "react";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
function Profile() {
   const {texts} = useContext(SiteContext)

  return ( 
  <div className="w-[80%] mx-auto flex-column ">
   <hr className="h-px my-[4rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[full]"/>
   <div>

   <h3 className="text-[48px] mb-[2rem]">{texts.profile.title}</h3>   
   
   <div className="flex-column  gap-[50%] ">
  
   <div className="flex justify-between flex-wrap items-start">

   
   <div className="flex-column  ">
   <h3 className="text-[30px] mb-8 mt-4">{texts.profile.title}</h3>
   <div className="flex">
   <div className="text-weight-600 mr-[5rem] ">
   
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
   <div className="w-[50%]">
    <h3 className="text-[30px] mb-8 mt-4">{texts.profile.aboutTitle}</h3>
    {texts.profile.about1}
    <div className="h-[2rem]"/>
    {texts.profile.about2}
   </div>
   </div>

   </div>
    
    </div>
    
   
   
  <div>

  </div>
  </div>)
}

export default Profile;
