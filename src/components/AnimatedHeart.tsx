
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeartProps {
  className?: string;
  size?: number;
  color?: string;
  pulseSpeed?: 'slow' | 'normal' | 'fast';
}

const AnimatedHeart = ({ 
  className, 
  size = 20, 
  color = "#FFC2C2",
  pulseSpeed = 'normal'
}: AnimatedHeartProps) => {
  const getPulseClass = () => {
    switch (pulseSpeed) {
      case 'slow':
        return 'animate-[heartbeat_2.5s_ease-in-out_infinite]';
      case 'fast':
        return 'animate-[heartbeat_1s_ease-in-out_infinite]';
      default:
        return 'animate-heartbeat';
    }
  };

  return (
    <div className={cn("inline-block", getPulseClass(), className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          stroke={color === "#FFC2C2" ? "#FF9A9A" : "none"}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default AnimatedHeart;
