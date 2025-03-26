
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrapbookSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

const ScrapbookSection = ({ 
  title, 
  children, 
  className,
  animationDelay = 0 
}: ScrapbookSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsVisible(true);
        }, animationDelay);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationDelay]);

  return (
    <div 
      ref={sectionRef}
      className={cn(
        "scrapbook-section opacity-0",
        isVisible && "animate-fade-in",
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="filigree-border"></div>
      <h2 className="section-title">{title}</h2>
      <div className={cn(
        "transition-opacity duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}>
        {children}
      </div>
    </div>
  );
};

export default ScrapbookSection;
