'use strict';

function manageChangedItem(type)
{
	var item = getItem(type, false);
	if (type.endsWith("Allocation0") || type.endsWith("Allocation1") || type.endsWith("Allocation2") || type.endsWith("Allocation3") || type.endsWith("Allocation4"))
	{
		refreshMiningAllocationIcons();
	}
	if (item == -1)
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
	}
	if (type.startsWith("heroDebuff"))
	{
		resetHeroNerfs();
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
		if (item == 0)
		{
			selectedSeed = "none";
		}
	}
	if (type.endsWith("PotionTimer"))
	{
		if (item > 0)
		{
			showElement("notification-" + type);
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
	case "oxygenTankTimer":
		var htmlElId = type.substring(0, type.length - 5);
		if (item > 1)
		{
			showElement("notification-" + type);
			if (document.getElementById(htmlElId + "-itemBox-value") != null)
			{
				document.getElementById(htmlElId + "-itemBox-value").innerHTML = formatTime(item);
			}
			hideElement("notification-" + type + "-Ready");
		}
		else
		{
			hideElement("notification-" + type);
			if (item == 1)
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
	case "healCooldown":
	case "poisonCooldown":
	case "reflectCooldown":
		if (global_lastTabId == "right-combat-fighting")
		{
			refeshMagicInCombat();
		}
		break;
	case "questPoints":
		loadQuestAndAchievementsTab();
		break;
	case "researcherMagic":
		if (item >= 3)
		{
			showElement("item-box-convertMagic");
		}
		break;
	case "hardcoreId":
		if (item > 0)
		{
			document.getElementById("hardcore-icon-top-left").style.display = "";
		}
		else
		{
			document.getElementById("hardcore-icon-top-left").style.display = "none";
		}
		break;
	case "largeManaPotionUsed":
		refreshPotionsCombat();
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
		}
		else
		{
			if (document.getElementById("td-hero-cooldown").innerHTML != "")
			{
				document.getElementById("td-hero-cooldown").innerHTML = "";
			}
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
	case "fireFeatherSpawn":
		if (item > 0)
		{
			showElement("fireFeatherSpawn-" + item);
			showElement("notification-fireFeatherSpawnReady");
		}
		else
		{
			hideElement("fireFeatherSpawn-1");
			hideElement("notification-fireFeatherSpawnReady");
		}
		break;
	case "chatIcon":
		refreshSigilsDialoguesIcons();
		break;
	case "updateLogNotification":
		if (item > 0)
		{
			document.getElementById("new-updates-gif").style.display = "";
		}
		else
		{
			document.getElementById("new-updates-gif").style.display = "none";
		}
		break;
	case "giantSnakeTimer":
		if (item > 0)
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
		if (item > 0)
		{
			showElement("notification-" + type);
		}
		else
		{
			hideElement("notification-" + type);
		}
		break;
	case "currentFighingArea":
		if (global_lastTabId == "right-combat-fighting")
		{
			changeBodyBackground("images/" + getItemString("currentFighingArea") + "_background.png");
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
	case "cyanCrystalUsed":
	case "greenCrystalUsed":
	case "redCrystalUsed":
		refreshDarkCrystalUsedLabel();
		break;
	case "researcherTimer":
		if (item == 1)
		{
			document.getElementById("researcher-status-label").innerHTML = "<img src='images/" + getItemString("researcherSkill") + "Skill.png' class='img-50' /> <span onclick='sendBytes(\"CLAIM_RESEARCHER\")' style='display:inline-block;border:1px solid green;background-color:black;padding:15px;cursor:pointer;'>CLAIM <img src='images/atom.png' class='img-30' /></span></i>";
			showElement("notification-researcherReady");
		}
		else
		{
			if (item > 1)
			{
				document.getElementById("researcher-status-label").innerHTML = "<img src='images/" + getItemString("researcherSkill") + "Skill.png' class='img-50' /> " + formatTime(item);
				showElement("notification-researcher");
				hideElement("notification-researcherReady");
			}
			else
			{
				document.getElementById("researcher-status-label").innerHTML = "IDLE";
				hideElement("notification-researcherReady");
			}
		}
		break;
	case "researcherSkill":
		refreshResearching();
		break;
	case "researcherMining":
		if (item == 1)
		{
			showElement("item-box-diamond_verydark");
		}
		else
		{
			if (item >= 2)
			{
				hideElement("item-box-diamond_verydark");
				showElement("item-box-gemList2");
			}
		}
		break;
	case "home":
		document.getElementById("navigation-right-home-button").style.display = "";
		document.getElementById("navigation-right-home-image").src = "images/" + getItemString("home") + ".png";
		break;
	case "homeHint":
		if (item == 1)
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
		if (item > 0)
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
		if (item > 0)
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
		if (item > 0)
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
	case "smeltingCurrentAmount":
		var normalized_images = parseInt(getItem("smeltingCurrentAmount") / getItem("smeltingRequestedAmount") * 100);
		if (isNaN(normalized_images))
		{
			normalized_images = 0;
		}
		document.getElementById("notification-furnace-value").innerHTML = normalized_images + "%";
		break;
	case "monsterHp":
	case "monsterMaxHp":
		refreshMonsterHpBar();
		break;
	case "miningUnlocked":
		if (item > 0)
		{
			document.getElementById("span-topBar-miningXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-miningXPArea").style.display = "";
		}
		break;
	case "craftingUnlocked":
		if (item > 0)
		{
			document.getElementById("span-topBar-craftingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-craftingXPArea").style.display = "";
		}
		break;
	case "bobsPanicQuest":
		if (item == -1)
		{
			document.getElementById("img-hint-arrow-farming-button").style.display = "none";
			document.getElementById("img-hint-arrow-woodcutting-button").style.display = "none";
		}
		break;
	case "woodcuttingUnlocked":
		if (item > 0)
		{
			document.getElementById("span-topBar-woodcuttingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-woodcuttingXPArea").style.display = "";
			document.getElementById("navigation-right-woodcutting-button").style.display = "";
		}
		break;
	case "fishingUnlocked":
		if (item > 0)
		{
			document.getElementById("span-topBar-fishingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-fishingXPArea").style.display = "";
			document.getElementById("navigation-right-fishing-button").style.display = "";
		}
		break;
	case "cookingUnlocked":
		if (item > 0)
		{
			document.getElementById("span-topBar-cookingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-cookingXPArea").style.display = "";
			document.getElementById("navigation-right-cooking-button").style.display = "";
		}
		break;
	case "magicUnlocked":
	case "spellScrollReflectCombatMapFound":
	case "spellScrollTeleportCombatMapFound":
		if (item > 0)
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
	case "farmingUnlocked":
		if (item > 0)
		{
			document.getElementById("span-topBar-farmingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-farmingXPArea").style.display = "";
			document.getElementById("navigation-right-farming-button").style.display = "";
		}
		break;
	case "magicTabNotification":
		if (item > 0)
		{
			document.getElementById("img-hint-arrow-magic-button").style.display = "none";
		}
		break;
	case "brewingUnlocked":
		if (item > 0)
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
		if (item == 2)
		{
			document.getElementById("navigation-right-mining-button").style.display = "";
		}
		else
		{
			if (item > 2 || item == -1)
			{
				document.getElementById("navigation-right-mining-button").style.display = "";
				document.getElementById("img-hint-arrow-mining-button").style.display = "none";
			}
		}
		if (item == 3)
		{
			document.getElementById("navigation-right-crafting-button").style.display = "";
		}
		else
		{
			if (item > 3 || item == -1)
			{
				document.getElementById("navigation-right-crafting-button").style.display = "";
				document.getElementById("img-hint-arrow-crafting-button").style.display = "none";
			}
		}
		break;
	case "monsterName":
		if (item == "none" && global_lastTabId == "right-combat-fighting")
		{
			navigate("right-combat");
		}
		resetAnimationOfCurrentFightToIdle();
		if (item == "none")
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
