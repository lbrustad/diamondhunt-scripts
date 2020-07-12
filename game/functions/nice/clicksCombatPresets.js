'use strict';

function clicksCombatPresets()
{
	var interestingPoint;
	var keyToAdd = "";
	var viewportCenter = 1;
	for (; viewportCenter <= 5; viewportCenter++)
	{
		interestingPoint = viewportCenter;
		keyToAdd = "";
		if (getItemString("presetWeapon" + interestingPoint) != "weapon")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetWeapon" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetShield" + interestingPoint) != "shield")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetShield" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetHead" + interestingPoint) != "head")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetHead" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetBody" + interestingPoint) != "body")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetBody" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetLegs" + interestingPoint) != "legs")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetLegs" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetBoots" + interestingPoint) != "boots")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetBoots" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetGloves" + interestingPoint) != "gloves")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetGloves" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetAmulet" + interestingPoint) != "amulet")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetAmulet" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetArrows" + interestingPoint) != "arrows")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetArrows" + interestingPoint) + ".png' class='img-30' /> ");
		}
		if (keyToAdd.length > 0)
		{
			document.getElementById("preset" + interestingPoint + "-set").innerHTML = keyToAdd;
		}
		else
		{
			document.getElementById("preset" + interestingPoint + "-set").innerHTML = "(Not Set)";
		}
	}
	openDialogueOverride("dialogue-combatPresets", "large");
};
