'use strict';

function getSmallFishingNetTypeData()
{
	testingFor = "smallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "none", "sapphire", "rawAnchovy"];
	}
	testingFor = "sapphireSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "sapphire", "emerald", "rawSardine"];
	}
	testingFor = "emeraldSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "emerald", "ruby", "rawCrab"];
	}
	testingFor = "rubySmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "ruby", "diamond", "rawPiranha"];
	}
	testingFor = "diamondSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "diamond", "none", "none"];
	}
	return ["none", "none", "none", "none"];
};
