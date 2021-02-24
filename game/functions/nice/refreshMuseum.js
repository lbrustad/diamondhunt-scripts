'use strict';

function refreshMuseum()
{
	document.getElementById("museum-section").innerHTML = "";
	var criterion_index = "";
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
	criterion_index = "giantPearl";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "GIANT PEARL", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GIANT PEARL", "", true);
	}
	criterion_index = "rareGiantPearl";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "RARE GIANT PEARL", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "RARE GIANT PEARL", "", true);
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
	criterion_index = "snowmanCrafted";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "SNOWMAN", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SNOWMAN", "", true);
	}
	criterion_index = "sharkTooth";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "SHARK'S TOOTH", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SHARK'S TOOTH", "", true);
	}
	criterion_index = "glowingGoldBar";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "GLOWING GOLD", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GLOWING GOLD", "", true);
	}
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
	criterion_index = "rubyGlassHand";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "RUBY GLASS HAND", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "RUBY GLASS HAND", "", true);
	}
	criterion_index = "diamondGlassHand";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "DIAMOND GLASS HAND", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "DIAMOND GLASS HAND", "", true);
	}
	criterion_index = "greenStoneEyes";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (G)", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (G)", "", true);
	}
	criterion_index = "purpleStoneEyes";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (P)", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (P)", "", true);
	}
	criterion_index = "redStoneEyes";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (R)", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (R)", "", true);
	}
	criterion_index = "yellowStoneEyes";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (O)", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (O)", "", true);
	}
	criterion_index = "blueStoneEyes";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (B)", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (B)", "", true);
	}
	criterion_index = "burntRemains";
	global_museumItemsArray[criterion_index] = true;
	if (getItem(criterion_index + "Museum") == 1)
	{
		addItemBox(criterion_index, 0, "", "museum-section", "#1a344c", "#0d1a26", "BURNT REMAINS", "", true);
	}
	else
	{
		addMuseumItemBox("x_grey", criterion_index + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "BURNT REMAINS", "", true);
	}
};
