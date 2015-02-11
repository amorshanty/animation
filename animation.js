$(document).ready(function () {

// Hide the result div
		//$("#result").hide()

// Hide the result div using fade with 1s duration
	//$("#result").fadeOut(4000)

// Hide and show the result div using slide
	//$("#result").slideUp(4000)

// Hide using slide, wait one second and fade
	//$("#result").slideUp(1000).delay(2000).fadeIn(2000)

// Create your own speed and use it
	// $.fx.speeds['very-slow'] = 1000;
	// $("#result").hide('very-slow')

// Set the default animation speed to 2000
	 //$.fx.speeds['very-slow'] = 2000;
	 //$("#result").fadeOut('very-slow')

// Slide jquery projects and when it's done show on the result div that it's done

// var showItsDone = function(){
// 		var myContenttext= $("#myContent p").eq(1).text();
// 		$("#result").text(myContenttext).show();
// 	};
// 	$("#myContent p").eq(1).slideUp(1000, showItsDone);
// 	$('#result').hide();


// Move to the left in 10 seconds the result div with linear animation

	$("#myContent p").eq(1).slideUp(1000, function(){
		$('#result').text('DONE :)').animate({
			left: "-=50"}, "linear");
	});


});
