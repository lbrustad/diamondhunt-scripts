/**
 * openTrowelDialogue extracted from ../../deobfuscated/bundle.js at line 17102-17113
 *
 * If this file doesn't contain a function, there is an error in ../raw/openTrowelDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openTrowelDialogue()
{
	var _0x6405 = getTrowelTypeData();
	var _0x643F = _0x6405[0];
	var _0x645C = _0x6405[1];
	var _0x41CF = _0x6405[2];
	var _0x6422 = _0x6405[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x643F + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your trowel?<br /><br /><i style=\'color:grey\'>Upgrading your trowel will increase your chance of finding seeds by 5%.", "Socket", "Close", "SOCKET=trowel")
	}
}