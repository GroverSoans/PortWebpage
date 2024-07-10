
import Footer from "../components/Footer"



const Contact = () => {


  return (
    <div id='contact' className='bg-green-200 h-screen w-screen overflow-hidden flex flex-col justify-between'>
      <div>
        {/* Transition elements in an out from the left and right that has information reguarding my skills */}
      </div>
      <div className='absolute flex  items-center font-extrabold text-black leading-none w-full h-full'>
      <h1 className="p-6 w-2/3">
        <span className="text-[240px]">Connect<span className='text-[#CFFF04]'>.</span></span>
        <br />
        <span className="text-[240px]">With<span className='text-[#CFFF04]'>.</span></span>
        <br />
        <span className='text-[240px]'>Me<span className='text-[#CFFF04]'>.</span></span>
      </h1>
      <div className='flex justify-center items-center w-1/3 h-full'>
      <button className='transform -rotate-90 py-4 px-8 bg-blue-500 text-white text-2xl rounded-full'>
        <span className='block'>Contact Form</span>
      </button>
      </div>
      
      </div>
      


      <div className="relative">
        <Footer/>
      </div>
    </div>
  )
}   

export default Contact