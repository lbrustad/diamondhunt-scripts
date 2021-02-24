/**
 * refreshXpBarAnimation extracted from ../../deobfuscated/bundle.js at line 19170-19177
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshXpBarAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshXpBarAnimation(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x1613D = _0x14DD3[0];
	var _0x19A63 = _0x14DD3[1];
	var _0x19A40 = _0x14DD3[2];
	percentageDecimalXpBarWidth = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + parseInt(getLevel(getItem(_0x1613D + "Xp")))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))))
}