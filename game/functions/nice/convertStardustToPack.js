'use strict';

function convertStardustToPack()
{
	if (getItem("researcher") == 0)
	{
		return;
	}
	var _startingFret = 0;
	if (getItem("stardust") >= 1000)
	{
		_startingFret = parseInt(getItem("stardust") / 1000);
	}
	document.getElementById("dialogue-stardust-packs-input").value = _startingFret;
	keyListenerStadustPacks(_startingFret);
	openDialogue("dialogue-stardust-packs");
};
