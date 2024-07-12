import React from 'react';
import './css/styles.css';

const SplitImage = ({ src }) => {
  return (
    <div className="split-image-container relative w-[550px] h-[500px] overflow-hidden">
      <div className="relative w-full h-full">
        <div 
          className="img-half img-top absolute w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out" 
          style={{ backgroundImage: `url(${src})` }}>
        </div>
        <div 
          className="img-half img-bottom absolute w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out" 
          style={{ backgroundImage: `url(${src})`}}>
        </div>
      </div>
    </div>
  );
};

export default SplitImage;

