import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../constants/projects'


const CardSlider = () => {
  return (
    <div>
      {projects.map((projects) => (
        <ProjectCard 
          key={projects.id}
          title={projects.title}
          image={projects.image}
          description={projects.description}
          githubLink={projects.githubLink}
          demoLink={projects.demoLink}
          />
      ))}
    </div>

  )
}

export default CardSlider