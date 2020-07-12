'use strict';

function refreshMuseum()
{
	document.getElementById("museum-section").innerHTML = "";
	var criterion_index = "";
	criterion_index = "sapphireGlassHand";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "SAPPHIRE GLASS HAND", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SAPPHIRE GLASS HAND", "", true);
	}
	criterion_index = "emeraldGlassHand";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "EMERALD GLASS HAND", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "EMERALD GLASS HAND", "", true);
	}
	criterion_index = "brokenStinger";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "BROKEN STINGER", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "BROKEN STINGER", "", true);
	}
	criterion_index = "snakeBones";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "SNAKE BONES", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SNAKE BONES", "", true);
	}
	criterion_index = "skeletonSkull";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "SKULL", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SKULL", "", true);
	}
	criterion_index = "ghostClothes";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "GHOST CLOTHES", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GHOST CLOTHES", "", true);
	}
	criterion_index = "cockroach";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "GIANT COCKROACH", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GIANT COCKROACH", "", true);
	}
	criterion_index = "goldenCockroach";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "GOLDEN COCKROACH", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GOLDEN COCKROACH", "", true);
	}
	criterion_index = "smallSeaShell";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "SMALL SHELL", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SMALL SHELL", "", true);
	}
	criterion_index = "mediumSeaShell";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "MEDIUM SHELL", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "MEDIUM SHELL", "", true);
	}
	criterion_index = "largeSeaShell";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "LARGE SHELL", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "LARGE SHELL", "", true);
	}
	criterion_index = "yetiLeftFoot";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "YETI'S FOOT (L)", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "YETI'S FOOT (L)", "", true);
	}
	criterion_index = "yetiRightFoot";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "YETI'S FOOT (R)", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "YETI'S FOOT (R)", "", true);
	}
};
