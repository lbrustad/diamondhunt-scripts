/**
 * getBurnRate extracted from ../../deobfuscated/bundle.js at line 9000-9029
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBurnRate.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBurnRate()
{
	var _0x17001 = 1;
	switch (getOvenType())
	{
	case "bronzeOven":
		_0x17001 = 0.5;
		break;
	case "ironOven":
		_0x17001 = 0.4;
		break;
	case "silverOven":
		_0x17001 = 0.3;
		break;
	case "goldOven":
		_0x17001 = 0.2;
		break;
	case "promethiumOven":
		_0x17001 = 0.1;
		break;
	case "titaniumOven":
		_0x17001 = 0.05;
		break
	};
	if (getItem("researcherCooking") >= 3)
	{
		_0x17001 -= 0.05
	};
	return _0x17001
}