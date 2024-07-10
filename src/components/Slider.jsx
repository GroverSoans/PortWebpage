
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const sliderContent = [
  "Neo Forge Towers",
  "Arcadian Complex",
  "Shadowline Spire",
  "Echo Nexus Habitat",
  "Cascade Enclave",
  "Prism Sector",
  "Iron Eden Colony",
  "Neo Forge Towers",
  "Arcadian Complex",
];



const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [imageNumber, setImageNumber] = useState(1);
    const totalSlides = sliderContent.length;
    const controls = useAnimation();
  
    useEffect(() => {
      const handleSlider = () => {
        const newIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 1;
        setCurrentIndex(newIndex);
  
        controls.start({
          x: `-${(newIndex - 1) * 100 / 9}%`,
          transition: { duration: 2, ease: [0.075, 0.82, 0.165, 1] },
          onStart: () => {
            setTimeout(() => {
              updateActiveSlide(newIndex);
            }, 100);
  
            setImageNumber((prevImageNumber) => prevImageNumber + 1);
            updateImages(imageNumber + 1);
          },
        });
      };
  
      const updateActiveSlide = (index) => {
        document.querySelectorAll(".title").forEach((el, idx) => {
          el.classList.toggle("active", idx === index);
        });
      };
  
      const updateImages = (newImageNumber) => {
        const imgSrc = `/src/assets/img${newImageNumber}.jpg`;
        const imgTop = document.createElement("img");
        const imgBottom = document.createElement("img");
  
        imgTop.src = imgSrc;
        imgBottom.src = imgSrc;
  
        imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
        imgBottom.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
        imgTop.style.transform = "scale(2)";
        imgBottom.style.transform = "scale(2)";
  
        document.querySelector(".img-top").appendChild(imgTop);
        document.querySelector(".img-bottom").appendChild(imgBottom);
  
        setTimeout(() => {
          imgTop.style.clipPath = "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)";
          imgBottom.style.clipPath = "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)";
          imgTop.style.transform = "scale(1)";
          imgBottom.style.transform = "scale(1)";
        }, 1000);
      };
  
      const trimExcessImages = () => {
        [".img-top", ".img-bottom"].forEach((selector) => {
          const container = document.querySelector(selector);
          const images = Array.from(container.querySelectorAll("img"));
          const excessCount = images.length - 5;
  
          if (excessCount > 0) {
            images.slice(0, excessCount).forEach((image) => container.removeChild(image));
          }
        });
      };
  
      document.addEventListener("click", handleSlider);
      updateImages(1);
      updateActiveSlide(currentIndex);
  
      return () => {
        document.removeEventListener("click", handleSlider);
      };
    }, [currentIndex, controls]);





  return (
    <body className='w-screen h-screen bg-black overflow-hidden '>
        <div className="slider w-screen h-screen">
        <motion.div 
        className="slide-titles absolute w-[300vw] h-screen flex pointer-events-none z-10"
        animate={controls}
      >
        {sliderContent.map((title, idx) => (
          <div key={idx} className="title flex-1 w-full h-full flex justify-center items-center">
            <h1 className={`text-center text-2xl font-normal text-white transition-colors duration-300 ${idx === currentIndex ? 'opacity-100' : 'opacity-20'}`}>
              {title}
            </h1>
          </div>
        ))}
            <div className="slide-images w-[550px] h-[500px] absolute pointer-events-auto opacity-50">
                <div className="img-top absolute w-full h-full transition-transform duration-1000 ease-in-out"></div>
                <div className="img-bottom img-bottom absolute w-full h-full transition-transform duration-1000 ease-in-out"></div>
            </div>
      </motion.div>
        </div>

    </body>
  )
}

export default Slider

 