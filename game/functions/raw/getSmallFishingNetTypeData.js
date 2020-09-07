/**
 * getSmallFishingNetTypeData extracted from ../../deobfuscated/bundle.js at line 16476-16504
 *
 * If this file doesn't contain a function, there is an error in ../raw/getSmallFishingNetTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getSmallFishingNetTypeData()
{
	testingFor = "smallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "none", "sapphire", "rawAnchovy"]
	};
	testingFor = "sapphireSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "sapphire", "emerald", "rawSardine"]
	};
	testingFor = "emeraldSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "emerald", "ruby", "rawCrab"]
	};
	testingFor = "rubySmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "ruby", "diamond", "rawPiranha"]
	};
	testingFor = "diamondSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "diamond", "none", "none"]
	};
	return ["none", "none", "none", "none"]
}