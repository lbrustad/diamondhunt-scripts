/**
 * openSmallFishingNetDialogue extracted from ../../deobfuscated/bundle.js at line 12349-12360
 *
 * If this file doesn't contain a function, there is an error in ../raw/openSmallFishingNetDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openSmallFishingNetDialogue()
{
	var _0x1DB8C = getSmallFishingNetTypeData();
	var _0x1DB7E = _0x1DB8C[0];
	var _0x1DB62 = _0x1DB8C[1];
	var _0x1CC58 = _0x1DB8C[2];
	var _0x1DB9A = _0x1DB8C[3];
	if (_0x1CC58 != "none")
	{
		confirmDialogue("images/" + _0x1DB7E + ".png", "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x1DB9A + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x1DB9A) + "</span>", "Socket", "Close", "SOCKET=smallFishingNet")
	}
}