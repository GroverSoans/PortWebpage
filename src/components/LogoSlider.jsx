import './css/scroll.css'
import { RiJavaFill } from "react-icons/ri";
import { SiMicrosoftazure, SiFirebase, SiTailwindcss, SiDjango, SiReact, SiNodedotjs,
    SiMongodb, SiBootstrap, SiGit, SiGithub, SiHtml5, SiCss3, SiJavascript, SiPython,
    SiCplusplus } from "react-icons/si";


const LogoSlider = () => {



const items = [
  { word:"Java", icon: <RiJavaFill/> },
  { word:"Microsoft Azure", icon: <SiMicrosoftazure/> },
  { word:"Google Firebase", icon: <SiFirebase/> },
  { word:"Tailwind CSS", icon: <SiTailwindcss/> },
  { word:"Django", icon: <SiDjango/> },
  { word:"React", icon: <SiReact/> },
  { word:"NodeJs", icon: <SiNodedotjs/> },
  { word:"Mongodb", icon: <SiMongodb/> },
  { word:"Bootstrap", icon: <SiBootstrap/> },
  { word:"Git", icon: <SiGit/> },
  { word:"HTML5", icon: <SiHtml5/> },
  { word:"CSS", icon: <SiCss3/> },
  { word:"Github", icon: <SiGithub/> },
  { word:"Javascript", icon: <SiJavascript/> },
  { word:"Python", icon: <SiPython/> },
  { word:"C++", icon: <SiCplusplus/> },
];

return (
  <div className="bottom-7 overflow-hidden w-full h-20 bg-black relative ">
    <div className="absolute top-0 left-0 w-full h-full flex animate-scroll">
      <div className="flex items-center">
        {items.map((item, index) => (
            <div
              key={index}
              className="w-auto h-10 bg-black p-3 m-3 flex items-center justify-center text-white text-nowrap rounded-md hover:scale-125"
            >
              <div className="mr-1 text-[#CFFF04]">{item.icon}</div>
              <span>{item.word}</span>           
            </div>
          ))}
          {items.map((item, index) => (
            <div
              key={`${index}-duplicate`}
              className="w-auto h-10 bg-black p-3 m-3 flex items-center justify-center text-white text-nowrap rounded-md hover:scale-125"
            >
              <div className="mr-1 text-[#CFFF04]">{item.icon}</div>
              <span>{item.word}</span>
            </div>
          ))}
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none"></div>
  </div>
  )
};


export default LogoSlider

