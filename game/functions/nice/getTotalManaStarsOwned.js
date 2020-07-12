'use strict';

function getTotalManaStarsOwned()
{
	return getItem("smallManaStarUsed") + getItem("mediumManaStarUsed") + getItem("largeManaStarUsed") + getItem("hugeManaStarUsed");
};
