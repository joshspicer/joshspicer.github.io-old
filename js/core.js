$(document).ready(function(){
	$('.button').click(function(){
		$('body').css('background', '#' + random_colour());
	});
});

function random_colour(){
	return Math.floor(Math.random()*16777215).toString(16);
}
