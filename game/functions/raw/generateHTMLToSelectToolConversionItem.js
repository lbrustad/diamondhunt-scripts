/**
 * generateHTMLToSelectToolConversionItem extracted from ../../deobfuscated/bundle.js at line 11798-11810
 *
 * If this file doesn't contain a function, there is an error in ../raw/generateHTMLToSelectToolConversionItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function generateHTMLToSelectToolConversionItem(_0x1D0D4, _0x1CF30, _0x1CBCC)
{
	var _0x1CC4A = "";
	if (getItem(_0x1CF30) > 0)
	{
		_0x1CC4A += "<div onclick=\'openStardustToolDialogue2(\"" + _0x1D0D4 + "\",\"" + _0x1CF30 + "\",\"" + _0x1CBCC + "\");closeDialogue(\"dialogue-stardust-tools\")\' class=\'select-ore-furnace\'>" + getItemName(_0x1CF30).toUpperCase() + "<br />";
		_0x1CC4A += "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-100\' />";
		_0x1CC4A += "<hr class=\'hr-thin\' />";
		_0x1CC4A += "<img src=\'images/miningSkill_white.png\' class=\'img-30\' /> <span style=\'color:orange\'>XP per item:</span> " + parseFloat(_0x1CBCC);
		_0x1CC4A += "</div>"
	};
	return _0x1CC4A
}