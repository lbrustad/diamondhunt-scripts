/**
 * refreshSigilsDialoguesIcons extracted from ../../deobfuscated/bundle.js at line 2473-2555
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshSigilsDialoguesIcons.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshSigilsDialoguesIcons(_0x1E078)
{
	var _0x1CC4A = "";
	var _0x1E06A = false;
	var _0x1E086 = ["candyCaneSigil", "spiderSigil", "carrotSigil", "snowmanSigil", "catSigil", "bunnySigil", "bluePartyHatSigil", "whitePartyHatSigil", "yellowPartyHatSigil", "greenPartyHatSigil", "redPartyHatSigil", "pinkPartyHatSigil", "treeSigil", "ghostSigil", "easterEggSigil", "santaHatSigil", "pumpkinSigil"];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E086.length; _0x1C6B6++)
	{
		if (getItem(_0x1E086[_0x1C6B6]) > 0 || _0x1E078)
		{
			_0x1E06A = true;
			_0x1CC4A += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x1E086[_0x1C6B6] + "\")\' class=\'dialogue-sigils-itemBox\'>";
			_0x1CC4A += "<img src=\'images/" + _0x1E086[_0x1C6B6] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x1E086[_0x1C6B6])
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> </center>"
			};
			_0x1CC4A += "</div>"
		}
	};
	_0x1E086 = ["hardcoreSigil"];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E086.length; _0x1C6B6++)
	{
		if (getItem(_0x1E086[_0x1C6B6]) > 0 || _0x1E078)
		{
			_0x1E06A = true;
			_0x1CC4A += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x1E086[_0x1C6B6] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x1CC4A += "<img src=\'images/" + _0x1E086[_0x1C6B6] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x1E086[_0x1C6B6])
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> </center>"
			};
			_0x1CC4A += "</div>"
		}
	};
	_0x1E086 = ["chickenMonsterSigil", "ratMonsterSigil", "beeMonsterSigil", "snakeMonsterSigil", "entMonsterSigil", "thiefMonsterSigil", "bearMonsterSigil", "spiderMonsterSigil", "skeletonMonsterSigil"];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E086.length; _0x1C6B6++)
	{
		if (getItem(_0x1E086[_0x1C6B6]) > 0 || _0x1E078)
		{
			_0x1E06A = true;
			_0x1CC4A += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x1E086[_0x1C6B6] + "\")\' style=\'background-color:#e6e6e6;\' class=\'dialogue-sigils-itemBox\'>";
			_0x1CC4A += "<img src=\'images/" + _0x1E086[_0x1C6B6] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x1E086[_0x1C6B6])
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> </center>"
			};
			_0x1CC4A += "</div>"
		}
	};
	_0x1E086 = ["goldEventSigil2", "silverEventSigil2", "bronzeEventSigil2", "eventSigil2", "goldEventSigil", "silverEventSigil", "bronzeEventSigil", "eventSigil"];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E086.length; _0x1C6B6++)
	{
		if (getItem(_0x1E086[_0x1C6B6]) > 0 || _0x1E078)
		{
			_0x1E06A = true;
			_0x1CC4A += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x1E086[_0x1C6B6] + "\")\' style=\'background-color:pink;\' class=\'dialogue-sigils-itemBox\'>";
			_0x1CC4A += "<img src=\'images/" + _0x1E086[_0x1C6B6] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x1E086[_0x1C6B6])
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> </center>"
			};
			_0x1CC4A += "</div>"
		}
	};
	_0x1CC4A += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Sigils are chat icons that are purely cosmetic.  They can be obtained through holiday events, monster drops (1/10,000) or special events.<br /><br />All sigils are untradable except for holiday sigils during their respective time of year.<br /><br /><span style=\'cursor:pointer;color:blue\' onclick=\'refreshSigilsDialoguesIcons(true)\'>(show all)</span></div>";
	document.getElementById("dialogue-sigils-section").innerHTML = _0x1CC4A
}