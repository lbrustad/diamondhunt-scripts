'use strict';

function getOrbDescription(canCreateDiscussions)
{
	var th_field = "";
	switch (canCreateDiscussions)
	{
	case "blueOilWellOrb":
		th_field = "Oil wells produce twice the amount of oil.";
		break;
	case "blueOreOrb":
		th_field = "When mining an ore, there is a 10% chance of obtaining two instead of one.";
		break;
	case "blueWoodcuttingOrb":
		th_field = "A tree that instantly grows will grant more logs.";
		break;
	case "blueFurnaceOrb":
		th_field = "Furnace capacity increased by 50%.";
		break;
	case "blueManaOrb":
		th_field = "Mana regenerates very fast out of combat.";
		break;
	case "greenFishingOrb":
		th_field = "Catch 20% more fish.";
		break;
	case "greenRocketOrb":
		th_field = "Gain double the ore when looting other planets and moons.";
		break;
	case "greenOilFactoryOrb":
		th_field = "Ability to hire an additional 50 factory workers.";
		break;
	case "greenShinyMonsterOrb":
		th_field = "Right click a monster in combat to make it shiny.";
		break;
	case "greenShinyWoodcuttingOrb":
		th_field = "Right click a tree to make it shiny.";
		break;
	case "greenShinyFarmingOrb":
		th_field = "Right click a crop to make it shiny.";
		break;
	}
	return th_field;
};
