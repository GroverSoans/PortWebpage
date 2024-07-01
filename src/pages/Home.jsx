import { LayeredWaves } from '../components/LayeredWaves'


function Home() {
  return (
    <div id = 'home' className='h-screen w-screen bg-[#2c3436]  flex'>
      <div className='grid grid-cols-5 flex-grow text-white'>
        <div className='col-span-4'>

        </div>
          <LayeredWaves/>      
      </div>
        
    </div>

        
  )
}

export default Home