/**
 * openFurnaceDialogue extracted from ../../deobfuscated/bundle.js at line 7662-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/openFurnaceDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openFurnaceDialogue(_0x1D34A)
{
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	var _0x1CC4A = "";
	if (getItem("researcherCrafting") >= 1)
	{
		_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "sand")
	};
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "copper");
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "iron");
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "silver");
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "gold");
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "promethium");
	document.getElementById("dialogue-furnace-selectOre").innerHTML = _0x1CC4A;
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div>";
	openDialogueOverride("dialogue-furnace", "large")
}