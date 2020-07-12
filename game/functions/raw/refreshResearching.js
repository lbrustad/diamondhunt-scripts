/**
 * refreshResearching extracted from ../../deobfuscated/bundle.js at line 2930-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshResearching.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshResearching()
{
	var _0x1C85A = document.getElementById("researcher-section");
	var _0x1E016 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg)\'";
	var _0x1E024 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:orange;\'";
	var _0x1E032 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:green;\'";
	var _0x1E040 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:yellow;cursor:pointer;\'";
	var _0x1DF36 = "onmouseover=\'this.style.color = \"red\"\' onmouseout=\'this.style.color = \"yellow\"\'";
	var _0x1DEF0 = "<center><table width=\'95%\' style=\'text-align:center;\'>";
	_0x1DEF0 += "<tr>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/combatSkill_researcher.png\' class=\'img-50\' /> COMBAT" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/magicSkill_researcher.png\' class=\'img-50\' /> MAGIC" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/miningSkill_researcher.png\' class=\'img-50\' /> MINING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/craftingSkill_researcher.png\' class=\'img-50\' /> CRAFTING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/woodcuttingSkill_researcher.png\' class=\'img-50\' /> WOODCUTTING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/farmingSkill_researcher.png\' class=\'img-50\' /> FARMING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/brewingSkill_researcher.png\' class=\'img-50\' /> BREWING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/fishingSkill_researcher.png\' class=\'img-50\' /> FISHING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/cookingSkill_researcher.png\' class=\'img-50\' /> COOKING" + "</td>";
	_0x1DEF0 += "</tr>";
	var _0x1DFFA = ["combat", "magic", "mining", "crafting", "woodcutting", "farming", "brewing", "fishing", "cooking"];
	var _0x1DF52 = getItem("researcherCombat");
	var _0x1DF98 = getItem("researcherMagic");
	var _0x1DFA6 = getItem("researcherMining");
	var _0x1DF6E = getItem("researcherCrafting");
	var _0x1DFB4 = getItem("researcherWoodcutting");
	var _0x1DF7C = getItem("researcherFarming");
	var _0x1DF44 = getItem("researcherBrewing");
	var _0x1DF8A = getItem("researcherFishing");
	var _0x1DF60 = getItem("researcherCooking");
	var _0x1DFDE = [_0x1DF52, _0x1DF98, _0x1DFA6, _0x1DF6E, _0x1DFB4, _0x1DF7C, _0x1DF44, _0x1DF8A, _0x1DF60];
	var _0x1DE72 = 4;
	var _0x1DF0C = 3;
	var _0x1DF28 = 3;
	var _0x1DEAA = 4;
	var _0x1E05C = 4;
	var _0x1DEC6 = 3;
	var _0x1DE56 = 4;
	var _0x1DEE2 = 2;
	var _0x1DE8E = 3;
	var _0x1DFC2 = [_0x1DE72, _0x1DF0C, _0x1DF28, _0x1DEAA, _0x1E05C, _0x1DEC6, _0x1DE56, _0x1DEE2, _0x1DE8E];
	var _0x1DE64 = false;
	var _0x1DEFE = false;
	var _0x1DF1A = false;
	var _0x1DE9C = false;
	var _0x1E04E = false;
	var _0x1DEB8 = false;
	var _0x1DE48 = false;
	var _0x1DED4 = false;
	var _0x1DE80 = false;
	var _0x1DFD0 = [_0x1DE64, _0x1DEFE, _0x1DF1A, _0x1DE9C, _0x1E04E, _0x1DEB8, _0x1DE48, _0x1DED4, _0x1DE80];
	_0x1DEF0 += "<tr>";
	var _0x1DFEC = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 8; _0x1C6B6++)
	{
		if (_0x1DFEC == _0x1DFC2[_0x1C6B6])
		{
			_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x1DFD0[_0x1C6B6] = true
		}
		else
		{
			if (_0x1DFD0[_0x1C6B6] || _0x1DFDE[_0x1C6B6] < _0x1DFEC)
			{
				_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1DFDE[_0x1C6B6] > _0x1DFEC)
				{
					_0x1DEF0 += "<td " + _0x1E024 + " width=\'11%\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</td>"
				}
				else
				{
					_0x1DFD0[_0x1C6B6] = true;
					var _0x1E008 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x1E008 = "style=\'text-decoration:line-through\'"
					};
					_0x1DEF0 += "<td onclick=\'researchConfirm(\"" + _0x1DFFA[_0x1C6B6] + "\")\' " + _0x1DF36 + " " + _0x1E040 + " width=\'11%\'>" + "<span " + _0x1E008 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1DFDE[_0x1C6B6])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</i></span></td>"
				}
			}
		}
	};
	_0x1DEF0 += "</tr>";
	_0x1DEF0 += "<tr>";
	var _0x1DFEC = 1;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 8; _0x1C6B6++)
	{
		if (_0x1DFEC == _0x1DFC2[_0x1C6B6] && !_0x1DFD0[_0x1C6B6])
		{
			_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x1DFD0[_0x1C6B6] = true
		}
		else
		{
			if (_0x1DFD0[_0x1C6B6] || _0x1DFDE[_0x1C6B6] < _0x1DFEC)
			{
				_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1DFDE[_0x1C6B6] > _0x1DFEC)
				{
					_0x1DEF0 += "<td " + _0x1E024 + " width=\'11%\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</td>"
				}
				else
				{
					_0x1DFD0[_0x1C6B6] = true;
					var _0x1E008 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x1E008 = "style=\'text-decoration:line-through\'"
					};
					_0x1DEF0 += "<td onclick=\'researchConfirm(\"" + _0x1DFFA[_0x1C6B6] + "\")\' " + _0x1DF36 + " " + _0x1E040 + " width=\'11%\'>" + "<span " + _0x1E008 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1DFDE[_0x1C6B6])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</i></span></td>"
				}
			}
		}
	};
	_0x1DEF0 += "</tr>";
	_0x1DEF0 += "<tr>";
	var _0x1DFEC = 2;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 8; _0x1C6B6++)
	{
		if (_0x1DFEC == _0x1DFC2[_0x1C6B6] && !_0x1DFD0[_0x1C6B6])
		{
			_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x1DFD0[_0x1C6B6] = true
		}
		else
		{
			if (_0x1DFD0[_0x1C6B6] || _0x1DFDE[_0x1C6B6] < _0x1DFEC)
			{
				_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1DFDE[_0x1C6B6] > _0x1DFEC)
				{
					_0x1DEF0 += "<td " + _0x1E024 + " width=\'11%\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</td>"
				}
				else
				{
					_0x1DFD0[_0x1C6B6] = true;
					var _0x1E008 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x1E008 = "style=\'text-decoration:line-through\'"
					};
					_0x1DEF0 += "<td onclick=\'researchConfirm(\"" + _0x1DFFA[_0x1C6B6] + "\")\' " + _0x1DF36 + " " + _0x1E040 + " width=\'11%\'>" + "<span " + _0x1E008 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1DFDE[_0x1C6B6])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</i></span></td>"
				}
			}
		}
	};
	_0x1DEF0 += "</tr>";
	_0x1DEF0 += "<tr>";
	var _0x1DFEC = 3;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 8; _0x1C6B6++)
	{
		if (_0x1DFEC == _0x1DFC2[_0x1C6B6] && !_0x1DFD0[_0x1C6B6])
		{
			_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x1DFD0[_0x1C6B6] = true
		}
		else
		{
			if (_0x1DFD0[_0x1C6B6] || _0x1DFDE[_0x1C6B6] < _0x1DFEC)
			{
				_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1DFDE[_0x1C6B6] > _0x1DFEC)
				{
					_0x1DEF0 += "<td " + _0x1E024 + " width=\'11%\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</td>"
				}
				else
				{
					_0x1DFD0[_0x1C6B6] = true;
					var _0x1E008 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x1E008 = "style=\'text-decoration:line-through\'"
					};
					_0x1DEF0 += "<td onclick=\'researchConfirm(\"" + _0x1DFFA[_0x1C6B6] + "\")\' " + _0x1DF36 + " " + _0x1E040 + " width=\'11%\'>" + "<span " + _0x1E008 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1DFDE[_0x1C6B6])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</i></span></td>"
				}
			}
		}
	};
	_0x1DEF0 += "</tr>";
	_0x1DEF0 += "</table>";
	_0x1C85A.innerHTML = _0x1DEF0
}