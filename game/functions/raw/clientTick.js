/**
 * clientTick extracted from ../../deobfuscated/bundle.js at line 944-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clientTick.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clientTick()
{
	if (global_lastTabId == "right-crafting")
	{
		refreshCraftables()
	};
	if (global_lastTabId == "right-brewing")
	{
		refreshBrewing()
	};
	if (global_lastTabId == "right-convertMagic")
	{
		refreshMagicTransformList()
	};
	if (global_lastTabId == "right-mining")
	{
		loadMiningOreBoxes()
	};
	if (document.hidden && !global_tabOff)
	{
		sendBytes("TAB_OFF");
		global_tabOff = true
	};
	if (!document.hidden && global_tabOff)
	{
		sendBytes("TAB_ON");
		global_tabOff = false
	};
	if (getItem("marketNofification") == 1)
	{
		showElement("notification-marketReady")
	}
	else
	{
		hideElement("notification-marketReady")
	}
}