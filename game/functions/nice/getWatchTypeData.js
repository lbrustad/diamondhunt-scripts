'use strict';

function getWatchTypeData()
{
	var method = "";
	method = "watch";
	if (getItem(method) == 1)
	{
		return [method, "none", "sapphire", "3"];
	}
	method = "sapphireWatch";
	if (getItem(method) == 1)
	{
		return [method, "sapphire", "emerald", "6"];
	}
	method = "emeraldWatch";
	if (getItem(method) == 1)
	{
		return [method, "emerald", "ruby", "10"];
	}
	method = "rubyWatch";
	if (getItem(method) == 1)
	{
		return [method, "ruby", "diamond", "14"];
	}
	method = "diamondWatch";
	if (getItem(method) == 1)
	{
		return [method, "diamond", "none", "20"];
	}
};
