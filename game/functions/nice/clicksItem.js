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
	if (id.endsWith("StardustPrism"))
	{
		openInputDialogue("Open", "images/" + id + ".png", id, 1, ["stardust"], [0], [id], [1], "Break", "OPEN_STARDUST_PRISM", "Contains a random amount of stardust.");
		return;
	}
	if (id.endsWith("ManaStar"))
	{
		confirmDialogue("images/" + id + ".png", "Absorb the star to increase maximum mana permanently?", "Absorb Mana Star", "Cancel", "MANA_STAR=" + id);
		return;
	}
	if (getItemPrice(id) > 0 && id != "oyster")
	{
		openInputDialogue("Sell", "images/" + id + ".png", id, 1, ["coins"], [getItemPrice(id)], [id], [1], "Sell", "SELL", "Sell this to the shop for some coins.");
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
	if (id.endsWith("Potion"))
	{
		clicksPotion(id);
		return;
	}
	if (id.endsWith("Mould"))
	{
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
	if (id == "museumBlueprint")
	{
		switchCraftingType(id);
		refreshCraftables();
		return;
	}
	switch (id)
	{
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
	case "oyster":
		openDialogue("dialogue-oysterOptions");
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
					confirmDialogue("images/oxygenTank.png", "Your already exploring the deep ocean floors!", "Close", "", "SEND_BOAT=oxygenTank");
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
		confirmDialogue("images/telescope.png", "There is too much light pollution.", "Close", "", "");
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
	case "puzzleChest1":
		navigate("right-puzzleChest1");
		break;
	case "combatPresetsIcon":
		clicksCombatPresets();
		break;
	case "miner":
	case "drills":
	case "crushers":
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
	case "combatLog":
		navigate("right-combatLog");
		sendBytes("REFRESH_COMBAT_LOG");
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
		navigate("right-crafting");
		switchCraftingType(id);
		refreshCraftables();
		break;
	}
};
