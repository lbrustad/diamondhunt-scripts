'use strict';

function openSmallFishingNetDialogue()
{
	var widgetArr = getSmallFishingNetTypeData();
	var setting = widgetArr[0];
	var tiledImageBR = widgetArr[1];
	var currentImageFloat = widgetArr[2];
	var _maskLayer = widgetArr[3];
	if (currentImageFloat != "none")
	{
		confirmDialogue("images/" + setting + ".png", "Add a <img src='images/" + currentImageFloat + ".png' class='img-30' /> to your fishing tool?<br /><br /><i style='color:grey'>Upgrading will allow you to catch:<br /><br /><img src='images/" + _maskLayer + ".png' class='img-50' /> <span style='color:brown'>" + getItemName(_maskLayer) + "</span>", "Socket", "Close", "SOCKET=smallFishingNet");
	}
};
