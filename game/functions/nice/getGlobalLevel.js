'use strict';

function getGlobalLevel()
{
	var n = 0;
	var extType = "";
	extType = "combat";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	extType = "magic";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	extType = "crafting";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	extType = "brewing";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	extType = "woodcutting";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	extType = "cooking";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	extType = "farming";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	extType = "fishing";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	extType = "mining";
	if (getItem(extType + "Unlocked") == 1)
	{
		n = n + getLevel(getItem(extType + "Xp"));
	}
	return n;
};
