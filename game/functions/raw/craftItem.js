/**
 * craftItem extracted from ../../deobfuscated/bundle.js at line 11448-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/craftItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function craftItem(_0x1C83E, _0x1D11A, _0x1D10C)
{
	if (!_0x1D11A)
	{
		confirmDialogue("images/" + _0x1C83E + ".png", _0x1D10C.toUpperCase(), "Craft", "Cancel", "CRAFT=" + _0x1C83E + "~" + 1)
	}
	else
	{
		if (_0x1C83E == "vial")
		{
			openInputDialogue("Crafting Vials", "images/vial.png", "vial", 1, ["vial"], [1], ["glass"], [1], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
		}
		else
		{
			if (_0x1C83E == "largeVial")
			{
				openInputDialogue("Crafting Vials", "images/largeVial.png", "largeVial", 1, ["largeVial"], [1], ["glass"], [20], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
			}
			else
			{
				if (_0x1C83E == "ironBucket")
				{
					openInputDialogue("Crafting Buckets", "images/ironBucket.png", "ironBucket", 1, ["ironBucket"], [1], ["silverBars"], [50], "Craft", "MULTI_CRAFT", "Bring back an extra bucket of lava after killing a lava type monster.")
				}
				else
				{
					if (_0x1C83E == "arrow")
					{
						openInputDialogue("Crafting Arrows", "images/arrow.png", "arrow", 1, ["arrow"], [1], ["feather", "logs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to fire arrows at your enemy.")
					}
					else
					{
						if (_0x1C83E == "fireArrow")
						{
							openInputDialogue("Crafting Arrows", "images/fireArrow.png", "fireArrow", 1, ["fireArrow"], [1], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot fire arrows at your enemy.")
						}
						else
						{
							if (_0x1C83E.endsWith("Potion"))
							{
								openInputDialogue("Mix Potion", "images/" + _0x1C83E + ".png", _0x1C83E, 1, [_0x1C83E], [1], brewingRecipes[_0x1C83E].recipe, brewingRecipes[_0x1C83E].recipeCost, "Mix", "BREW", "Potions generally give you a temporary buff when drank.")
							}
							else
							{
								if (_0x1C83E == "salad" || _0x1C83E.startsWith("snakeSushi") || _0x1C83E.startsWith("oysterMornay") || _0x1C83E.startsWith("seaweedChicken"))
								{
									openInputDialogue("Prepare Food", "images/" + _0x1C83E + ".png", _0x1C83E, 1, [_0x1C83E], [1], cookingRecipes[_0x1C83E].recipe, cookingRecipes[_0x1C83E].recipeCost, "Prepare", "PREPARE_FOOD", "Additional energy source at the cost of preperation time.")
								}
							}
						}
					}
				}
			}
		}
	};
	setTimeout(refreshCraftables, 1500)
}