'use strict';

function getBrewingTimeAdjusted(DateTimeFormat)
{
	var modifier = getBrewingKitDataTypes()[3];
	if (modifier == "0%")
	{
		return formatTime(DateTimeFormat);
	}
	modifier = parseFloat(modifier.substr(0, modifier.length - 1));
	modifier = modifier / 100;
	DateTimeFormat = DateTimeFormat * (parseFloat(1) + parseFloat(modifier));
	return formatTime(DateTimeFormat);
};
