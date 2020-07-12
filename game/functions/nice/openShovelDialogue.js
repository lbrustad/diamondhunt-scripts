'use strict';

function openShovelDialogue()
{
	var tiledImageTLs = getShovelTypeData();
	var setting = tiledImageTLs[0];
	var tiledImageBR = tiledImageTLs[1];
	var currentImageFloat = tiledImageTLs[2];
	var tiledImageTL = tiledImageTLs[3];
	if (currentImageFloat != "none")
	{
		confirmDialogue("images/" + setting + ".png", "Add a <img src='images/" + currentImageFloat + ".png' class='img-30' /> to your shovel?<br /><br /><i style='color:grey'>Upgrading your shovel will increase your chance of finding sand.</i>", "Socket", "Close", "SOCKET=shovel");
	}
};
