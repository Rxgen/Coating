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
	
	
});
