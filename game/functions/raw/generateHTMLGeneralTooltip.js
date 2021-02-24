/**
 * generateHTMLGeneralTooltip extracted from ../../deobfuscated/bundle.js at line 12140-12156
 *
 * If this file doesn't contain a function, there is an error in ../raw/generateHTMLGeneralTooltip.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function generateHTMLGeneralTooltip(_0x159FE, _0x16EC6, _0x151A7, _0x14EEB)
{
	var _0x151CA = "";
	_0x151CA += "<div id=\'" + _0x159FE + "\' style=\'display:none;\'>";
	if (_0x16EC6 != "" || _0x151A7 != "")
	{
		_0x151CA += "<h2>" + _0x151A7 + "</h2>";
		_0x151CA += "<hr class=\'hr-thin\' />"
	};
	_0x151CA += _0x14EEB;
	if (_0x16EC6 != "")
	{
		_0x151CA += getTooltipSellsForLabel(_0x16EC6)
	};
	_0x151CA += "</div>";
	return _0x151CA
}