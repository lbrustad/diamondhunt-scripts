/**
 * getMaxForStardustTool extracted from ../../deobfuscated/bundle.js at line 16910-16936
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMaxForStardustTool.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMaxForStardustTool()
{
	var _0x3916 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x4C92 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x5511 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x552E = 0;
	var _0x549D = global_stardustToolsMap[_0x4C92].arrayItemsToConvertArray;
	var _0x54BA = global_stardustToolsMap[_0x4C92].arrayItemsConvetXpArray;
	for (var _0x3607 = 0; _0x3607 < _0x549D.length; _0x3607++)
	{
		if (_0x549D[_0x3607] == _0x3916)
		{
			_0x552E = _0x54BA[_0x3607];
			break
		}
	};
	var _0x54D7 = getItem(_0x3916);
	var _0x54F4 = _0x552E * _0x54D7 * _0x5511;
	if (getItem("stardust") >= _0x54F4)
	{
		return _0x54D7
	}
	else
	{
		return parseInt(getItem("stardust") / (_0x552E * _0x5511))
	}
}