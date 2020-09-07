/**
 * clicksBlueOrb extracted from ../../deobfuscated/bundle.js at line 17998-18002
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksBlueOrb.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksBlueOrb(_0x4722)
{
	var _0x41B2 = getOrbDescription(_0x4722);
	confirmDialogue("images/" + _0x4722 + ".png", "Would you like to bind this to your account?  The orb will become untradable if so.<br /><br /><span style=\'color:grey\'>" + _0x41B2 + "</span>", "Bind Orb", "Cancel", "BIND_ORB=" + _0x4722)
}