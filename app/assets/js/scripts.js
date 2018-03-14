
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').height());
	});
	// toggle "navbar-no-bg" class
	$('.c-form-1-box').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

    /*
        Background slideshow
    */
    $('.top-content').backstretch("http://res.cloudinary.com/dz83jh064/image/upload/e_colorize:60/v1520934865/cainet_dentiste_j5g546.jpg");
    $('.how-it-works-container').backstretch("http://res.cloudinary.com/dz83jh064/image/upload/e_colorize:70/v1520952591/dental-picks_4460x4460_yunqhu.jpg");
    $('.testimonials-container').backstretch("http://res.cloudinary.com/dz83jh064/image/upload/e_colorize:70/v1520956403/peter-kasprzyk-110926-unsplash_ajglmu.jpg");
    $('.call-to-action-container').backstretch("http://res.cloudinary.com/dz83jh064/image/upload/e_colorize:70/a_0/v1520957667/daniel-frank-201417-unsplash_zutzeq.jpg");
    // $('footer').backstretch("http://res.cloudinary.com/dz83jh064/image/upload/e_colorize:70/a_0/v1520957667/daniel-frank-201417-unsplash_zutzeq.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });

    /*
        Wow
    */
    new WOW().init();

    /*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});

	/*
	    Contact form
	*/
	$('.c-form-1-box form input[type="text"], .c-form-1-box form textarea').on('focus', function() {
		$('.c-form-1-box form input[type="text"], .c-form-1-box form textarea').removeClass('contact-error');
	});
	$('.c-form-1-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-1-box form input[type="text"], .c-form-1-box form textarea').removeClass('contact-error');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	        	if(json.nameMessage != '') {
	                $('.c-form-1-box form .c-form-1-name').addClass('contact-error');
	            }
	            if(json.emailMessage != '') {
	                $('.c-form-1-box form .c-form-1-email').addClass('contact-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.c-form-1-box form .c-form-1-subject').addClass('contact-error');
	            }
	            if(json.messageMessage != '') {
	                $('.c-form-1-box form .c-form-1-message').addClass('contact-error');
	            }
	            if(json.nameMessage == '' && json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	            	$('.c-form-1-box form').fadeOut('fast', function() {
	                    $('.c-form-1-bottom').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                    // reload background
	    				$('.top-content').backstretch("resize");
	                });
	            }
	        }
	    });
	});

});


jQuery(window).load(function() {

	/*
		Hidden images
	*/
	$(".modal-body img, .testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

});
