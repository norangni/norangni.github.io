/*
 * On document ready
 */
$(function() {

	// Text is rendered in the header section
    typeText('.cursor', 'hi, i\'m nora', 0, 150);

	// scrolls to next section via arrow-bottom click
	smoothScroll(800);

});



/*
 * On scroll
 */
$(window).scroll(function() {

    // new algorithm for displaying text in about section
    displayAboutText();

    // show thumbnail in work section
    displayThumbnail();

    // show text in work section
    fadeTextLeft();

});





/*************************************
             #MAIN-FUNCTIONS
*************************************/



/*
 * Scroll down to sections of website
 */
function smoothScroll(duration) {
	$('a[href^="#"]').on("click", function(e) {
		// get href attribute from a tag that was clicked
		var target = $(this).attr('href');
		// remove the hashtag from beginning of href attribute
		var strip = target.slice(1);
		// create selector
		var anchor = $("#" + strip);
		// prevent default event NOT SURE IF NECESSARY
		e.preventDefault();
		// scroll bitch scroll
		$('html, body').animate({scrollTop: anchor.offset().top}, duration);
	});
}



/*
 *Animation that types text out on screen
 */
function typeText(target, message, index, interval) {
	if (index < message.length) {
		// print next letter on screen
		$(target).before(message[index++]);
		// delay before displaying next letter
		setTimeout(function() {
			typeText(target, message, index++, interval)
		},interval);
	}
    else {
        showElement($('.nav-container'));
    }
}



// /*
//  *Display paragraph in about section
//  */
function displayAboutText() {
    var windowHeight = $(window).height();
    var windowScroll = $(window).scrollTop();

    if ($('#about').offset().top - windowHeight / 2 < windowScroll) {
        showElement($('.about-text'));
        setTimeout(function() {
            showElement($('.button'));
        }, 750);
    }
}



/*
 * Animate text in work section
 */
 function fadeTextLeft() {
    var windowHeight = $(window).height();
    var windowScroll = $(window).scrollTop();

    if ($('#work').offset().top - windowHeight / 2 < windowScroll) {
        $('.work-text').addClass('animated fadeInLeft');
    }
 }



/*
 * Display thumbnails in work section
 */
function displayThumbnail() {
    var windowHeight = $(window).height();
    var windowScroll = $(window).scrollTop();

    if ($('#work').offset().top - windowHeight / 2 < windowScroll) {
        $('.work-thumb').each(function(i) {
            setTimeout(function() {
                $('.work-thumb').eq(i).addClass('is-visible');
            }, 200*i);
        });
    }
}





/*************************************
             #HELPER-FUNCTIONS
*************************************/

/*
 * Animates html element to show itself
 */
function showElement(selector) {
    selector.animate({
        opacity: 1
    }, 1000);
}