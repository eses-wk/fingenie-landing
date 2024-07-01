import React from 'react';

interface PngImgProps {
  src: string;
  width: string;
  height: string;
}

const PngImg: React.FC<PngImgProps> = ({ src, width, height }) => {
  return (
    <img
      src={`/img/png/${src}`}
      alt={src}
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default PngImg;