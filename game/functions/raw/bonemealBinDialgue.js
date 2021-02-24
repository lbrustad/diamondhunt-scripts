/**
 * bonemealBinDialgue extracted from ../../deobfuscated/bundle.js at line 10748-10771
 *
 * If this file doesn't contain a function, there is an error in ../raw/bonemealBinDialgue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function bonemealBinDialgue()
{
	var _0x14DB0 = getBonemealTypeData();
	var _0x15A67 = _0x14DB0[2];
	var _0x15A21 = _0x14DB0[3];
	if (_0x15A21 == "INF")
	{
		_0x15A21 = "&#8734;"
	};
	var _0x15A8A = "<br /><br /><span style=\'color:grey;font-size:12pt;\'> <img src=\'images/" + _0x15A67 + ".png\' class=\'img-20\' /> Upgrade your bonemeal bin to increase its capacity.</span>";
	if (_0x15A67 == "none")
	{
		_0x15A8A = ""
	};
	var _0x15A44 = "<b style=\'font-size:16pt;\'><img src=\'images/bonemeal_dark.png\' class=\'img-60\' /> Current Bonemeal: " + getItem("bonemeal") + "/" + _0x15A21 + " <img src=\'images/bonemeal_dark.png\' class=\'img-60\' /></b>" + _0x15A8A;
	if (_0x15A67 == "none")
	{
		confirmDialogue("images/" + _0x14DB0[0] + ".png", _0x15A44, "Close", "", "")
	}
	else
	{
		confirmDialogue("images/" + _0x14DB0[0] + ".png", _0x15A44, "Socket Gem", "Close", "SOCKET=bonemealBin")
	}
}