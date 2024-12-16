import React from 'react';
import { GradientBackground } from './hero/GradientBackground';
import { HeroContent } from './hero/HeroContent';
import { HeroImage } from './hero/HeroImage';
import { StatsBadge } from './hero/StatsBadge';
import { HeroFeatures } from './hero/HeroFeatures';

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center">
      <GradientBackground />
      
      <div className="container mx-auto px-4 py-20">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <HeroContent />
            
            <div className="mt-16 grid grid-cols-3 gap-4">
              <StatsBadge 
                icon="users" 
                number="5,000+" 
                label="Active Volunteers" 
                sublabel="and growing daily"
                delay={0.8} 
              />
              <StatsBadge 
                icon="calendar" 
                number="200+" 
                label="Monthly Events" 
                sublabel="across Sri Lanka"
                delay={1} 
              />
              <StatsBadge 
                icon="map" 
                number="20+" 
                label="Cities Covered" 
                sublabel="nationwide impact"
                delay={1.2} 
              />
            </div>
          </div>

          <HeroImage />
        </div>

        <HeroFeatures />
      </div>
    </div>
  );
}