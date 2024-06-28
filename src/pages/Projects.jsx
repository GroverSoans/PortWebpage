import React from 'react'

import CardSlider from '../components/CardSlider';

function Projects() {
  return (
    <div id='projects' className='bg-red-400 h-screen w-screen flex'>
        <div className='grid grid-rows-9 flex-grow'>
          {/*Top div element */}
          <div className='grid row-start-1 row-span-2 '>
            <h1 className='grid row-start-2 justify-center items-center text-white font-bold text-2xl'>
              Projects.
            </h1>

          </div>
          <div className='grid row-start-3 row-span-5 items-center justify-center'>
            <CardSlider/>
          </div>
          <div className='grid row-start-8 row-span-2 '>

          </div>
        </div>
    </div>
  )
}
export default Projects;