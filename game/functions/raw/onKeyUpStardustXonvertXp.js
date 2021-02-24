/**
 * onKeyUpStardustXonvertXp extracted from ../../deobfuscated/bundle.js at line 20674-20702
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpStardustXonvertXp.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpStardustXonvertXp()
{
	var _0x14FE0 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x15DF5 = parseInt(document.getElementById("dialogue-stardustTool2-input").value);
	var _0x168E5 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x17303 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x1850F = document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value;
	if (isNaN(_0x15DF5))
	{
		document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "";
		return
	};
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
	var _0x15463 = "";
	var _0x18532 = _0x17303 * _0x15DF5 * _0x17326;
	var _0x15909 = _0x15DF5 * _0x17326;
	_0x15463 = createHTMLBoxCheckOrXCollection([_0x14FE0, "stardust"], [_0x15DF5, _0x18532], ["", ""]);
	document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "<span class=\'html-box-check-or-check\' style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\'><img src=\'images/" + _0x1850F + "Skill.png\' class=\'img-50\' /> +" + formatNumber(_0x17326 * _0x15DF5) + " XP</span>" + _0x15463
}