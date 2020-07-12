/**
 * openStardustToolDialogue2 extracted from ../../deobfuscated/bundle.js at line 12110-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/openStardustToolDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openStardustToolDialogue2(_0x1D0D4, _0x1CF30, _0x1D47E)
{
	var _0x1DCDC;
	var _0x1DCCE;
	var _0x1DB62;
	if (_0x1D0D4 == "stardustPickaxe")
	{
		_0x1DCDC = parseInt(getPickaxeTypeData()[3]);
		_0x1DCCE = getPickaxeTypeData()[0];
		_0x1DB62 = getPickaxeTypeData()[1];
		document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "mining"
	}
	else
	{
		if (_0x1D0D4 == "stardustHammer")
		{
			_0x1DCDC = parseInt(getHammerTypeData()[3]);
			_0x1DCCE = getHammerTypeData()[0];
			_0x1DB62 = getHammerTypeData()[1];
			document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "crafting"
		}
	};
	if (_0x1DCDC > getItem("stardust"))
	{
		confirmDialogue("images/stardust.gif", "<span style=\'color:red\'>You do not have enough stardust.</span><br /><br /><span style=\'color:grey\'>Your current stardust required per XP is: " + _0x1DCDC, "Close", "", "");
		return
	};
	document.getElementById("dialogue-stardustTool2-item-img").src = "images/" + _0x1CF30 + ".png";
	document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value = _0x1DCDC;
	document.getElementById("dialogue-stardustTool2-tool-hidden").value = _0x1D0D4;
	document.getElementById("dialogue-stardustTool2-item-hidden").value = _0x1CF30;
	document.getElementById("stardustTool2-info").innerHTML = "<b>Socket: </b>" + "<span style=\'color:grey\'>" + _0x1DB62 + " <img src=\'images/" + _0x1DB62 + ".png\' class=\'img-30\' /> " + "</span>" + "<br />" + "<b>Stardust Cost: </b>" + "<span style=\'color:grey\'>" + _0x1DCDC + " <img src=\'images/stardustIcon.png\' class=\'img-20\' /> per XP";
	document.getElementById("dialogue-stardustTool2-input").value = 1;
	document.getElementById("dialogue-stardustTool2-submit-btn").onclick = function ()
	{
		sendBytes("USE_STARDUST_TOOL_" + _0x1D0D4.toUpperCase() + "=" + _0x1CF30 + "~" + document.getElementById("dialogue-stardustTool2-input").value);
		closeDialogue("dialogue-stardustTool2")
	};
	onKeyUpStardustXonvertXp();
	openDialogue("dialogue-stardustTool2")
}