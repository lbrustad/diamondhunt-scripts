/**
 * refreshTopSkillBar extracted from ../../deobfuscated/bundle.js at line 12469-12593
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTopSkillBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTopSkillBar(_0x199B4)
{
	var _0x1613D = "";
	var _0x19991 = 0.0;
	var _0x17BC3 = "";
	document.getElementById("span-topBar-globalLevel").innerHTML = "Level " + getGlobalLevel();
	_0x1613D = "combat";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "magic";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "mining";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "crafting";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "woodcutting";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6";
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = "100" + "%"
	};
	_0x1613D = "farming";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "brewing";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "fishing";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.minWidth = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "cooking";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.minWidth = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	}
}