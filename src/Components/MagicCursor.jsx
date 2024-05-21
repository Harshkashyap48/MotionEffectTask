import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Styles/MagicCursor.css';

const LiquidCursor = () => {
  useEffect(() => {
    const numParticles = 25;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      const div = document.createElement('div');
      div.classList.add('particle');
      document.body.appendChild(div);
      particles.push(div);
    }

    const animateParticles = (event) => {
      const { pageX, pageY } = event;

      particles.forEach((particle, index) => {
        const delay = index * 0.02;
        const duration = 0.1 + Math.random() * 0.1;
        const randomX = (Math.random() - 0.5) * 40;
        const randomY = (Math.random() - 0.5) * 40;

        gsap.to(particle, {
          x: pageX + randomX,
          y: pageY + randomY,
          backgroundColor: `hsl(${Math.random() * 360}, 50%, 50%)`,
          width: `${Math.random() * 200 + 20}px`,
          height: `${Math.random() * 250 + 10}px`,
          opacity: 1,
          duration,
          delay,
          ease: 'power1.out',
          onComplete: () => {
            gsap.to(particle, {
              opacity: 0,
              duration: 0.5,
              delay: 0.1,
              
            });
          },
        });
      });
    };

    document.body.addEventListener('mousemove', animateParticles);

    return () => {
      document.body.removeEventListener('mousemove', animateParticles);
      particles.forEach((particle) => document.body.removeChild(particle));
    };
  }, []);

  return null;
};

export default LiquidCursor;
