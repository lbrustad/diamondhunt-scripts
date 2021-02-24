/**
 * getPresetSetName extracted from ../../deobfuscated/bundle.js at line 6600-6608
 *
 * If this file doesn't contain a function, there is an error in ../raw/getPresetSetName.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getPresetSetName(_0x173F8)
{
	var _0x1741B = getItemString("presetName" + _0x173F8);
	if (_0x1741B == "none")
	{
		return "Preset " + (_0x173F8 + 1)
	};
	return _0x1741B
}