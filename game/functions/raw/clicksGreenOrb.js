/**
 * clicksGreenOrb extracted from ../../deobfuscated/bundle.js at line 21825-21829
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksGreenOrb.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksGreenOrb(_0x1611A)
{
	var _0x15A44 = getOrbDescription(_0x1611A);
	confirmDialogue("images/" + _0x1611A + ".png", "Would you like to bind this to your account?  The orb will become untradable if so.<br /><br /><span style=\'color:grey\'>" + _0x15A44 + "</span>", "Bind Orb", "Cancel", "BIND_GREEN_ORB=" + _0x1611A)
}