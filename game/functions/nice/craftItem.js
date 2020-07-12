'use strict';

function craftItem(type, name, count)
{
	if (!name)
	{
		confirmDialogue("images/" + type + ".png", count.toUpperCase(), "Craft", "Cancel", "CRAFT=" + type + "~" + 1);
	}
	else
	{
		if (type == "vial")
		{
			openInputDialogue("Crafting Vials", "images/vial.png", "vial", 1, ["vial"], [1], ["glass"], [1], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.");
		}
		else
		{
			if (type == "largeVial")
			{
				openInputDialogue("Crafting Vials", "images/largeVial.png", "largeVial", 1, ["largeVial"], [1], ["glass"], [20], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.");
			}
			else
			{
				if (type == "ironBucket")
				{
					openInputDialogue("Crafting Buckets", "images/ironBucket.png", "ironBucket", 1, ["ironBucket"], [1], ["silverBars"], [50], "Craft", "MULTI_CRAFT", "Bring back an extra bucket of lava after killing a lava type monster.");
				}
				else
				{
					if (type == "arrow")
					{
						openInputDialogue("Crafting Arrows", "images/arrow.png", "arrow", 1, ["arrow"], [1], ["feather", "logs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to fire arrows at your enemy.");
					}
					else
					{
						if (type == "fireArrow")
						{
							openInputDialogue("Crafting Arrows", "images/fireArrow.png", "fireArrow", 1, ["fireArrow"], [1], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot fire arrows at your enemy.");
						}
						else
						{
							if (type.endsWith("Potion"))
							{
								openInputDialogue("Mix Potion", "images/" + type + ".png", type, 1, [type], [1], brewingRecipes[type].recipe, brewingRecipes[type].recipeCost, "Mix", "BREW", "Potions generally give you a temporary buff when drank.");
							}
							else
							{
								if (type == "salad" || type.startsWith("snakeSushi") || type.startsWith("oysterMornay") || type.startsWith("seaweedChicken"))
								{
									openInputDialogue("Prepare Food", "images/" + type + ".png", type, 1, [type], [1], cookingRecipes[type].recipe, cookingRecipes[type].recipeCost, "Prepare", "PREPARE_FOOD", "Additional energy source at the cost of preperation time.");
								}
							}
						}
					}
				}
			}
		}
	}
	setTimeout(refreshCraftables, 1500);
};
