 
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