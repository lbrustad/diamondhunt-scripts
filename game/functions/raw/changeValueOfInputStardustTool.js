/**
 * changeValueOfInputStardustTool extracted from ../../deobfuscated/bundle.js at line 16891-16908
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeValueOfInputStardustTool.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeValueOfInputStardustTool(_0x45C6, _0x45E3, _0x45A9)
{
	var _0x4535 = getMaxForStardustTool();
	switch (_0x45A9)
	{
	case "ONE":
		_0x4535 = 1;
		break;
	case "25%":
		_0x4535 *= 0.25;
		break;
	case "50%":
		_0x4535 *= 0.5;
		break
	};
	document.getElementById("dialogue-stardustTool2-input").value = parseInt(_0x4535);
	onKeyUpStardustXonvertXp()
}