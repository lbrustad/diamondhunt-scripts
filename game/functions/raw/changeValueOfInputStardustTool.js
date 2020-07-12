/**
 * changeValueOfInputStardustTool extracted from ../../deobfuscated/bundle.js at line 12215-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeValueOfInputStardustTool.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeValueOfInputStardustTool(_0x1CE34, _0x1CE42, _0x1CE26)
{
	var _0x1CE50 = getMaxForStardustTool();
	switch (_0x1CE26)
	{
	case "ONE":
		_0x1CE50 = 1;
		break;
	case "25%":
		_0x1CE50 *= 0.25;
		break;
	case "50%":
		_0x1CE50 *= 0.5;
		break
	};
	document.getElementById("dialogue-stardustTool2-input").value = parseInt(_0x1CE50);
	onKeyUpStardustXonvertXp()
}