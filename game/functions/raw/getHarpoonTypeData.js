/**
 * getHarpoonTypeData extracted from ../../deobfuscated/bundle.js at line 11963-11991
 *
 * If this file doesn't contain a function, there is an error in ../raw/getHarpoonTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getHarpoonTypeData()
{
	testingFor = "harpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "none", "sapphire", "rawSwordfish"]
	};
	testingFor = "sapphireHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "sapphire", "emerald", "rawMantaRay"]
	};
	testingFor = "emeraldHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "emerald", "ruby", "rawShark"]
	};
	testingFor = "rubyHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "ruby", "diamond", "rawWhale"]
	};
	testingFor = "diamondHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "diamond", "none", "none"]
	};
	return ["none", "none", "none", "none"]
}