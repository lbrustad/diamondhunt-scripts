/**
 * refreshXpBarAnimation extracted from ../../deobfuscated/bundle.js at line 11170-11177
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshXpBarAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshXpBarAnimation(_0x1C750)
{
	var _0x1C75E = _0x1C750.split("~");
	var _0x1CEEA = _0x1C75E[0];
	var _0x1E158 = _0x1C75E[1];
	var _0x1E14A = _0x1C75E[2];
	percentageDecimalXpBarWidth = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + parseInt(getLevel(getItem(_0x1CEEA + "Xp")))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))))
}