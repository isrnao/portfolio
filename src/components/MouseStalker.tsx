// src/components/MouseStalker.tsx

import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/MouseStalker.module.css';

const MouseStalker: React.FC = () => {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const stalkerPosition = useRef({ x: 0, y: 0 });
  const stalkerRef = useRef<HTMLDivElement>(null);

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setTargetPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const updatePosition = () => {
      // 徐々に目標位置に近づける
      stalkerPosition.current.x = lerp(stalkerPosition.current.x, targetPosition.x, 0.1);
      stalkerPosition.current.y = lerp(stalkerPosition.current.y, targetPosition.y, 0.1);

      if (stalkerRef.current) {
        stalkerRef.current.style.transform = `translate(${stalkerPosition.current.x}px, ${stalkerPosition.current.y}px)`;
      }

      // 常にアニメーションを更新し続ける
      requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [targetPosition]);

  return (
    <div
      ref={stalkerRef}
      className={styles.stalker}
      style={{
        backgroundImage: 'url("/stoker.gif")',
        backgroundSize: 'cover',
      }}
    />
  );
};

export default MouseStalker;
