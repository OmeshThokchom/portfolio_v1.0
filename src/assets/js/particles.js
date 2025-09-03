// Initialize particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": ["#a855f7", "#06b6d4", "#3b82f6", "#ec4899"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1.5,
                "opacity_min": 0.3,
                "sync": false
            }
        },
        "size": {
            "value": 1.8,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 0.2,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#fff",
            "opacity": 0.4,
            "width": 0.8
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["repulse", "bubble"]
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 3,
                "duration": 0.4,
                "opacity": 0.8,
                "speed": 6
            },
            "repulse": {
                "distance": 150,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});