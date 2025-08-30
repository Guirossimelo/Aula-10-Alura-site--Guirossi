// Configuração das partículas em verde com quadrados
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00ff00" },
    shape: { type: "edge" }, // quadrados
    opacity: { value: 0.5, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 150, color: "#00ff00", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 4, direction: "none", random: true, straight: false, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});