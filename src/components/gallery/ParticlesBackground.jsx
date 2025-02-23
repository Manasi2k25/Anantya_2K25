
import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    window.particlesJS("particles-container", {
      particles: {
        number: { value: 100 },
        size: { value: 2 },
        move: { speed: 3 },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
      },
      // Add this configuration for responsiveness:
      retina_detect: true, // Detect retina displays for better resolution
    });

    // Optional: Resize event listener for dynamic resizing
    const handleResize = () => {
      window.particlesJS.resize();  // Trigger particles.js resize
    };

    window.addEventListener('resize', handleResize);

    return () => { // Cleanup: Remove event listener on unmount
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div
      id="particles-container"
      className="fixed top-0 left-0 w-full h-screen pointer-events-none" // Key changes here
    ></div>
  );
};

export default ParticlesBackground;