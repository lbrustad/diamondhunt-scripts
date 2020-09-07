/**
 * openFishingRodDialogue extracted from ../../deobfuscated/bundle.js at line 17050-17061
 *
 * If this file doesn't contain a function, there is an error in ../raw/openFishingRodDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openFishingRodDialogue()
{
	var _0x66A0 = getFishingRodTypeData();
	var _0x6683 = _0x66A0[0];
	var _0x645C = _0x66A0[1];
	var _0x41CF = _0x66A0[2];
	var _0x66BD = _0x66A0[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x6683 + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x66BD + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x66BD) + "</span>", "Socket", "Close", "SOCKET=fishingRod")
	}
}