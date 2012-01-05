/* Author: Chris Castle

*/


$(document).ready(function() {
	// make <aside> box fixed position when window is scrolled
	$('aside').waypoint(function(event, direction) {
		//alert($(this).css('width') + ' ' + $(this).css('height'));
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
			$(this).css('top', 50);
			$(this).css('width', width);
			$(this).css('height', height);
			$(this).css('padding-left', paddingLeft);
			$(this).css('padding-right', paddingRight);
		} else { //direction === "up"
			// reset back to static positioning
			$(this).css('position', 'static');
			$(this).css('left', 'auto');
			$(this).css('top', 'auto');
		}
	}, {
		offset: 50
	});
	
	// make the nav links scroll down to the approproate area
	$('.scrollPage').click(function() {
	   var elementClicked = $(this).attr("href");
	   var destination = $(elementClicked).offset().top;
	   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-20}, 500 );
	   return false;
	});
});