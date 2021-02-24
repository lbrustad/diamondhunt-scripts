/**
 * clicksHalloweenScroll extracted from ../../deobfuscated/bundle.js at line 8266-8338
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksHalloweenScroll.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksHalloweenScroll()
{
	var _0x15A44 = "";
	var _0x1613D = "";
	var _0x14EEB = "";
	_0x15A44 += "I need to find the following items:<br /><br />";
	_0x1613D = "witchesHat";
	_0x14EEB = "A witch is roaming.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "fallBranch";
	_0x14EEB = "A branch with leaves changing colors.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "rottenLog";
	_0x14EEB = "A rotting log.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "eyeball";
	_0x14EEB = "Yeti\'s eyeball";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "batWing";
	_0x14EEB = "A wing from the caves.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "pumpkin";
	_0x14EEB = "A pumpkin.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	confirmDialogue("images/halloweenScroll.png", _0x15A44, "Claim Reward", "Close", "CLAIM_HALLOWEEN_2020")
}