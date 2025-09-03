import { useEffect } from "react";

function ParticlesBackground() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 120, density: { enable: true, value_area: 1000 } },
          color: { value: ["#a855f7", "#06b6d4", "#3b82f6", "#ec4899"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 1.5, opacity_min: 0.3, sync: false },
          },
          size: {
            value: 1.8,
            random: true,
            anim: { enable: true, speed: 3, size_min: 0.2, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#fff",
            opacity: 0.4,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 6,
            random: true,
            straight: false,
            out_mode: "out",
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: ["repulse", "bubble"] },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 200, size: 3, duration: 0.4, opacity: 0.8, speed: 6 },
            repulse: { distance: 150, duration: 0.2 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0, // keeps it behind other content
      }}
    ></div>
  );
}

export default ParticlesBackground;
