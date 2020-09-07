/**
 * refreshTopSkillBar extracted from ../../deobfuscated/bundle.js at line 10292-10416
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTopSkillBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTopSkillBar(_0x7333)
{
	var _0x473F = "";
	var _0x7316 = 0.0;
	var _0x5B2F = "";
	document.getElementById("span-topBar-globalLevel").innerHTML = "Level " + getGlobalLevel();
	_0x473F = "combat";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "magic";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "mining";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "crafting";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "woodcutting";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6";
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = "100" + "%"
	};
	_0x473F = "farming";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "brewing";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "fishing";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.minWidth = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "cooking";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.minWidth = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	}
}