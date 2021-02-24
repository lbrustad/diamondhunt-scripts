'use strict';

function openChainsawDialogue()
{
	var tiledImageTLs = getChainsawTypeData();
	var setting = tiledImageTLs[0];
	var tiledImageBR = tiledImageTLs[1];
	var currentImageFloat = tiledImageTLs[2];
	var tiledImageTL = tiledImageTLs[3];
	if (currentImageFloat != "none")
	{
		confirmDialogue("images/" + setting + ".png", "Add a <img src='images/" + currentImageFloat + ".png' class='img-30' /> to your chainsaw?<br /><br /><i style='color:grey'>Upgrading your chainsaw will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=chainsaw");
	}
};
