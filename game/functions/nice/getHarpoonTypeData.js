'use strict';

function getHarpoonTypeData()
{
	testingFor = "harpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "none", "sapphire", "rawSwordfish"];
	}
	testingFor = "sapphireHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "sapphire", "emerald", "rawMantaRay"];
	}
	testingFor = "emeraldHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "emerald", "ruby", "rawShark"];
	}
	testingFor = "rubyHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "ruby", "diamond", "rawWhale"];
	}
	testingFor = "diamondHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "diamond", "none", "none"];
	}
	return ["none", "none", "none", "none"];
};
