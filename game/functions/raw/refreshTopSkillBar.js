/**
 * refreshTopSkillBar extracted from ../../deobfuscated/bundle.js at line 7891-8014
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTopSkillBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTopSkillBar(_0x1E104)
{
	var _0x1CEEA = "";
	var _0x1E0F6 = 0.0;
	var _0x1D748 = "";
	document.getElementById("span-topBar-globalLevel").innerHTML = "Level " + getGlobalLevel();
	_0x1CEEA = "combat";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "magic";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "mining";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "crafting";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "woodcutting";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "farming";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "brewing";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "fishing";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.minWidth = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "cooking";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.minWidth = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	}
}