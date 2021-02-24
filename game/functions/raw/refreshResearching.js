/**
 * refreshResearching extracted from ../../deobfuscated/bundle.js at line 4447-4710
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshResearching.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshResearching()
{
	var _0x15049 = document.getElementById("researcher-section");
	var _0x196F8 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg)\'";
	var _0x1971B = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:orange;\'";
	var _0x1973E = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:green;\'";
	var _0x19761 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:yellow;cursor:pointer;\'";
	var _0x194C8 = "onmouseover=\'this.style.color = \"red\"\' onmouseout=\'this.style.color = \"yellow\"\'";
	var _0x19419 = "<center><table width=\'95%\' style=\'text-align:center;\'>";
	_0x19419 += "<tr>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/combatSkill_researcher.png\' class=\'img-50\' /> COMBAT" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/magicSkill_researcher.png\' class=\'img-50\' /> MAGIC" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/miningSkill_researcher.png\' class=\'img-50\' /> MINING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/craftingSkill_researcher.png\' class=\'img-50\' /> CRAFTING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/woodcuttingSkill_researcher.png\' class=\'img-50\' /> WOODCUTTING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/farmingSkill_researcher.png\' class=\'img-50\' /> FARMING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/brewingSkill_researcher.png\' class=\'img-50\' /> BREWING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/fishingSkill_researcher.png\' class=\'img-50\' /> FISHING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/cookingSkill_researcher.png\' class=\'img-50\' /> COOKING" + "</td>";
	_0x19419 += "</tr>";
	var _0x196B2 = ["combat", "magic", "mining", "crafting", "woodcutting", "farming", "brewing", "fishing", "cooking"];
	var _0x1950E = getItem("researcherCombat");
	var _0x195BD = getItem("researcherMagic");
	var _0x195E0 = getItem("researcherMining");
	var _0x19554 = getItem("researcherCrafting");
	var _0x19603 = getItem("researcherWoodcutting");
	var _0x19577 = getItem("researcherFarming");
	var _0x194EB = getItem("researcherBrewing");
	var _0x1959A = getItem("researcherFishing");
	var _0x19531 = getItem("researcherCooking");
	var _0x1966C = [_0x1950E, _0x195BD, _0x195E0, _0x19554, _0x19603, _0x19577, _0x194EB, _0x1959A, _0x19531];
	var _0x192DE = 5;
	var _0x1945F = 4;
	var _0x194A5 = 6;
	var _0x1936A = 4;
	var _0x197A7 = 5;
	var _0x193B0 = 5;
	var _0x19298 = 5;
	var _0x193F6 = 4;
	var _0x19324 = 5;
	var _0x19626 = [_0x192DE, _0x1945F, _0x194A5, _0x1936A, _0x197A7, _0x193B0, _0x19298, _0x193F6, _0x19324];
	var _0x192BB = false;
	var _0x1943C = false;
	var _0x19482 = false;
	var _0x19347 = false;
	var _0x19784 = false;
	var _0x1938D = false;
	var _0x19275 = false;
	var _0x193D3 = false;
	var _0x19301 = false;
	var _0x19649 = [_0x192BB, _0x1943C, _0x19482, _0x19347, _0x19784, _0x1938D, _0x19275, _0x193D3, _0x19301];
	_0x19419 += "<tr>";
	var _0x1968F = 0;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 1;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 2;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 3;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 4;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 5;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "</table>";
	_0x15049.innerHTML = _0x19419
}