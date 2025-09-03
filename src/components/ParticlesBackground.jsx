import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: { value: "transparent" },
          },
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 120,
              density: { enable: true, area: 1000 },
            },
            color: {
              value: ["#a855f7", "#06b6d4", "#3b82f6", "#440909ff"],
            },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.1,
                sync: true,
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 0.1,
                sync: true,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: false,
            },
            modes: {
              grab: {
                distance: 100,
                links: {
                  opacity: 5,
                },
              },
              push: {
                quantity: 2,
              },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
}
  