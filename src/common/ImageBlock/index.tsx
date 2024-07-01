import React, { ReactNode } from 'react';

interface ImageBlockProps {
  children: ReactNode;
  width?: string;
  height?: string;
  backgroundColor?: string;
  
}

const ImageBlock: React.FC<ImageBlockProps> = ({
  children,
  width = '100px',
  height = '100px',
  backgroundColor = 'transparent',
  
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>{children}</div>
    </div>
  );
};

export default ImageBlock;