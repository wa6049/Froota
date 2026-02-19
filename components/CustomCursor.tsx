
import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  const cursorImg = (!imgError && ASSETS.DRAGON_FRUIT) 
    ? ASSETS.DRAGON_FRUIT 
    : "https://img.icons8.com/color/96/dragon-fruit.png";

  return (
    <div 
      className="fixed pointer-events-none z-[9999] flex items-center justify-center will-change-transform"
      style={{ 
        left: position.x, 
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div 
        className="transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${isHovering ? 1.6 : 1}) rotate(${isHovering ? '15deg' : '0deg'})`,
        }}
      >
        <img 
          src={cursorImg} 
          alt="cursor" 
          onError={() => setImgError(true)}
          className="w-11 h-11 drop-shadow-[0_10px_20px_rgba(233,44,108,0.5)]"
        />
      </div>
      
      {/* Glow background using the new brand pink */}
      <div 
        className={`absolute inset-0 bg-froota-pink/30 blur-2xl rounded-full transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: '80px', height: '80px' }}
      ></div>
    </div>
  );
};

export default CustomCursor;
