'use client'

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useMemo } from "react";
import type { ISourceOptions } from "tsparticles-engine";
import { useTheme } from "next-themes";

export const ParticlesBackground = () => {
  const { theme } = useTheme();

  const options: ISourceOptions = useMemo(() => {
    const particleColor = theme === 'dark' ? '#E8F4F8' : '#2D4A4B';

    return {
      autoPlay: true,
      fullScreen: {
        enable: false, // This is key to contain particles in the parent div
        zIndex: -1,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: "grab", // Changed from 'repulse' to 'grab'
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.8,
              color: particleColor
            }
          },
        },
      },
      particles: {
        color: {
          value: particleColor, // Dynamic color
        },
        links: {
          color: particleColor, // Dynamic color
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60, // Reduced for a cleaner look
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }
  }, [theme]);

  return (
    <Particles
      id="tsparticles"
      init={async (engine) => {
        await loadSlim(engine);
      }}
      options={options}
      className="absolute inset-0"
    />
  );
};
