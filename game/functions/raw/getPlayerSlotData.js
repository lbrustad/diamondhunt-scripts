/**
 * getPlayerSlotData extracted from ../../deobfuscated/bundle.js at line 12565-12575
 *
 * If this file doesn't contain a function, there is an error in ../raw/getPlayerSlotData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getPlayerSlotData(_0x1C9AA)
{
	for (i = 0; i < global_MarketData.length; i++)
	{
		if (global_MarketData[i].itemSlot == _0x1C9AA && global_MarketData[i].playerId == getItem("playerId"))
		{
			return global_MarketData[i]
		}
	};
	return false
}