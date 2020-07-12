/**
 * refreshTagsDialoguesIcons extracted from ../../deobfuscated/bundle.js at line 2588-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTagsDialoguesIcons.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTagsDialoguesIcons()
{
	var _0x1CC4A = "";
	var _0x1CEEA = "";
	var _0x1E0CC = "";
	var _0x1E0BE = getItem("spentDonorCoinsOnTags");
	var _0x1E0A2 = false;
	var _0x1E0B0 = "";
	var _0x1E094 = "";
	_0x1CC4A += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Chat tags, which may be combined with sigils, allow you to show your support towards the game.  They are purchased with <b>tradable</b> donor coins.<br /><br />They are optional and only used for cosmetic purposes.<br /><br /><i style=\'color:grey\'>You also can buy them overtime, meaning spending 20$ on chat tags will knock off 20$ for all other tags.  Also, buying a higher tier tag will unlock all the previous ones for free.</i></div>";
	_0x1CC4A += "<br /><br />";
	_0x1CC4A += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<th style=\'width:50%\'>Example</th><th><b style=\'color:green\'>Tradable</b> Donor Coins</th><th>Action</th>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Donor";
	_0x1E0CC = 20;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Superdonor";
	_0x1E0CC = 40;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Ultradonor";
	_0x1E0CC = 60;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Contributor";
	_0x1E0CC = 100;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Financier";
	_0x1E0CC = 250;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Investor";
	_0x1E0CC = 500;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investor.gif\' /> <span style=\'color:#cc66ff;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	_0x1CC4A += "<br /><br />";
	_0x1CC4A += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<th style=\'width:50%\'>Example</th><th>Description</th>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/devTagExample.png\' /></td><td>Owner & Developper of the Diamond Hunt Games</td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/tagExample_Moderator.png\' /></td><td>Moderates chat and market.</td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	document.getElementById("dialogue-tags-section").innerHTML = _0x1CC4A
}