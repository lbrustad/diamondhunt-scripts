'use strict';

function getNextLevelXpNeeded(canCreateDiscussions)
{
	return getXpNeeded(parseInt(getLevel(getItem(canCreateDiscussions + "Xp"))) + 1);
};
