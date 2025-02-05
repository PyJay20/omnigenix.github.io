 
document.addEventListener("DOMContentLoaded", function () {
	tsParticles.load("tsparticles", {
	  particles: {
		number: {
		  value: 200,  // Number of particles
		  density: {
			enable: true,
			value_area: 400,  // Density area
		  },
		},
		shape: {
		  type: "circle",  // Shape of the particles
		},
		opacity: {
		  value: 0.4,  // Transparency of the particles
		  random: true,
		},
		size: {
		  value: 3,  // Size of the particles
		  random: true,
		},
		move: {
		  enable: true,
		  speed: 1,  // Speed of the particles
		  direction: "none",  // No specific direction, particles will float around
		  random: true,
		  out_mode: "out",
		  attract: {
			enable: true,
			rotateX: 600,
			rotateY: 1200,
		  },
		},
	  },
	  interactivity: {
		events: {
		  onhover: {
			enable: true,
			mode: "attract",  // Particles will scatter when hovered
		  },
		},
	  },
	});
  });
  
  // carousel.
  document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });

        nextButton.addEventListener("click", function () {
            nextSlide();
        });
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const pulsingText = document.querySelector(".pulsing");
    const colors = ["#37c0fb", "#00ffcc", "#ff6600"]; // Different colors for effect
    let index = 0;

    setInterval(() => {
        pulsingText.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 2000); // Change color every 2 seconds
});

  
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);