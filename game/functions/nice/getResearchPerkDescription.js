'use strict';

function getResearchPerkDescription(steal, param)
{
	switch (steal)
	{
	case 0:
		if (param == "crafting")
		{
			return "Ability to smelt sand into glass.";
		}
		if (param == "mining")
		{
			return "Ability to find gems.<br /><span onclick='infoGemsDialogue()' class='researcher-more-info-button'>more info</span>";
		}
		if (param == "combat")
		{
			return "Combat levels now increase maximum hp.";
		}
		if (param == "cooking")
		{
			return "Ability to make recipes in the cooking section.";
		}
		if (param == "fishing")
		{
			return "Chance of finding oyster pearls.";
		}
		if (param == "farming")
		{
			return "You may now eat mushrooms for extra energy.";
		}
		if (param == "woodcutting")
		{
			return "10% chance of obtaining a tree seed when chopping trees.";
		}
		if (param == "brewing")
		{
			return "Double stardust from small stardust potions.";
		}
		if (param == "magic")
		{
			return "Mana regenerate during combat every 10 seconds.";
		}
		break;
	case 1:
		if (param == "crafting")
		{
			return "Access to the museum.";
		}
		if (param == "mining")
		{
			return "Ability to find stardust prisms.<br /><span onclick='infoStardustPrismsDialogue()' class='researcher-more-info-button'>more info</span>";
		}
		if (param == "farming")
		{
			return "Bob will now start looking for stardust seeds.";
		}
		if (param == "combat")
		{
			return "Allow you to reset your combat cooldown, once a day. <span id='reset-combat-icon-timer'></span>";
		}
		if (param == "brewing")
		{
			return "Ability to drink two potions at once, stacking the timer.";
		}
		if (param == "magic")
		{
			return "Mana regenerates 25% faster out of combat.";
		}
		if (param == "cooking")
		{
			return "Burning food will grant 25% of its cook XP.";
		}
		if (param == "fishing")
		{
			return "Ability to use an oxygen tank to explore ocean floors for treasure.";
		}
		if (param == "woodcutting")
		{
			return "1% chance of obtaining a strange leaf when chopping trees.";
		}
		break;
	case 2:
		if (param == "mining")
		{
			return "Ability to own 3 drills and 3 crushers.";
		}
		if (param == "crafting")
		{
			return "Ability to craft silver buckets.";
		}
		if (param == "woodcutting")
		{
			return "5% chance that chopping a tree will cause it to instantly regrow.";
		}
		if (param == "magic")
		{
			return "Ability to transform weapons into other items.";
		}
		if (param == "combat")
		{
			return "Ability to set presets, allowing you to switch gears in one click mid fight.";
		}
		if (param == "farming")
		{
			return "5% chance that harvesting a crop will cause it to instantly regrow.";
		}
		if (param == "brewing")
		{
			return "5% chance that drinking a potion will not get used.";
		}
		if (param == "cooking")
		{
			return "5% burn reduction on all ovens.";
		}
		break;
	case 3:
		if (param == "woodcutting")
		{
			return "Maple trees now yield maple syrup.";
		}
		if (param == "combat")
		{
			return "5% chance that energy is refunded when fighting.";
		}
		if (param == "crafting")
		{
			return "Ability to craft large vials.";
		}
		if (param == "brewing")
		{
			return "Ability to brew mana potions.";
		}
		break;
	}
	return "-1";
};
