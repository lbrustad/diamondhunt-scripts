'use strict';

function showMiningScrollsFound()
{
	var patch3c = "";
	patch3c = patch3c + "<table class='basic-table' width='100%'>";
	var id = "";
	var _a_ = false;
	id = "miningScrollSapphire";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Sapphire Scroll";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding sapphires will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollEmerald";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Emerald Scroll";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding emeralds will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollRuby";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Ruby Scroll";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding ruby will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollDiamond";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Diamond Scroll";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding diamond will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollBloodDiamond";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Blood Diamond Scroll";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding blood diamonds will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollSmallStardustPrism";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Small Stardust Prism";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding small stardust prism will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollMediumStardustPrism";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Medium Stardust Prism";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding medium stardust prism will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollLargeStardustPrism";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Large Stardust Prism";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding large stardust prism will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollHugeStardustPrism";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Huge Stardust Prism";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding huge stardust prism will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollBlueGeode";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Blue Geode";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding blue geode's will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollGreenGeode";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Green Geode";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding green geode's will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollRedGeode";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Red Geode";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding red geode's will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	id = "miningScrollPurpleGeode";
	_a_ = getItem(id + "Total") > 0;
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + id + ".png' class='img-50 />'");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Purple Geode";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + "Finding purple geode's will now grant mining XP.";
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td>";
	if (_a_)
	{
		patch3c = patch3c + "<img src='images/check.png' class='img-30' />";
	}
	else
	{
		patch3c = patch3c + "<img src='images/x.png' class='img-30' />";
	}
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</tr>";
	patch3c = patch3c + "</table>";
	confirmDialogue("none", patch3c, "Close", "", "");
};
