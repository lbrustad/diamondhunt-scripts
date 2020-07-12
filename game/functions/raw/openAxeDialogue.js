/**
 * openAxeDialogue extracted from ../../deobfuscated/bundle.js at line 12400-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/openAxeDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openAxeDialogue()
{
	var _0x1DB38 = getAxeTypeData();
	var _0x1DB54 = _0x1DB38[0];
	var _0x1DB62 = _0x1DB38[1];
	var _0x1CC58 = _0x1DB38[2];
	var _0x1DB46 = _0x1DB38[3];
	if (_0x1CC58 != "none")
	{
		confirmDialogue("images/" + _0x1DB54 + ".png", "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your axe?<br /><br /><i style=\'color:grey\'>Upgrading your axe will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=axe")
	}
}