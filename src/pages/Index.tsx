
import React, { useEffect, useState } from 'react';
import TypewriterText from '@/components/TypewriterText';
import ScrapbookSection from '@/components/ScrapbookSection';
import CountdownTimer from '@/components/CountdownTimer';
import AnimatedHeart from '@/components/AnimatedHeart';
import Navbar from '@/components/Navbar';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  // Set April 4th as our target date
  const targetDate = new Date('2024-04-04T00:00:00');
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full pb-20">
      <Navbar />

      <div className="scrapbook-page">
        {/* Hero Section */}
        <section id="intro" className="min-h-[90vh] flex flex-col items-center justify-center py-20">
          <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-dancing font-bold mb-4 text-romance-ink animate-soft-glow">
              Our Love Story
            </h1>
            <div className="w-24 h-0.5 bg-romance-rose mx-auto my-5 opacity-60"></div>
            <TypewriterText 
              text="A digital scrapbook of our tender beginnings..."
              className="text-xl md:text-2xl italic text-romance-ink/90 mt-4"
              delay={1000}
            />
            <div className="mt-8 flex justify-center space-x-3">
              <AnimatedHeart size={28} pulseSpeed="slow" />
              <AnimatedHeart size={28} />
              <AnimatedHeart size={28} pulseSpeed="fast" />
            </div>
            <p className="mt-8 text-sm text-romance-ink/70 max-w-md mx-auto">
              Scroll down to explore the cherished memories 
              of our first meeting on April 4th
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              className="opacity-50">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </section>

        {/* How We Met Section */}
        <section id="how-we-met" className="py-16">
          <ScrapbookSection 
            title="How We Met" 
            className="bg-gradient-to-br from-white to-romance-cream"
            animationDelay={200}
          >
            <div className="space-y-6">
              <TypewriterText
                text="It was a serendipitous encounter that changed my life forever..."
                className="text-lg italic text-romance-ink/80 mb-6"
                delay={500}
              />
              
              <p className="leading-relaxed">
                On a seemingly ordinary day, fate had extraordinary plans for us. 
                I still remember every detail of that moment when our eyes first met - 
                the gentle spring breeze, the soft afternoon light, and that inexplicable 
                feeling that something significant was about to happen.
              </p>
              
              <div className="love-note">
                "Some meetings are not by chance. They are destined to change our entire world."
              </div>
              
              <p className="leading-relaxed">
                There was something special about you from the very beginning - 
                the way you smiled, how you tucked your hair behind your ear when you were 
                thinking, and that sparkle in your eyes that I've come to adore so deeply.
              </p>
              
              <p className="leading-relaxed">
                Little did I know that this chance encounter would be the beginning 
                of the most beautiful chapter of my life. Looking back, I can see how all the 
                paths I've walked led me to that perfect moment when our worlds collided.
              </p>
            </div>
          </ScrapbookSection>
        </section>

        {/* First Conversation Section */}
        <section id="first-conversation" className="py-16">
          <ScrapbookSection 
            title="Our First Conversation" 
            className="bg-gradient-to-br from-white to-romance-soft"
            animationDelay={300}
          >
            <div className="space-y-6">
              <TypewriterText
                text="The first words between us sparked a connection that would grow into something beautiful..."
                className="text-lg italic text-romance-ink/80 mb-6"
                delay={600}
              />
              
              <p className="leading-relaxed">
                Do you remember our first conversation? How nervous I felt, trying to find the right 
                words while being completely captivated by you. There was an immediate comfort 
                between us, as if we'd known each other in another lifetime.
              </p>
              
              <div className="bg-romance-blush/20 rounded-lg p-5 border border-romance-blush/30 my-6">
                <p className="font-dancing text-lg">"Hello..."</p>
                <p className="text-right font-dancing text-lg mt-3">"Hi there..."</p>
                <div className="w-full flex justify-center my-4">
                  <AnimatedHeart size={20} className="opacity-70" />
                </div>
                <p className="font-dancing text-lg">
                  "I couldn't help but notice you. Would you mind if I joined you?"
                </p>
                <p className="text-right font-dancing text-lg mt-3">
                  "I'd like that very much..."
                </p>
              </div>
              
              <div className="love-note">
                "In those first few words, I felt the universe conspiring to bring us together."
              </div>
              
              <p className="leading-relaxed">
                We talked for hours, losing track of time as our conversation flowed effortlessly 
                from one topic to another. I remember thinking how rare it was to feel so understood 
                by someone I had just met. Your laugh, your perspectives, your stories - everything 
                about you drew me in deeper.
              </p>
            </div>
          </ScrapbookSection>
        </section>

        {/* What I Love Section */}
        <section id="what-i-love" className="py-16">
          <ScrapbookSection 
            title="What I Love About You" 
            className="bg-gradient-to-br from-white to-romance-warm"
            animationDelay={400}
          >
            <div className="space-y-6">
              <TypewriterText
                text="There are countless reasons why my heart chose you..."
                className="text-lg italic text-romance-ink/80 mb-6"
                delay={700}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg p-5 bg-white bg-opacity-60 backdrop-blur-sm shadow-sm border border-romance-blush/20 transform transition-transform duration-500 hover:scale-105">
                  <AnimatedHeart size={16} className="mb-2" />
                  <h3 className="font-dancing text-xl mb-2">Your Kindness</h3>
                  <p className="text-sm leading-relaxed">
                    The way you make everyone around you feel valued and seen. Your genuine care 
                    for others reveals the beautiful soul that you are.
                  </p>
                </div>
                
                <div className="rounded-lg p-5 bg-white bg-opacity-60 backdrop-blur-sm shadow-sm border border-romance-blush/20 transform transition-transform duration-500 hover:scale-105">
                  <AnimatedHeart size={16} className="mb-2" />
                  <h3 className="font-dancing text-xl mb-2">Your Smile</h3>
                  <p className="text-sm leading-relaxed">
                    A smile that could light up the darkest room. The way your eyes crinkle 
                    at the corners and your whole face illuminates with joy.
                  </p>
                </div>
                
                <div className="rounded-lg p-5 bg-white bg-opacity-60 backdrop-blur-sm shadow-sm border border-romance-blush/20 transform transition-transform duration-500 hover:scale-105">
                  <AnimatedHeart size={16} className="mb-2" />
                  <h3 className="font-dancing text-xl mb-2">Your Intelligence</h3>
                  <p className="text-sm leading-relaxed">
                    The depth of your thoughts and how your mind works. Our conversations 
                    challenge me and open my eyes to new perspectives.
                  </p>
                </div>
                
                <div className="rounded-lg p-5 bg-white bg-opacity-60 backdrop-blur-sm shadow-sm border border-romance-blush/20 transform transition-transform duration-500 hover:scale-105">
                  <AnimatedHeart size={16} className="mb-2" />
                  <h3 className="font-dancing text-xl mb-2">Your Strength</h3>
                  <p className="text-sm leading-relaxed">
                    How you face life's challenges with grace and resilience. Your unwavering 
                    spirit inspires me every single day.
                  </p>
                </div>
              </div>
              
              <div className="love-note text-center">
                "You are not just the love of my life. You are life itself, the very reason why 
                every day is worth experiencing to the fullest."
              </div>
              
              <p className="leading-relaxed">
                These are just a glimpse of the countless reasons why my heart chose you. 
                Every day, I discover new facets of you to admire and cherish. You've become 
                my favorite story - one that I never tire of reading, one that grows more beautiful 
                with each passing day.
              </p>
            </div>
          </ScrapbookSection>
        </section>

        {/* Countdown Section */}
        <section id="countdown" className="py-16 text-center">
          <ScrapbookSection 
            title="Our Special Day" 
            className="bg-gradient-to-br from-white to-romance-cream"
            animationDelay={500}
          >
            <div className="space-y-8">
              <TypewriterText
                text="Counting down to April 4th, when we celebrate our love..."
                className="text-lg italic text-romance-ink/80 mb-6"
                delay={800}
              />
              
              <div className="my-8">
                <CountdownTimer targetDate={targetDate} />
              </div>
              
              <div className="love-note">
                "Every tick of the clock brings us closer to another cherished memory we'll create together."
              </div>
              
              <p className="leading-relaxed">
                I'm counting down the moments until we can celebrate the day that brought 
                us together. Each day with you is a gift, and I cherish every second. This 
                digital scrapbook is just a small token of my affection - a way to preserve 
                the beautiful beginning of our story.
              </p>
              
              <div className="mt-8 pt-4 border-t border-romance-blush/30">
                <p className="font-dancing text-2xl text-romance-ink animate-soft-glow">
                  With all my love,
                </p>
                <p className="font-dancing text-xl mt-2">Your forever person</p>
              </div>
            </div>
          </ScrapbookSection>
        </section>
      </div>
    </div>
  );
};

export default Index;
