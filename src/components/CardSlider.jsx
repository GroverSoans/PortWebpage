import ProjectCard from './ProjectCard'
import projects from '../constants/projects'

import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import { useEffect, useRef } from 'react'


const CardSlider = () => {
  const sliderRef = useRef(null);

  //sets postioning of slider to be center of scroll menu
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      requestAnimationFrame(() => {
        // Calculate and set the initial scroll position to the middle of the content
        const centerScrollPosition = (slider.scrollWidth - slider.clientWidth) / 2;
        slider.scrollLeft = centerScrollPosition;
      });
    }
  },[]); 


  //function to slide left 500px
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
  }

  //function to slide right 500px
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft += 200;
  }
  

  return (
    <div className='relative flex items-center w-full' >
      <TiChevronLeftOutline className='text-[#CFFF04] cursor-pointer opacity-75 hover:opacity-100 hover:scale-125' onClick={slideLeft} size={40}/>
      <div  ref={sliderRef} id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
      {/*<h3 className='absolute inset-0 flex items-center justify-center text-[#CFFF04] text-[500px] opacity-90 pointer-events-none'>Projects</h3>*/}
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
      <TiChevronRightOutline className='text-[#CFFF04] cursor-pointer opacity-75 hover:opacity-100 hover:scale-125' onClick={slideRight} size={40}/>
    </div>
    

  );
};


export default CardSlider;
