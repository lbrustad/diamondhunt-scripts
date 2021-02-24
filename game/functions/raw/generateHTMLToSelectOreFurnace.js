/**
 * generateHTMLToSelectOreFurnace extracted from ../../deobfuscated/bundle.js at line 12308-12330
 *
 * If this file doesn't contain a function, there is an error in ../raw/generateHTMLToSelectOreFurnace.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function generateHTMLToSelectOreFurnace(_0x16F0C, _0x15233)
{
	if (getItem(_0x15233) == 0 && !(_0x15233 == "copper"))
	{
		return ""
	};
	var _0x16F2F = getOilCost(_0x15233);
	var _0x16EE9 = "images/oil_lighter.png";
	if (_0x16F2F == 0)
	{
		_0x16F2F = getCharcoalCost(_0x15233);
		_0x16EE9 = "images/charcoal_light.png"
	};
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	var _0x15A44 = "";
	_0x15A44 += "<div onclick=\'openFurnaceDialogue2(\"" + _0x16F0C + "\",\"" + _0x15233 + "\")\' class=\'select-ore-furnace\'>" + getItemName(_0x15233).toUpperCase() + "<br />";
	_0x15A44 += "<img src=\'images/" + _0x15233 + ".png\' class=\'img-100\' />";
	_0x15A44 += "<hr class=\'hr-thin\' />";
	_0x15A44 += "<img src=\'" + _0x16EE9 + "\' class=\'img-30\' /> " + _0x16F2F;
	_0x15A44 += "</div>";
	return _0x15A44
}