/**
 * openStardustToolDialogue2 extracted from ../../deobfuscated/bundle.js at line 20470-20510
 *
 * If this file doesn't contain a function, there is an error in ../raw/openStardustToolDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openStardustToolDialogue2(_0x168E5, _0x16255, _0x17326)
{
	var _0x18D43;
	var _0x18D20;
	var _0x1873F;
	if (_0x168E5 == "stardustPickaxe")
	{
		_0x18D43 = parseInt(getPickaxeTypeData()[3]);
		_0x18D20 = getPickaxeTypeData()[0];
		_0x1873F = getPickaxeTypeData()[1];
		document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "mining"
	}
	else
	{
		if (_0x168E5 == "stardustHammer")
		{
			_0x18D43 = parseInt(getHammerTypeData()[3]);
			_0x18D20 = getHammerTypeData()[0];
			_0x1873F = getHammerTypeData()[1];
			document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "crafting"
		}
	};
	if (_0x18D43 > getItem("stardust"))
	{
		confirmDialogue("images/stardust.gif", "<span style=\'color:red\'>You do not have enough stardust.</span><br /><br /><span style=\'color:grey\'>Your current stardust required per XP is: " + _0x18D43, "Close", "", "");
		return
	};
	document.getElementById("dialogue-stardustTool2-item-img").src = "images/" + _0x16255 + ".png";
	document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value = _0x18D43;
	document.getElementById("dialogue-stardustTool2-tool-hidden").value = _0x168E5;
	document.getElementById("dialogue-stardustTool2-item-hidden").value = _0x16255;
	document.getElementById("stardustTool2-info").innerHTML = "<b>Socket: </b>" + "<span style=\'color:grey\'>" + _0x1873F + " <img src=\'images/" + _0x1873F + ".png\' class=\'img-30\' /> " + "</span>" + "<br />" + "<b>Stardust Cost: </b>" + "<span style=\'color:grey\'>" + _0x18D43 + " <img src=\'images/stardustIcon.png\' class=\'img-20\' /> per XP";
	document.getElementById("dialogue-stardustTool2-input").value = 1;
	document.getElementById("dialogue-stardustTool2-submit-btn").onclick = function ()
	{
		sendBytes("USE_STARDUST_TOOL_" + _0x168E5.toUpperCase() + "=" + _0x16255 + "~" + document.getElementById("dialogue-stardustTool2-input").value);
		closeDialogue("dialogue-stardustTool2")
	};
	onKeyUpStardustXonvertXp();
	openDialogue("dialogue-stardustTool2")
}