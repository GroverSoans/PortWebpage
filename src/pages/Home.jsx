import React from 'react'
import { LayeredWaves } from '../components/LayeredWaves'


function Home() {
  return (
    <div id = 'home' className='h-screen w-screen  flex'>
      <div className='grid grid-cols-5 flex-grow text-white'>
        <div className=' bg-red-300 col-span-4'>

        </div>
          <LayeredWaves/>      
      </div>
        
    </div>

        
  )
}

export default Home