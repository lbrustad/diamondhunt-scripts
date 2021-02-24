/**
 * openTradablesDialogue extracted from ../../deobfuscated/bundle.js at line 21335-21365
 *
 * If this file doesn't contain a function, there is an error in ../raw/openTradablesDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openTradablesDialogue(_0x18D66)
{
	var _0x15049 = document.getElementById("dialogue-tradables-section");
	var _0x151CA = "";
	var _0x18D89 = "";
	for (var _0x14C0C = 0; _0x14C0C < global_TradablesData.length; _0x14C0C++)
	{
		var _0x154CC = global_TradablesData[_0x14C0C];
		var _0x15003 = _0x154CC.itemName;
		var _0x154A9 = _0x154CC.lowerLimit;
		var _0x154EF = _0x154CC.upperLimit;
		var _0x153D7 = _0x154CC.category;
		if (_0x18D89 != _0x153D7)
		{
			if (_0x18D89 != "")
			{
				_0x151CA += "</div>"
			};
			_0x151CA += "<div class=\'market-tradables-dialogue-section\'>";
			_0x18D89 = _0x153D7
		};
		var _0x18DAC = "browseMarketItem(\"" + _0x15003 + "\");closeDialogue(\"dialogue-tradables\")";
		if (_0x18D66)
		{
			_0x18DAC = "addItemSlotButtonSelectItem(\"" + _0x14C0C + "\");closeDialogue(\"dialogue-tradables\")"
		};
		_0x151CA += "<div class=\'dialogue-tradables-item\'><img oncontextmenu=\'addItemSlotButtonSelectItemChangeLimits(\"" + _0x14C0C + "\");closeDialogue(\"dialogue-tradables\"); return false;\' onclick=\'" + _0x18DAC + "\' src=\'images/" + _0x15003 + ".png\' class=\'img-50\' /></div>"
	};
	_0x15049.innerHTML = _0x151CA;
	openDialogueOverride("dialogue-tradables", "large")
}