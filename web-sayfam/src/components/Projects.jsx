import React from "react";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

function Projects() {

  const {texts} = useContext(SiteContext)

  return ( 
  <div className="w-[80%] mx-auto">
    Projects
  <div>

  </div>
  </div>)
}

export default Projects;
