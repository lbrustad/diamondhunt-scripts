/**
 * openAxeDialogue extracted from ../../deobfuscated/bundle.js at line 20812-20823
 *
 * If this file doesn't contain a function, there is an error in ../raw/openAxeDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openAxeDialogue()
{
	var _0x186D6 = getAxeTypeData();
	var _0x1871C = _0x186D6[0];
	var _0x1873F = _0x186D6[1];
	var _0x15A67 = _0x186D6[2];
	var _0x186F9 = _0x186D6[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x1871C + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your axe?<br /><br /><i style=\'color:grey\'>Upgrading your axe will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=axe")
	}
}