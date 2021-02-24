/**
 * mouseEnterSkillTopBar extracted from ../../deobfuscated/bundle.js at line 6610-6623
 *
 * If this file doesn't contain a function, there is an error in ../raw/mouseEnterSkillTopBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function mouseEnterSkillTopBar(_0x16BC4, _0x156FC)
{
	if (_0x16BC4 == "enter")
	{
		document.getElementById("span-topBar-" + _0x156FC + "Xp").style.display = "none";
		document.getElementById("span-topBar-" + _0x156FC + "Xp-left").style.display = "";
		document.getElementById("span-topBar-" + _0x156FC + "Xp-left").innerHTML = formatNumber(getXpNeeded(1 + parseInt(getLevel(getItem(_0x156FC + "Xp")))) - getItem(_0x156FC + "Xp")) + " xp required"
	}
	else
	{
		document.getElementById("span-topBar-" + _0x156FC + "Xp").style.display = "";
		document.getElementById("span-topBar-" + _0x156FC + "Xp-left").style.display = "none"
	}
}