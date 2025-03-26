
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedHeart from './AnimatedHeart';

interface NavItem {
  id: string;
  label: string;
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  const navItems: NavItem[] = [
    { id: "intro", label: "Our Story" },
    { id: "how-we-met", label: "How We Met" },
    { id: "first-conversation", label: "First Conversation" },
    { id: "what-i-love", label: "What I Love" },
    { id: "countdown", label: "Countdown" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background opacity based on scroll
      setScrolled(window.scrollY > 20);
      
      // Find the current active section
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 300;
      
      for (const section of sections as NodeListOf<HTMLElement>) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" : "py-4 bg-transparent"
    )}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center overflow-x-auto no-scrollbar">
          <ul className="flex space-x-1 md:space-x-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-2 text-sm md:text-base whitespace-nowrap rounded-full transition-all duration-300 relative",
                    activeSection === item.id 
                      ? "text-romance-ink font-medium" 
                      : "text-romance-ink/70 hover:text-romance-ink"
                  )}
                >
                  {activeSection === item.id && (
                    <span className="absolute inset-x-0 -bottom-1 mx-auto w-1.5 h-1.5">
                      <AnimatedHeart size={12} />
                    </span>
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
