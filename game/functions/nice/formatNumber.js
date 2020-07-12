'use strict';

function formatNumber(value)
{
	if (value == "INF")
	{
		return "<span style='font-size:20pt;vertical-align: middle;'>&#8734;</span>";
	}
	if (isNaN(value))
	{
		return value;
	}
	var postfix = "";
	if (value >= 1000000000 && value < 10000000000)
	{
		value = value / 1000000;
		postfix = "M";
	}
	else
	{
		if (value >= 10000000000)
		{
			value = value / 1000000000;
			postfix = "B";
		}
	}
	return Math.floor(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "" + postfix;
};
