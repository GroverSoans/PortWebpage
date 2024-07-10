

import CardSlider from '../components/CardSlider';

function Projects() {
  return (
    
    <div id='projects' className='bg-[#2c3436] h-screen w-screen'>
      <header className='pl-10 text-white pt-24'>
        <h1 className='text-4xl font-bold inline-block border-b-4 border-[#CFFF04] pb-1'>Featured Projects<span className='text-[#CFFF04]'>.</span></h1>
        <h2 className='font-bold pb-6'>Section dedicated to showcasing a few projects I have completed<span className='text-[#CFFF04]'>.</span></h2>
      </header>
      <div className='bg-gradient-to-t from-black via-white to-black py-4'>
        <CardSlider/>
      </div>
      <footer className='text-white text-center text-balance pt-8 font-semibold px-10'>
        <p>Here, you'll find a collection of my most significant and innovative works, showcasing my skills in software development.
           Each project highlights my journey through problem-solving, design, and implementation, reflecting my passion for coding
            and continuous learning. Explore the details, browse the code on GitHub, and see live demos to get a deeper understanding
             of my work.
        </p>

      </footer>
    </div>
  )
}
export default Projects;