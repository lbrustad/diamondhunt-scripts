'use strict';

function doSkyCrystalShake()
{
	$("#body").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 10
	}, 10000);
	setTimeout(function ()
	{
		confirmDialogue("images/bob.png", "What's going on!", "Close", "", "SHAKE_SKYCRYSTAL=1");
	}, 10000);
};
