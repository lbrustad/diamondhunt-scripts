/**
 * generateHTMLToSelectToolConversionItem extracted from ../../deobfuscated/bundle.js at line 20047-20059
 *
 * If this file doesn't contain a function, there is an error in ../raw/generateHTMLToSelectToolConversionItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function generateHTMLToSelectToolConversionItem(_0x168E5, _0x16255, _0x15909)
{
	var _0x15A44 = "";
	if (getItem(_0x16255) > 0)
	{
		_0x15A44 += "<div onclick=\'openStardustToolDialogue2(\"" + _0x168E5 + "\",\"" + _0x16255 + "\",\"" + _0x15909 + "\");closeDialogue(\"dialogue-stardust-tools\")\' class=\'select-ore-furnace\'>" + getItemName(_0x16255).toUpperCase() + "<br />";
		_0x15A44 += "<img src=\'images/" + _0x16255 + ".png\' class=\'img-100\' />";
		_0x15A44 += "<hr class=\'hr-thin\' />";
		_0x15A44 += "<img src=\'images/miningSkill_white.png\' class=\'img-30\' /> <span style=\'color:orange\'>XP per item:</span> " + parseFloat(_0x15909);
		_0x15A44 += "</div>"
	};
	return _0x15A44
}