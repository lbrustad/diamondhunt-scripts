'use strict';

function refreshTopSkillBar(canCreateDiscussions)
{
	var extType = "";
	var _caption_fs = 0.0;
	var level = "";
	document.getElementById("span-topBar-globalLevel").innerHTML = "Level " + getGlobalLevel();
	extType = "combat";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.width = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
	}
	extType = "magic";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.width = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
	}
	extType = "mining";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.width = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
	}
	extType = "crafting";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.width = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
	}
	extType = "woodcutting";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.width = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
		document.getElementById("xp-bar-" + extType + "-inner").style.width = "100" + "%";
	}
	extType = "farming";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.width = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
	}
	extType = "brewing";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.width = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
	}
	extType = "fishing";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.minWidth = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
	}
	extType = "cooking";
	level = getLevel(getItem(extType + "Xp"));
	document.getElementById("span-topBar-" + extType + "Level").innerHTML = level;
	_caption_fs = (getItem(extType + "Xp") - getXpNeeded(getLevel(getItem(extType + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(extType + "Xp"))) - getXpNeeded(getLevel(getItem(extType + "Xp"))));
	if (_caption_fs > 1)
	{
		_caption_fs = 1;
	}
	document.getElementById("xp-bar-" + extType + "-inner").style.minWidth = parseInt(_caption_fs * 100) + "%";
	if (level >= 100)
	{
		document.getElementById("xp-bar-" + extType + "-inner").style.backgroundColor = "#00ace6";
	}
};
