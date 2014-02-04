

var parsedata = function () {

	console.log('data loaded');

	/*var $words = ('#raw .word');

	for (var i = 0; i < $words.length; i++) {

		console.log($words[i].html());

	}
	*/

	var prompts = [];

	var $words = $('#raw .word');

	$words.each(
		function(index, element) {
			// create a prompt for this word
			var type = $(this).data('wordtype');

			var this_prompt = '<p>' + type + ' :<input type="text" value=""></p>';
			prompts.push(this_prompt);
		}
	);

	$('#prompts').html(prompts.join(''));

};

$(document).ready(

	function() {

		$('#raw').load('data.html .madlib', parsedata);

		$('#generate').click(
			function() {
				// Hide the #madlib div

				$('#madlib').hide();

				// Copy the contents of the raw into #madlib

				$('#raw .madlib').clone().appendTo('#madlib');

				// Get the text from the fields and put into an answers variable

				var answers = [];

				// Go through each of those fields

				$('#prompts input').each(
					function() {
						var value = $(this).val();
						if (value == null || value.trim() == '') {
						value = '*****';
						}
						answers.push(value);
					}
		);

				// Check the values for sanity
				// Go through the #madlib version and replace the .html() of each .word with the matching item from answers
				
				var $words = $('#madlib .word');

				$words.each(
					function(index, element) {
						var new_word = answers[index];
						$(this).html(new_word);
					}
				)

				// Show the #madlib div (fadeIn));

				$('#madlib').fadeIn();

				// Change button text to regenerate

				$(this).html('Regenerate!');
			}
		)

	}

);