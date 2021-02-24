'use strict';

function refreshGemListTab()
{
	var template = document.getElementById("mining-gemList-section");
	var attributeTemplate = "<center>";
	var icon = "";
	icon = "sapphire";
	attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
	attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
	attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + icon.toUpperCase());
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;'>1/100,000</span>";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem("sapphireMined") + "</span>");
	if (getItem("researcherMining") >= 5)
	{
		var crossStart = "miningScrollSapphire";
		var _a_ = getItem(crossStart + "Total") > 0;
		var _b_ = "x.png";
		if (_a_)
		{
			_b_ = "check.png";
		}
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
	}
	attributeTemplate = attributeTemplate + "</span>";
	attributeTemplate = attributeTemplate + "</div>";
	icon = "emerald";
	attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
	attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
	attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + icon.toUpperCase());
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;'>1/250,000</span>";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
	if (getItem("researcherMining") >= 5)
	{
		crossStart = "miningScrollEmerald";
		_a_ = getItem(crossStart + "Total") > 0;
		_b_ = "x.png";
		if (_a_)
		{
			_b_ = "check.png";
		}
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
	}
	attributeTemplate = attributeTemplate + "</span>";
	attributeTemplate = attributeTemplate + "</div>";
	icon = "ruby";
	attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
	attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
	attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + icon.toUpperCase());
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;'>1/500,000</span>";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
	if (getItem("researcherMining") >= 5)
	{
		crossStart = "miningScrollRuby";
		_a_ = getItem(crossStart + "Total") > 0;
		_b_ = "x.png";
		if (_a_)
		{
			_b_ = "check.png";
		}
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
	}
	attributeTemplate = attributeTemplate + "</span>";
	attributeTemplate = attributeTemplate + "</div>";
	icon = "diamond";
	attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
	attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
	attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + icon.toUpperCase());
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;'>1/1,000,000</span>";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
	if (getItem("researcherMining") >= 5)
	{
		crossStart = "miningScrollDiamond";
		_a_ = getItem(crossStart + "Total") > 0;
		_b_ = "x.png";
		if (_a_)
		{
			_b_ = "check.png";
		}
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
	}
	attributeTemplate = attributeTemplate + "</span>";
	attributeTemplate = attributeTemplate + "</div>";
	template.innerHTML = attributeTemplate;
	icon = "bloodDiamond";
	attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
	attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".gif' style='float:left;' class='img-100' />");
	attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "BLOOD DIAMOND");
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;'>1/???</span>";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + "<br />";
	attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
	if (getItem("researcherMining") >= 5)
	{
		crossStart = "miningScrollBloodDiamond";
		_a_ = getItem(crossStart + "Total") > 0;
		_b_ = "x.png";
		if (_a_)
		{
			_b_ = "check.png";
		}
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
	}
	attributeTemplate = attributeTemplate + "</span>";
	attributeTemplate = attributeTemplate + "</div>";
	var _c_ = 0;
	var _d_ = "style='color:red'";
	if (getItem("researcherMining") >= 2)
	{
		_c_ = 5;
		if (getLevel(getItem("miningXp")) >= _c_)
		{
			_d_ = "style='color:lime'";
		}
		icon = "smallStardustPrism";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "SMALL");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/4320  <br /><span style='color:grey'><img src='images/miningSkill.png' class='img-20' /> <span " + _d_ + ">" + _c_ + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		if (getItem("researcherMining") >= 5)
		{
			crossStart = "miningScrollSmallStardustPrism";
			_a_ = getItem(crossStart + "Total") > 0;
			_b_ = "x.png";
			if (_a_)
			{
				_b_ = "check.png";
			}
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
		}
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
		_c_ = 20;
		_d_ = "style='color:red'";
		if (getLevel(getItem("miningXp")) >= _c_)
		{
			_d_ = "style='color:lime'";
		}
		icon = "mediumStardustPrism";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "MEDIUM");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/66,000  <br /><span style='color:grey'><img src='images/miningSkill.png' class='img-20' /> <span " + _d_ + ">" + _c_ + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		if (getItem("researcherMining") >= 5)
		{
			crossStart = "miningScrollMediumStardustPrism";
			_a_ = getItem(crossStart + "Total") > 0;
			_b_ = "x.png";
			if (_a_)
			{
				_b_ = "check.png";
			}
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
		}
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
		_c_ = 50;
		_d_ = "style='color:red'";
		if (getLevel(getItem("miningXp")) >= _c_)
		{
			_d_ = "style='color:lime'";
		}
		icon = "largeStardustPrism";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "LARGE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/188,000  <br /><span style='color:grey'><img src='images/miningSkill.png' class='img-20' /> <span " + _d_ + ">" + _c_ + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		if (getItem("researcherMining") >= 5)
		{
			crossStart = "miningScrollLargeStardustPrism";
			_a_ = getItem(crossStart + "Total") > 0;
			_b_ = "x.png";
			if (_a_)
			{
				_b_ = "check.png";
			}
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
		}
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
		_c_ = 80;
		_d_ = "style='color:red'";
		if (getLevel(getItem("miningXp")) >= _c_)
		{
			_d_ = "style='color:lime'";
		}
		icon = "hugeStardustPrism";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "HUGE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/400,000  <br /><span style='color:grey'><img src='images/miningSkill.png' class='img-20' /> <span " + _d_ + ">" + _c_ + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		if (getItem("researcherMining") >= 5)
		{
			crossStart = "miningScrollHugeStardustPrism";
			_a_ = getItem(crossStart + "Total") > 0;
			_b_ = "x.png";
			if (_a_)
			{
				_b_ = "check.png";
			}
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
		}
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	var previous_step = "none";
	if (getItem("researcherMining") >= 4)
	{
		previous_step = "drills";
		icon = "blueGeode";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "BLUE GEODE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/51,840 <br /><span style='color:grey'><img src='images/" + previous_step + ".png' class='img-20' /> Per <span>" + getItemName(previous_step) + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		if (getItem("researcherMining") >= 5)
		{
			crossStart = "miningScrollBlueGeode";
			_a_ = getItem(crossStart + "Total") > 0;
			_b_ = "x.png";
			if (_a_)
			{
				_b_ = "check.png";
			}
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
		}
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	if (getItem("researcherMining") >= 4)
	{
		previous_step = "crushers";
		icon = "greenGeode";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "GREEN GEODE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/259,200 <br /><span style='color:grey'><img src='images/" + previous_step + ".png' class='img-20' /> Per <span>" + getItemName(previous_step) + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		if (getItem("researcherMining") >= 5)
		{
			crossStart = "miningScrollGreenGeode";
			_a_ = getItem(crossStart + "Total") > 0;
			_b_ = "x.png";
			if (_a_)
			{
				_b_ = "check.png";
			}
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
		}
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	if (getItem("researcherMining") >= 4)
	{
		previous_step = "giantDrills";
		icon = "redGeode";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "RED GEODE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/777,600 <br /><span style='color:grey'><img src='images/" + previous_step + ".png' class='img-20' /> Per <span>" + getItemName(previous_step) + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		if (getItem("researcherMining") >= 5)
		{
			crossStart = "miningScrollRedGeode";
			_a_ = getItem(crossStart + "Total") > 0;
			_b_ = "x.png";
			if (_a_)
			{
				_b_ = "check.png";
			}
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
		}
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	if (getItem("researcherMining") >= 4)
	{
		previous_step = "excavators";
		icon = "purpleGeode";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "PURPLE GEODE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/1,555,200 <br /><span style='color:grey'><img src='images/" + previous_step + ".png' class='img-20' /> Per <span>" + getItemName(previous_step) + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		if (getItem("researcherMining") >= 5)
		{
			crossStart = "miningScrollPurpleGeode";
			_a_ = getItem(crossStart + "Total") > 0;
			_b_ = "x.png";
			if (_a_)
			{
				_b_ = "check.png";
			}
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + "<br />";
			attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'><img src='images/" + crossStart + ".png' class='img-20 />' /> <img src='images/" + _b_ + "' class='img-20' /><br /><span style='color:grey;'>(+" + formatNumber(getItem(crossStart + "XpTotal")) + " XP)</span>");
		}
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	attributeTemplate = attributeTemplate + "</center>";
	template.innerHTML = attributeTemplate;
};
