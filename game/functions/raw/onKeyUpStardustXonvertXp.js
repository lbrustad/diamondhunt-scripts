/**
 * onKeyUpStardustXonvertXp extracted from ../../deobfuscated/bundle.js at line 16938-16966
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpStardustXonvertXp.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpStardustXonvertXp()
{
	var _0x3916 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x44C1 = parseInt(document.getElementById("dialogue-stardustTool2-input").value);
	var _0x4C92 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x5511 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x628C = document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value;
	if (isNaN(_0x44C1))
	{
		document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "";
		return
	};
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
	var _0x3CD3 = "";
	var _0x62A9 = _0x5511 * _0x44C1 * _0x552E;
	var _0x40AD = _0x44C1 * _0x552E;
	_0x3CD3 = createHTMLBoxCheckOrXCollection([_0x3916, "stardust"], [_0x44C1, _0x62A9], ["", ""]);
	document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "<span class=\'html-box-check-or-check\' style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\'><img src=\'images/" + _0x628C + "Skill.png\' class=\'img-50\' /> +" + formatNumber(_0x552E * _0x44C1) + " XP</span>" + _0x3CD3
}