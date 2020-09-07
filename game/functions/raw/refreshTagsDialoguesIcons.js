/**
 * refreshTagsDialoguesIcons extracted from ../../deobfuscated/bundle.js at line 3350-3526
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTagsDialoguesIcons.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTagsDialoguesIcons()
{
	var _0x41B2 = "";
	var _0x473F = "";
	var _0x72BF = "";
	var _0x72A2 = getItem("spentDonorCoinsOnTags");
	var _0x7268 = false;
	var _0x7285 = "";
	var _0x724B = "";
	_0x41B2 += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Chat tags, which may be combined with sigils, allow you to show your support towards the game.  They are purchased with <b>tradable</b> donor coins.<br /><br />They are optional and only used for cosmetic purposes.<br /><br /><i style=\'color:grey\'>You also can buy them overtime, meaning spending 20$ on chat tags will knock off 20$ for all other tags.  Also, buying a higher tier tag will unlock all the previous ones for free.</i></div>";
	_0x41B2 += "<br /><br />";
	_0x41B2 += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<th style=\'width:50%\'>Example</th><th><b style=\'color:green\'>Tradable</b> Donor Coins</th><th>Action</th>";
	_0x41B2 += "</tr>";
	_0x473F = "Donor";
	_0x72BF = 20;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Superdonor";
	_0x72BF = 40;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Ultradonor";
	_0x72BF = 60;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Contributor";
	_0x72BF = 100;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Financier";
	_0x72BF = 250;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Investor";
	_0x72BF = 500;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investor.gif\' /> <span style=\'color:#cc66ff;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "InvestorPlus";
	_0x72BF = 1000;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investorPlus.gif\' /> <span style=\'color:#00a3cc;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	_0x41B2 += "<br /><br />";
	_0x41B2 += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<th style=\'width:50%\'>Example</th><th>Description</th>";
	_0x41B2 += "</tr>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/devTagExample.png\' /></td><td>Owner & Developper of the Diamond Hunt Games</td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/tagExample_Moderator.png\' /></td><td>Moderates chat and market.</td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	document.getElementById("dialogue-tags-section").innerHTML = _0x41B2
}