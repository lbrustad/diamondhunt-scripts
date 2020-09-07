'use strict';

function completeCemeteryTombs()
{
	$("#combat-map-div").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 3
	}, 2000, function ()
	{
		confirmDialogue("images/magicSkill.png", "A spellscroll has spawned nearby.", "Close", "", "");
	});
};
