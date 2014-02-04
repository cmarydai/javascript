
var noun = prompt('Enter a noun:', 'fox');

var adjective = prompt('Enter an adjective:', 'lazy');

if (noun == null || noun.trim == '') {
	noun = '*****';
}

if (adjective == null || adjective.trim() == '') {
	adjective = '*****';
}	

var phrase = 'The quick brown <b><u>' + noun + '</u></b> jumps over the <b><u>' + adjective + '</u></b> dog.';

alert(phrase);

$(document).ready(

	function() {

		$('#madlib').html(phrase);
		//document.getElementById('madlib').innerHTML = phrase;

		$('#try-again').click(
			function() {
				if (confirm('Are you sure you wat to play again?')) {
					location.reload();
				} else {
					alert('No worries, your old madlibs is still there');
				}
			}
		);
	}

);