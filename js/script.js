/* Author: Chris Castle

*/

$(document).ready(function() {
	$.waypoints.settings.scrollThrottle = 30;
	// make <aside> box fixed position when window is scrolled
	$('aside').waypoint(function(event, direction) {
		//alert(direction);
		if (direction === "down") {
			// get the current properties
			var leftOffset = $(this).offset().left
				, width = $(this).css('width')
				, height = $(this).css('height')
				, paddingLeft = $(this).css('padding-left')
				, paddingRight = $(this).css('padding-right');
			
			// set the new properties
			$(this).css('position', 'fixed');
			$(this).css('left', leftOffset);
			$(this).css('top', 212);
			$(this).css('width', width);
			$(this).css('height', height);
			$(this).css('padding-left', paddingLeft);
			$(this).css('padding-right', paddingRight);
		} else { //direction === "up"
			// reset back to static positioning
			$(this).css('position', 'static');
			$(this).css('left', 'auto');
			$(this).css('top', 'auto');
			
			// needed for some reason i can't figure out
			$.waypoints('refresh');
		}
	}, {
		offset: 212
	});
	$('nav').waypoint(function(event, direction) {
		$(this).toggleClass('sticky', direction == "down");
		event.stopPropagation();
	});
	
	// make the nav links scroll down to the approproate area
	$('.scrollPage').click(function() {
	   var elementClicked = $(this).attr("href");
	   var destination = $(elementClicked).offset().top;
	   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-150}, 500 );
	   return false;
	});
	
	$('#slider').bxSlider({
		mode: 'fade',
		captions: true,
		auto: true,
		controls: false
	});
	
	$("a[rel=screenshots]").fancybox({
		titlePosition: 'inside',
		titleFormat: function(text) { return '<h2><span style="color: #222;">'+text+'</span></h2>'; }
	});
});