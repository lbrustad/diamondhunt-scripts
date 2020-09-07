/**
 * generateHTMLToSelectOreFurnace extracted from ../../deobfuscated/bundle.js at line 10158-10180
 *
 * If this file doesn't contain a function, there is an error in ../raw/generateHTMLToSelectOreFurnace.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function generateHTMLToSelectOreFurnace(_0x51C8, _0x3B03)
{
	if (getItem(_0x3B03) == 0 && !(_0x3B03 == "copper"))
	{
		return ""
	};
	var _0x51E5 = getOilCost(_0x3B03);
	var _0x51AB = "images/oil_lighter.png";
	if (_0x51E5 == 0)
	{
		_0x51E5 = getCharcoalCost(_0x3B03);
		_0x51AB = "images/charcoal_light.png"
	};
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	var _0x41B2 = "";
	_0x41B2 += "<div onclick=\'openFurnaceDialogue2(\"" + _0x51C8 + "\",\"" + _0x3B03 + "\")\' class=\'select-ore-furnace\'>" + getItemName(_0x3B03).toUpperCase() + "<br />";
	_0x41B2 += "<img src=\'images/" + _0x3B03 + ".png\' class=\'img-100\' />";
	_0x41B2 += "<hr class=\'hr-thin\' />";
	_0x41B2 += "<img src=\'" + _0x51AB + "\' class=\'img-30\' /> " + _0x51E5;
	_0x41B2 += "</div>";
	return _0x41B2
}