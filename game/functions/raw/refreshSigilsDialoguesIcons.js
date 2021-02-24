/**
 * refreshSigilsDialoguesIcons extracted from ../../deobfuscated/bundle.js at line 3828-3969
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshSigilsDialoguesIcons.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshSigilsDialoguesIcons(_0x19833)
{
	var _0x15A44 = "";
	var _0x197CA = false;
	var _0x19856 = ["batSigil", "candyCaneSigil", "spiderSigil", "carrotSigil", "snowmanSigil", "catSigil", "bunnySigil", "bluePartyHatSigil", "whitePartyHatSigil", "yellowPartyHatSigil", "greenPartyHatSigil", "redPartyHatSigil", "pinkPartyHatSigil", "treeSigil", "ghostSigil", "easterEggSigil", "santaHatSigil", "pumpkinSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		if (getItem(_0x19856[_0x14C0C]) > 0 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["hardcoreSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		if (getItem(_0x19856[_0x14C0C]) > 0 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["globalSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		var _0x19810 = getGlobalLevel() >= 900;
		if (_0x19810 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			var _0x15DF5 = 0;
			if (_0x19810)
			{
				_0x15DF5 = 1
			};
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + _0x15DF5 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + _0x15DF5 + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["combatSigil", "magicSigil", "miningSigil", "craftingSigil", "woodcuttingSigil", "farmingSigil", "brewingSigil", "fishingSigil", "cookingSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		var _0x197ED = getLevel(getItem(_0x19856[_0x14C0C].substr(0, _0x19856[_0x14C0C].length - 5) + "Xp")) >= 100;
		if (_0x197ED || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			var _0x15DF5 = 0;
			if (_0x197ED)
			{
				_0x15DF5 = 1
			};
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + _0x15DF5 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + _0x15DF5 + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["chickenMonsterSigil", "ratMonsterSigil", "beeMonsterSigil", "snakeMonsterSigil", "entMonsterSigil", "thiefMonsterSigil", "bearMonsterSigil", "spiderMonsterSigil", "skeletonMonsterSigil", "lavaAlienMonsterSigil", "batMonsterSigil", "fireMageMonsterSigil", "boneHeadMonsterSigil", "mammaPolarBearMonsterSigil", "yetiMonsterSigil", "ghostMonsterSigil", "skeletonGhostMonsterSigil", "reaperMonsterSigil", "sharkMonsterSigil", "pufferFishMonsterSigil", "tridentSoldierMonsterSigil", "skeletonMonksMonsterSigil", "dungeonSpiderMonsterSigil", "stoneWomenMonsterSigil", "museumSigil", "treasureChestSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		var _0x19879 = getItem(_0x19856[_0x14C0C]);
		if (_0x19856[_0x14C0C] == "museumSigil")
		{
			_0x19879 = 0;
			if (hasAllMuseumItems())
			{
				_0x19879 = 1
			}
		};
		if (_0x19879 > 0 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:#e6e6e6;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + _0x19879 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + _0x19879 + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["goldEventSigil2", "silverEventSigil2", "bronzeEventSigil2", "eventSigil2", "goldEventSigil", "silverEventSigil", "bronzeEventSigil", "eventSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		if (getItem(_0x19856[_0x14C0C]) > 0 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:pink;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x15A44 += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Sigils are chat icons that are purely cosmetic.  They can be obtained through holiday events, monster drops (1/10,000) or special events.<br /><br />All sigils are untradable except for holiday sigils during their respective time of year.<br /><br /><span style=\'cursor:pointer;color:blue\' onclick=\'refreshSigilsDialoguesIcons(true)\'>(show all)</span></div>";
	document.getElementById("dialogue-sigils-section").innerHTML = _0x15A44
}