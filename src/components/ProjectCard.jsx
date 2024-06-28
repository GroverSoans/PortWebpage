import React from 'react'
import PropTypes from 'prop-types';

import { FaChrome, FaGithub } from "react-icons/fa";

//Function to build project card component
const ProjectCard = ({ title, image, description, githubLink, demoLink }) => {
  return (
    <div id="card" className=" container relative flex flex-col h-[475px] w-[400px] bg-[#2c3436] rounded-2xl">
        <div className="h-1/2">
            <img className="w-full h-full p-2 object-cover rounded-t-2xl" src={image} alt="Project Image"/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-white text-3xl font-bold my-1">{title}<span className='text-[#CFFF04]'>.</span></h2>
            <p className="text-white text-center px-2">{description}</p>
        </div>
        <button href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center absolute bottom-4 left-4 rounded-full border-4 border-[#CFFF04] text-white bg-transparent px-4 py-2 font-bold h-12">
            Github Repository<FaGithub className='text-xl ml-3'/>
        </button>
        <button href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center absolute bottom-4 right-4 rounded-full border-4 border-[#CFFF04] text-white bg-transparent px-4 py-2 font-bold h-12">  
            Demo <FaChrome className='text-xl ml-3'/>
        </button>
    </div>

  )
};

//Prop Validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
};



export default ProjectCard