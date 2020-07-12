/**
 * openTradablesDialogue extracted from ../../deobfuscated/bundle.js at line 12654-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/openTradablesDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openTradablesDialogue(_0x1DCEA)
{
	var _0x1C85A = document.getElementById("dialogue-tradables-section");
	var _0x1C8F4 = "";
	var _0x1DCF8 = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_TradablesData.length; _0x1C6B6++)
	{
		var _0x1CA1A = global_TradablesData[_0x1C6B6];
		var _0x1C83E = _0x1CA1A.itemName;
		var _0x1CA0C = _0x1CA1A.lowerLimit;
		var _0x1CA28 = _0x1CA1A.upperLimit;
		var _0x1C9B8 = _0x1CA1A.category;
		if (_0x1DCF8 != _0x1C9B8)
		{
			if (_0x1DCF8 != "")
			{
				_0x1C8F4 += "</div>"
			};
			_0x1C8F4 += "<div class=\'market-tradables-dialogue-section\'>";
			_0x1DCF8 = _0x1C9B8
		};
		var _0x1DD06 = "browseMarketItem(\"" + _0x1C83E + "\");closeDialogue(\"dialogue-tradables\")";
		if (_0x1DCEA)
		{
			_0x1DD06 = "addItemSlotButtonSelectItem(\"" + _0x1C6B6 + "\");closeDialogue(\"dialogue-tradables\")"
		};
		_0x1C8F4 += "<div class=\'dialogue-tradables-item\'><img oncontextmenu=\'addItemSlotButtonSelectItemChangeLimits(\"" + _0x1C6B6 + "\");closeDialogue(\"dialogue-tradables\"); return false;\' onclick=\'" + _0x1DD06 + "\' src=\'images/" + _0x1C83E + ".png\' class=\'img-50\' /></div>"
	};
	_0x1C85A.innerHTML = _0x1C8F4;
	openDialogueOverride("dialogue-tradables", "large")
}