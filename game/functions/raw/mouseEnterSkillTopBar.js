/**
 * mouseEnterSkillTopBar extracted from ../../deobfuscated/bundle.js at line 5641-5654
 *
 * If this file doesn't contain a function, there is an error in ../raw/mouseEnterSkillTopBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function mouseEnterSkillTopBar(_0x4F10, _0x3EFA)
{
	if (_0x4F10 == "enter")
	{
		document.getElementById("span-topBar-" + _0x3EFA + "Xp").style.display = "none";
		document.getElementById("span-topBar-" + _0x3EFA + "Xp-left").style.display = "";
		document.getElementById("span-topBar-" + _0x3EFA + "Xp-left").innerHTML = formatNumber(getXpNeeded(1 + parseInt(getLevel(getItem(_0x3EFA + "Xp")))) - getItem(_0x3EFA + "Xp")) + " xp required"
	}
	else
	{
		document.getElementById("span-topBar-" + _0x3EFA + "Xp").style.display = "";
		document.getElementById("span-topBar-" + _0x3EFA + "Xp-left").style.display = "none"
	}
}