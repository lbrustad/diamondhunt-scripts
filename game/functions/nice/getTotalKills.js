'use strict';

function getTotalKills()
{
	var str = 0;
	str = str + getItem("chickenKills");
	str = str + getItem("ratKills");
	str = str + getItem("beeKills");
	return str;
};
