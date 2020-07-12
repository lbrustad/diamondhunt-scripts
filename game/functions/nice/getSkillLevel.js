'use strict';

function getSkillLevel(ability)
{
	return getLevel(getItem(ability + "Xp"));
};
