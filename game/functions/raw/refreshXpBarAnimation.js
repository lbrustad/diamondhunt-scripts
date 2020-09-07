/**
 * refreshXpBarAnimation extracted from ../../deobfuscated/bundle.js at line 15519-15526
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshXpBarAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshXpBarAnimation(_0x3746)
{
	var _0x3763 = _0x3746.split("~");
	var _0x473F = _0x3763[0];
	var _0x73C4 = _0x3763[1];
	var _0x73A7 = _0x3763[2];
	percentageDecimalXpBarWidth = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + parseInt(getLevel(getItem(_0x473F + "Xp")))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))))
}