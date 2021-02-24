/**
 * craftItem extracted from ../../deobfuscated/bundle.js at line 19534-19604
 *
 * If this file doesn't contain a function, there is an error in ../raw/craftItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function craftItem(_0x15003, _0x16994, _0x16971)
{
	if (!_0x16994)
	{
		confirmDialogue("images/" + _0x15003 + ".png", _0x16971.toUpperCase(), "Craft", "Cancel", "CRAFT=" + _0x15003 + "~" + 1)
	}
	else
	{
		if (_0x15003 == "vial")
		{
			openInputDialogue("Crafting Vials", "images/vial.png", "vial", 1, ["vial"], [1], ["glass"], [1], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
		}
		else
		{
			if (_0x15003 == "largeVial")
			{
				openInputDialogue("Crafting Vials", "images/largeVial.png", "largeVial", 1, ["largeVial"], [1], ["glass"], [20], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
			}
			else
			{
				if (_0x15003 == "ironBucket")
				{
					openInputDialogue("Crafting Buckets", "images/ironBucket.png", "ironBucket", 1, ["ironBucket"], [1], ["silverBars"], [50], "Craft", "MULTI_CRAFT", "Bring back an extra bucket of lava after killing a lava type monster.")
				}
				else
				{
					if (_0x15003 == "arrow")
					{
						openInputDialogue("Crafting Arrows", "images/arrow.png", "arrow", 1, ["arrow"], [1], ["feather", "logs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to fire arrows at your enemy.")
					}
					else
					{
						if (_0x15003 == "fireArrow")
						{
							openInputDialogue("Crafting Arrows", "images/fireArrow.png", "fireArrow", 1, ["fireArrow"], [1], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot fire arrows at your enemy.")
						}
						else
						{
							if (_0x15003 == "iceArrow")
							{
								openInputDialogue("Crafting Arrows", "images/iceArrow.png", "iceArrow", 1, ["iceArrow"], [1], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot ice arrows at your enemy.")
							}
							else
							{
								if (_0x15003 == "arrowPlus")
								{
									openInputDialogue("Crafting Arrows", "images/arrowPlus.png", "arrowPlus", 1, ["arrowPlus"], [1], ["feather", "mapleLogs", "maceSpikes"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot stronger arrows at your enemy.")
								}
								else
								{
									if (_0x15003.endsWith("Potion") || _0x15003.endsWith("Potion1") || _0x15003.endsWith("Potion2"))
									{
										openInputDialogue("Mix Potion", "images/" + _0x15003 + ".png", _0x15003, 1, [_0x15003], [1], brewingRecipes[_0x15003].recipe, brewingRecipes[_0x15003].recipeCost, "Mix", "BREW", "Potions generally give you a temporary buff when drank.")
									}
									else
									{
										if (_0x15003 == "salad" || _0x15003.startsWith("snakeSushi") || _0x15003.startsWith("oysterMornay") || _0x15003.startsWith("seaweedChicken") || _0x15003.startsWith("batSkinSushi"))
										{
											openInputDialogue("Prepare Food", "images/" + _0x15003 + ".png", _0x15003, 1, [_0x15003], [1], cookingRecipes[_0x15003].recipe, cookingRecipes[_0x15003].recipeCost, "Prepare", "PREPARE_FOOD", "Additional energy source at the cost of preperation time.")
										}
									}
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