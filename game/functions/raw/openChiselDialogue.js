/**
 * openChiselDialogue extracted from ../../deobfuscated/bundle.js at line 17115-17126
 *
 * If this file doesn't contain a function, there is an error in ../raw/openChiselDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openChiselDialogue()
{
	var _0x6479 = getChiselTypeData();
	var _0x643F = _0x6479[0];
	var _0x645C = _0x6479[1];
	var _0x41CF = _0x6479[2];
	var _0x6496 = _0x6479[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x643F + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your chisel?<br /><br /><i style=\'color:grey\'>Upgrading your chisel will reduce your failure rate when opening geodes.", "Socket", "Close", "SOCKET=chisel")
	}
}