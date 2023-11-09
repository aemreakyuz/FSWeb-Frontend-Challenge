import React from "react";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

function Projects() {

  const {texts} = useContext(SiteContext)

  return ( 
  <div className="w-[80%] mx-auto mb-[7rem]">
    <h3 className="text-[48px] mb-8 dark:text-[#AEBCCF]">{texts.projectsTitle}</h3>
    <div className="flex justify-between flex-wrap gap-4 ">
    {texts.projects.map((project)=>(
      <div  className="w-[300px] leading-[20px]">
      <img   src={project.image} alt={project.title}  />
      <div className=""> 
        <h3 className="text-[30px] dark:text-[#CFCBFF] py-4">{project.title} </h3>
        <p className="mb-8">{project.description}</p>
        <div className="flex gap-4 mb-8 w-[300px] flex-wrap">
        {project.skills.map((skill, index) => (
  <span className="flex-row px-[18px] py-[6px] rounded border-solid border-2 dark:border-[#8F88FF] dark:bg-[#383838]" key={index}>{skill}</span>
))}
</div>
<div className="flex justify-between underline dark:text-[#8F88FF] ">
        <a  href="https://github.com/aemreakyuz">{project.github}</a>
        <a  href="https://workintech.com.tr/">{project.view}</a>


        </div>
      </div>
      </div>
      
    ))}
    </div>
  <div>

  </div>
  </div>)
}

export default Projects;
