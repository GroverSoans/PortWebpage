import { useEffect } from 'react'
import { preLoaderAnim } from '../animations'

const PreLoader = () => {
    useEffect (()=> {
        preLoaderAnim();
    })
  return (
    <div className="preloader h-screen w-full bg-black text-white fixed bottom-0 left-0 right-0 z-50 display flex justify-center items-center overflow-hidden">
        <div className="text-container flex items-center justify-center text-center">
            <h1 className='text-[300px] font-mono font-[600]'>Welcome<span className='text-[#CFFF04]'>.</span></h1>
        </div>
    </div>
  )
}

export default PreLoader