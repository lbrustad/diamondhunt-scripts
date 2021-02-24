'use strict';

function shakeDungeon()
{
	$("#body").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 10
	}, 5000);
	setTimeout(function ()
	{
		confirmDialogue("images/kingsKnightIcon.png", "OH NO!", "Close", "", "");
	}, 6000);
};
