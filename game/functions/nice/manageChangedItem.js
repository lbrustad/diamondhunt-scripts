'use strict';

function manageChangedItem(type)
{
	var text = getItem(type, false);
	if (type.endsWith("Allocation0") || type.endsWith("Allocation1") || type.endsWith("Allocation2") || type.endsWith("Allocation3") || type.endsWith("Allocation4"))
	{
		refreshMiningAllocationIcons();
	}
	if (text == -1)
	{
		if (type.endsWith("Quest"))
		{
			loadQuestAndAchievementsTab();
		}
	}
	if (type.endsWith("Quest"))
	{
		var txtCountVal = getQuestsInProgress();
		if (txtCountVal > 0)
		{
			document.getElementById("notification-questsStarted-label").innerHTML = "In Progress: " + txtCountVal;
			document.getElementById("notification-questsStarted").style.display = "";
		}
		else
		{
			document.getElementById("notification-questsStarted").style.display = "none";
		}
		if (type == "theFrozenBarbarianQuest")
		{
			if (text == 1)
			{
				showElement("frozenBarbarianMap");
			}
			else
			{
				hideElement("frozenBarbarianMap");
			}
		}
	}
	if (type.toLowerCase().endsWith("lootbag"))
	{
		if (document.getElementById("explorer" + "-status") != null)
		{
			document.getElementById("explorer" + "-status").innerHTML = formatNumber(getTotalLootBagsOwned());
		}
	}
	if (type.startsWith("heroDebuff"))
	{
		resetHeroNerfs();
	}
	if (type.endsWith("Cooldown"))
	{
		if (global_lastTabId == "right-combat-fighting")
		{
			refeshMagicInCombat();
		}
	}
	if (type.endsWith("Museum"))
	{
		refreshMuseum();
		if (document.getElementById("museum-info-itembox") != null)
		{
			document.getElementById("museum-info-itembox").innerHTML = getMuseumItemsCount()[0] + "/" + getMuseumItemsCount()[1];
		}
	}
	initializeTooltips;
	if (type.endsWith("Oven") || type == "researcherCooking")
	{
		initializeTooltips();
	}
	if (type.endsWith("Seeds"))
	{
		if (text == 0)
		{
			selectedSeed = "none";
		}
	}
	if (type.endsWith("PotionTimer"))
	{
		if (text > 0)
		{
			showElement("notification-" + type);
			if (document.getElementById("notification" + "-" + type) != null)
			{
				document.getElementById("notification" + "-" + type).setAttribute("onclick", "clicksItem('" + type.substr(0, type.length - 5) + "')");
			}
		}
		else
		{
			hideElement("notification-" + type);
		}
	}
	if (type.endsWith("Bought"))
	{
		loadShopTab();
	}
	if (type.endsWith("Xp"))
	{
		refreshTopSkillBar();
	}
	if (type.startsWith("researcher"))
	{
		if (document.getElementById("research-completed-label") != null)
		{
			document.getElementById("research-completed-label").innerHTML = getTotalResearches();
		}
		refreshResearching();
	}
	if (type.endsWith("Kills"))
	{
		initializeTooltips();
	}
	if (type.toLowerCase().endsWith("fishingnet") || type.toLowerCase().endsWith("harpoon") || type.toLowerCase().endsWith("fishingrod"))
	{
		initializeTooltips();
	}
	switch (type)
	{
	case "wrench":
		if (text > 0)
		{
			if (document.getElementById("wrench-icon-miner") != null)
			{
				document.getElementById("wrench-icon-miner").style.display = "";
			}
		}
		break;
	case "chefCooldown":
		if (document.getElementById("chef" + "-itemBox-value") != null)
		{
			if (text <= 1)
			{
				document.getElementById("chef" + "-itemBox-value").innerHTML = "Ready";
			}
			else
			{
				document.getElementById("chef" + "-itemBox-value").innerHTML = formatTime(text);
			}
		}
		if (text == 0 && getItem("theStewChefQuest") == -1)
		{
			showElement("notification-chefStew");
		}
		else
		{
			hideElement("notification-chefStew");
		}
		break;
	case "piratesParrot":
		if (text > 0 && document.getElementById("item-box-pirate-image") != null)
		{
			document.getElementById("item-box-pirate-image").src = "images/pirate2.png";
		}
		break;
	case "spyglass":
		if (document.getElementById("item-box-data-pirate") != null)
		{
			if (getItem("spyglass") > 0)
			{
				document.getElementById("item-box-data-pirate").style.display = "block";
			}
		}
		break;
	case "oxygenTankTimer":
	case "rowBoatTimer":
	case "canoeBoatTimer":
		var htmlElId = type.substring(0, type.length - 5);
		if (text > 1)
		{
			showElement("notification-" + type);
			if (document.getElementById(htmlElId + "-itemBox-value") != null)
			{
				document.getElementById(htmlElId + "-itemBox-value").innerHTML = formatTime(text);
			}
			hideElement("notification-" + type + "-Ready");
		}
		else
		{
			hideElement("notification-" + type);
			if (text == 1)
			{
				if (document.getElementById(htmlElId + "-itemBox-value") != null)
				{
					document.getElementById(htmlElId + "-itemBox-value").innerHTML = "Ready";
				}
				showElement("notification-" + type + "-Ready");
			}
			else
			{
				if (document.getElementById(htmlElId + "-itemBox-value") != null)
				{
					document.getElementById(htmlElId + "-itemBox-value").innerHTML = "";
				}
				hideElement("notification-" + type + "-Ready");
			}
		}
		break;
	case "dungeonSignsSolved":
		if (text > 0)
		{
			document.getElementById("dungeonNotes-combat").style.display = "";
		}
		break;
	case "shinyMonster":
		if (text == 1)
		{
			showElement("shiny-monster-gif");
		}
		else
		{
			hideElement("shiny-monster-gif");
		}
		break;
	case "blueFurnaceOrbBound":
		if (text > 0)
		{
			showElement("blueFurnaceOrb-tooltip-furnace");
		}
		break;
	case "specialBaitOn":
		if (getItem("specialBaitOn") == 1)
		{
			showElement("notification-specialBaitOn");
		}
		else
		{
			hideElement("notification-specialBaitOn");
		}
		break;
	case "greenShinyMonsterOrbBound":
	case "greenShinyMonsterOrbBoundTimer":
		var name = "greenShinyMonsterOrbBound";
		if (getItem(name) > 0)
		{
			if (getItem(name + "Timer") == 0)
			{
				showElement("notification-" + name);
				hideElement("notification-" + name + "Timer");
			}
			else
			{
				hideElement("notification-" + name);
				showElement("notification-" + name + "Timer");
			}
		}
		break;
	case "theTraitorQuest":
		if (getItem("theTraitorQuest") == -1)
		{
			if (document.getElementById("castle-traitor") != null)
			{
				document.getElementById("castle-traitor").style.display = "none";
			}
		}
		if (getItem("theTraitorQuest") >= 2)
		{
			if (document.getElementById("castle-traitor") != null)
			{
				document.getElementById("castle-traitor").style.display = "none";
			}
		}
		if (getItem("theTraitorQuest") == 4)
		{
			if (document.getElementById("castle-traitor1") != null)
			{
				document.getElementById("castle-traitor1").style.display = "";
			}
		}
		else
		{
			document.getElementById("castle-traitor1").style.display = "none";
		}
		if (getItem("theTraitorQuest") == 5)
		{
			if (document.getElementById("castle-traitor2") != null)
			{
				document.getElementById("castle-traitor2").style.display = "";
			}
		}
		else
		{
			document.getElementById("castle-traitor2").style.display = "none";
		}
		if (getItem("theTraitorQuest") == 6 || getItem("theTraitorQuest") == 7)
		{
			if (document.getElementById("castle-traitor3") != null)
			{
				document.getElementById("castle-traitor3").style.display = "";
			}
		}
		else
		{
			document.getElementById("castle-traitor3").style.display = "none";
		}
		break;
	case "greenShinyWoodcuttingOrbBound":
	case "greenShinyWoodcuttingOrbBoundTimer":
		name = "greenShinyWoodcuttingOrbBound";
		if (getItem(name) > 0)
		{
			if (getItem(name + "Timer") == 0)
			{
				showElement("notification-" + name);
				hideElement("notification-" + name + "Timer");
			}
			else
			{
				hideElement("notification-" + name);
				showElement("notification-" + name + "Timer");
			}
		}
		break;
	case "greenShinyFarmingOrbBound":
	case "greenShinyFarmingOrbBoundTimer":
		name = "greenShinyFarmingOrbBound";
		if (getItem(name) > 0)
		{
			if (getItem(name + "Timer") == 0)
			{
				showElement("notification-" + name);
				hideElement("notification-" + name + "Timer");
			}
			else
			{
				hideElement("notification-" + name);
				showElement("notification-" + name + "Timer");
			}
		}
		break;
	case "watchSeed":
	case "watchAt":
	case "watch":
	case "sapphireWatch":
	case "emeraldWatch":
	case "rubyWatch":
	case "diamondWatch":
		var optionMatch = getWatchTypeData();
		if (optionMatch == null)
		{
			return;
		}
		var pluginName = optionMatch[0];
		var _viewContentAlign = getItemString("watchSeed");
		if (_viewContentAlign == "none")
		{
			if (document.getElementById(pluginName + "-status") != null)
			{
				document.getElementById(pluginName + "-status").innerHTML = "Not Set";
			}
		}
		else
		{
			if (document.getElementById(pluginName + "-status") != null)
			{
				document.getElementById(pluginName + "-status").innerHTML = "<img src='images/" + _viewContentAlign + ".png' class='img-20' /> " + getItem("watchAt") + "/" + getItem("watchLimit");
			}
		}
		break;
	case "plotShiny1":
	case "plotShiny2":
	case "plotShiny3":
	case "plotShiny4":
	case "plotShiny5":
	case "plotShiny6":
		var s = type.substr(9);
		if (text > 0)
		{
			showElement("plot-section-shiny-" + s);
		}
		else
		{
			hideElement("plot-section-shiny-" + s);
		}
		break;
	case "repelMonster":
		if (text == "none")
		{
			hideElement("notification-repelNotification");
		}
		else
		{
			document.getElementById("repelNotification-monsterImg").src = "images/" + text + "_monster_idle_0.png";
			showElement("notification-repelNotification");
		}
		break;
	case "teleportCooldown":
		if (text > 0)
		{
			showElement("teleport-spell-cd-notif");
		}
		else
		{
			hideElement("teleport-spell-cd-notif");
		}
		break;
	case "questPoints":
		loadQuestAndAchievementsTab();
		break;
	case "treasureMap":
	case "greenTreasureMap":
	case "redTreasureMap":
		if (text > 0)
		{
			showElement("notification-treasureMapReady");
		}
		else
		{
			hideElement("notification-treasureMapReady");
		}
		break;
	case "researcherMagic":
		if (text >= 3)
		{
			showElement("item-box-convertMagic");
		}
		break;
	case "hardcoreId":
		if (text > 0)
		{
			document.getElementById("hardcore-icon-top-left").style.display = "";
		}
		else
		{
			document.getElementById("hardcore-icon-top-left").style.display = "none";
		}
		break;
	case "combatTut":
		if (text == 3)
		{
			showElement("notification-hint");
		}
		else
		{
			hideElement("notification-hint");
		}
		if (text >= 2)
		{
			document.getElementById("fighting-screen-magic-area").style.display = "none";
			document.getElementById("combat-spell-heal").style.display = "none";
			document.getElementById("combat-spell-fire").style.display = "none";
			document.getElementById("combat-spell-ghostScan").style.display = "none";
			document.getElementById("combat-spell-invisibility").style.display = "none";
			document.getElementById("hero-outer-mana-bar").style.display = "none";
			document.getElementById("hero-mana-display").style.display = "none";
		}
		break;
	case "largeManaPotionUsed":
		refreshPotionsCombat();
		break;
	case "titaniumRocketBoosters":
		if (document.getElementById("item-box-rocket-image") != null)
		{
			document.getElementById("item-box-rocket-image").src = "images/titaniumRocket.png";
		}
		break;
	case "energyRing1":
	case "energyRing2":
	case "energyRing3":
	case "energyRing4":
	case "cooldownRing1":
	case "cooldownRing2":
	case "cooldownRing3":
	case "cooldownRing4":
		initializeTooltips();
		break;
	case "oilIn":
	case "oilOut":
		showElement("span-oil-in-out-label");
		break;
	case "heroCooldown":
		if (getItem("heroCooldown") > 0)
		{
			if (document.getElementById("td-hero-cooldown").innerHTML == "")
			{
				var img = getImage("images/hourglass.png", "cd_hourglass_hero");
				img.setAttribute("class", "img-30");
				document.getElementById("td-hero-cooldown").append(img);
				var btn_subsidy = document.createElement("item-heroCooldown");
				btn_subsidy.setAttribute("type", "timer");
				document.getElementById("td-hero-cooldown").append(btn_subsidy);
			}
			showElement("notification-heroCooldownNotification");
		}
		else
		{
			if (document.getElementById("td-hero-cooldown").innerHTML != "")
			{
				document.getElementById("td-hero-cooldown").innerHTML = "";
			}
			hideElement("notification-heroCooldownNotification");
		}
		if (getItem("heroCooldownResetTimer") == 0)
		{
			if (getItem("heroCooldown") > 0 && getItem("researcherCombat") >= 2)
			{
				showElement("reset-combat-icon");
			}
			if (document.getElementById("reset-combat-icon-timer") != null)
			{
				document.getElementById("reset-combat-icon-timer").innerHTML = "(Ready)";
			}
		}
		break;
	case "snakeKills":
	case "stardustCombatMapFound":
		if (getItem("snakeKills") > 0 && getItem("stardustCombatMapFound") == 0)
		{
			document.getElementById("stardustCombatMapFound-combat").style.display = "";
		}
		else
		{
			document.getElementById("stardustCombatMapFound-combat").style.display = "none";
		}
		break;
	case "heroCooldownResetTimer":
	case "researcherCombat":
		if (getItem("researcherCombat") >= 2)
		{
			if (getItem("heroCooldownResetTimer") == 0)
			{
				if (getItem("heroCooldown") > 0)
				{
					showElement("reset-combat-icon");
				}
				document.getElementById("reset-combat-icon-timer").innerHTML = "(Ready)";
			}
			else
			{
				hideElement("reset-combat-icon");
				document.getElementById("reset-combat-icon-timer").innerHTML = "(" + formatTime(getItem("heroCooldownResetTimer")) + ")";
			}
		}
		break;
	case "boundDonorCoins":
		refreshDonorTable();
		loadDonorShopTab();
		break;
	case "lastCombatMap":
		if (text > 0)
		{
			changeCombatMap(text);
		}
		break;
	case "fireFeatherSpawn":
		if (text > 0)
		{
			showElement("fireFeatherSpawn-" + text);
			showElement("notification-fireFeatherSpawnReady");
		}
		else
		{
			hideElement("fireFeatherSpawn-1");
			hideElement("notification-fireFeatherSpawnReady");
		}
		break;
	case "iceFeatherSpawn":
		if (text > 0)
		{
			showElement("iceFeatherSpawn-" + text);
			showElement("notification-iceFeatherSpawnReady");
		}
		else
		{
			hideElement("iceFeatherSpawn-1");
			hideElement("notification-iceFeatherSpawnReady");
		}
		break;
	case "chatIcon":
		refreshSigilsDialoguesIcons();
		break;
	case "rocketMap":
		document.getElementById("img-rocket-map").src = "images/rocketMap" + getItem(type) + ".png";
		break;
	case "updateLogNotification":
		if (text > 0)
		{
			document.getElementById("new-updates-gif").style.display = "";
		}
		else
		{
			document.getElementById("new-updates-gif").style.display = "none";
		}
		break;
	case "giantSnakeTimer":
		if (text > 0)
		{
			showElement("notification-" + type);
		}
		else
		{
			hideElement("notification-" + type);
		}
		break;
	case "heroReadyNotification":
	case "woodcuttingReadyNotification":
	case "farmingReadyNotification":
	case "updateTimer":
		if (text > 0)
		{
			showElement("notification-" + type);
		}
		else
		{
			hideElement("notification-" + type);
		}
		break;
	case "castleCooldown":
		if (getItem("speechKing") > 0)
		{
			if (text > 0)
			{
				showElement("notification-castleCooldown");
				hideElement("notification-castleReady");
			}
			else
			{
				hideElement("notification-castleCooldown");
				showElement("notification-castleReady");
			}
		}
		break;
	case "cooksBookTimer":
		if (getItem(type) > 1)
		{
			showElement("notification-cooksBookTimer");
		}
		else
		{
			if (getItem(type) == 1)
			{
				hideElement("notification-cooksBookTimer");
				showElement("notification-cooksBookReady");
			}
			else
			{
				if (getItem(type) == 0)
				{
					hideElement("notification-cooksBookReady");
					hideElement("notification-cooksBookTimer");
				}
			}
		}
		break;
	case "titaniumRocketBoostersAvailable":
		if (text > 0)
		{
			showElement("notification-rocketBoost");
		}
		else
		{
			hideElement("notification-rocketBoost");
		}
		break;
	case "robotTimer":
		if (text > 1)
		{
			setInnerHTML("notification-robot-value", formatTime(text));
			showElement("notification-robot");
		}
		else
		{
			if (text == 1)
			{
				setInnerHTML("notification-robot-value", "Ready");
				showElement("notification-robot");
			}
			else
			{
				hideElement("notification-robot");
			}
		}
		break;
	case "rocketKm":
		if (getItem(type) == 0)
		{
			hideElement("notification-rocket");
			setInnerHTML("itemBox-rocket-amount", "");
			if (getItem("rocket") > 0)
			{
				showElement("notification-rocketReady");
			}
		}
		else
		{
			hideElement("notification-rocketReady");
			if (getItemString("rocketDestination") == "moon" && getItem(type) == 384000 || getItemString("rocketDestination") == "mars" && getItem(type) == 54000000)
			{
				if (document.getElementById("itemBox-rocket-amount") != null)
				{
					document.getElementById("itemBox-rocket-amount").innerHTML = "LANDED";
					document.getElementById("notification-rocket-value").innerHTML = "LANDED";
					document.getElementById("notification-rocket-running").style.display = "none";
					document.getElementById("notification-rocket-landed").style.display = "";
					document.getElementById("notification-rocket-returning").style.display = "none";
				}
			}
			else
			{
				if (document.getElementById("itemBox-rocket-amount") != null)
				{
					if (getItem("rocketStatus") == 3)
					{
						document.getElementById("itemBox-rocket-amount").innerHTML = formatNumber(getItem(type)) + " KM";
						document.getElementById("notification-rocket-value").innerHTML = formatNumber(getItem(type)) + " KM";
						document.getElementById("notification-rocket-running").style.display = "none";
						document.getElementById("notification-rocket-landed").style.display = "none";
						document.getElementById("notification-rocket-returning").style.display = "";
					}
					else
					{
						document.getElementById("itemBox-rocket-amount").innerHTML = formatNumber(getItem(type)) + " KM";
						document.getElementById("notification-rocket-value").innerHTML = formatNumber(getItem(type)) + " KM";
						document.getElementById("notification-rocket-running").style.display = "";
						document.getElementById("notification-rocket-landed").style.display = "none";
						document.getElementById("notification-rocket-returning").style.display = "none";
					}
				}
			}
			showElement("notification-rocket");
		}
		break;
	case "cyanCrystalUsed":
	case "greenCrystalUsed":
	case "redCrystalUsed":
	case "blueCrystalUsed":
	case "yellowCrystalUsed":
		refreshDarkCrystalUsedLabel();
		refreshFaradoxDarkCrystalTooltip();
		break;
	case "researcherTimer":
		if (text == 1)
		{
			document.getElementById("researcher-status-label").innerHTML = "<img src='images/" + getItemString("researcherSkill") + "Skill.png' class='img-50' /> <span onclick='sendBytes(\"CLAIM_RESEARCHER\")' style='display:inline-block;border:1px solid green;background-color:black;padding:15px;cursor:pointer;'>CLAIM <img src='images/atom.png' class='img-30' /></span></i>";
			showElement("notification-researcherReady");
		}
		else
		{
			if (text > 1)
			{
				document.getElementById("researcher-status-label").innerHTML = "<img src='images/" + getItemString("researcherSkill") + "Skill.png' class='img-50' /> " + formatTime(text);
				showElement("notification-researcher");
				showElement("notification-researcherTimerNotification");
				hideElement("notification-researcherReady");
			}
			else
			{
				hideElement("notification-researcherTimerNotification");
				document.getElementById("researcher-status-label").innerHTML = "IDLE";
				hideElement("notification-researcherReady");
			}
		}
		break;
	case "researcherSkill":
		refreshResearching();
		break;
	case "researcherMining":
		if (text == 1)
		{
			showElement("item-box-diamond_verydark");
		}
		else
		{
			if (text >= 2 && text <= 3)
			{
				hideElement("item-box-diamond_verydark");
				showElement("item-box-gemList2");
			}
			else
			{
				if (text >= 4)
				{
					showElement("item-box-gemList3");
					hideElement("item-box-gemList2");
				}
			}
		}
		break;
	case "home":
		document.getElementById("navigation-right-home-button").style.display = "";
		document.getElementById("navigation-right-home-image").src = "images/" + getItemString("home") + ".png";
		break;
	case "homeHint":
		if (text == 1)
		{
			hideElement("img-hint-arrow-home-button");
		}
		break;
	case "communityCenter2":
		document.getElementById("navigation-right-shop-button").onclick = function ()
		{
			navigate("right-shopOptions");
		};
		break;
	case "potionsMixed":
		hideElement("img-hint-arrow-brewing-button");
		break;
	case "treeUnlocked2":
	case "treeUnlocked3":
	case "treeUnlocked4":
	case "treeUnlocked5":
	case "treeUnlocked6":
		if (text > 0)
		{
			unlockTreePatch(type.substr(12));
		}
		else
		{
			if (type == "treeUnlocked5")
			{
				document.getElementById("tree-section-img-5").src = "images/tree_locked_donor.png";
			}
			if (type == "treeUnlocked6")
			{
				document.getElementById("tree-section-img-6").src = "images/tree_locked_donor.png";
			}
		}
		initializeTooltips();
		break;
	case "plotUnlocked2":
	case "plotUnlocked3":
	case "plotUnlocked4":
	case "plotUnlocked5":
	case "plotUnlocked6":
		if (text > 0)
		{
			unlockPlotPatch(type.substr(12));
		}
		else
		{
			if (type == "plotUnlocked5")
			{
				document.getElementById("plot-section-img-5").src = "images/tree_locked_donor.png";
			}
			if (type == "plotUnlocked6")
			{
				document.getElementById("plot-section-img-6").src = "images/tree_locked_donor.png";
			}
		}
		initializeTooltips();
		break;
	case "heroHp":
	case "heroMaxHp":
		refreshHeroHpBar();
		break;
	case "heroMana":
	case "heroMaxMana":
		if (text > 0)
		{
			showElement("hero-mana-bar-fighting");
			showElement("monster-mana-bar-fighting");
			showElement("hero-mana-display");
		}
		refreshHeroManaBar();
		refeshMagicInCombat();
		break;
	case "smeltingOreType":
		if (getItemString("smeltingOreType") != "none")
		{
			showElement("notification-furnace");
			document.getElementById("notification-furnace-img").src = "images/" + getBestFurnace() + "On" + ".gif";
		}
		else
		{
			hideElement("notification-furnace");
		}
		break;
	case "charcoalFoundryLogType":
		if (getItemString("charcoalFoundryLogType") != "none")
		{
			showElement("notification-charcoalFoundry");
			document.getElementById("notification-charcoalFoundry-img").src = "images/" + "charcoalFoundry" + ".png";
		}
		else
		{
			hideElement("notification-charcoalFoundry");
		}
		break;
	case "smeltingCurrentAmount":
		var normalized_images = parseInt(getItem("smeltingCurrentAmount") / getItem("smeltingRequestedAmount") * 100);
		if (isNaN(normalized_images))
		{
			normalized_images = 0;
		}
		document.getElementById("notification-furnace-value").innerHTML = normalized_images + "%";
		break;
	case "charcoalFoundryCurrentAmount":
		normalized_images = parseInt(getItem("charcoalFoundryCurrentAmount") / getItem("charcoalFoundryRequestedAmount") * 100);
		if (isNaN(normalized_images))
		{
			normalized_images = 0;
		}
		document.getElementById("notification-charcoalFoundry-value").innerHTML = normalized_images + "%";
		break;
	case "monsterHp":
	case "monsterMaxHp":
		refreshMonsterHpBar();
		break;
	case "miningUnlocked":
		if (text > 0)
		{
			document.getElementById("span-topBar-miningXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-miningXPArea").style.display = "";
		}
		break;
	case "craftingUnlocked":
		if (text > 0)
		{
			document.getElementById("span-topBar-craftingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-craftingXPArea").style.display = "";
		}
		break;
	case "bobsPanicQuest":
		if (text == -1)
		{
			document.getElementById("img-hint-arrow-farming-button").style.display = "none";
			document.getElementById("img-hint-arrow-woodcutting-button").style.display = "none";
		}
		break;
	case "woodcuttingUnlocked":
		if (text > 0)
		{
			document.getElementById("span-topBar-woodcuttingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-woodcuttingXPArea").style.display = "";
			document.getElementById("navigation-right-woodcutting-button").style.display = "";
		}
		break;
	case "fishingUnlocked":
		if (text > 0)
		{
			document.getElementById("span-topBar-fishingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-fishingXPArea").style.display = "";
			document.getElementById("navigation-right-fishing-button").style.display = "";
		}
		break;
	case "cookingUnlocked":
		if (text > 0)
		{
			document.getElementById("span-topBar-cookingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-cookingXPArea").style.display = "";
			document.getElementById("navigation-right-cooking-button").style.display = "";
		}
		break;
	case "magicUnlocked":
	case "spellScrollReflectCombatMapFound":
	case "spellScrollTeleportCombatMapFound":
		if (text > 0)
		{
			document.getElementById("span-topBar-magicXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-magicXPArea").style.display = "";
			document.getElementById("navigation-right-magic-button").style.display = "";
		}
		if (getItem("magicUnlocked") > 0 && getItem("spellScrollReflectCombatMapFound") == 0)
		{
			document.getElementById("spellScrollReflectGroundFound-combat").style.display = "";
		}
		else
		{
			document.getElementById("spellScrollReflectGroundFound-combat").style.display = "none";
		}
		if (getItem("magicUnlocked") > 0 && getItem("spellScrollTeleportCombatMapFound") == 0)
		{
			document.getElementById("spellScrollTeleportGroundFound-combat").style.display = "";
		}
		else
		{
			document.getElementById("spellScrollTeleportGroundFound-combat").style.display = "none";
		}
		break;
	case "spellScrollGhostScanCombatMapFound":
	case "cemeteryPuzzleCompleted":
		if (getItem("spellScrollGhostScanCombatMapFound") > 0)
		{
			hideElement("spellScrollGhostScanGroundFound-combat");
		}
		else
		{
			if (getItem("cemeteryPuzzleCompleted") == 1)
			{
				showElement("spellScrollGhostScanGroundFound-combat");
			}
		}
		break;
	case "farmingUnlocked":
		if (text > 0)
		{
			document.getElementById("span-topBar-farmingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-farmingXPArea").style.display = "";
			document.getElementById("navigation-right-farming-button").style.display = "";
		}
		break;
	case "magicTabNotification":
		if (text > 0)
		{
			document.getElementById("img-hint-arrow-magic-button").style.display = "none";
		}
		break;
	case "brewingUnlocked":
		if (text > 0)
		{
			document.getElementById("span-topBar-brewingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-brewingXPArea").style.display = "";
			document.getElementById("navigation-right-brewing-button").style.display = "";
			if (getItem("theResearcherQuest") > 0 || getItem("theResearcherQuest") == -1)
			{
				hideElement("img-hint-arrow-brewing-button");
			}
		}
		break;
	case "treeTimer1":
		refreshTreeTimer(1);
		break;
	case "treeTimer2":
		refreshTreeTimer(2);
		break;
	case "treeTimer3":
		refreshTreeTimer(3);
		break;
	case "treeTimer4":
		refreshTreeTimer(4);
		break;
	case "treeTimer5":
		refreshTreeTimer(5);
		break;
	case "treeTimer6":
		refreshTreeTimer(6);
		break;
	case "plotTimer1":
		refreshPlotTimer(1);
		break;
	case "plotTimer2":
		refreshPlotTimer(2);
		break;
	case "plotTimer3":
		refreshPlotTimer(3);
		break;
	case "plotTimer4":
		refreshPlotTimer(4);
		break;
	case "plotTimer5":
		refreshPlotTimer(5);
		break;
	case "plotTimer6":
		refreshPlotTimer(6);
		break;
	case "plot1":
	case "plotStage1":
		refreshPlotImage(1);
		break;
	case "plot2":
	case "plotStage2":
		refreshPlotImage(2);
		break;
	case "plot3":
	case "plotStage3":
		refreshPlotImage(3);
		break;
	case "plot4":
	case "plotStage4":
		refreshPlotImage(4);
		break;
	case "plot5":
	case "plotStage5":
		refreshPlotImage(5);
		break;
	case "plot6":
	case "plotStage6":
		refreshPlotImage(6);
		break;
	case "tree1":
	case "treeStage1":
		refreshTreeImage(1);
		break;
	case "tree2":
	case "treeStage2":
		refreshTreeImage(2);
		break;
	case "tree3":
	case "treeStage3":
		refreshTreeImage(3);
		break;
	case "tree4":
	case "treeStage4":
		refreshTreeImage(4);
		break;
	case "tree5":
	case "treeStage5":
		refreshTreeImage(5);
		break;
	case "tree6":
	case "treeStage6":
		refreshTreeImage(6);
		break;
	case "miningXp":
		loadMiningOreBoxes();
		break;
	case "smallManaStarUsed":
	case "mediumManaStarUsed":
	case "largeManaStarUsed":
	case "hugeManaStarUsed":
		refreshManaStarTotalLabels();
		break;
	case "letTheMiningBeginQuest":
		if (text == 2)
		{
			document.getElementById("navigation-right-mining-button").style.display = "";
		}
		else
		{
			if (text > 2 || text == -1)
			{
				document.getElementById("navigation-right-mining-button").style.display = "";
				document.getElementById("img-hint-arrow-mining-button").style.display = "none";
			}
		}
		if (text == 3)
		{
			document.getElementById("navigation-right-crafting-button").style.display = "";
		}
		else
		{
			if (text > 3 || text == -1)
			{
				document.getElementById("navigation-right-crafting-button").style.display = "";
				document.getElementById("img-hint-arrow-crafting-button").style.display = "none";
			}
		}
		break;
	case "monsterName":
		if (text == "none" && global_lastTabId == "right-combat-fighting")
		{
			navigate("right-combat");
		}
		resetAnimationOfCurrentFightToIdle();
		if (text == "none")
		{
			hideElement("notification-inCombat");
		}
		else
		{
			showElement("notification-inCombat");
		}
		break;
	}
};
