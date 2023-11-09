import React from 'react'
import { useContext } from 'react'
import {SiteContext} from "../context/SiteContext"

function Skills() {
  const{texts} = useContext(SiteContext)

  return (
    <div className='w-[80%] m-auto mt-12'>
      <h2 className='text-[48px] dark:text-[#AEBCCF] m:text-center'>{texts.skillsTitle}</h2>
      <div className='flex justify-start flex-wrap gap-10 mt-8 mb-4  m:w-full m:justify-center '>
        {texts.skills.map((skill, index)=>(
          <div className='leading-[4rem] text-center text-[24px]' key={index}>
          <img className="w-[120px]" src= {skill.image} alt=""/>
          <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills