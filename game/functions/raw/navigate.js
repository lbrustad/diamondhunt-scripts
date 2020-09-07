/**
 * navigate extracted from ../../deobfuscated/bundle.js at line 3034-3130
 *
 * If this file doesn't contain a function, there is an error in ../raw/navigate.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function navigate(_0x6113)
{
	sendBytes("LAST_TAB=" + _0x6113);
	hideAllRightTabs();
	document.getElementById("navigation-" + _0x6113).style.display = "";
	global_lastTabId = _0x6113;
	changeBackgroundRightSection("default");
	switch (_0x6113)
	{
	case "right-home":
		refreshHomeTab();
		break;
	case "right-marketHistory":
		clicksMarketHistory();
		sendBytes("REFRESH_MARKET_HISTORY");
		break;
	case "right-shop":
		loadShopTab();
		break;
	case "right-donorshop":
		loadDonorShopTab();
		refreshDonorTable();
		break;
	case "right-skills":
		break;
	case "right-quests":
		loadQuestAndAchievementsTab();
		break;
	case "right-combat-select":
		refreshCombatMap();
		break;
	case "right-combat-fighting":
		refreshCombatTab();
		break;
	case "right-combat":
		hideOtherInterfacesForCombat(false);
		break;
	case "right-mining":
		loadMiningOreBoxes();
		hideElement("img-hint-arrow-mining-button");
		break;
	case "right-magic":
		refreshManaStarTotalLabels();
		break;
	case "right-brewing":
		refreshBrewing();
		hideElement("img-hint-arrow-brewing-button");
		break;
	case "right-crafting":
		switchCraftingType("default");
		refreshCraftables();
		hideElement("img-hint-arrow-crafting-button");
		break;
	case "right-convertMagic":
		refreshMagicTransformList();
		break;
	case "right-woodcutting":
		changeBackgroundRightSection("woodcutting");
		hideElement("img-hint-arrow-woodcutting-button");
		break;
	case "right-farming":
		if (getTotalKills() >= 2 && getItem("bobsPanicQuest") == -1 && getItem("skyCrystalShake") == 0 && getItem("cyanCrystal") == 0)
		{
			sendBytes("SHAKE_SKYCRYSTAL=0")
		}
		else
		{
			if (getItem("rakeHeadTotal") == 0 && getLevel(getItem("craftingXp")) >= 17)
			{
				sendBytes("RAKE_HEAD")
			}
		};
		changeBackgroundRightSection("farming");
		hideElement("img-hint-arrow-farming-button");
		break;
	case "right-researcher":
		refreshResearching();
		break;
	case "right-cooking":
		if (getItem("cookingUnlockedNotification") == 0)
		{
			sendBytes("COOKING_ITEMS_MOVE")
		};
		break;
	case "right-cooksBook":
		refreshCooksBook();
		break;
	case "right-market":
		displayMarket(false);
		sendBytes("REFRESH_TRADABLES");
		break
	};
	if (_0x6113 != "right-combat-fighting" && getRandomInt(10000) == 0 && getItem("darkCrystalUsed") > 0)
	{
		faradoxRandomShow()
	}
}