
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SplitImage from './SplitImage';

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
          updateImages(newIndex);
        },
      });
    };

    const updateActiveSlide = (index) => {
      document.querySelectorAll(".title").forEach((el, idx) => {
        el.classList.toggle("active", idx === index);
      });
    };

    const updateImages = (index) => {
      const imgSrc = `/src/assets/img${index}.jpg`;
      const imgTopContainer = document.querySelector(".img-top");
      const imgBottomContainer = document.querySelector(".img-bottom");

      // Clear the containers before adding the new image
      imgTopContainer.innerHTML = '';
      imgBottomContainer.innerHTML = '';

      const imgTop = document.createElement("img");
      const imgBottom = document.createElement("img");

      imgTop.src = imgSrc;
      imgBottom.src = imgSrc;

      imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
      imgBottom.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
      imgTop.style.transform = "scale(2)";
      imgBottom.style.transform = "scale(2)";

      imgTopContainer.appendChild(imgTop);
      imgBottomContainer.appendChild(imgBottom);

      setTimeout(() => {
        imgTop.style.clipPath = "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)";
        imgBottom.style.clipPath = "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)";
        imgTop.style.transform = "scale(1)";
        imgBottom.style.transform = "scale(1)";
      }, 1000);
    };

    document.addEventListener("click", handleSlider);
    updateImages(currentIndex);
    updateActiveSlide(currentIndex);

    return () => {
      document.removeEventListener("click", handleSlider);
    };
  },);

  return (
    <div className='w-screen h-screen bg-black overflow-hidden'>
      <div className="slider w-screen h-screen justify-center">
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
        </motion.div>
            <div className="w-full h-full flex justify-center items-center">
                <SplitImage src = "/src/assets/img${index}.jpg" />
          </div>
      </div>
    </div>
  );
}

export default Slider;
