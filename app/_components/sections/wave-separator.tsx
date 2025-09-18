"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

export const WaveSeparator: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load the animation data dynamically
    fetch('/assets/wave.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading wave animation:', error));
  }, []);

  return (
    <section className="w-full h-48 md:h-64 lg:h-80 overflow-hidden">
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{
            width: '100vw',
            height: '100%',
            minWidth: '100%'
          }}
        />
      ) : (
        // Fallback while loading
        <div className="w-full h-full flex items-center justify-center">
          <div className="wave-fallback"></div>
        </div>
      )}
    </section>
  );
};