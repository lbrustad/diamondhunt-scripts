/**
 * clicksItem extracted from ../../deobfuscated/bundle.js at line 7298-8264
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksItem(_0x16255)
{
	if (_0x16255.endsWith("Seeds"))
	{
		clicksSeed(_0x16255);
		return
	};
	if (_0x16255.endsWith("Museum"))
	{
		if (getItem(_0x16255) == 0)
		{
			sendBytes("MUSEUM_OFFER=" + _0x16255.substr(0, _0x16255.length - 6));
			return
		}
	};
	if (_0x16255.startsWith("stardustBox"))
	{
		openInputDialogue("Open", "images/" + _0x16255 + ".png", _0x16255, 1, ["stardust"], [0], [_0x16255], [1], "Open", "OPEN_STARDUST_BOX", "Contains a random amount of stardust.");
		return
	};
	if (_0x16255.toLowerCase().endsWith("oilwell"))
	{
		sendBytes("CLICKS_OIL_WELL");
		return
	};
	if (_0x16255.startsWith("miningScroll"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Learn how to gain mining XP from this resource?", "Read Scroll", "Close", "MINING_SCROLL=" + _0x16255);
		return
	};
	if (_0x16255.endsWith("StardustPrism"))
	{
		openInputDialogue("Open", "images/" + _0x16255 + ".png", _0x16255, 1, ["stardust"], [0], [_0x16255], [1], "Break", "OPEN_STARDUST_PRISM", "Contains a random amount of stardust.");
		return
	};
	if (_0x16255.toLowerCase().endsWith("geode"))
	{
		openInputDialogue("Open", "images/" + _0x16255 + ".png", _0x16255, 1, ["questionMarkIcon"], [0], [_0x16255], [1], "Crack", "OPEN_GEODES", "Contains ore or a mineral.");
		return
	};
	if (_0x16255.endsWith("ManaStar"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Absorb the star to increase maximum mana permanently?", "Absorb Mana Star", "Cancel", "MANA_STAR=" + _0x16255);
		return
	};
	if (_0x16255.toLowerCase().endsWith("watch"))
	{
		clicksWatch();
		return
	};
	if (_0x16255 != "oyster" && _0x16255 != "specialOyster")
	{
		if (getItemPrice(_0x16255) > 0)
		{
			openInputDialogue("Sell", "images/" + _0x16255 + ".png", _0x16255, 1, ["coins"], [getItemPrice(_0x16255)], [_0x16255], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
		}
	};
	if (_0x16255.toLowerCase().endsWith("rake"))
	{
		openRakeDialogue()
	};
	if (_0x16255.startsWith("heartCrystal"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Break crystal and gain a permanent <img src=\'images/heartIcon.png\' class=\'img-20\' /> +5 health?", "Break Crystal", "Cancel", "HEART_CRYSTAL=" + _0x16255);
		return
	};
	if (global_foodMap[_0x16255] != null)
	{
		if (_0x16255.startsWith("raw"))
		{
			if (getItem("cookingUnlocked") == 0)
			{
				confirmDialogue("images/cookingSkill.png", "You need to unlock the cooking skill for this action.<br /><br /><span style=\'color:grey\'><b>Hint: </b> Cooking is unlocked after purchasing a bronze oven after upgrading the shop through crafting.", "Close", "", "")
			}
			else
			{
				if (getItem("cookingBoostPotionOn") == 1)
				{
					confirmDialogue("images/cookingBoostPotion.png", "You are about to use your cooking boost to cook one of this type of food.", "Cook", "Cancel", "COOK=" + _0x16255 + "~1")
				}
				else
				{
					if (global_foodMap[_0x16255].cookLevel > getLevel(getItem("cookingXp")))
					{
						confirmDialogue("images/cookingSkill.png", "You need a level of " + global_foodMap[_0x16255].cookLevel + " to cook this.", "Close", "", "")
					}
					else
					{
						openInputDialogue("Cook", "images/" + _0x16255 + ".png", _0x16255, 1, ["cookingSkill_xp"], [global_foodMap[_0x16255].xp], [_0x16255, "heat"], [1, global_foodMap[_0x16255].heat], "Cook", "COOK", "Cooking food allows it to be consumed afterwards for energy.  Remember to check your burn rate on your oven.")
					}
				}
			}
		}
		else
		{
			if (_0x16255 == "redMushroom" && getItem("researcherFarming") == 0)
			{
				return
			};
			openInputDialogue(getItemName(_0x16255.charAt(0).toUpperCase() + _0x16255.slice(1)) + "s", "images/" + _0x16255 + ".png", _0x16255, 1, ["energy"], [global_foodMap[_0x16255].energy], [_0x16255], [1], "Consume", "CONSUME", "Food gives you energy for your hero.  Energy is required to begin a fight with a monster.")
		}
	};
	if (_0x16255.startsWith("blue") && _0x16255.endsWith("Orb"))
	{
		clicksBlueOrb(_0x16255);
		return
	};
	if (_0x16255.startsWith("green") && _0x16255.endsWith("Orb"))
	{
		clicksGreenOrb(_0x16255);
		return
	};
	if (global_equipmentMap[_0x16255] != null)
	{
		if (document.getElementById("item-box-needle").style.border == "3px solid orange")
		{
			if (_0x16255.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
				return
			}
			else
			{
				if (_0x16255.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
					return
				}
				else
				{
					if (_0x16255.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
						return
					}
					else
					{
						if (_0x16255.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
							return
						}
						else
						{
							if (_0x16255.startsWith("reaper"))
							{
								confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
								return
							}
						}
					}
				}
			}
		};
		sendBytes("EQUIP=" + _0x16255)
	};
	if (_0x16255.toLowerCase().endsWith("arrow"))
	{
		sendBytes("EQUIP=" + _0x16255);
		return
	};
	if (_0x16255.endsWith("Potion") || _0x16255.endsWith("Potion1") || _0x16255.endsWith("Potion2"))
	{
		clicksPotion(_0x16255);
		return
	};
	if (_0x16255.substr(0, _0x16255.length - 1).endsWith("Ring"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Ring are automatically equipped.<br /><br /><span style=\'color:grey\'>Bonuses are stacked for each ring.</span>", "Close", "", "");
		return
	};
	if (_0x16255.endsWith("Mould"))
	{
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		return
	};
	if (_0x16255.endsWith("Sigil"))
	{
		openChatSigilsDialogues()
	};
	if (_0x16255.startsWith("dungeonSign"))
	{
		navigate("right-dungeonSigns")
	};
	if (_0x16255.endsWith("Furnace"))
	{
		if (isSmelting())
		{
			confirmDialogue("images/" + getBestFurnace() + "On.gif", "Your furnace is already running! Would you like to reset it?<br /><br /><b style=\'color:red\'>Remaining ore and oil will be lost.</b>", "Reset Furnace", "Nevermind", "RESET_FURNACE")
		}
		else
		{
			if (getItem("letTheMiningBeginQuest") == 3)
			{
				sendBytes("QUEST=letTheMiningBegin~1")
			}
			else
			{
				openFurnaceDialogue(_0x16255)
			}
		}
	};
	if (global_museumItemsArray[_0x16255] != null)
	{
		sendBytes("CLICKS_MUSEUM_ITEM=" + _0x16255)
	};
	if (_0x16255.toLowerCase().endsWith("fishingnet"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openSmallFishingNetDialogue();
				closeDialogue("dialogue-swap-fishingTool")
			};
			if (getSmallFishingNetTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getSmallFishingNetTypeData()[2] + ".png"
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none"
			};
			openDialogue("dialogue-swap-fishingTool")
		}
		else
		{
			openSmallFishingNetDialogue()
		}
	};
	if (_0x16255.toLowerCase().endsWith("fishingrod"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openFishingRodDialogue();
				closeDialogue("dialogue-swap-fishingTool")
			};
			if (getFishingRodTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getFishingRodTypeData()[2] + ".png"
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none"
			};
			openDialogue("dialogue-swap-fishingTool")
		}
		else
		{
			openFishingRodDialogue()
		}
	};
	if (_0x16255.toLowerCase().endsWith("harpoon"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openHarpoonDialogue();
				closeDialogue("dialogue-swap-fishingTool")
			};
			if (getHarpoonTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getHarpoonTypeData()[2] + ".png"
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none"
			};
			openDialogue("dialogue-swap-fishingTool")
		}
		else
		{
			openHarpoonDialogue()
		}
	};
	if (_0x16255.toLowerCase().endsWith("shovel"))
	{
		openShovelDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("axe") && !_0x16255.toLowerCase().endsWith("pickaxe"))
	{
		openAxeDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("chainsaw"))
	{
		openChainsawDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("trowel"))
	{
		openTrowelDialogue()
	};
	openChainsawDialogue;
	if (_0x16255.toLowerCase().endsWith("chisel"))
	{
		openChiselDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("bonemealbin"))
	{
		bonemealBinDialgue()
	};
	if (_0x16255.toLowerCase().endsWith("brewingkit"))
	{
		openBrewingKitDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("stardustpickaxe"))
	{
		openStardustToolDialogue("stardustPickaxe")
	};
	if (_0x16255.toLowerCase().endsWith("stardusthammer"))
	{
		if (getItem("telescopePart") == 1 && getItem("telescopeLens") == 1)
		{
			confirmDialogue("images/telescopeLens.png", "Use the hammer to put the telescope lens in place?", "Fix Telescope", "Cancel", "FIX_TELESCOPE")
		}
		else
		{
			openStardustToolDialogue("stardustHammer")
		}
	};
	if (_0x16255.endsWith("Oven"))
	{
		clicksOven()
	};
	if (_0x16255.startsWith("spellScroll"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Study the spell scroll?", "Learn", "Cancel", "LEARN_SPELL=" + _0x16255)
	};
	if (_0x16255 == "houseBlueprint")
	{
		confirmDialogue("images/researcher.png", "You may only craft one of three houses.<br /><br />The house you craft will define your character.", "Close", "", "");
		switchCraftingType(_0x16255);
		refreshCraftables();
		return
	};
	if (_0x16255.endsWith("LootBag"))
	{
		openInputDialogue("Loot Bag", "images/" + _0x16255 + ".png", _0x16255, 1, ["questionMarkIcon"], [1], [_0x16255], [1], "Open", "OPEN_LOOTBAGS", "Loot bags contain basic items which are area specific.");
		return
	};
	if (_0x16255.endsWith("Stew"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Drink the stew?", "Drink", "Cancel", "DRINK_CHEF_STEW=" + _0x16255);
		return
	};
	if (_0x16255 == "museumBlueprint")
	{
		switchCraftingType(_0x16255);
		refreshCraftables();
		return
	};
	switch (_0x16255)
	{
	case "rowBoatBlueprints":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "canoeBoatBlueprints":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "seaweed":
		sendBytes("CLICKS_SEAWEED");
		break;
	case "spyglassMould":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "halloweenScroll":
		clicksHalloweenScroll();
		break;
	case "titaniumOilFactoryBlueprint":
		;
	case "promethiumOilFactoryBlueprint":
		;
	case "oilFactoryBlueprint":
		navigate("right-crafting");
		switchCraftingType("oilFactoryBlueprint");
		refreshCraftables();
		break;
	case "titaniumOilFactory":
		;
	case "promethiumOilFactory":
		;
	case "oilFactory":
		openOilFactoryDialogue();
		break;
	case "greenSpices":
		;
	case "blueSpices":
		;
	case "greenSpices":
		;
	case "yellowSpices":
		sendBytes("QUEST=theStewChef~0");
		break;
	case "charcoalFoundry":
		;
	case "titaniumCharcoalFoundry":
		if (isUsingFoundry())
		{
			confirmDialogue("images/" + "charcoalFoundry.png", "Your foundry is already running! Would you like to reset it?<br /><br /><b style=\'color:red\'>Remaining logs and oil will be lost.</b>", "Reset Foundry", "Nevermind", "RESET_FOUNDRY")
		}
		else
		{
			clicksCharcoalFoundry()
		};
		break;
	case "feather":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "fireFeather":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "maceSpikes":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "robot":
		;
	case "sapphireRobot":
		;
	case "emeraldRobot":
		;
	case "rubyRobot":
		;
	case "diamondRobot":
		clicksRobot();
		break;
	case "brokenStoneMace":
		if (getItem("stone") >= 50000)
		{
			confirmDialogue("images/brokenStoneMace.png", "The mace is broken and needs to be repaired with 50,000 stone.<br /><br /><span style=\'color:grey\'>The success rate scales based on your crafting level.<br /><br /><span style=\'font-size:10pt\'>You will lose your stone should you fail to repaire the stone mace.</span></span><br /><br /><img src=\'images/stone.png\' class=\'img-20\'> 50,000 <img src=\'images/check.png\' class=\'img-20\' />", "Attempt Repair", "Cancel", "REPAIR_STONE_MACE")
		}
		else
		{
			confirmDialogue("images/stone.png", "You need at least 50,000 stone to try to repair the stone mace.", "Close", "", "")
		};
		break;
	case "iceFeather":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "stew":
		confirmDialogue("images/stew.png", "Drink the stew to reduce cooldown by 15 minutes?", "Drink", "Close", "DRINK_STEW");
		break;
	case "chef":
		if (getItem("chefCooldown") > 1)
		{
			confirmDialogue("images/chef.png", "I\'m still trying to think of a stew recipe.  Come back later.", "Close", "", "")
		}
		else
		{
			if (ownsStew())
			{
				confirmDialogue("images/chef.png", "I\'m offended, do you not enjoy the master piece we have created? Finish eating your stew if you want to make a new one!", "Close", "", "");
				return
			};
			var _0x163B3 = getItemString("chefRecipeItem1");
			var _0x163D6 = getItemString("chefRecipeAmount1");
			var _0x1641C = getItemString("chefRecipeItem2");
			var _0x1643F = getItemString("chefRecipeAmount2");
			var _0x16485 = getItemString("chefRecipeItem3");
			var _0x164A8 = getItemString("chefRecipeAmount3");
			var _0x16390 = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x163B3) < _0x163D6)
			{
				_0x16390 = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			var _0x163F9 = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x1641C) < _0x1643F)
			{
				_0x163F9 = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			var _0x16462 = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x16485) < _0x164A8)
			{
				_0x16462 = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			if (getItem("researcherCooking") >= 4)
			{
				confirmDialogue2("images/chef.png", "I need some ingredients!  I\'m trying to make a <b style=\'color:green\'>" + getItemName(getItemString("chefStew")) + "</b><br /><br />Ingredients:<br /><br /><center><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/" + _0x163B3 + ".png\' class=\'img-50\' /></td><td>" + _0x163D6 + " " + _0x16390 + "</td></tr><tr><td><img src=\'images/" + _0x1641C + ".png\' class=\'img-50\' /></td><td>" + _0x1643F + " " + _0x163F9 + "</td></tr><tr><td><img src=\'images/" + _0x16485 + ".png\' class=\'img-50\' /></td><td>" + _0x164A8 + " " + _0x16462 + "</td></tr></table><br /><br /><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/energy.png\' class=\'img-50\' /></td><td style=\'color:green\'>" + formatNumber(getItem("stewEnergy")) + "</td></tr><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td style=\'color:green\'>" + formatTime(getItem("stewCooldownReduction")) + "</td></tr></table></center>", "Make Stew", "Skip this Stew", "Close", "MAKE_STEW", "SKIP_STEW")
			}
			else
			{
				confirmDialogue("images/chef.png", "I need some ingredients!  I\'m trying to make a <b style=\'color:green\'>" + getItemName(getItemString("chefStew")) + "</b><br /><br />Ingredients:<br /><br /><center><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/" + _0x163B3 + ".png\' class=\'img-50\' /></td><td>" + _0x163D6 + " " + _0x16390 + "</td></tr><tr><td><img src=\'images/" + _0x1641C + ".png\' class=\'img-50\' /></td><td>" + _0x1643F + " " + _0x163F9 + "</td></tr><tr><td><img src=\'images/" + _0x16485 + ".png\' class=\'img-50\' /></td><td>" + _0x164A8 + " " + _0x16462 + "</td></tr></table></center>", "Make Stew", "Close", "MAKE_STEW")
			}
		};
		break;
	case "darkCrystalUsed":
		confirmDialogue("images/faradox.png", "Faradox has been released into this world.<br /><br /><span style=\'color:grey\'>We need to find and use all 7 crystals scattered around the world for it to gain its power back.</span>", "Close", "", "");
		break;
	case "planter":
		confirmDialogue("images/planter.png", "<b>Right click</b> a seed to automatically harvest all and replant.<br /><br /><b>Right click</b> this planter to only harvest all.", "Close", "", "");
		break;
	case "lumberJack":
		sendBytes("LUMBERJACK");
		break;
	case "chain":
		;
	case "skeletonHead":
		;
	case "skeletonLeftArm":
		;
	case "skeletonRightArm":
		;
	case "skeletonLeftLeg":
		;
	case "skeletonRightLeg":
		navigate("right-crafting");
		switchCraftingType("cemeterySkeleton");
		refreshCraftables();
		break;
	case "smallSnowballs":
		;
	case "mediumSnowball":
		;
	case "largeSnowball":
		;
	case "leftBranch":
		;
	case "rightBranch":
		navigate("right-crafting");
		switchCraftingType("snowman");
		refreshCraftables();
		break;
	case "cemeterySkeletonShield1":
		;
	case "cemeterySkeletonShield2":
		;
	case "cemeterySkeletonShield3":
		navigate("right-crafting");
		switchCraftingType("cemeterySkeletonShield");
		refreshCraftables();
		break;
	case "stardust1000":
		sendBytes("OPEN_SD_PACKS");
		break;
	case "rocket":
		clicksRocket();
		break;
	case "oyster":
		openDialogue("dialogue-oysterOptions");
		break;
	case "specialOyster":
		openDialogue("dialogue-specialOysterOptions");
		break;
	case "vial":
		if (getItem("poisonCombatVial") > 0 || getItemString("weapon") == "posionCombatVial" || getItemString("weapon") == "combatVial" || getItem("combatVial") > 0)
		{
			return
		};
		if (getItem("mommyTheSpiderQuest") == 2)
		{
			confirmDialogue("images/vial.png", "Would you like to hold this as a weapon?", "Hold Vial", "Cancel", "HOLD_VIAL")
		};
		break;
	case "largeVial":
		if (getItem("mommyTheSpiderQuest") == 2)
		{
			if (getItem("poisonCombatVial") > 0 || getItemString("weapon") == "posionCombatVial" || getItemString("weapon") == "combatVial" || getItem("combatVial") > 0)
			{
				return
			};
			confirmDialogue("images/largeVial.png", "Try a smaller vial if you wish to hold poison.", "Close", "", "")
		};
		break;
	case "treasureMap":
		sendBytes("CLICKS_TREASURE_MAP");
		break;
	case "greenTreasureMap":
		sendBytes("CLICKS_GREEN_TREASURE_MAP");
		break;
	case "treasureChest":
		openDialogue("dialogue-treasureChest");
		break;
	case "greenTreasureChest":
		openDialogue("dialogue-greenTreasureChest");
		break;
	case "bones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/bones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x15A21 = getBonemealTypeData()[3];
			if (_0x15A21 == "INF")
			{
				_0x15A21 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x15A21 + "</span>", "images/bonemeal.png", "bones", 1, ["bonemeal"], [1], ["bones"], [1], "Add", "ADD_BONEMEAL", "Bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
			var _0x164CB = getMaxBonemealToPut(_0x16255);
			document.getElementById("dialogue-wild-input").value = _0x164CB;
			$("#dialogue-wild-input").keyup()
		};
		break;
	case "ashes":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/ashes.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x15A21 = getBonemealTypeData()[3];
			if (_0x15A21 == "INF")
			{
				_0x15A21 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x15A21 + "</span>", "images/bonemeal.png", "ashes", 1, ["bonemeal"], [2], ["ashes"], [1], "Add", "ADD_BONEMEAL", "Ashes can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
			var _0x164CB = getMaxBonemealToPut(_0x16255);
			document.getElementById("dialogue-wild-input").value = _0x164CB;
			$("#dialogue-wild-input").keyup()
		};
		break;
	case "iceBones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/iceBones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x15A21 = getBonemealTypeData()[3];
			if (_0x15A21 == "INF")
			{
				_0x15A21 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x15A21 + "</span>", "images/bonemeal.png", "iceBones", 1, ["bonemeal"], [3], ["iceBones"], [1], "Add", "ADD_BONEMEAL", "Ice bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds. The cold has preserved its calcium content.");
			var _0x164CB = getMaxBonemealToPut(_0x16255);
			document.getElementById("dialogue-wild-input").value = _0x164CB;
			$("#dialogue-wild-input").keyup()
		};
		break;
	case "needle":
		if (document.getElementById("item-box-needle").style.border == "3px solid orange")
		{
			document.getElementById("item-box-needle").style.border = "1px solid rgb(128, 212, 255)"
		}
		else
		{
			document.getElementById("item-box-needle").style.border = "3px solid orange";
			confirmDialogue("images/needle.png", "Select skin or fur armour you wish to turn back into its primary form.<br /><br /><span style=\'color:grey\'>Shortcut:  You may simply right click the armour to instantly use the needle.</span>", "Close", "", "")
		};
		break;
	case "fishBones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/bones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			if (getItem("fishBones") < 10)
			{
				confirmDialogue("images/fishBones.png", "You need at least 10 to get bonemeal out of these.", "Close", "", "");
				return
			};
			var _0x15A21 = getBonemealTypeData()[3];
			if (_0x15A21 == "INF")
			{
				_0x15A21 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x15A21 + "</span>", "images/bonemeal.png", "fishBones", 1, ["bonemeal"], [0.1], ["fishBones"], [1], "Add", "ADD_BONEMEAL", "Fishbones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.")
		};
		break;
	case "fightMonsterButton":
		if (getItem("monsterName", true) == "none")
		{
			navigate("right-combat-select")
		}
		else
		{
			navigate("right-combat-fighting")
		};
		break;
	case "specialBait":
		if (getItem("specialFish") > 0)
		{
			confirmDialogue("images/specialBait.png", "No point in using this, I already caught the special anguler fish!", "Close", "", "");
			return
		};
		if (getItem("specialBaitOn") == 1)
		{
			confirmDialogue("images/specialBait.png", "Stop fishing using special bait?", "Stop Fishing", "Nevermind", "STOP_SUPER_BAIT")
		}
		else
		{
			confirmDialogue("images/specialBait.png", "User special bait to fish?", "Use Super Bait", "Nevermind", "START_SUPER_BAIT")
		};
		break;
	case "oxygenTank":
		if (getItem("researcherFishing") >= 2)
		{
			if (getItem("oxygenTankTimer") == 1)
			{
				sendBytes("COLLECT_BOAT=oxygenTank")
			}
			else
			{
				if (getItem("oxygenTankTimer") > 1)
				{
					confirmDialogue("images/oxygenTank.png", "You\'re already exploring the deep ocean floors!", "Close", "", "");
					hideElement("notification-specialBaitOn")
				}
				else
				{
					confirmDialogue("images/oxygenTank.png", "Would you like to explore the ocean floors?<br /><br /><span style=\'color:grey\'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td>3 hours</td></tr><tr><td><img src=\'images/oxygenTank.png\' class=\'img-50\' /></td><td>" + formatNumber(getItem("oxygenTankTrips")) + " Trips completed</td></tr></table></center>", "Explore Ocean Floor", "Close", "SEND_BOAT=oxygenTank")
				}
			}
		}
		else
		{
			confirmDialogue("images/oxygenTank.png", "I\'m not sure how to use this yet.", "Close", "", "")
		};
		break;
	case "rowBoat":
		if (getItem(_0x16255 + "Timer") == 1)
		{
			sendBytes("COLLECT_BOAT=" + _0x16255)
		}
		else
		{
			if (getItem(_0x16255 + "Timer") > 1)
			{
				confirmDialogue("images/" + _0x16255 + ".png", "You\'re already out on a boat!", "Close", "", "")
			}
			else
			{
				confirmDialogue("images/" + _0x16255 + ".png", "Would you like to go fishing on your boat?<br /><br /><span style=\'color:grey\'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td>6 hours</td></tr><tr><td><img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x16255 + "Trips")) + " Trips completed</td></tr></table></center>", "Send Boat", "Close", "SEND_BOAT=" + _0x16255)
			}
		};
		break;
	case "canoeBoat":
		if (getItem(_0x16255 + "Timer") == 1)
		{
			sendBytes("COLLECT_BOAT=" + _0x16255)
		}
		else
		{
			if (getItem(_0x16255 + "Timer") > 1)
			{
				confirmDialogue("images/" + _0x16255 + ".png", "You\'re already out on a boat!", "Close", "", "")
			}
			else
			{
				confirmDialogue("images/" + _0x16255 + ".png", "Would you like to go fishing on your canoe?<br /><br /><span style=\'color:grey\'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td>10 hours</td></tr><tr><td><img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x16255 + "Trips")) + " Trips completed</td></tr></table></center>", "Send Boat", "Close", "SEND_BOAT=" + _0x16255)
			}
		};
		break;
	case "manaStars":
		navigate("right-manaStars");
		break;
	case "readMe":
		confirmDialogue("images/diamond.png", "Diamond Hunt 3 is a very slow paced game.  You will often find yourself unable to progress unless you wait.  These gaps of waiting will be filled over time as the game is updated.<br /><br />Also, even while you are logged off, your account will keep progressing for up to 8 hours.<br /><br />Thanks for playing!<br /><br /><b>Smitty</b>", "Close", "", "READ_ME");
		break;
	case "cooksBook1":
		navigate("right-cooksBook");
		break;
	case "telescopeLens":
		if (getItem("theTelescopeQuest") == 2)
		{
			confirmDialogue("images/telescopeLens.png", "I found the lens!  I should let the astronomer know.", "Close", "", "")
		}
		else
		{
			if (getItem("theTelescopeQuest") == 3)
			{
				confirmDialogue("images/telescopeLens.png", "I need to find a way to get the telescope lens in the telescope.<br /><br />Maybe I require some kind of tool where I can bang the lens in place.", "Close", "", "")
			}
		};
		break;
	case "telescopePart":
		confirmDialogue("images/telescopeLens.png", "I need to find a way to get the telescope lens in the telescope.<br /><br />Maybe I require some kind of tool where I can bang the lens in place.", "Close", "", "");
		break;
	case "telescope":
		confirmDialogue("images/telescope.png", "You look through the telescope...<br /><br />Nothing is visible! There is too much light pollution.", "Close", "", "");
		break;
	case "fightPvpButton":
		confirmDialogue("images/underConstruction.png", "This piece of content is currently under construction!", "Close", "", "");
		break;
	case "transformLog":
		navigate("right-transformLog");
		sendBytes("REFRESH_TRANSFORM_LOG");
		break;
	case "darkCrystal":
		confirmDialogue("images/darkCrystal.gif", "<i style=\'color:grey\'>You feel a sense of fear as the crystal continues to glow.</i><br /><br />Rub the glowing dark crystal?", "Touch Crystal", "Cancel", "RELEASE_FARADOX");
		break;
	case "cyanCrystal":
		confirmDialogue("images/cyanCrystal.png", "<i style=\'color:grey\'>You feel a sense of comfort near the sky crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=cyanCrystal");
		break;
	case "redCrystal":
		confirmDialogue("images/redCrystal.png", "<i style=\'color:grey\'>You feel a sense of comfort near the lava crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=redCrystal");
		break;
	case "blueCrystal":
		confirmDialogue("images/blueCrystal.png", "<i style=\'color:grey\'>You feel a sense of comfort near the ocean crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=blueCrystal");
		break;
	case "yellowCrystal":
		confirmDialogue("images/yellowCrystal.png", "<i style=\'color:grey\'>You feel a sense of comfort near the castle dungeon crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=yellowCrystal");
		break;
	case "puzzleChest1":
		navigate("right-puzzleChest1");
		break;
	case "combatPresetsIcon":
		clicksCombatPresets();
		break;
	case "miner":
		;
	case "drills":
		;
	case "crushers":
		;
	case "giantDrills":
		;
	case "excavators":
		if (_0x16255 == "miner" && getItem("letTheMiningBeginQuest") == 2 && getAllocationAmount(_0x16255) == 0)
		{
			if (getMinersOrMachineryAvailable("miner") == 0)
			{
				sendBytes("QUEST=letTheMiningBegin~0")
			}
			else
			{
				confirmDialogue("images/miner.gif", "Click on one of the ores which you have the level below.  Assign me to it.", "Close", "", "")
			}
		}
		else
		{
			clicksMiningResource(_0x16255)
		};
		break;
	case "carePackage1":
		confirmDialogue("images/carePackage1.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_1");
		break;
	case "carePackage2":
		confirmDialogue("images/carePackage2.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_2");
		break;
	case "carePackage3":
		confirmDialogue("images/carePackage3.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_3");
		break;
	case "carePackage4":
		confirmDialogue("images/carePackage4.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_4");
		break;
	case "researcher":
		navigate("right-researcher");
		break;
	case "donorCoins":
		openDialogue("dialogue-buyDonorCoins-gift-or-me");
		break;
	case "treeList":
		refreshTreeListTab();
		navigate("right-treeList");
		break;
	case "pirate":
		refreshBoundOrbs();
		navigate("right-pirate");
		break;
	case "combatLog":
		navigate("right-combatLog");
		sendBytes("REFRESH_COMBAT_LOG");
		break;
	case "lootBagLog":
		navigate("right-lootBagLog");
		sendBytes("REFRESH_LOOT_BAGS_LOG");
		break;
	case "explorer":
		if (getItem("explorerDialogue") == 1)
		{
			sendBytes("EXPLORER_DIALOGUE=4")
		}
		else
		{
			navigate("right-explorer")
		};
		break;
	case "seedList":
		refreshSeedListTab();
		navigate("right-seedList");
		break;
	case "diamond_verydark":
		;
	case "gemList2":
		refreshGemListTab();
		navigate("right-gemList");
		break;
	case "gemList3":
		refreshGemListTab();
		navigate("right-gemList");
		break;
	case "convertMagic":
		navigate("right-convertMagic");
		break;
	case "museum":
		refreshMuseum();
		navigate("right-museum");
		break;
	case "bob":
		if (getItem("bobsPanicQuest") != -1)
		{
			sendBytes("QUEST=bobsPanic~1")
		};
		break;
	case "snakeskin":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "bearFur":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "polarBearFur":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "blackSilk":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "batSkin":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "daggerBlade":
		;
	case "daggerHandle":
		navigate("right-crafting");
		switchCraftingType("offhandIronDagger");
		refreshCraftables();
		break;
	case "scytheBlade":
		navigate("right-crafting");
		switchCraftingType("offhandScythe");
		refreshCraftables();
		break;
	case "skeletonSwordMetal":
		navigate("right-crafting");
		switchCraftingType("boneAmuletPlus");
		refreshCraftables();
		break;
	case "bowBase":
		;
	case "magicString":
		navigate("right-crafting");
		switchCraftingType("bowBase");
		refreshCraftables();
		break
	}
}