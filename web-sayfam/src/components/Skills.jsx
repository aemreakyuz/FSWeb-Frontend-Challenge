import React from 'react'
import { useContext } from 'react'
import {SiteContext} from "../context/SiteContext"

function Skills() {
  const{texts} = useContext(SiteContext)

  return (
    <div className='w-[80%] m-auto '>
      <h2 className='text-[48px] dark:text-[#AEBCCF]'>{texts.skillsTitle}</h2>
      <div className='flex justify-start flex-wrap gap-10 mt-8 mb-4'>
        {texts.skills.map((skill)=>(
          <div className='leading-[4rem] text-center text-[24px]'>
          <img src= {skill.image} alt=""/>
          <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills