'use strict';

function faradoxRandomShow2()
{
	$("#faradox-random-show").fadeIn(3000, function ()
	{
		$("#faradox-random-show").fadeOut(1000, function ()
		{
			sendBytes("CORRUPTED_KNIGHT_SHOW_FARADOX");
		});
	});
};
