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
	}
	return th_field;
};
