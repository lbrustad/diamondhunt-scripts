/**
 * getPlayerSlotData extracted from ../../deobfuscated/bundle.js at line 17508-17518
 *
 * If this file doesn't contain a function, there is an error in ../raw/getPlayerSlotData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getPlayerSlotData(_0x3C42)
{
	for (i = 0; i < global_MarketData.length; i++)
	{
		if (global_MarketData[i].itemSlot == _0x3C42 && global_MarketData[i].playerId == getItem("playerId"))
		{
			return global_MarketData[i]
		}
	};
	return false
}