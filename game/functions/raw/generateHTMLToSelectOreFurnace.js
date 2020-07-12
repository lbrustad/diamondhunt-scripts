/**
 * generateHTMLToSelectOreFurnace extracted from ../../deobfuscated/bundle.js at line 7791-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/generateHTMLToSelectOreFurnace.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function generateHTMLToSelectOreFurnace(_0x1D34A, _0x1C91E)
{
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	var _0x1CC4A = "";
	_0x1CC4A += "<div onclick=\'openFurnaceDialogue2(\"" + _0x1D34A + "\",\"" + _0x1C91E + "\")\' class=\'select-ore-furnace\'>" + getItemName(_0x1C91E).toUpperCase() + "<br />";
	_0x1CC4A += "<img src=\'images/" + _0x1C91E + ".png\' class=\'img-100\' />";
	_0x1CC4A += "<hr class=\'hr-thin\' />";
	_0x1CC4A += "<img src=\'images/oil_lighter.png\' class=\'img-30\' /> " + getOilCost(_0x1C91E);
	_0x1CC4A += "</div>";
	return _0x1CC4A
}