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
};
