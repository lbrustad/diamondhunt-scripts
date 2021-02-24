/**
 * openStardustToolDialogue extracted from ../../deobfuscated/bundle.js at line 20430-20468
 *
 * If this file doesn't contain a function, there is an error in ../raw/openStardustToolDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openStardustToolDialogue(_0x168E5)
{
	var _0x18CB7 = document.getElementById("dialogue-stardust-tools-socket-button");
	var _0x151ED = document.getElementById("dialogue-stardust-tools-socket-image");
	var _0x17EC5 = document.getElementById("dialogue-stardust-tools-socket-gem-label");
	var _0x18CFD;
	if (_0x168E5 == "stardustPickaxe")
	{
		var _0x18CFD = getPickaxeTypeData();
		var _0x15A67 = _0x18CFD[2]
	};
	if (_0x168E5 == "stardustHammer")
	{
		var _0x18CFD = getHammerTypeData();
		var _0x15A67 = _0x18CFD[2]
	};
	if (_0x15A67 == "none")
	{
		_0x18CB7.style.display = "none"
	}
	else
	{
		_0x151ED.src = "images/" + _0x15A67 + ".png";
		_0x18CB7.style.display = "";
		_0x18CB7.setAttribute("onclick", "confirmSocketDialogue(\'" + _0x168E5 + "\',\'images/" + _0x18CFD[0] + ".png\',\'" + _0x15A67 + "\');closeDialogue(\'dialogue-stardust-tools\')");
		_0x17EC5.innerHTML = _0x15A67
	};
	var _0x18CDA = global_stardustToolsMap[_0x168E5];
	var _0x18460 = _0x18CDA.arrayItemsToConvertArray;
	var _0x1843D = _0x18CDA.arrayItemsConvetXpArray;
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = "";
	var _0x151CA = "";
	for (var _0x14C0C = 0; _0x14C0C < _0x18460.length; _0x14C0C++)
	{
		_0x151CA += generateHTMLToSelectToolConversionItem(_0x168E5, _0x18460[_0x14C0C], _0x1843D[_0x14C0C])
	};
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = _0x151CA;
	openDialogueOverride("dialogue-stardust-tools", "large")
}