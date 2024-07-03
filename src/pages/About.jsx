import LogoSlider from "../components/LogoSlider"

const About = () => {
  return (
    <div id='about' className='bg-white h-screen w-screen flex flex-col justify-between'>
      <div>
        {/* Transition elements in an out from the left and right that has information reguarding my skills */}
      </div>
      <h1 id='about' className='absolute justify-center items-center font-extrabold text-black opacity-30 text-[470px] pt-20'>About<span className='text-[#CFFF04]'>.</span></h1>
      <div className="relative">
        <LogoSlider/>
      </div>
    </div>

  )
}

export default About