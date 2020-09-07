/**
 * refreshSigilsDialoguesIcons extracted from ../../deobfuscated/bundle.js at line 3198-3330
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshSigilsDialoguesIcons.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshSigilsDialoguesIcons(_0x7211)
{
	var _0x41B2 = "";
	var _0x71BA = false;
	var _0x722E = ["candyCaneSigil", "spiderSigil", "carrotSigil", "snowmanSigil", "catSigil", "bunnySigil", "bluePartyHatSigil", "whitePartyHatSigil", "yellowPartyHatSigil", "greenPartyHatSigil", "redPartyHatSigil", "pinkPartyHatSigil", "treeSigil", "ghostSigil", "easterEggSigil", "santaHatSigil", "pumpkinSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		if (getItem(_0x722E[_0x3607]) > 0 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["hardcoreSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		if (getItem(_0x722E[_0x3607]) > 0 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["globalSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		var _0x71F4 = getGlobalLevel() >= 900;
		if (_0x71F4 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			var _0x44C1 = 0;
			if (_0x71F4)
			{
				_0x44C1 = 1
			};
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + _0x44C1 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + _0x44C1 + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["combatSigil", "magicSigil", "miningSigil", "craftingSigil", "woodcuttingSigil", "farmingSigil", "brewingSigil", "fishingSigil", "cookingSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		var _0x71D7 = getLevel(getItem(_0x722E[_0x3607].substr(0, _0x722E[_0x3607].length - 5) + "Xp")) >= 100;
		if (_0x71D7 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			var _0x44C1 = 0;
			if (_0x71D7)
			{
				_0x44C1 = 1
			};
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + _0x44C1 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + _0x44C1 + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["chickenMonsterSigil", "ratMonsterSigil", "beeMonsterSigil", "snakeMonsterSigil", "entMonsterSigil", "thiefMonsterSigil", "bearMonsterSigil", "spiderMonsterSigil", "skeletonMonsterSigil", "lavaAlienMonsterSigil", "batMonsterSigil", "fireMageMonsterSigil", "boneHeadMonsterSigil", "mammaPolarBearMonsterSigil", "yetiMonsterSigil", "treasureChestSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		if (getItem(_0x722E[_0x3607]) > 0 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:#e6e6e6;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["goldEventSigil2", "silverEventSigil2", "bronzeEventSigil2", "eventSigil2", "goldEventSigil", "silverEventSigil", "bronzeEventSigil", "eventSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		if (getItem(_0x722E[_0x3607]) > 0 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:pink;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x41B2 += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Sigils are chat icons that are purely cosmetic.  They can be obtained through holiday events, monster drops (1/10,000) or special events.<br /><br />All sigils are untradable except for holiday sigils during their respective time of year.<br /><br /><span style=\'cursor:pointer;color:blue\' onclick=\'refreshSigilsDialoguesIcons(true)\'>(show all)</span></div>";
	document.getElementById("dialogue-sigils-section").innerHTML = _0x41B2
}