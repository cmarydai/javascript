function movearrow(element) {
	// If there is not an element, select first li

	if (!element){
		element = $('#arrowslide li').eq( 0 );
	}

	// console.log(element);
	// If one is selected, find the elemnt on the page

	var childposition = element.find('a').position().left;

	var parentposition = element.parent().position().left;

	// find the width of the "a" (element.find('a').width()) and / by 2 and add that to offsetleft

	var awidth = element.find('a').width() / 2;

	//console.log('child');
	//console.log(childposition);

	//console.log('parent');
	//console.log(parentposition);

	var offsetleft = childposition - parentposition;
	// console.log (offsetleft);


	// Change hte position of the arrow to that^ position
	// Move background position to offsetleft

	var newposition = awidth + offsetleft -10;

	var currentposition = parseInt($('#arrow').css('background-position-x'),10);

	//console.log(newposition);

	//console.log(currentposition);

	//if (Math.abs(currentposition - newposition) > 50) {

		$('#arrow').animate({
			"background-position-x": newposition + "px"
		}, 500);

	//}

}

$(document).ready(
	function(){

	// Lok for li in arrowslide

	$('#arrowslide li').mouseover(

		function(event) {
			// On mouseOver move arrow
			movearrow($(this));
			//console.log('movedarrow on the li');
		}

	); 

	$('#arrowslide ul').mouseout(
		function (event) {
			// On mouseOut move arrow to first one
			//console.log(event.target.tagName);
			//if (event.target.tagName == 'A') {
			//	movearrow();
			//}
			//console.log('movedarrow on the out of the div');
		}
	);

});