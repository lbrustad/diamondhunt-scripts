/**
 * openShovelDialogue extracted from ../../deobfuscated/bundle.js at line 17024-17035
 *
 * If this file doesn't contain a function, there is an error in ../raw/openShovelDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openShovelDialogue()
{
	var _0x68C7 = getShovelTypeData();
	var _0x6683 = _0x68C7[0];
	var _0x645C = _0x68C7[1];
	var _0x41CF = _0x68C7[2];
	var _0x58EB = _0x68C7[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x6683 + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your shovel?<br /><br /><i style=\'color:grey\'>Upgrading your shovel will increase your chance of finding sand.</i>", "Socket", "Close", "SOCKET=shovel")
	}
}