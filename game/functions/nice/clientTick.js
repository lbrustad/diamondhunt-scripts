'use strict';

function clientTick()
{
	if (global_lastTabId == "right-crafting")
	{
		refreshCraftables();
	}
	if (global_lastTabId == "right-brewing")
	{
		refreshBrewing();
	}
	if (global_lastTabId == "right-convertMagic")
	{
		refreshMagicTransformList();
	}
	if (global_lastTabId == "right-mining")
	{
		loadMiningOreBoxes();
	}
	if (document.hidden && !global_tabOff)
	{
		sendBytes("TAB_OFF");
		global_tabOff = true;
	}
	if (!document.hidden && global_tabOff)
	{
		sendBytes("TAB_ON");
		global_tabOff = false;
	}
	if (getItem("marketNofification") == 1)
	{
		showElement("notification-marketReady");
	}
	else
	{
		hideElement("notification-marketReady");
	}
	if (getItem("smallManaStar") > 0 || getItem("mediumManaStar") > 0 || getItem("largeManaStar") > 0 || getItem("hugeManaStar") > 0)
	{
		showElement("notification-manaReadyNotification");
	}
	else
	{
		hideElement("notification-manaReadyNotification");
	}
	if (document.hidden && global_titleNotification && localStorage.getItem("titletrigger") == null)
	{
		if (document.getElementById("html-title").innerHTML == "Diamond Hunt 3")
		{
			document.getElementById("html-title").innerHTML = "Notifications - Ready";
		}
		else
		{
			document.getElementById("html-title").innerHTML = "Diamond Hunt 3";
		}
	}
	else
	{
		if (document.getElementById("html-title").innerHTML != "Diamond Hunt 3")
		{
			document.getElementById("html-title").innerHTML = "Diamond Hunt 3";
		}
	}
};
