'use strict';

function refreshTreeListTab()
{
	var dayName = document.getElementById("woodcutting-treeList-section");
	var d = "<center>";
	var command = "";
	var str = "";
	var path = "";
	var _a_ = "background-image:url(images/background16.jpg)";
	var manyParticipants = "<img src='images/treeListLocked.png' style='float:left;)' class='img-100' />";
	var th_field = "";
	command = "tree";
	rarity = "";
	if (getItem(command + "ChoppedTotal") > 0)
	{
		path = command;
		rarity = "Common";
		th_field = "1";
		backgroundImageStyle = _a_;
		str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
	}
	else
	{
		path = "???";
		backgroundImageStyle = "";
		rarity = "";
		th_field = "1";
		str = manyParticipants;
		backgroundImageStyle = "";
	}
	d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
	d = d + str;
	d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path.toUpperCase());
	d = d + "<br />";
	d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
	d = d + "<br />";
	d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
	d = d + "<br />";
	d = d + "<br />";
	d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
	d = d + "</span>";
	d = d + "</div>";
	command = "oakTree";
	rarity = "";
	if (getItem(command + "ChoppedTotal") > 0)
	{
		path = getItemName(command).toUpperCase();
		rarity = "Common";
		th_field = "15";
		backgroundImageStyle = _a_;
		str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
	}
	else
	{
		path = "???";
		rarity = "";
		th_field = "15";
		str = manyParticipants;
		backgroundImageStyle = "";
	}
	d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
	d = d + str;
	d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
	d = d + "<br />";
	d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
	d = d + "<br />";
	d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
	d = d + "<br />";
	d = d + "<br />";
	d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
	d = d + "</span>";
	d = d + "</div>";
	command = "willowTree";
	rarity = "";
	if (getItem(command + "ChoppedTotal") > 0)
	{
		path = getItemName(command).toUpperCase();
		rarity = "Common";
		th_field = "30";
		backgroundImageStyle = _a_;
		str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
	}
	else
	{
		backgroundImageStyle = "";
		path = "???";
		th_field = "30";
		rarity = "";
		str = manyParticipants;
	}
	d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
	d = d + str;
	d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
	d = d + "<br />";
	d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
	d = d + "<br />";
	d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
	d = d + "<br />";
	d = d + "<br />";
	d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
	d = d + "</span>";
	d = d + "</div>";
	command = "bambooTree";
	rarity = "Uncommon";
	th_field = "40";
	if (getItem(command + "ChoppedTotal") > 0)
	{
		path = getItemName(command).toUpperCase();
		backgroundImageStyle = _a_;
		str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
	}
	else
	{
		backgroundImageStyle = "";
		path = "???";
		str = manyParticipants;
	}
	d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
	d = d + str;
	d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
	d = d + "<br />";
	d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
	d = d + "<br />";
	d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
	d = d + "<br />";
	d = d + "<br />";
	d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
	d = d + "</span>";
	d = d + "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		command = "appleTree";
		rarity = "Uncommon";
		th_field = "45";
		if (getItem(command + "ChoppedTotal") > 0)
		{
			path = getItemName(command).toUpperCase();
			backgroundImageStyle = _a_;
			str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
		}
		else
		{
			backgroundImageStyle = "";
			path = "???";
			str = manyParticipants;
		}
		d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
		d = d + str;
		d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
		d = d + "<br />";
		d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
		d = d + "<br />";
		d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
		d = d + "<br />";
		d = d + "<br />";
		d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
		d = d + "</span>";
		d = d + "</div>";
	}
	command = "mapleTree";
	rarity = "Uncommon";
	th_field = "50";
	if (getItem(command + "ChoppedTotal") > 0)
	{
		path = getItemName(command).toUpperCase();
		backgroundImageStyle = _a_;
		str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
	}
	else
	{
		backgroundImageStyle = "";
		path = "???";
		str = manyParticipants;
	}
	d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
	d = d + str;
	d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
	d = d + "<br />";
	d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
	d = d + "<br />";
	d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
	d = d + "<br />";
	d = d + "<br />";
	d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
	d = d + "</span>";
	d = d + "</div>";
	command = "lavaTree";
	rarity = "Rare";
	th_field = "60";
	if (getItem(command + "ChoppedTotal") > 0)
	{
		path = getItemName(command).toUpperCase();
		backgroundImageStyle = _a_;
		str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
	}
	else
	{
		backgroundImageStyle = "";
		path = "???";
		str = manyParticipants;
	}
	d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
	d = d + str;
	d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
	d = d + "<br />";
	d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
	d = d + "<br />";
	d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
	d = d + "<br />";
	d = d + "<br />";
	d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
	d = d + "</span>";
	d = d + "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		command = "bananaTree";
		rarity = "Rare";
		th_field = "63";
		if (getItem(command + "ChoppedTotal") > 0)
		{
			path = getItemName(command).toUpperCase();
			backgroundImageStyle = _a_;
			str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
		}
		else
		{
			backgroundImageStyle = "";
			path = "???";
			str = manyParticipants;
		}
		d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
		d = d + str;
		d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
		d = d + "<br />";
		d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
		d = d + "<br />";
		d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
		d = d + "<br />";
		d = d + "<br />";
		d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
		d = d + "</span>";
		d = d + "</div>";
	}
	command = "pineTree";
	rarity = "Rare";
	th_field = "65";
	if (getItem(command + "ChoppedTotal") > 0)
	{
		path = getItemName(command).toUpperCase();
		backgroundImageStyle = _a_;
		str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
	}
	else
	{
		backgroundImageStyle = "";
		path = "???";
		str = manyParticipants;
	}
	d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
	d = d + str;
	d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
	d = d + "<br />";
	d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
	d = d + "<br />";
	d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
	d = d + "<br />";
	d = d + "<br />";
	d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
	d = d + "</span>";
	d = d + "</div>";
	command = "stardustTree";
	rarity = "Rare";
	th_field = "70";
	if (getItem(command + "ChoppedTotal") > 0)
	{
		path = getItemName(command).toUpperCase();
		backgroundImageStyle = _a_;
		str = "<img src='images/" + command + ".png' style='float:left;' class='img-100' />";
	}
	else
	{
		backgroundImageStyle = "";
		path = "???";
		str = manyParticipants;
	}
	d = d + ("<div class='mobile-style' style='" + backgroundImageStyle + "'>");
	d = d + str;
	d = d + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + path);
	d = d + "<br />";
	d = d + ("<span style='color:white;font-size:12pt;'>" + rarity + "</span>");
	d = d + "<br />";
	d = d + ("<span style='color:grey;font-size:12pt;'>Level " + th_field + "</span>");
	d = d + "<br />";
	d = d + "<br />";
	d = d + ("<span style='font-size:12pt;color:yellow'>Chopped " + getItem(command + "ChoppedTotal") + "</span>");
	d = d + "</span>";
	d = d + "</div>";
	d = d + "</center>";
	dayName.innerHTML = d;
};
