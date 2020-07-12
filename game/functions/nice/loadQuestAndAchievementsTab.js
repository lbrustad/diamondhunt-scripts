'use strict';

function loadQuestAndAchievementsTab()
{
	var SCROLL_ID = "item-section-quests-1";
	document.getElementById(SCROLL_ID).innerHTML = "";
	addItemBoxQuests("theMissingFeathers", "THE MISSING FEATHERS", "An archer is in need of feathers to finish crafting his arrows!", ["Have any sword equipped."], [getItem("weapon") == "rustySword"], "EASY", SCROLL_ID, 0);
	addItemBoxQuests("letTheMiningBegin", "LET THE MINING BEGIN", "A miner would like to show you how to mine.", ["No Requirements"], [null], "EASY", SCROLL_ID, 1);
	addItemBoxQuests("bobsPanic", "BOB'S PANIC", "With the world becoming evil, Bob needs your help.", ["Taint the World"], [getItem("darkCrystalUsed") == 1], "EASY", SCROLL_ID, 2);
	addItemBoxQuests("theResearcher", "THE RESEARCHER", "A scientist would like to keep working and needs your help.", ["Unlock 6 different skills"], [getItem("miningUnlocked") == 1 && getItem("craftingUnlocked") == 1 && getItem("woodcuttingUnlocked") == 1 && getItem("farmingUnlocked") == 1 && getItem("brewingUnlocked") == 1], "EASY", SCROLL_ID, 2);
	addItemBoxQuests("theFisherman", "THE FISHERMAN", "A fisherman is in need for glass to finish his fishing rod.", ["Have glass on you"], [getItem("glass") > 0], "EASY", SCROLL_ID, 4);
	addItemBoxQuests("theTelescope", "THE TELESCOPE", "Help fix the astronomer's telescope.", ["Must own a house."], [getItemString("home") != "none"], "EASY", SCROLL_ID, 5);
	addItemBoxQuests("theGiantSnake", "THE GIANT SNAKE", "A giant snake is roaming the forest", ["Have crafted snakeskin armour"], [getItem("craftedSnakeskinArmour") > 0], "EASY", SCROLL_ID, 5);
	addItemBoxQuests("theWizard", "THE WIZARD", "You're a wizard, " + capitalizeFirstLetter(getItemString("username")), ["Defeated the boss after the forest."], [getItem("bushyKills") > 0], "MEDIUM", SCROLL_ID, 5);
	addItemBoxQuests("theFisherman2", "THE FISHERMAN PART 2", "A fisherman needs help to find a special catch.", ["Have a ruby or diamond in your fishing tool."], [getItem("rubyFishingRod") == 1 || getItem("diamondFishingRod") == 1 || getItem("rubySmallFishingNet") == 1 || getItem("diamondSmallFishingNet") == 1 || getItem("rubyHarpoon") == 1 || getItem("diamondHarpoon") == 1], "MEDIUM", SCROLL_ID, 9);
	addItemBoxQuests("mommyTheSpider", "MOMMY THE SPIDER", "Mommy is embarrassed that her babies spit out poison on every occasion.", ["Killed 3 spiders in caves."], [getItem("spiderKills") >= 3], "EASY", SCROLL_ID, 10);
};
