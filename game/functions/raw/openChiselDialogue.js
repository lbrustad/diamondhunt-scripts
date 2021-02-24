/**
 * openChiselDialogue extracted from ../../deobfuscated/bundle.js at line 20851-20862
 *
 * If this file doesn't contain a function, there is an error in ../raw/openChiselDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openChiselDialogue()
{
	var _0x18762 = getChiselTypeData();
	var _0x1871C = _0x18762[0];
	var _0x1873F = _0x18762[1];
	var _0x15A67 = _0x18762[2];
	var _0x18785 = _0x18762[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x1871C + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your chisel?<br /><br /><i style=\'color:grey\'>Upgrading your chisel will reduce your failure rate when opening geodes.", "Socket", "Close", "SOCKET=chisel")
	}
}