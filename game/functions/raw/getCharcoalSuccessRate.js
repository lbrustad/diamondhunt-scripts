/**
 * getCharcoalSuccessRate extracted from ../../deobfuscated/bundle.js at line 21052-21087
 *
 * If this file doesn't contain a function, there is an error in ../raw/getCharcoalSuccessRate.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getCharcoalSuccessRate(_0x17024)
{
	var _0x17047 = 0;
	switch (_0x17024)
	{
	case "logs":
		_0x17047 = 0.01;
		break;
	case "oakLogs":
		_0x17047 = 0.02;
		break;
	case "willowLogs":
		_0x17047 = 0.03;
		break;
	case "bambooLogs":
		_0x17047 = 0.05;
		break;
	case "mapleLogs":
		_0x17047 = 0.07;
		break;
	case "lavaLogs":
		_0x17047 = 0.10;
		break;
	case "pineLogs":
		_0x17047 = 0.14;
		break;
	case "stardustLogs":
		_0x17047 = 0.20;
		break
	};
	if (getItem("titaniumCharcoalFoundry") == 1)
	{
		_0x17047 *= 2
	};
	return _0x17047
}