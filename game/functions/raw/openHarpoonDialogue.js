/**
 * openHarpoonDialogue extracted from ../../deobfuscated/bundle.js at line 20799-20810
 *
 * If this file doesn't contain a function, there is an error in ../raw/openHarpoonDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openHarpoonDialogue()
{
	var _0x189FB = getHarpoonTypeData();
	var _0x189D8 = _0x189FB[0];
	var _0x1873F = _0x189FB[1];
	var _0x15A67 = _0x189FB[2];
	var _0x18A1E = _0x189FB[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x189D8 + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x18A1E + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x18A1E) + "</span>", "Socket", "Close", "SOCKET=harpoon")
	}
}