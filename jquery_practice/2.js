$(document).ready(
	function(){
	
	$('div').each(
		function(index) {
			var label = index + '|' + $(this).attr('id');
			$(this).html(label);
		}
	);

	$('div').click(function(){
			$(this).animate({
			"width": $(this).width() * 2,
			"height": $(this).height() * 2
		})
	});

	$('#reset').click(function(){
			$(this).animate({
			"width": $(this).width() * 2,
			"height": $(this).height() * 2
		})
	});

	$('<p><button id="reset">Reset All</button</p>').appendTo('body');
	$('#reset').click(
		function() {
			$('div').width(200).height(200);
		}
	);

	$('div').hover(
		function() {
		if (!$(this).data('original_color')) {
			var original_color = $(this).css('background-color');
			$(this).data('original_color', original_color);
		}
		$(this).animate({'background-color': '#ffcc00'});
		},
		function() {
			var original_color = $(this).data('original_color');
			$(this).animate({'background-color': original_color});
		}
	);

	$('#one').siblings('div').click(
		function(event) {
			if(event.altKey) {
				$(this).appendTo('#one');
			}
		}
	);
});