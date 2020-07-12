/**
 * openStardustToolDialogue extracted from ../../deobfuscated/bundle.js at line 12070-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/openStardustToolDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openStardustToolDialogue(_0x1D0D4)
{
	var _0x1DCA4 = document.getElementById("dialogue-stardust-tools-socket-button");
	var _0x1C902 = document.getElementById("dialogue-stardust-tools-socket-image");
	var _0x1D87C = document.getElementById("dialogue-stardust-tools-socket-gem-label");
	var _0x1DCC0;
	if (_0x1D0D4 == "stardustPickaxe")
	{
		var _0x1DCC0 = getPickaxeTypeData();
		var _0x1CC58 = _0x1DCC0[2]
	};
	if (_0x1D0D4 == "stardustHammer")
	{
		var _0x1DCC0 = getHammerTypeData();
		var _0x1CC58 = _0x1DCC0[2]
	};
	if (_0x1CC58 == "none")
	{
		_0x1DCA4.style.display = "none"
	}
	else
	{
		_0x1C902.src = "images/" + _0x1CC58 + ".png";
		_0x1DCA4.style.display = "";
		_0x1DCA4.setAttribute("onclick", "confirmSocketDialogue(\'" + _0x1D0D4 + "\',\'images/" + _0x1DCC0[0] + ".png\',\'" + _0x1CC58 + "\');closeDialogue(\'dialogue-stardust-tools\')");
		_0x1D87C.innerHTML = _0x1CC58
	};
	var _0x1DCB2 = global_stardustToolsMap[_0x1D0D4];
	var _0x1DA3C = _0x1DCB2.arrayItemsToConvertArray;
	var _0x1DA2E = _0x1DCB2.arrayItemsConvetXpArray;
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = "";
	var _0x1C8F4 = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1DA3C.length; _0x1C6B6++)
	{
		_0x1C8F4 += generateHTMLToSelectToolConversionItem(_0x1D0D4, _0x1DA3C[_0x1C6B6], _0x1DA2E[_0x1C6B6])
	};
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = _0x1C8F4;
	openDialogueOverride("dialogue-stardust-tools", "large")
}