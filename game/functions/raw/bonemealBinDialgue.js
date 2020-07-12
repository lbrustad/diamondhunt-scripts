/**
 * bonemealBinDialgue extracted from ../../deobfuscated/bundle.js at line 6849-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/bonemealBinDialgue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function bonemealBinDialgue()
{
	var data = getBonemealTypeData();
	var _0x1CC58 = data[2];
	var _0x1CC3C = data[3];
	if (_0x1CC3C == "INF")
	{
		_0x1CC3C = "&#8734;"
	};
	var _0x1CC66 = "<br /><br /><span style=\'color:grey;font-size:12pt;\'> <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-20\' /> Upgrade your bonemeal bin to increase its capacity.</span>";
	if (_0x1CC58 == "none")
	{
		_0x1CC66 = ""
	};
	var _0x1CC4A = "<b style=\'font-size:16pt;\'><img src=\'images/bonemeal_dark.png\' class=\'img-60\' /> Current Bonemeal: " + getItem("bonemeal") + "/" + _0x1CC3C + " <img src=\'images/bonemeal_dark.png\' class=\'img-60\' /></b>" + _0x1CC66;
	if (_0x1CC58 == "none")
	{
		confirmDialogue("images/" + data[0] + ".png", _0x1CC4A, "Close", "", "")
	}
	else
	{
		confirmDialogue("images/" + data[0] + ".png", _0x1CC4A, "Socket Gem", "Close", "SOCKET=bonemealBin")
	}
}