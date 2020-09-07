'use strict';

function openChiselDialogue()
{
	var tiledImageTLs = getChiselTypeData();
	var setting = tiledImageTLs[0];
	var tiledImageBR = tiledImageTLs[1];
	var currentImageFloat = tiledImageTLs[2];
	var tiledImageTL = tiledImageTLs[3];
	if (currentImageFloat != "none")
	{
		confirmDialogue("images/" + setting + ".png", "Add a <img src='images/" + currentImageFloat + ".png' class='img-30' /> to your chisel?<br /><br /><i style='color:grey'>Upgrading your chisel will reduce your failure rate when opening geodes.", "Socket", "Close", "SOCKET=chisel");
	}
};
