/**
 * changeValueOfInputStardustTool extracted from ../../deobfuscated/bundle.js at line 20627-20644
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeValueOfInputStardustTool.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeValueOfInputStardustTool(_0x15F30, _0x15F53, _0x15F0D)
{
	var _0x15E81 = getMaxForStardustTool();
	switch (_0x15F0D)
	{
	case "ONE":
		_0x15E81 = 1;
		break;
	case "25%":
		_0x15E81 *= 0.25;
		break;
	case "50%":
		_0x15E81 *= 0.5;
		break
	};
	document.getElementById("dialogue-stardustTool2-input").value = parseInt(_0x15E81);
	onKeyUpStardustXonvertXp()
}