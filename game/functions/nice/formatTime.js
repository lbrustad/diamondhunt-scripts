'use strict';

function formatTime(totalSeconds)
{
	if (totalSeconds <= 0)
	{
		return "0";
	}
	var seconds = totalSeconds;
	var masterVideoId = ~~(seconds / 3600);
	var i = ~~(seconds % 3600 / 60);
	var fragment = (seconds % 60).toFixed(0);
	var result = "";
	days = 0;
	for (; masterVideoId >= 24;)
	{
		masterVideoId = masterVideoId - 24;
		days++;
	}
	if (masterVideoId > 0)
	{
		result = result + ("" + masterVideoId + ":" + (i < 10 ? "0" : ""));
	}
	result = result + ("" + i + ":" + (fragment < 10 ? "0" : ""));
	result = result + ("" + fragment);
	if (days > 1)
	{
		return days + " days, " + result;
	}
	else
	{
		if (days == 1)
		{
			return days + " day, " + result;
		}
		else
		{
			return result;
		}
	}
};
