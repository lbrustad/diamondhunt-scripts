/**
 * openStardustToolDialogue2 extracted from ../../deobfuscated/bundle.js at line 16734-16774
 *
 * If this file doesn't contain a function, there is an error in ../raw/openStardustToolDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openStardustToolDialogue2(_0x4C92, _0x47D0, _0x552E)
{
	var _0x6958;
	var _0x693B;
	var _0x645C;
	if (_0x4C92 == "stardustPickaxe")
	{
		_0x6958 = parseInt(getPickaxeTypeData()[3]);
		_0x693B = getPickaxeTypeData()[0];
		_0x645C = getPickaxeTypeData()[1];
		document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "mining"
	}
	else
	{
		if (_0x4C92 == "stardustHammer")
		{
			_0x6958 = parseInt(getHammerTypeData()[3]);
			_0x693B = getHammerTypeData()[0];
			_0x645C = getHammerTypeData()[1];
			document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "crafting"
		}
	};
	if (_0x6958 > getItem("stardust"))
	{
		confirmDialogue("images/stardust.gif", "<span style=\'color:red\'>You do not have enough stardust.</span><br /><br /><span style=\'color:grey\'>Your current stardust required per XP is: " + _0x6958, "Close", "", "");
		return
	};
	document.getElementById("dialogue-stardustTool2-item-img").src = "images/" + _0x47D0 + ".png";
	document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value = _0x6958;
	document.getElementById("dialogue-stardustTool2-tool-hidden").value = _0x4C92;
	document.getElementById("dialogue-stardustTool2-item-hidden").value = _0x47D0;
	document.getElementById("stardustTool2-info").innerHTML = "<b>Socket: </b>" + "<span style=\'color:grey\'>" + _0x645C + " <img src=\'images/" + _0x645C + ".png\' class=\'img-30\' /> " + "</span>" + "<br />" + "<b>Stardust Cost: </b>" + "<span style=\'color:grey\'>" + _0x6958 + " <img src=\'images/stardustIcon.png\' class=\'img-20\' /> per XP";
	document.getElementById("dialogue-stardustTool2-input").value = 1;
	document.getElementById("dialogue-stardustTool2-submit-btn").onclick = function ()
	{
		sendBytes("USE_STARDUST_TOOL_" + _0x4C92.toUpperCase() + "=" + _0x47D0 + "~" + document.getElementById("dialogue-stardustTool2-input").value);
		closeDialogue("dialogue-stardustTool2")
	};
	onKeyUpStardustXonvertXp();
	openDialogue("dialogue-stardustTool2")
}