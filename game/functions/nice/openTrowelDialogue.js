'use strict';

function openTrowelDialogue()
{
	var tiledImageTLs = getTrowelTypeData();
	var setting = tiledImageTLs[0];
	var tiledImageBR = tiledImageTLs[1];
	var currentImageFloat = tiledImageTLs[2];
	var tiledImageTL = tiledImageTLs[3];
	if (currentImageFloat != "none")
	{
		confirmDialogue("images/" + setting + ".png", "Add a <img src='images/" + currentImageFloat + ".png' class='img-30' /> to your trowel?<br /><br /><i style='color:grey'>Upgrading your trowel will increase your chance of finding seeds by 5%.", "Socket", "Close", "SOCKET=trowel");
	}
};
