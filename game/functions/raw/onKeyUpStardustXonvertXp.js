/**
 * onKeyUpStardustXonvertXp extracted from ../../deobfuscated/bundle.js at line 12250-12278
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpStardustXonvertXp.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpStardustXonvertXp()
{
	var _0x1C830 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x1CDC4 = parseInt(document.getElementById("dialogue-stardustTool2-input").value);
	var _0x1D0D4 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x1D470 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x1DA82 = document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value;
	if (isNaN(_0x1CDC4))
	{
		document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "";
		return
	};
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
	var _0x1C9F0 = "";
	var _0x1DA90 = _0x1D470 * _0x1CDC4 * _0x1D47E;
	var _0x1CBCC = _0x1CDC4 * _0x1D47E;
	_0x1C9F0 = createHTMLBoxCheckOrXCollection([_0x1C830, "stardust"], [_0x1CDC4, _0x1DA90], ["", ""]);
	document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "<span class=\'html-box-check-or-check\' style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\'><img src=\'images/" + _0x1DA82 + "Skill.png\' class=\'img-50\' /> +" + formatNumber(_0x1D47E * _0x1CDC4) + " XP</span>" + _0x1C9F0
}