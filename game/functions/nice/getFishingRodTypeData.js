'use strict';

function getFishingRodTypeData()
{
	testingFor = "fishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "none", "sapphire", "rawSalmon"];
	}
	testingFor = "sapphireFishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "sapphire", "emerald", "rawEel"];
	}
	testingFor = "emeraldFishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "emerald", "ruby", "rawSeaTurtle"];
	}
	testingFor = "rubyFishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "ruby", "diamond", "rawRainbowFish"];
	}
	testingFor = "diamondFishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "diamond", "none", "none"];
	}
	return ["none", "none", "none", "none"];
};
