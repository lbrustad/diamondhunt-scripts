/**
 * refreshTagsDialoguesIcons extracted from ../../deobfuscated/bundle.js at line 3989-4165
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTagsDialoguesIcons.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTagsDialoguesIcons()
{
	var _0x15A44 = "";
	var _0x1613D = "";
	var _0x19928 = "";
	var _0x19905 = getItem("spentDonorCoinsOnTags");
	var _0x198BF = false;
	var _0x198E2 = "";
	var _0x1989C = "";
	_0x15A44 += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Chat tags, which may be combined with sigils, allow you to show your support towards the game.  They are purchased with <b>tradable</b> donor coins.<br /><br />They are optional and only used for cosmetic purposes.<br /><br /><i style=\'color:grey\'>You also can buy them overtime, meaning spending 20$ on chat tags will knock off 20$ for all other tags.  Also, buying a higher tier tag will unlock all the previous ones for free.</i></div>";
	_0x15A44 += "<br /><br />";
	_0x15A44 += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<th style=\'width:50%\'>Example</th><th><b style=\'color:green\'>Tradable</b> Donor Coins</th><th>Action</th>";
	_0x15A44 += "</tr>";
	_0x1613D = "Donor";
	_0x19928 = 20;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Superdonor";
	_0x19928 = 40;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Ultradonor";
	_0x19928 = 60;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Contributor";
	_0x19928 = 100;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Financier";
	_0x19928 = 250;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Investor";
	_0x19928 = 500;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investor.gif\' /> <span style=\'color:#cc66ff;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "InvestorPlus";
	_0x19928 = 1000;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investorPlus.gif\' /> <span style=\'color:#00a3cc;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	_0x15A44 += "<br /><br />";
	_0x15A44 += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<th style=\'width:50%\'>Example</th><th>Description</th>";
	_0x15A44 += "</tr>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/devTagExample.png\' /></td><td>Owner & Developper of the Diamond Hunt Games</td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/tagExample_Moderator.png\' /></td><td>Moderates chat and market.</td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	document.getElementById("dialogue-tags-section").innerHTML = _0x15A44
}