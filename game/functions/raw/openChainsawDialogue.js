/**
 * openChainsawDialogue extracted from ../../deobfuscated/bundle.js at line 17089-17100
 *
 * If this file doesn't contain a function, there is an error in ../raw/openChainsawDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openChainsawDialogue()
{
	var _0x6405 = getChainsawTypeData();
	var _0x643F = _0x6405[0];
	var _0x645C = _0x6405[1];
	var _0x41CF = _0x6405[2];
	var _0x6422 = _0x6405[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x643F + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your chainsaw?<br /><br /><i style=\'color:grey\'>Upgrading your chainsaw will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=chainsaw")
	}
}