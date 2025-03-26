
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedHeart from './AnimatedHeart';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timerId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className={cn(
      "bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-5 shadow-md border border-romance-blush opacity-0",
      isVisible && "animate-gentle-zoom",
      className
    )}>
      <div className="text-center mb-2">
        <AnimatedHeart size={24} className="mr-2" />
        <span className="font-dancing text-xl text-romance-ink">Counting down to our special day</span>
        <AnimatedHeart size={24} className="ml-2" />
      </div>
      
      <div className="flex justify-center space-x-4 md:space-x-8">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className={cn(
              "w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg bg-romance-blush font-bold text-2xl text-romance-ink relative overflow-hidden",
              isVisible && `animate-slide-in`
            )} style={{ animationDelay: `${300 + index * 100}ms` }}>
              {formatNumber(unit.value)}
              <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
            </div>
            <span className="text-xs mt-1 text-romance-ink">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
