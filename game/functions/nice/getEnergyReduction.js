'use strict';

function getEnergyReduction(GUTTER_SIZE)
{
	var MINOR_INTERVAL_RATIO = 1.0;
	if (getItem("energyRing1") == 1)
	{
		MINOR_INTERVAL_RATIO = MINOR_INTERVAL_RATIO - 0.01;
	}
	if (getItem("energyRing2") == 1)
	{
		MINOR_INTERVAL_RATIO = MINOR_INTERVAL_RATIO - 0.04;
	}
	if (getItem("energyRing3") == 1)
	{
		MINOR_INTERVAL_RATIO = MINOR_INTERVAL_RATIO - 0.10;
	}
	if (getItem("energyRing3") == 1)
	{
		MINOR_INTERVAL_RATIO = MINOR_INTERVAL_RATIO - 0.15;
	}
	return parseInt(GUTTER_SIZE * MINOR_INTERVAL_RATIO);
};
