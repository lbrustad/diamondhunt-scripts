/**
 * getMaxForStardustTool extracted from ../../deobfuscated/bundle.js at line 12234-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMaxForStardustTool.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMaxForStardustTool()
{
	var _0x1C830 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x1D0D4 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x1D470 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x1D47E = 0;
	var _0x1D438 = global_stardustToolsMap[_0x1D0D4].arrayItemsToConvertArray;
	var _0x1D446 = global_stardustToolsMap[_0x1D0D4].arrayItemsConvetXpArray;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D438.length; _0x1C6B6++)
	{
		if (_0x1D438[_0x1C6B6] == _0x1C830)
		{
			_0x1D47E = _0x1D446[_0x1C6B6];
			break
		}
	};
	var _0x1D454 = getItem(_0x1C830);
	var _0x1D462 = _0x1D47E * _0x1D454 * _0x1D470;
	if (getItem("stardust") >= _0x1D462)
	{
		return _0x1D454
	}
	else
	{
		return parseInt(getItem("stardust") / (_0x1D47E * _0x1D470))
	}
}