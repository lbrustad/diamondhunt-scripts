/**
 * generateHTMLToSelectToolConversionItem extracted from ../../deobfuscated/bundle.js at line 16341-16353
 *
 * If this file doesn't contain a function, there is an error in ../raw/generateHTMLToSelectToolConversionItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function generateHTMLToSelectToolConversionItem(_0x4C92, _0x47D0, _0x40AD)
{
	var _0x41B2 = "";
	if (getItem(_0x47D0) > 0)
	{
		_0x41B2 += "<div onclick=\'openStardustToolDialogue2(\"" + _0x4C92 + "\",\"" + _0x47D0 + "\",\"" + _0x40AD + "\");closeDialogue(\"dialogue-stardust-tools\")\' class=\'select-ore-furnace\'>" + getItemName(_0x47D0).toUpperCase() + "<br />";
		_0x41B2 += "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-100\' />";
		_0x41B2 += "<hr class=\'hr-thin\' />";
		_0x41B2 += "<img src=\'images/miningSkill_white.png\' class=\'img-30\' /> <span style=\'color:orange\'>XP per item:</span> " + parseFloat(_0x40AD);
		_0x41B2 += "</div>"
	};
	return _0x41B2
}