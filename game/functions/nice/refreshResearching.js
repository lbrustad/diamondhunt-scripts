'use strict';

function refreshResearching()
{
	var template = document.getElementById("researcher-section");
	var _a_ = "style='padding:10px;border:1px solid grey;background-image:url(images/background.jpg)'";
	var _b_ = "style='padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:orange;'";
	var _c_ = "style='padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:green;'";
	var _d_ = "style='padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:yellow;cursor:pointer;'";
	var _e_ = "onmouseover='this.style.color = \"red\"' onmouseout='this.style.color = \"yellow\"'";
	var attributeTemplate = "<center><table width='95%' style='text-align:center;'>";
	attributeTemplate = attributeTemplate + "<tr>";
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/combatSkill_researcher.png' class='img-50' /> COMBAT" + "</td>");
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/magicSkill_researcher.png' class='img-50' /> MAGIC" + "</td>");
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/miningSkill_researcher.png' class='img-50' /> MINING" + "</td>");
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/craftingSkill_researcher.png' class='img-50' /> CRAFTING" + "</td>");
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/woodcuttingSkill_researcher.png' class='img-50' /> WOODCUTTING" + "</td>");
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/farmingSkill_researcher.png' class='img-50' /> FARMING" + "</td>");
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/brewingSkill_researcher.png' class='img-50' /> BREWING" + "</td>");
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/fishingSkill_researcher.png' class='img-50' /> FISHING" + "</td>");
	attributeTemplate = attributeTemplate + ("<td " + _a_ + " width='11%'>" + "<img src='images/cookingSkill_researcher.png' class='img-50' /> COOKING" + "</td>");
	attributeTemplate = attributeTemplate + "</tr>";
	var breaks_serie = ["combat", "magic", "mining", "crafting", "woodcutting", "farming", "brewing", "fishing", "cooking"];
	var Aerial = getItem("researcherCombat");
	var AerialWithLabels = getItem("researcherMagic");
	var Road = getItem("researcherMining");
	var expiration = getItem("researcherCrafting");
	var cachedPage = getItem("researcherWoodcutting");
	var $next = getItem("researcherFarming");
	var $itemToShow = getItem("researcherBrewing");
	var item = getItem("researcherFishing");
	var oFocusedItem = getItem("researcherCooking");
	var VALID_IMAGERY_SETS = [Aerial, AerialWithLabels, Road, expiration, cachedPage, $next, $itemToShow, item, oFocusedItem];
	var Swag_Protocol = 5;
	var Sec_WebSocket_Protocol = 4;
	var _f_ = 6;
	var _g_ = 4;
	var _h_ = 5;
	var _i_ = 5;
	var _j_ = 5;
	var _k_ = 4;
	var _l_ = 5;
	var protocols3 = [Swag_Protocol, Sec_WebSocket_Protocol, _f_, _g_, _h_, _i_, _j_, _k_, _l_];
	var login = false;
	var password_reset = false;
	var create_user = false;
	var confirm_email = false;
	var resend_email = false;
	var expired = false;
	var _m_ = false;
	var _n_ = false;
	var _o_ = false;
	var openRoutes = [login, password_reset, create_user, confirm_email, resend_email, expired, _m_, _n_, _o_];
	attributeTemplate = attributeTemplate + "<tr>";
	var max_serie = 0;
	var nb_class = 0;
	for (; nb_class <= 8; nb_class++)
	{
		if (max_serie == protocols3[nb_class])
		{
			attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "You have already unlocked every perk for this skill." + "</td>");
			openRoutes[nb_class] = true;
		}
		else
		{
			if (openRoutes[nb_class] || VALID_IMAGERY_SETS[nb_class] < max_serie)
			{
				attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "" + "</td>");
			}
			else
			{
				if (VALID_IMAGERY_SETS[nb_class] > max_serie)
				{
					attributeTemplate = attributeTemplate + ("<td " + _b_ + " width='11%'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</td>");
				}
				else
				{
					openRoutes[nb_class] = true;
					var current_tag_name = "";
					if (getItem("researcherTimer") > 0)
					{
						current_tag_name = "style='text-decoration:line-through'";
					}
					attributeTemplate = attributeTemplate + ("<td onclick='researchConfirm(\"" + breaks_serie[nb_class] + "\")' " + _e_ + " " + _d_ + " width='11%'>" + "<span " + current_tag_name + ">Research for <img src='images/coins.png' class='img-20' /> " + formatNumber(getResearchPrice(VALID_IMAGERY_SETS[nb_class])) + "</span><br /><br /><b style='color:grey'>Unlocks: </b><i style='color:grey'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</i></span></td>");
				}
			}
		}
	}
	attributeTemplate = attributeTemplate + "</tr>";
	attributeTemplate = attributeTemplate + "<tr>";
	max_serie = 1;
	nb_class = 0;
	for (; nb_class <= 8; nb_class++)
	{
		if (max_serie == protocols3[nb_class] && !openRoutes[nb_class])
		{
			attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "You have already unlocked every perk for this skill." + "</td>");
			openRoutes[nb_class] = true;
		}
		else
		{
			if (openRoutes[nb_class] || VALID_IMAGERY_SETS[nb_class] < max_serie)
			{
				attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "" + "</td>");
			}
			else
			{
				if (VALID_IMAGERY_SETS[nb_class] > max_serie)
				{
					attributeTemplate = attributeTemplate + ("<td " + _b_ + " width='11%'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</td>");
				}
				else
				{
					openRoutes[nb_class] = true;
					current_tag_name = "";
					if (getItem("researcherTimer") > 0)
					{
						current_tag_name = "style='text-decoration:line-through'";
					}
					attributeTemplate = attributeTemplate + ("<td onclick='researchConfirm(\"" + breaks_serie[nb_class] + "\")' " + _e_ + " " + _d_ + " width='11%'>" + "<span " + current_tag_name + ">Research for <img src='images/coins.png' class='img-20' /> " + formatNumber(getResearchPrice(VALID_IMAGERY_SETS[nb_class])) + "</span><br /><br /><b style='color:grey'>Unlocks: </b><i style='color:grey'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</i></span></td>");
				}
			}
		}
	}
	attributeTemplate = attributeTemplate + "</tr>";
	attributeTemplate = attributeTemplate + "<tr>";
	max_serie = 2;
	nb_class = 0;
	for (; nb_class <= 8; nb_class++)
	{
		if (max_serie == protocols3[nb_class] && !openRoutes[nb_class])
		{
			attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "You have already unlocked every perk for this skill." + "</td>");
			openRoutes[nb_class] = true;
		}
		else
		{
			if (openRoutes[nb_class] || VALID_IMAGERY_SETS[nb_class] < max_serie)
			{
				attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "" + "</td>");
			}
			else
			{
				if (VALID_IMAGERY_SETS[nb_class] > max_serie)
				{
					attributeTemplate = attributeTemplate + ("<td " + _b_ + " width='11%'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</td>");
				}
				else
				{
					openRoutes[nb_class] = true;
					current_tag_name = "";
					if (getItem("researcherTimer") > 0)
					{
						current_tag_name = "style='text-decoration:line-through'";
					}
					attributeTemplate = attributeTemplate + ("<td onclick='researchConfirm(\"" + breaks_serie[nb_class] + "\")' " + _e_ + " " + _d_ + " width='11%'>" + "<span " + current_tag_name + ">Research for <img src='images/coins.png' class='img-20' /> " + formatNumber(getResearchPrice(VALID_IMAGERY_SETS[nb_class])) + "</span><br /><br /><b style='color:grey'>Unlocks: </b><i style='color:grey'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</i></span></td>");
				}
			}
		}
	}
	attributeTemplate = attributeTemplate + "</tr>";
	attributeTemplate = attributeTemplate + "<tr>";
	max_serie = 3;
	nb_class = 0;
	for (; nb_class <= 8; nb_class++)
	{
		if (max_serie == protocols3[nb_class] && !openRoutes[nb_class])
		{
			attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "You have already unlocked every perk for this skill." + "</td>");
			openRoutes[nb_class] = true;
		}
		else
		{
			if (openRoutes[nb_class] || VALID_IMAGERY_SETS[nb_class] < max_serie)
			{
				attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "" + "</td>");
			}
			else
			{
				if (VALID_IMAGERY_SETS[nb_class] > max_serie)
				{
					attributeTemplate = attributeTemplate + ("<td " + _b_ + " width='11%'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</td>");
				}
				else
				{
					openRoutes[nb_class] = true;
					current_tag_name = "";
					if (getItem("researcherTimer") > 0)
					{
						current_tag_name = "style='text-decoration:line-through'";
					}
					attributeTemplate = attributeTemplate + ("<td onclick='researchConfirm(\"" + breaks_serie[nb_class] + "\")' " + _e_ + " " + _d_ + " width='11%'>" + "<span " + current_tag_name + ">Research for <img src='images/coins.png' class='img-20' /> " + formatNumber(getResearchPrice(VALID_IMAGERY_SETS[nb_class])) + "</span><br /><br /><b style='color:grey'>Unlocks: </b><i style='color:grey'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</i></span></td>");
				}
			}
		}
	}
	attributeTemplate = attributeTemplate + "</tr>";
	attributeTemplate = attributeTemplate + "<tr>";
	max_serie = 4;
	nb_class = 0;
	for (; nb_class <= 8; nb_class++)
	{
		if (max_serie == protocols3[nb_class] && !openRoutes[nb_class])
		{
			attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "You have already unlocked every perk for this skill." + "</td>");
			openRoutes[nb_class] = true;
		}
		else
		{
			if (openRoutes[nb_class] || VALID_IMAGERY_SETS[nb_class] < max_serie)
			{
				attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "" + "</td>");
			}
			else
			{
				if (VALID_IMAGERY_SETS[nb_class] > max_serie)
				{
					attributeTemplate = attributeTemplate + ("<td " + _b_ + " width='11%'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</td>");
				}
				else
				{
					openRoutes[nb_class] = true;
					current_tag_name = "";
					if (getItem("researcherTimer") > 0)
					{
						current_tag_name = "style='text-decoration:line-through'";
					}
					attributeTemplate = attributeTemplate + ("<td onclick='researchConfirm(\"" + breaks_serie[nb_class] + "\")' " + _e_ + " " + _d_ + " width='11%'>" + "<span " + current_tag_name + ">Research for <img src='images/coins.png' class='img-20' /> " + formatNumber(getResearchPrice(VALID_IMAGERY_SETS[nb_class])) + "</span><br /><br /><b style='color:grey'>Unlocks: </b><i style='color:grey'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</i></span></td>");
				}
			}
		}
	}
	attributeTemplate = attributeTemplate + "</tr>";
	attributeTemplate = attributeTemplate + "<tr>";
	max_serie = 5;
	nb_class = 0;
	for (; nb_class <= 8; nb_class++)
	{
		if (max_serie == protocols3[nb_class] && !openRoutes[nb_class])
		{
			attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "You have already unlocked every perk for this skill." + "</td>");
			openRoutes[nb_class] = true;
		}
		else
		{
			if (openRoutes[nb_class] || VALID_IMAGERY_SETS[nb_class] < max_serie)
			{
				attributeTemplate = attributeTemplate + ("<td " + _c_ + " width='11%'>" + "" + "</td>");
			}
			else
			{
				if (VALID_IMAGERY_SETS[nb_class] > max_serie)
				{
					attributeTemplate = attributeTemplate + ("<td " + _b_ + " width='11%'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</td>");
				}
				else
				{
					openRoutes[nb_class] = true;
					current_tag_name = "";
					if (getItem("researcherTimer") > 0)
					{
						current_tag_name = "style='text-decoration:line-through'";
					}
					attributeTemplate = attributeTemplate + ("<td onclick='researchConfirm(\"" + breaks_serie[nb_class] + "\")' " + _e_ + " " + _d_ + " width='11%'>" + "<span " + current_tag_name + ">Research for <img src='images/coins.png' class='img-20' /> " + formatNumber(getResearchPrice(VALID_IMAGERY_SETS[nb_class])) + "</span><br /><br /><b style='color:grey'>Unlocks: </b><i style='color:grey'>" + getResearchPerkDescription(max_serie, breaks_serie[nb_class]) + "</i></span></td>");
				}
			}
		}
	}
	attributeTemplate = attributeTemplate + "</tr>";
	attributeTemplate = attributeTemplate + "</table>";
	template.innerHTML = attributeTemplate;
};
