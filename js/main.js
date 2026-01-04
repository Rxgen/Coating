$(document).ready(function(){
	//Examples of how to assign the Colorbox event to elements
	$(".group1").colorbox({rel:'group1'});
	$(".group2").colorbox({rel:'group2', transition:"fade"});
	$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
	$(".group4").colorbox({rel:'group4', slideshow:true});
	$(".colorbox").colorbox({rel:'group4', slideshow:false});
	$(".ajax").colorbox();
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
	$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
	$(".inline").colorbox({inline:true, width:"50%"});

	$("[rel=tooltip]").tooltip();
		
	$('#myCarousel .item:first').addClass("active");
					
	$("#scroller").simplyScroll({
		autoMode: 'loop'
	});
    
	jQuery('.thumb').nailthumb({width:100,height:100});
	
	// Function to check if mobile view
	function isMobileView() {
		return $(window).width() < 768;
	}
	
	// Mobile navbar toggle fix
	$('.navbar-toggle').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $target = $($(this).data('target'));
		var isOpen = $target.hasClass('in');
		
		if (isOpen) {
			$target.removeClass('in').addClass('collapse');
			$(this).addClass('collapsed').attr('aria-expanded', 'false');
		} else {
			$target.removeClass('collapse').addClass('in');
			$(this).removeClass('collapsed').attr('aria-expanded', 'true');
		}
	});
	
	// Handle Services dropdown differently on mobile vs desktop
	$('.navbar-nav .dropdown > a.dropdown-toggle').on('click', function(e) {
		if (isMobileView()) {
			// On mobile, prevent navigation and toggle dropdown
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			var $dropdown = $(this).next('.dropdown-menu');
			var $parent = $(this).parent('.dropdown');
			var isOpen = $parent.hasClass('open');
			
			// Close other open dropdowns
			$('.navbar-nav .dropdown').not($parent).removeClass('open').find('.dropdown-menu').slideUp(200);
			
			// Toggle current dropdown
			if (isOpen) {
				$parent.removeClass('open');
				$dropdown.slideUp(200);
				$(this).attr('aria-expanded', 'false');
			} else {
				$parent.addClass('open');
				$dropdown.slideDown(200);
				$(this).attr('aria-expanded', 'true');
			}
			return false;
		} else {
			// On desktop, if the link has a valid href, allow navigation
			var href = $(this).attr('href');
			if (href && href !== '#' && href !== 'javascript:void(0)') {
				// Stop Bootstrap's dropdown handler from preventing navigation
				e.stopImmediatePropagation();
				// Navigate to the link
				window.location.href = href;
				return false;
			}
		}
	});
	
	// Disable hover dropdown on mobile
	$(window).on('resize', function() {
		if (isMobileView()) {
			$('.navbar-nav .dropdown').off('mouseenter mouseleave');
		}
	}).trigger('resize');
	
	// Close mobile menu when clicking outside
	$(document).on('click', function(e) {
		if (isMobileView() && !$(e.target).closest('.navbar').length) {
			$('#navbar-collapse-menu').removeClass('in');
			$('.navbar-toggle').addClass('collapsed').attr('aria-expanded', 'false');
			$('.navbar-nav .dropdown').removeClass('open').find('.dropdown-menu').slideUp(200);
		}
	});
	
	// Close mobile menu when clicking on a regular link (not dropdown toggle)
	$('.navbar-nav > li > a:not(.dropdown-toggle)').on('click', function() {
		if (isMobileView()) {
			$('#navbar-collapse-menu').removeClass('in');
			$('.navbar-toggle').addClass('collapsed').attr('aria-expanded', 'false');
			$('.navbar-nav .dropdown').removeClass('open').find('.dropdown-menu').slideUp(200);
		}
	});
	
	// Close mobile menu when clicking on dropdown menu items
	$('.dropdown-menu > li > a').on('click', function() {
		if (isMobileView()) {
			$('#navbar-collapse-menu').removeClass('in');
			$('.navbar-toggle').addClass('collapsed').attr('aria-expanded', 'false');
			$('.navbar-nav .dropdown').removeClass('open').find('.dropdown-menu').slideUp(200);
		}
	});
	
});
