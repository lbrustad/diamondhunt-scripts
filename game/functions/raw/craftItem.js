/**
 * craftItem extracted from ../../deobfuscated/bundle.js at line 15863-15926
 *
 * If this file doesn't contain a function, there is an error in ../raw/craftItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function craftItem(_0x3933, _0x4D23, _0x4D06)
{
	if (!_0x4D23)
	{
		confirmDialogue("images/" + _0x3933 + ".png", _0x4D06.toUpperCase(), "Craft", "Cancel", "CRAFT=" + _0x3933 + "~" + 1)
	}
	else
	{
		if (_0x3933 == "vial")
		{
			openInputDialogue("Crafting Vials", "images/vial.png", "vial", 1, ["vial"], [1], ["glass"], [1], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
		}
		else
		{
			if (_0x3933 == "largeVial")
			{
				openInputDialogue("Crafting Vials", "images/largeVial.png", "largeVial", 1, ["largeVial"], [1], ["glass"], [20], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
			}
			else
			{
				if (_0x3933 == "ironBucket")
				{
					openInputDialogue("Crafting Buckets", "images/ironBucket.png", "ironBucket", 1, ["ironBucket"], [1], ["silverBars"], [50], "Craft", "MULTI_CRAFT", "Bring back an extra bucket of lava after killing a lava type monster.")
				}
				else
				{
					if (_0x3933 == "arrow")
					{
						openInputDialogue("Crafting Arrows", "images/arrow.png", "arrow", 1, ["arrow"], [1], ["feather", "logs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to fire arrows at your enemy.")
					}
					else
					{
						if (_0x3933 == "fireArrow")
						{
							openInputDialogue("Crafting Arrows", "images/fireArrow.png", "fireArrow", 1, ["fireArrow"], [1], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot fire arrows at your enemy.")
						}
						else
						{
							if (_0x3933 == "iceArrow")
							{
								openInputDialogue("Crafting Arrows", "images/iceArrow.png", "iceArrow", 1, ["iceArrow"], [1], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot ice arrows at your enemy.")
							}
							else
							{
								if (_0x3933.endsWith("Potion") || _0x3933.endsWith("Potion1") || _0x3933.endsWith("Potion2"))
								{
									openInputDialogue("Mix Potion", "images/" + _0x3933 + ".png", _0x3933, 1, [_0x3933], [1], brewingRecipes[_0x3933].recipe, brewingRecipes[_0x3933].recipeCost, "Mix", "BREW", "Potions generally give you a temporary buff when drank.")
								}
								else
								{
									if (_0x3933 == "salad" || _0x3933.startsWith("snakeSushi") || _0x3933.startsWith("oysterMornay") || _0x3933.startsWith("seaweedChicken") || _0x3933.startsWith("batSkinSushi"))
									{
										openInputDialogue("Prepare Food", "images/" + _0x3933 + ".png", _0x3933, 1, [_0x3933], [1], cookingRecipes[_0x3933].recipe, cookingRecipes[_0x3933].recipeCost, "Prepare", "PREPARE_FOOD", "Additional energy source at the cost of preperation time.")
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