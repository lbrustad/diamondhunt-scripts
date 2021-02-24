/**
 * openFurnaceDialogue extracted from ../../deobfuscated/bundle.js at line 12158-12175
 *
 * If this file doesn't contain a function, there is an error in ../raw/openFurnaceDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openFurnaceDialogue(_0x16F0C)
{
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	var _0x15A44 = "";
	if (getItem("researcherCrafting") >= 1)
	{
		_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "sand")
	};
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "copper");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "iron");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "silver");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "gold");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "promethium");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "titanium");
	document.getElementById("dialogue-furnace-selectOre").innerHTML = _0x15A44;
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div>";
	openDialogueOverride("dialogue-furnace", "large")
}