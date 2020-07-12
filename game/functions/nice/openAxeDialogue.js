'use strict';

function openAxeDialogue()
{
	var tiledImageTLs = getAxeTypeData();
	var setting = tiledImageTLs[0];
	var tiledImageBR = tiledImageTLs[1];
	var currentImageFloat = tiledImageTLs[2];
	var tiledImageTL = tiledImageTLs[3];
	if (currentImageFloat != "none")
	{
		confirmDialogue("images/" + setting + ".png", "Add a <img src='images/" + currentImageFloat + ".png' class='img-30' /> to your axe?<br /><br /><i style='color:grey'>Upgrading your axe will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=axe");
	}
};
