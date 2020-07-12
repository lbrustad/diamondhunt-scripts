'use strict';

function openStardustToolDialogue2(type, shortPath, canCreateDiscussions)
{
	var _startingFret;
	var _a_;
	var _b_;
	if (type == "stardustPickaxe")
	{
		_startingFret = parseInt(getPickaxeTypeData()[3]);
		_a_ = getPickaxeTypeData()[0];
		_b_ = getPickaxeTypeData()[1];
		document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "mining";
	}
	else
	{
		if (type == "stardustHammer")
		{
			_startingFret = parseInt(getHammerTypeData()[3]);
			_a_ = getHammerTypeData()[0];
			_b_ = getHammerTypeData()[1];
			document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "crafting";
		}
	}
	if (_startingFret > getItem("stardust"))
	{
		confirmDialogue("images/stardust.gif", "<span style='color:red'>You do not have enough stardust.</span><br /><br /><span style='color:grey'>Your current stardust required per XP is: " + _startingFret, "Close", "", "");
		return;
	}
	document.getElementById("dialogue-stardustTool2-item-img").src = "images/" + shortPath + ".png";
	document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value = _startingFret;
	document.getElementById("dialogue-stardustTool2-tool-hidden").value = type;
	document.getElementById("dialogue-stardustTool2-item-hidden").value = shortPath;
	document.getElementById("stardustTool2-info").innerHTML = "<b>Socket: </b>" + "<span style='color:grey'>" + _b_ + " <img src='images/" + _b_ + ".png' class='img-30' /> " + "</span>" + "<br />" + "<b>Stardust Cost: </b>" + "<span style='color:grey'>" + _startingFret + " <img src='images/stardustIcon.png' class='img-20' /> per XP";
	document.getElementById("dialogue-stardustTool2-input").value = 1;
	document.getElementById("dialogue-stardustTool2-submit-btn").onclick = function ()
	{
		sendBytes("USE_STARDUST_TOOL_" + type.toUpperCase() + "=" + shortPath + "~" + document.getElementById("dialogue-stardustTool2-input").value);
		closeDialogue("dialogue-stardustTool2");
	};
	onKeyUpStardustXonvertXp();
	openDialogue("dialogue-stardustTool2");
};
