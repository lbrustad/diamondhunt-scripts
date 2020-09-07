'use strict';

function clicksItem(id)
{
	if (id.endsWith("Seeds"))
	{
		clicksSeed(id);
		return;
	}
	if (id.endsWith("Museum"))
	{
		if (getItem(id) == 0)
		{
			sendBytes("MUSEUM_OFFER=" + id.substr(0, id.length - 6));
			return;
		}
	}
	if (id.startsWith("stardustBox"))
	{
		openInputDialogue("Open", "images/" + id + ".png", id, 1, ["stardust"], [0], [id], [1], "Open", "OPEN_STARDUST_BOX", "Contains a random amount of stardust.");
		return;
	}
	if (id.toLowerCase().endsWith("oilwell"))
	{
		sendBytes("CLICKS_OIL_WELL");
		return;
	}
	if (id.endsWith("StardustPrism"))
	{
		openInputDialogue("Open", "images/" + id + ".png", id, 1, ["stardust"], [0], [id], [1], "Break", "OPEN_STARDUST_PRISM", "Contains a random amount of stardust.");
		return;
	}
	if (id.toLowerCase().endsWith("geode"))
	{
		openInputDialogue("Open", "images/" + id + ".png", id, 1, ["questionMarkIcon"], [0], [id], [1], "Crack", "OPEN_GEODES", "Contains ore or a mineral.");
		return;
	}
	if (id.endsWith("ManaStar"))
	{
		confirmDialogue("images/" + id + ".png", "Absorb the star to increase maximum mana permanently?", "Absorb Mana Star", "Cancel", "MANA_STAR=" + id);
		return;
	}
	if (id != "oyster" && id != "specialOyster")
	{
		if (getItemPrice(id) > 0)
		{
			openInputDialogue("Sell", "images/" + id + ".png", id, 1, ["coins"], [getItemPrice(id)], [id], [1], "Sell", "SELL", "Sell this to the shop for some coins.");
		}
	}
	if (id.toLowerCase().endsWith("rake"))
	{
		openRakeDialogue();
	}
	if (id.startsWith("heartCrystal"))
	{
		confirmDialogue("images/" + id + ".png", "Break crystal and gain a permanent <img src='images/heartIcon.png' class='img-20' /> +5 health?", "Break Crystal", "Cancel", "HEART_CRYSTAL=" + id);
		return;
	}
	if (global_foodMap[id] != null)
	{
		if (id.startsWith("raw"))
		{
			if (getItem("cookingUnlocked") == 0)
			{
				confirmDialogue("images/cookingSkill.png", "You need to unlock the cooking skill for this action.<br /><br /><span style='color:grey'><b>Hint: </b> Cooking is unlocked after purchasing a bronze oven after upgrading the shop through crafting.", "Close", "", "");
			}
			else
			{
				if (getItem("cookingBoostPotionOn") == 1)
				{
					confirmDialogue("images/cookingBoostPotion.png", "You are about to use your cooking boost to cook one of this type of food.", "Cook", "Cancel", "COOK=" + id + "~1");
				}
				else
				{
					if (global_foodMap[id].cookLevel > getLevel(getItem("cookingXp")))
					{
						confirmDialogue("images/cookingSkill.png", "You need a level of " + global_foodMap[id].cookLevel + " to cook this.", "Close", "", "");
					}
					else
					{
						openInputDialogue("Cook", "images/" + id + ".png", id, 1, ["cookingSkill_xp"], [global_foodMap[id].xp], [id, "heat"], [1, global_foodMap[id].heat], "Cook", "COOK", "Cooking food allows it to be consumed afterwards for energy.  Remember to check your burn rate on your oven.");
					}
				}
			}
		}
		else
		{
			if (id == "redMushroom" && getItem("researcherFarming") == 0)
			{
				return;
			}
			openInputDialogue(getItemName(id.charAt(0).toUpperCase() + id.slice(1)) + "s", "images/" + id + ".png", id, 1, ["energy"], [global_foodMap[id].energy], [id], [1], "Consume", "CONSUME", "Food gives you energy for your hero.  Energy is required to begin a fight with a monster.");
		}
	}
	if (id.startsWith("blue") && id.endsWith("Orb"))
	{
		clicksBlueOrb(id);
		return;
	}
	if (global_equipmentMap[id] != null)
	{
		if (document.getElementById("item-box-needle").style.border == "3px solid orange")
		{
			if (id.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src='images/" + id + ".png' class='img-50' /> Use needle on this? <img src='images/" + id + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + id);
				return;
			}
			else
			{
				if (id.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src='images/" + id + ".png' class='img-50' /> Use needle on this? <img src='images/" + id + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + id);
					return;
				}
				else
				{
					if (id.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src='images/" + id + ".png' class='img-50' /> Use needle on this? <img src='images/" + id + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + id);
						return;
					}
					else
					{
						if (id.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src='images/" + id + ".png' class='img-50' /> Use needle on this? <img src='images/" + id + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + id);
							return;
						}
						else
						{
							if (id.startsWith("reaper"))
							{
								confirmDialogue("images/needle.png", "<img src='images/" + id + ".png' class='img-50' /> Use needle on this? <img src='images/" + id + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + id);
								return;
							}
						}
					}
				}
			}
		}
		sendBytes("EQUIP=" + id);
	}
	if (id.toLowerCase().endsWith("arrow"))
	{
		sendBytes("EQUIP=" + id);
		return;
	}
	if (id.endsWith("Potion") || id.endsWith("Potion1") || id.endsWith("Potion2"))
	{
		clicksPotion(id);
		return;
	}
	if (id.substr(0, id.length - 1).endsWith("Ring"))
	{
		confirmDialogue("images/" + id + ".png", "Ring are automatically equipped.<br /><br /><span style='color:grey'>Bonuses are stacked for each ring.</span>", "Close", "", "");
		return;
	}
	if (id.endsWith("Mould"))
	{
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		return;
	}
	if (id.endsWith("Furnace"))
	{
		if (isSmelting())
		{
			confirmDialogue("images/" + getBestFurnace() + "On.gif", "Your furnace is already running! Would you like to reset it?<br /><br /><b style='color:red'>Remaining ore and oil will be lost.</b>", "Reset Furnace", "Nevermind", "RESET_FURNACE");
		}
		else
		{
			if (getItem("letTheMiningBeginQuest") == 3)
			{
				sendBytes("QUEST=letTheMiningBegin~1");
			}
			else
			{
				openFurnaceDialogue(id);
			}
		}
	}
	if (global_museumItemsArray[id] != null)
	{
		sendBytes("CLICKS_MUSEUM_ITEM=" + id);
	}
	if (id.toLowerCase().endsWith("fishingnet"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openSmallFishingNetDialogue();
				closeDialogue("dialogue-swap-fishingTool");
			};
			if (getSmallFishingNetTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getSmallFishingNetTypeData()[2] + ".png";
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none";
			}
			openDialogue("dialogue-swap-fishingTool");
		}
		else
		{
			openSmallFishingNetDialogue();
		}
	}
	if (id.toLowerCase().endsWith("fishingrod"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openFishingRodDialogue();
				closeDialogue("dialogue-swap-fishingTool");
			};
			if (getFishingRodTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getFishingRodTypeData()[2] + ".png";
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none";
			}
			openDialogue("dialogue-swap-fishingTool");
		}
		else
		{
			openFishingRodDialogue();
		}
	}
	if (id.toLowerCase().endsWith("harpoon"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openHarpoonDialogue();
				closeDialogue("dialogue-swap-fishingTool");
			};
			if (getHarpoonTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getHarpoonTypeData()[2] + ".png";
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none";
			}
			openDialogue("dialogue-swap-fishingTool");
		}
		else
		{
			openHarpoonDialogue();
		}
	}
	if (id.toLowerCase().endsWith("shovel"))
	{
		openShovelDialogue();
	}
	if (id.toLowerCase().endsWith("axe") && !id.toLowerCase().endsWith("pickaxe"))
	{
		openAxeDialogue();
	}
	if (id.toLowerCase().endsWith("chainsaw"))
	{
		openChainsawDialogue();
	}
	if (id.toLowerCase().endsWith("trowel"))
	{
		openTrowelDialogue();
	}
	openChainsawDialogue;
	if (id.toLowerCase().endsWith("chisel"))
	{
		openChiselDialogue();
	}
	if (id.toLowerCase().endsWith("bonemealbin"))
	{
		bonemealBinDialgue();
	}
	if (id.toLowerCase().endsWith("brewingkit"))
	{
		openBrewingKitDialogue();
	}
	if (id.toLowerCase().endsWith("stardustpickaxe"))
	{
		openStardustToolDialogue("stardustPickaxe");
	}
	if (id.toLowerCase().endsWith("stardusthammer"))
	{
		if (getItem("telescopePart") == 1 && getItem("telescopeLens") == 1)
		{
			confirmDialogue("images/telescopeLens.png", "Use the hammer to put the telescope lens in place?", "Fix Telescope", "Cancel", "FIX_TELESCOPE");
		}
		else
		{
			openStardustToolDialogue("stardustHammer");
		}
	}
	if (id.endsWith("Oven"))
	{
		clicksOven();
	}
	if (id.startsWith("spellScroll"))
	{
		confirmDialogue("images/" + id + ".png", "Study the spell scroll?", "Learn", "Cancel", "LEARN_SPELL=" + id);
	}
	if (id == "houseBlueprint")
	{
		confirmDialogue("images/researcher.png", "You may only craft one of three houses.<br /><br />The house you craft will define your character.", "Close", "", "");
		switchCraftingType(id);
		refreshCraftables();
		return;
	}
	if (id.endsWith("LootBag"))
	{
		openInputDialogue("Loot Bag", "images/" + id + ".png", id, 1, ["questionMarkIcon"], [1], [id], [1], "Open", "OPEN_LOOTBAGS", "Loot bags contain basic items which are area specific.");
		return;
	}
	if (id.endsWith("Stew"))
	{
		confirmDialogue("images/" + id + ".png", "Drink the stew?", "Drink", "Cancel", "DRINK_CHEF_STEW=" + id);
		return;
	}
	if (id == "museumBlueprint")
	{
		switchCraftingType(id);
		refreshCraftables();
		return;
	}
	switch (id)
	{
	case "rowBoatBlueprints":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "canoeBoatBlueprints":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "greenSpices":
	case "blueSpices":
	case "greenSpices":
	case "yellowSpices":
		sendBytes("QUEST=theStewChef~0");
		break;
	case "charcoalFoundry":
		if (isUsingFoundry())
		{
			confirmDialogue("images/" + "charcoalFoundry.png", "Your foundry is already running! Would you like to reset it?<br /><br /><b style='color:red'>Remaining logs and oil will be lost.</b>", "Reset Foundry", "Nevermind", "RESET_FOUNDRY");
		}
		else
		{
			clicksCharcoalFoundry();
		}
		break;
	case "feather":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "fireFeather":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "iceFeather":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "stew":
		confirmDialogue("images/stew.png", "Drink the stew to reduce cooldown by 15 minutes?", "Drink", "Close", "DRINK_STEW");
		break;
	case "chef":
		if (getItem("chefCooldown") > 1)
		{
			confirmDialogue("images/chef.png", "I'm still trying to think of a stew recipe.  Come back later.", "Close", "", "");
		}
		else
		{
			if (ownsStew())
			{
				confirmDialogue("images/chef.png", "I'm offended, do you not enjoy the master piece we have created? Finish eating your stew if you want to make a new one!", "Close", "", "");
				return;
			}
			var sourceid_for_account = getItemString("chefRecipeItem1");
			var MAX_SYNC_START = getItemString("chefRecipeAmount1");
			var medianResidual = getItemString("chefRecipeItem2");
			var accuracy = getItemString("chefRecipeAmount2");
			var hqPercent = getItemString("chefRecipeItem3");
			var qualityPercent = getItemString("chefRecipeAmount3");
			var _a_ = "<img src='images/check.png' class='img-20' />";
			if (getItem(sourceid_for_account) < MAX_SYNC_START)
			{
				_a_ = "<img src='images/x.png' class='img-20' />";
			}
			var _b_ = "<img src='images/check.png' class='img-20' />";
			if (getItem(medianResidual) < accuracy)
			{
				_b_ = "<img src='images/x.png' class='img-20' />";
			}
			var _c_ = "<img src='images/check.png' class='img-20' />";
			if (getItem(hqPercent) < qualityPercent)
			{
				_c_ = "<img src='images/x.png' class='img-20' />";
			}
			if (getItem("researcherCooking") >= 4)
			{
				confirmDialogue2("images/chef.png", "I need some ingredients!  I'm trying to make a <b style='color:green'>" + getItemName(getItemString("chefStew")) + "</b><br /><br />Ingredients:<br /><br /><center><table width='70%' style='text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/" + sourceid_for_account + ".png' class='img-50' /></td><td>" + MAX_SYNC_START + " " + _a_ + "</td></tr><tr><td><img src='images/" + medianResidual
					+ ".png' class='img-50' /></td><td>" + accuracy + " " + _b_ + "</td></tr><tr><td><img src='images/" + hqPercent + ".png' class='img-50' /></td><td>" + qualityPercent + " " + _c_ + "</td></tr></table><br /><br /><table width='70%' style='text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/energy.png' class='img-50' /></td><td style='color:green'>" + formatNumber(getItem("stewEnergy")) + "</td></tr><tr><td><img src='images/hourglass.png' class='img-50' /></td><td style='color:green'>"
					+ formatTime(getItem("stewCooldownReduction")) + "</td></tr></table></center>", "Make Stew", "Skip this Stew", "Close", "MAKE_STEW", "SKIP_STEW");
			}
			else
			{
				confirmDialogue("images/chef.png", "I need some ingredients!  I'm trying to make a <b style='color:green'>" + getItemName(getItemString("chefStew")) + "</b><br /><br />Ingredients:<br /><br /><center><table width='70%' style='text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/" + sourceid_for_account + ".png' class='img-50' /></td><td>" + MAX_SYNC_START + " " + _a_ + "</td></tr><tr><td><img src='images/" + medianResidual
					+ ".png' class='img-50' /></td><td>" + accuracy + " " + _b_ + "</td></tr><tr><td><img src='images/" + hqPercent + ".png' class='img-50' /></td><td>" + qualityPercent + " " + _c_ + "</td></tr></table></center>", "Make Stew", "Close", "MAKE_STEW");
			}
		}
		break;
	case "darkCrystalUsed":
		confirmDialogue("images/faradox.png", "Faradox has been released into this world.<br /><br /><span style='color:grey'>We need to find and use all 7 crystals scattered around the world for it to gain its power back.</span>", "Close", "", "");
		break;
	case "planter":
		confirmDialogue("images/planter.png", "<b>Right click</b> a seed to automatically harvest all and replant.<br /><br /><b>Right click</b> this planter to only harvest all.", "Close", "", "");
		break;
	case "lumberJack":
		sendBytes("LUMBERJACK");
		break;
	case "chain":
	case "skeletonHead":
	case "skeletonLeftArm":
	case "skeletonRightArm":
	case "skeletonLeftLeg":
	case "skeletonRightLeg":
		navigate("right-crafting");
		switchCraftingType("cemeterySkeleton");
		refreshCraftables();
		break;
	case "smallSnowballs":
	case "mediumSnowball":
	case "largeSnowball":
	case "leftBranch":
	case "rightBranch":
		navigate("right-crafting");
		switchCraftingType("snowman");
		refreshCraftables();
		break;
	case "cemeterySkeletonShield1":
	case "cemeterySkeletonShield2":
	case "cemeterySkeletonShield3":
		navigate("right-crafting");
		switchCraftingType("cemeterySkeletonShield");
		refreshCraftables();
		break;
	case "stardust1000":
		sendBytes("OPEN_SD_PACKS");
		break;
	case "rocket":
		if (getItemString("rocketDestination") == "moon" && getItem("rocketKm") == 384000)
		{
			sendBytes("COLLECT_ROCKET=moon");
		}
		else
		{
			var _d_ = "<img src='images/x.png' class='img-20' />";
			if (getItem("oil") >= 100000)
			{
				_d_ = "<img src='images/check.png' class='img-20' />";
			}
			var th_field = "";
			if (getItem("titaniumRocketBoosters") > 0)
			{
				th_field = "<br /><table style='color:grey;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/titaniumRocketBoosters.png' class='img-30' /></td><td style='font-size:10pt;text-align:right;'>A notification will show up and can be clicked to activate the boosters. <u style='cursor:pointer;' onclick='titaniumRocketBoostersMoreInfo()'>(more info)</u></td></tr></table>";
			}
			confirmDialogue(getRocketImage(), "Would you like to go to the moon?<br /><br /><span style='color:grey'>Requires <img src='images/oil.png' class='img-20' /> 100,000 oil " + _d_ + "</span><br /><br /><center><table style='color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/moon.png' class='img-50' /></td><td>384,000 km</td></tr><tr><td><img src='images/" + id + ".png' class='img-50' /></td><td>" + formatNumber(getItem(id + "Trips"))
				+ " Trips completed</td></tr></table></center>" + th_field, "Launch Rocket", "Close", "LAUNCH_ROCKET=moon");
		}
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
			return;
		}
		if (getItem("mommyTheSpiderQuest") == 2)
		{
			confirmDialogue("images/vial.png", "Would you like to hold this as a weapon?", "Hold Vial", "Cancel", "HOLD_VIAL");
		}
		break;
	case "largeVial":
		if (getItem("mommyTheSpiderQuest") == 2)
		{
			if (getItem("poisonCombatVial") > 0 || getItemString("weapon") == "posionCombatVial" || getItemString("weapon") == "combatVial" || getItem("combatVial") > 0)
			{
				return;
			}
			confirmDialogue("images/largeVial.png", "Try a smaller vial if you wish to hold poison.", "Close", "", "");
		}
		break;
	case "treasureMap":
		sendBytes("CLICKS_TREASURE_MAP");
		break;
	case "treasureChest":
		openDialogue("dialogue-treasureChest");
		break;
	case "bones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/bones.png", "Hmm, wonder what I can do with these.", "Close", "", "");
		}
		else
		{
			var value = getBonemealTypeData()[3];
			if (value == "INF")
			{
				value = "&#8734;";
			}
			openInputDialogue("Bonemeal<br /><span style='color:grey;font-size:10pt;'>Currently stored: " + getItem("bonemeal") + "/" + value + "</span>", "images/bonemeal.png", "bones", 1, ["bonemeal"], [1], ["bones"], [1], "Add", "ADD_BONEMEAL", "Bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
			var data_phone_number = getMaxBonemealToPut(id);
			document.getElementById("dialogue-wild-input").value = data_phone_number;
			$("#dialogue-wild-input").keyup();
		}
		break;
	case "ashes":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/ashes.png", "Hmm, wonder what I can do with these.", "Close", "", "");
		}
		else
		{
			value = getBonemealTypeData()[3];
			if (value == "INF")
			{
				value = "&#8734;";
			}
			openInputDialogue("Bonemeal<br /><span style='color:grey;font-size:10pt;'>Currently stored: " + getItem("bonemeal") + "/" + value + "</span>", "images/bonemeal.png", "ashes", 1, ["bonemeal"], [2], ["ashes"], [1], "Add", "ADD_BONEMEAL", "Ashes can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
			data_phone_number = getMaxBonemealToPut(id);
			document.getElementById("dialogue-wild-input").value = data_phone_number;
			$("#dialogue-wild-input").keyup();
		}
		break;
	case "iceBones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/iceBones.png", "Hmm, wonder what I can do with these.", "Close", "", "");
		}
		else
		{
			value = getBonemealTypeData()[3];
			if (value == "INF")
			{
				value = "&#8734;";
			}
			openInputDialogue("Bonemeal<br /><span style='color:grey;font-size:10pt;'>Currently stored: " + getItem("bonemeal") + "/" + value + "</span>", "images/bonemeal.png", "iceBones", 1, ["bonemeal"], [3], ["iceBones"], [1], "Add", "ADD_BONEMEAL", "Ice bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds. The cold has preserved its calcium content.");
			data_phone_number = getMaxBonemealToPut(id);
			document.getElementById("dialogue-wild-input").value = data_phone_number;
			$("#dialogue-wild-input").keyup();
		}
		break;
	case "needle":
		if (document.getElementById("item-box-needle").style.border == "3px solid orange")
		{
			document.getElementById("item-box-needle").style.border = "1px solid rgb(128, 212, 255)";
		}
		else
		{
			document.getElementById("item-box-needle").style.border = "3px solid orange";
			confirmDialogue("images/needle.png", "Select skin or fur armour you wish to turn back into its primary form.<br /><br /><span style='color:grey'>Shortcut:  You may simply right click the armour to instantly use the needle.</span>", "Close", "", "");
		}
		break;
	case "fishBones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/bones.png", "Hmm, wonder what I can do with these.", "Close", "", "");
		}
		else
		{
			if (getItem("fishBones") < 10)
			{
				confirmDialogue("images/fishBones.png", "You need at least 10 to get bonemeal out of these.", "Close", "", "");
				return;
			}
			value = getBonemealTypeData()[3];
			if (value == "INF")
			{
				value = "&#8734;";
			}
			openInputDialogue("Bonemeal<br /><span style='color:grey;font-size:10pt;'>Currently stored: " + getItem("bonemeal") + "/" + value + "</span>", "images/bonemeal.png", "fishBones", 1, ["bonemeal"], [0.1], ["fishBones"], [1], "Add", "ADD_BONEMEAL", "Fishbones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
		}
		break;
	case "fightMonsterButton":
		if (getItem("monsterName", true) == "none")
		{
			navigate("right-combat-select");
		}
		else
		{
			navigate("right-combat-fighting");
		}
		break;
	case "specialBait":
		if (getItem("specialFish") > 0)
		{
			confirmDialogue("images/specialBait.png", "No point in using this, I already caught the special anguler fish!", "Close", "", "");
			return;
		}
		if (getItem("specialBaitOn") == 1)
		{
			confirmDialogue("images/specialBait.png", "Stop fishing using special bait?", "Stop Fishing", "Nevermind", "STOP_SUPER_BAIT");
		}
		else
		{
			confirmDialogue("images/specialBait.png", "User special bait to fish?", "Use Super Bait", "Nevermind", "START_SUPER_BAIT");
		}
		break;
	case "oxygenTank":
		if (getItem("researcherFishing") >= 2)
		{
			if (getItem("oxygenTankTimer") == 1)
			{
				sendBytes("COLLECT_BOAT=oxygenTank");
			}
			else
			{
				if (getItem("oxygenTankTimer") > 1)
				{
					confirmDialogue("images/oxygenTank.png", "You're already exploring the deep ocean floors!", "Close", "", "");
					hideElement("notification-specialBaitOn");
				}
				else
				{
					confirmDialogue("images/oxygenTank.png", "Would you like to explore the ocean floors?<br /><br /><span style='color:grey'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style='color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/hourglass.png' class='img-50' /></td><td>3 hours</td></tr><tr><td><img src='images/oxygenTank.png' class='img-50' /></td><td>" + formatNumber(getItem("oxygenTankTrips"))
						+ " Trips completed</td></tr></table></center>", "Explore Ocean Floor", "Close", "SEND_BOAT=oxygenTank");
				}
			}
		}
		else
		{
			confirmDialogue("images/oxygenTank.png", "I'm not sure how to use this yet.", "Close", "", "");
		}
		break;
	case "rowBoat":
		if (getItem(id + "Timer") == 1)
		{
			sendBytes("COLLECT_BOAT=" + id);
		}
		else
		{
			if (getItem(id + "Timer") > 1)
			{
				confirmDialogue("images/" + id + ".png", "You're already out on a boat!", "Close", "", "");
			}
			else
			{
				confirmDialogue("images/" + id + ".png", "Would you like to go fishing on your boat?<br /><br /><span style='color:grey'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style='color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/hourglass.png' class='img-50' /></td><td>6 hours</td></tr><tr><td><img src='images/" + id + ".png' class='img-50' /></td><td>" + formatNumber(getItem(id + "Trips")) + " Trips completed</td></tr></table></center>"
					, "Send Boat", "Close", "SEND_BOAT=" + id);
			}
		}
		break;
	case "canoeBoat":
		if (getItem(id + "Timer") == 1)
		{
			sendBytes("COLLECT_BOAT=" + id);
		}
		else
		{
			if (getItem(id + "Timer") > 1)
			{
				confirmDialogue("images/" + id + ".png", "You're already out on a boat!", "Close", "", "");
			}
			else
			{
				confirmDialogue("images/" + id + ".png", "Would you like to go fishing on your canoe?<br /><br /><span style='color:grey'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style='color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/hourglass.png' class='img-50' /></td><td>10 hours</td></tr><tr><td><img src='images/" + id + ".png' class='img-50' /></td><td>" + formatNumber(getItem(id + "Trips"))
					+ " Trips completed</td></tr></table></center>", "Send Boat", "Close", "SEND_BOAT=" + id);
			}
		}
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
			confirmDialogue("images/telescopeLens.png", "I found the lens!  I should let the astronomer know.", "Close", "", "");
		}
		else
		{
			if (getItem("theTelescopeQuest") == 3)
			{
				confirmDialogue("images/telescopeLens.png", "I need to find a way to get the telescope lens in the telescope.<br /><br />Maybe I require some kind of tool where I can bang the lens in place.", "Close", "", "");
			}
		}
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
		confirmDialogue("images/darkCrystal.gif", "<i style='color:grey'>You feel a sense of fear as the crystal continues to glow.</i><br /><br />Rub the glowing dark crystal?", "Touch Crystal", "Cancel", "RELEASE_FARADOX");
		break;
	case "cyanCrystal":
		confirmDialogue("images/cyanCrystal.png", "<i style='color:grey'>You feel a sense of comfort near the sky crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=cyanCrystal");
		break;
	case "redCrystal":
		confirmDialogue("images/redCrystal.png", "<i style='color:grey'>You feel a sense of comfort near the lava crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=redCrystal");
		break;
	case "blueCrystal":
		confirmDialogue("images/blueCrystal.png", "<i style='color:grey'>You feel a sense of comfort near the ocean crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=blueCrystal");
		break;
	case "puzzleChest1":
		navigate("right-puzzleChest1");
		break;
	case "combatPresetsIcon":
		clicksCombatPresets();
		break;
	case "miner":
	case "drills":
	case "crushers":
	case "giantDrills":
	case "excavators":
		if (id == "miner" && getItem("letTheMiningBeginQuest") == 2 && getAllocationAmount(id) == 0)
		{
			if (getMinersOrMachineryAvailable("miner") == 0)
			{
				sendBytes("QUEST=letTheMiningBegin~0");
			}
			else
			{
				confirmDialogue("images/miner.gif", "Click on one of the ores which you have the level below.  Assign me to it.", "Close", "", "");
			}
		}
		else
		{
			clicksMiningResource(id);
		}
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
			sendBytes("EXPLORER_DIALOGUE=4");
		}
		else
		{
			navigate("right-explorer");
		}
		break;
	case "seedList":
		refreshSeedListTab();
		navigate("right-seedList");
		break;
	case "diamond_verydark":
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
			sendBytes("QUEST=bobsPanic~1");
		}
		break;
	case "snakeskin":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "bearFur":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "polarBearFur":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "blackSilk":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "batSkin":
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	case "daggerBlade":
	case "daggerHandle":
		navigate("right-crafting");
		switchCraftingType("offhandIronDagger");
		refreshCraftables();
		break;
	case "skeletonSwordMetal":
		navigate("right-crafting");
		switchCraftingType("boneAmuletPlus");
		refreshCraftables();
		break;
	case "bowBase":
	case "magicString":
		navigate("right-crafting");
		switchCraftingType("bowBase");
		refreshCraftables();
		break;
	}
};
