/**
 * openStardustToolDialogue extracted from ../../deobfuscated/bundle.js at line 16694-16732
 *
 * If this file doesn't contain a function, there is an error in ../raw/openStardustToolDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openStardustToolDialogue(_0x4C92)
{
	var _0x68E4 = document.getElementById("dialogue-stardust-tools-socket-button");
	var _0x3AC9 = document.getElementById("dialogue-stardust-tools-socket-image");
	var _0x5DAD = document.getElementById("dialogue-stardust-tools-socket-gem-label");
	var _0x691E;
	if (_0x4C92 == "stardustPickaxe")
	{
		var _0x691E = getPickaxeTypeData();
		var _0x41CF = _0x691E[2]
	};
	if (_0x4C92 == "stardustHammer")
	{
		var _0x691E = getHammerTypeData();
		var _0x41CF = _0x691E[2]
	};
	if (_0x41CF == "none")
	{
		_0x68E4.style.display = "none"
	}
	else
	{
		_0x3AC9.src = "images/" + _0x41CF + ".png";
		_0x68E4.style.display = "";
		_0x68E4.setAttribute("onclick", "confirmSocketDialogue(\'" + _0x4C92 + "\',\'images/" + _0x691E[0] + ".png\',\'" + _0x41CF + "\');closeDialogue(\'dialogue-stardust-tools\')");
		_0x5DAD.innerHTML = _0x41CF
	};
	var _0x6901 = global_stardustToolsMap[_0x4C92];
	var _0x61FB = _0x6901.arrayItemsToConvertArray;
	var _0x61DE = _0x6901.arrayItemsConvetXpArray;
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = "";
	var _0x3AAC = "";
	for (var _0x3607 = 0; _0x3607 < _0x61FB.length; _0x3607++)
	{
		_0x3AAC += generateHTMLToSelectToolConversionItem(_0x4C92, _0x61FB[_0x3607], _0x61DE[_0x3607])
	};
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = _0x3AAC;
	openDialogueOverride("dialogue-stardust-tools", "large")
}