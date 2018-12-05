/* jquery.js */
/* jquery.velocity.js */
/* velocity.ui.js */

// This demo uses a 250ms stagger. */
// setInterval(function() {
//   $(".box1").velocity("transition.slideLeftIn", {
//       stagger: 250
//     })
//     .delay(750)
//     .velocity({opacity: 0}, 750)
// }, 51);




$(document).ready(function() {






	function startAnimation() {
		$(".box1")
			// .velocity({scale: 1.25},{ duration: 200 })
			// .velocity({translateY: -1000, opacity: 0},{ duration: 800 })
			.velocity("transition.bounceUpOut")
	};

	$(".submit").on('click', function(){
	  startAnimation();
	});

});
