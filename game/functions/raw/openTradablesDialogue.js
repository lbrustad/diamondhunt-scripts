/**
 * openTradablesDialogue extracted from ../../deobfuscated/bundle.js at line 17585-17615
 *
 * If this file doesn't contain a function, there is an error in ../raw/openTradablesDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openTradablesDialogue(_0x6975)
{
	var _0x396D = document.getElementById("dialogue-tradables-section");
	var _0x3AAC = "";
	var _0x6992 = "";
	for (var _0x3607 = 0; _0x3607 < global_TradablesData.length; _0x3607++)
	{
		var _0x3D2A = global_TradablesData[_0x3607];
		var _0x3933 = _0x3D2A.itemName;
		var _0x3D0D = _0x3D2A.lowerLimit;
		var _0x3D47 = _0x3D2A.upperLimit;
		var _0x3C5F = _0x3D2A.category;
		if (_0x6992 != _0x3C5F)
		{
			if (_0x6992 != "")
			{
				_0x3AAC += "</div>"
			};
			_0x3AAC += "<div class=\'market-tradables-dialogue-section\'>";
			_0x6992 = _0x3C5F
		};
		var _0x69AF = "browseMarketItem(\"" + _0x3933 + "\");closeDialogue(\"dialogue-tradables\")";
		if (_0x6975)
		{
			_0x69AF = "addItemSlotButtonSelectItem(\"" + _0x3607 + "\");closeDialogue(\"dialogue-tradables\")"
		};
		_0x3AAC += "<div class=\'dialogue-tradables-item\'><img oncontextmenu=\'addItemSlotButtonSelectItemChangeLimits(\"" + _0x3607 + "\");closeDialogue(\"dialogue-tradables\"); return false;\' onclick=\'" + _0x69AF + "\' src=\'images/" + _0x3933 + ".png\' class=\'img-50\' /></div>"
	};
	_0x396D.innerHTML = _0x3AAC;
	openDialogueOverride("dialogue-tradables", "large")
}