
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypewriterText = ({ 
  text, 
  className,
  speed = 50,
  delay = 0
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        setStartTyping(true);
      }, delay);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, delay]);

  useEffect(() => {
    if (!startTyping) return;
    
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, index));
      index++;
      
      if (index > text.length) {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, startTyping]);

  return (
    <div ref={elementRef} className={cn("font-playfair relative", className)}>
      <span>{displayText}</span>
      {displayText.length < text.length && startTyping && (
        <span className="inline-block w-1 h-5 bg-romance-ink ml-1 animate-cursor-blink" />
      )}
    </div>
  );
};

export default TypewriterText;
