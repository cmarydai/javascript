$(document).ready(

	function() {

		$('#generate').click(
			function() {
				// Get the text from the fields

				var noun = $('#noun1').val();

				var adjective = $('#adjective1').val();

				// Check the values for sanity

				if (noun == null || noun.trim == '') {
					noun = '*****';
				}

				if (adjective == null || adjective.trim() == '') {
					adjective = '*****';
				}

				// Prepare the phrase string

				var phrase = 'The quick brown <b><u>' + noun + '</u></b> jumps over the <b><u>' + adjective + '</u></b> dog.';

				// Display the phrase

				$('#madlib').html(phrase);

				// Change button text to regenerate

				$(this).html('Regenerate!');
			}
		)

	}

);