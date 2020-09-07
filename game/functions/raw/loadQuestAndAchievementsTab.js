/**
 * loadQuestAndAchievementsTab extracted from ../../deobfuscated/bundle.js at line 4277-4293
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadQuestAndAchievementsTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadQuestAndAchievementsTab()
{
	var _0x396D = "item-section-quests-1";
	document.getElementById(_0x396D).innerHTML = "";
	addItemBoxQuests("theMissingFeathers", "THE MISSING FEATHERS", "An archer is in need of feathers to finish crafting his arrows!", ["Have any sword equipped."], [getItem("weapon") == "rustySword"], "EASY", _0x396D, 0);
	addItemBoxQuests("letTheMiningBegin", "LET THE MINING BEGIN", "A miner would like to show you how to mine.", ["No Requirements"], [null], "EASY", _0x396D, 1);
	addItemBoxQuests("bobsPanic", "BOB\'S PANIC", "With the world becoming evil, Bob needs your help.", ["Taint the World"], [getItem("darkCrystalUsed") == 1], "EASY", _0x396D, 2);
	addItemBoxQuests("theResearcher", "THE RESEARCHER", "A scientist would like to keep working and needs your help.", ["Unlock 6 different skills"], [getItem("miningUnlocked") == 1 && getItem("craftingUnlocked") == 1 && getItem("woodcuttingUnlocked") == 1 && getItem("farmingUnlocked") == 1 && getItem("brewingUnlocked") == 1], "EASY", _0x396D, 2);
	addItemBoxQuests("theFisherman", "THE FISHERMAN", "A fisherman is in need for glass to finish his fishing rod.", ["Have glass on you"], [getItem("glass") > 0], "EASY", _0x396D, 4);
	addItemBoxQuests("theTelescope", "THE TELESCOPE", "Help fix the astronomer\'s telescope.", ["Must own a house."], [getItemString("home") != "none"], "EASY", _0x396D, 5);
	addItemBoxQuests("theGiantSnake", "THE GIANT SNAKE", "A giant snake is roaming the forest", ["Have crafted snakeskin armour"], [getItem("craftedSnakeskinArmour") > 0], "EASY", _0x396D, 5);
	addItemBoxQuests("theWizard", "THE WIZARD", "You\'re a wizard, " + capitalizeFirstLetter(getItemString("username")), ["Defeated the boss after the forest."], [getItem("bushyKills") > 0], "MEDIUM", _0x396D, 5);
	addItemBoxQuests("theFisherman2", "THE FISHERMAN PART 2", "A fisherman needs help to find a special catch.", ["Have a ruby or diamond in your fishing tool."], [getItem("rubyFishingRod") == 1 || getItem("diamondFishingRod") == 1 || getItem("rubySmallFishingNet") == 1 || getItem("diamondSmallFishingNet") == 1 || getItem("rubyHarpoon") == 1 || getItem("diamondHarpoon") == 1], "MEDIUM", _0x396D, 9);
	addItemBoxQuests("mommyTheSpider", "MOMMY THE SPIDER", "Mommy is embarrassed that her babies spit out poison on every occasion.", ["Killed 3 spiders in caves."], [getItem("spiderKills") >= 3], "EASY", _0x396D, 10);
	addItemBoxQuests("theStewChef", "THE STEW CHEF", "A chef needs your help making the perfect stew.", ["Be on cooldown for 30 minutes or more."], [getItem("heroCooldown") > 1800 || getItem("theStewChefQuest") != 0], "MEDIUM", _0x396D, 13);
	addItemBoxQuests("theFrozenBarbarian", "THE FROZEN BARBARIAN", "A barbarian is freezing to death.", ["Killed 3 boneheads in the northern fields."], [getItem("boneHeadKills") >= 3], "MEDIUM", _0x396D, 15)
}