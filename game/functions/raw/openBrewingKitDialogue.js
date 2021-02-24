/**
 * openBrewingKitDialogue extracted from ../../deobfuscated/bundle.js at line 21881-21895
 *
 * If this file doesn't contain a function, there is an error in ../raw/openBrewingKitDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openBrewingKitDialogue()
{
	var _0x14DD3 = getBrewingKitDataTypes();
	if (_0x14DD3[0] != "none")
	{
		if (_0x14DD3[0] == "diamondBrewingKit")
		{
			confirmDialogue("images/" + _0x14DD3[0] + ".png", "<b>Bonus Potion Time: </b>" + _0x14DD3[3], "Close", "", "")
		}
		else
		{
			confirmDialogue("images/" + _0x14DD3[0] + ".png", "<b>Bonus Potion Time: </b>" + _0x14DD3[3] + "<br /><br /><span style=\'color:grey\'>Socket a <img src=\'images/" + _0x14DD3[2] + ".png\' class=\'img-30\' /> <b>" + _0x14DD3[2] + "</b> to increase the timer for all potions.</span>", "Socket a " + _0x14DD3[2], "Close", "SOCKET=brewingKit")
		}
	}
}