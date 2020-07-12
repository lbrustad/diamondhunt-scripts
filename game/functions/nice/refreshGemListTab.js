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
	attributeTemplate = attributeTemplate + "</span>";
	attributeTemplate = attributeTemplate + "</div>";
	var _a_ = 0;
	var _b_ = "style='color:red'";
	if (getItem("researcherMining") >= 2)
	{
		_a_ = 5;
		if (getLevel(getItem("miningXp")) >= _a_)
		{
			_b_ = "style='color:lime'";
		}
		icon = "smallStardustPrism";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "SMALL");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/4320  <br /><span style='color:grey'><img src='images/miningSkill.png' class='img-20' /> <span " + _b_ + ">" + _a_ + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
		_a_ = 20;
		_b_ = "style='color:red'";
		if (getLevel(getItem("miningXp")) >= _a_)
		{
			_b_ = "style='color:lime'";
		}
		icon = "mediumStardustPrism";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "MEDIUM");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/66,000  <br /><span style='color:grey'><img src='images/miningSkill.png' class='img-20' /> <span " + _b_ + ">" + _a_ + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
		_a_ = 50;
		_b_ = "style='color:red'";
		if (getLevel(getItem("miningXp")) >= _a_)
		{
			_b_ = "style='color:lime'";
		}
		icon = "largeStardustPrism";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "LARGE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/TBA  <br /><span style='color:grey'><img src='images/miningSkill.png' class='img-20' /> <span " + _b_ + ">" + _a_ + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
		_a_ = 80;
		_b_ = "style='color:red'";
		if (getLevel(getItem("miningXp")) >= _a_)
		{
			_b_ = "style='color:lime'";
		}
		icon = "hugeStardustPrism";
		attributeTemplate = attributeTemplate + "<div class='mobile-style'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + icon + ".png' style='float:left;' class='img-100' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "HUGE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/TBA  <br /><span style='color:grey'><img src='images/miningSkill.png' class='img-20' /> <span " + _b_ + ">" + _a_ + "</span></span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(icon + "Mined") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	attributeTemplate = attributeTemplate + "</center>";
	template.innerHTML = attributeTemplate;
};
