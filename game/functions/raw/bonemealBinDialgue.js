/**
 * bonemealBinDialgue extracted from ../../deobfuscated/bundle.js at line 8977-9000
 *
 * If this file doesn't contain a function, there is an error in ../raw/bonemealBinDialgue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function bonemealBinDialgue()
{
	var _0x3746 = getBonemealTypeData();
	var _0x41CF = _0x3746[2];
	var _0x4195 = _0x3746[3];
	if (_0x4195 == "INF")
	{
		_0x4195 = "&#8734;"
	};
	var _0x41EC = "<br /><br /><span style=\'color:grey;font-size:12pt;\'> <img src=\'images/" + _0x41CF + ".png\' class=\'img-20\' /> Upgrade your bonemeal bin to increase its capacity.</span>";
	if (_0x41CF == "none")
	{
		_0x41EC = ""
	};
	var _0x41B2 = "<b style=\'font-size:16pt;\'><img src=\'images/bonemeal_dark.png\' class=\'img-60\' /> Current Bonemeal: " + getItem("bonemeal") + "/" + _0x4195 + " <img src=\'images/bonemeal_dark.png\' class=\'img-60\' /></b>" + _0x41EC;
	if (_0x41CF == "none")
	{
		confirmDialogue("images/" + _0x3746[0] + ".png", _0x41B2, "Close", "", "")
	}
	else
	{
		confirmDialogue("images/" + _0x3746[0] + ".png", _0x41B2, "Socket Gem", "Close", "SOCKET=bonemealBin")
	}
}