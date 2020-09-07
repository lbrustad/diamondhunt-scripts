/**
 * openFurnaceDialogue extracted from ../../deobfuscated/bundle.js at line 10008-10025
 *
 * If this file doesn't contain a function, there is an error in ../raw/openFurnaceDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openFurnaceDialogue(_0x51C8)
{
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	var _0x41B2 = "";
	if (getItem("researcherCrafting") >= 1)
	{
		_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "sand")
	};
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "copper");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "iron");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "silver");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "gold");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "promethium");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "titanium");
	document.getElementById("dialogue-furnace-selectOre").innerHTML = _0x41B2;
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div>";
	openDialogueOverride("dialogue-furnace", "large")
}