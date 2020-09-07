'use strict';

function getAreaTimer(GUTTER_SIZE)
{
	var MINOR_INTERVAL_RATIO = 1.0;
	if (getItem("cooldownRing1") == 1)
	{
		MINOR_INTERVAL_RATIO = MINOR_INTERVAL_RATIO - 0.01;
	}
	if (getItem("cooldownRing2") == 1)
	{
		MINOR_INTERVAL_RATIO = MINOR_INTERVAL_RATIO - 0.04;
	}
	if (getItem("cooldownRing3") == 1)
	{
		MINOR_INTERVAL_RATIO = MINOR_INTERVAL_RATIO - 0.10;
	}
	return parseInt(GUTTER_SIZE * MINOR_INTERVAL_RATIO);
};
