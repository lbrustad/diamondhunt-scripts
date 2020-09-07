/**
 * refreshResearching extracted from ../../deobfuscated/bundle.js at line 3794-4022
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshResearching.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshResearching()
{
	var _0x396D = document.getElementById("researcher-section");
	var _0x710C = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg)\'";
	var _0x7129 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:orange;\'";
	var _0x7146 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:green;\'";
	var _0x7163 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:yellow;cursor:pointer;\'";
	var _0x6F3C = "onmouseover=\'this.style.color = \"red\"\' onmouseout=\'this.style.color = \"yellow\"\'";
	var _0x6EAB = "<center><table width=\'95%\' style=\'text-align:center;\'>";
	_0x6EAB += "<tr>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/combatSkill_researcher.png\' class=\'img-50\' /> COMBAT" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/magicSkill_researcher.png\' class=\'img-50\' /> MAGIC" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/miningSkill_researcher.png\' class=\'img-50\' /> MINING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/craftingSkill_researcher.png\' class=\'img-50\' /> CRAFTING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/woodcuttingSkill_researcher.png\' class=\'img-50\' /> WOODCUTTING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/farmingSkill_researcher.png\' class=\'img-50\' /> FARMING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/brewingSkill_researcher.png\' class=\'img-50\' /> BREWING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/fishingSkill_researcher.png\' class=\'img-50\' /> FISHING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/cookingSkill_researcher.png\' class=\'img-50\' /> COOKING" + "</td>";
	_0x6EAB += "</tr>";
	var _0x70D2 = ["combat", "magic", "mining", "crafting", "woodcutting", "farming", "brewing", "fishing", "cooking"];
	var _0x6F76 = getItem("researcherCombat");
	var _0x7007 = getItem("researcherMagic");
	var _0x7024 = getItem("researcherMining");
	var _0x6FB0 = getItem("researcherCrafting");
	var _0x7041 = getItem("researcherWoodcutting");
	var _0x6FCD = getItem("researcherFarming");
	var _0x6F59 = getItem("researcherBrewing");
	var _0x6FEA = getItem("researcherFishing");
	var _0x6F93 = getItem("researcherCooking");
	var _0x7098 = [_0x6F76, _0x7007, _0x7024, _0x6FB0, _0x7041, _0x6FCD, _0x6F59, _0x6FEA, _0x6F93];
	var _0x6DA6 = 5;
	var _0x6EE5 = 4;
	var _0x6F1F = 4;
	var _0x6E1A = 4;
	var _0x719D = 5;
	var _0x6E54 = 5;
	var _0x6D6C = 5;
	var _0x6E8E = 4;
	var _0x6DE0 = 5;
	var _0x705E = [_0x6DA6, _0x6EE5, _0x6F1F, _0x6E1A, _0x719D, _0x6E54, _0x6D6C, _0x6E8E, _0x6DE0];
	var _0x6D89 = false;
	var _0x6EC8 = false;
	var _0x6F02 = false;
	var _0x6DFD = false;
	var _0x7180 = false;
	var _0x6E37 = false;
	var _0x6D4F = false;
	var _0x6E71 = false;
	var _0x6DC3 = false;
	var _0x707B = [_0x6D89, _0x6EC8, _0x6F02, _0x6DFD, _0x7180, _0x6E37, _0x6D4F, _0x6E71, _0x6DC3];
	_0x6EAB += "<tr>";
	var _0x70B5 = 0;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "<tr>";
	var _0x70B5 = 1;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607] && !_0x707B[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "<tr>";
	var _0x70B5 = 2;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607] && !_0x707B[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "<tr>";
	var _0x70B5 = 3;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607] && !_0x707B[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "<tr>";
	var _0x70B5 = 4;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607] && !_0x707B[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "</table>";
	_0x396D.innerHTML = _0x6EAB
}