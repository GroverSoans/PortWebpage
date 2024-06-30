import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../constants/projects'

import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";


const CardSlider = () => {




  return (
    <div className='relative flex items-center overflow-x-auto '>
      
      <div id='slider' className='flex flex-nowrap gap-4 p-4'>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSlider;
