/**
 * openShovelDialogue extracted from ../../deobfuscated/bundle.js at line 20760-20771
 *
 * If this file doesn't contain a function, there is an error in ../raw/openShovelDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openShovelDialogue()
{
	var _0x18C94 = getShovelTypeData();
	var _0x189D8 = _0x18C94[0];
	var _0x1873F = _0x18C94[1];
	var _0x15A67 = _0x18C94[2];
	var _0x178E4 = _0x18C94[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x189D8 + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your shovel?<br /><br /><i style=\'color:grey\'>Upgrading your shovel will increase your chance of finding sand.</i>", "Socket", "Close", "SOCKET=shovel")
	}
}