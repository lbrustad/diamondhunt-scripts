/**
 * openShovelDialogue extracted from ../../deobfuscated/bundle.js at line 12336-12347
 *
 * If this file doesn't contain a function, there is an error in ../raw/openShovelDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openShovelDialogue()
{
	var _0x1DC96 = getShovelTypeData();
	var _0x1DB7E = _0x1DC96[0];
	var _0x1DB62 = _0x1DC96[1];
	var _0x1CC58 = _0x1DC96[2];
	var _0x1D630 = _0x1DC96[3];
	if (_0x1CC58 != "none")
	{
		confirmDialogue("images/" + _0x1DB7E + ".png", "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your shovel?<br /><br /><i style=\'color:grey\'>Upgrading your shovel will increase your chance of finding sand.</i>", "Socket", "Close", "SOCKET=shovel")
	}
}