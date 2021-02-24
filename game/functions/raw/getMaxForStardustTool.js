/**
 * getMaxForStardustTool extracted from ../../deobfuscated/bundle.js at line 20646-20672
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMaxForStardustTool.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMaxForStardustTool()
{
	var _0x14FE0 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x168E5 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x17303 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x17326 = 0;
	var _0x17277 = global_stardustToolsMap[_0x168E5].arrayItemsToConvertArray;
	var _0x1729A = global_stardustToolsMap[_0x168E5].arrayItemsConvetXpArray;
	for (var _0x14C0C = 0; _0x14C0C < _0x17277.length; _0x14C0C++)
	{
		if (_0x17277[_0x14C0C] == _0x14FE0)
		{
			_0x17326 = _0x1729A[_0x14C0C];
			break
		}
	};
	var _0x172BD = getItem(_0x14FE0);
	var _0x172E0 = _0x17326 * _0x172BD * _0x17303;
	if (getItem("stardust") >= _0x172E0)
	{
		return _0x172BD
	}
	else
	{
		return parseInt(getItem("stardust") / (_0x17326 * _0x17303))
	}
}