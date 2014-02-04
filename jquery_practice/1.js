/* Scripts for Exercise 1*/

$(document).ready(
	function(){

	$('#one').click(function(){
		$(this).fadeOut();
	});

	$("#two").css("opacity",".5");
	$("#two").hover(function(){
  		$("#two").css("opacity","1");
  		},function(){
		$("#two").css("opacity",".5");
	});

	$("#three h3").click(function(){
		if ($(this).siblings('p:visible').length > 0) {
			$(this).siblings('p').fadeOut();
		} else {
			$(this).siblings('p').fadeIn();
		}
	});

	/*$("#three h3").click(function(){
		$("#three > p").toggle();
	});*/

	$("#four").click(function(){
		$(this).animate({
		"width": $(this).width() * 2,
		"height": $(this).height() * 2
		})
	});

	$("#five").click(function(){
		$(this).html("HELLO!");
	});

	$("#six").click(function(){
		$(this).siblings('div').fadeOut();
	});

});
