/**
 * clicksBlueOrb extracted from ../../deobfuscated/bundle.js at line 21819-21823
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksBlueOrb.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksBlueOrb(_0x1611A)
{
	var _0x15A44 = getOrbDescription(_0x1611A);
	confirmDialogue("images/" + _0x1611A + ".png", "Would you like to bind this to your account?  The orb will become untradable if so.<br /><br /><span style=\'color:grey\'>" + _0x15A44 + "</span>", "Bind Orb", "Cancel", "BIND_ORB=" + _0x1611A)
}