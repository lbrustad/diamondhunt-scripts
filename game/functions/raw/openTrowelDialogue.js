/**
 * openTrowelDialogue extracted from ../../deobfuscated/bundle.js at line 20838-20849
 *
 * If this file doesn't contain a function, there is an error in ../raw/openTrowelDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openTrowelDialogue()
{
	var _0x186D6 = getTrowelTypeData();
	var _0x1871C = _0x186D6[0];
	var _0x1873F = _0x186D6[1];
	var _0x15A67 = _0x186D6[2];
	var _0x186F9 = _0x186D6[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x1871C + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your trowel?<br /><br /><i style=\'color:grey\'>Upgrading your trowel will increase your chance of finding seeds by 5%.", "Socket", "Close", "SOCKET=trowel")
	}
}