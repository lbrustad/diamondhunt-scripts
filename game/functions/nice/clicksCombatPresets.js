'use strict';

function clicksCombatPresets()
{
	var theseIcons;
	var keyToAdd = "";
	var item = getItem("presetsSetIndex");
	var FONT_SUFFIX = 0;
	for (; FONT_SUFFIX <= 4; FONT_SUFFIX++)
	{
		var boxChild = document.getElementById("dialogue-combatPresets-" + FONT_SUFFIX);
		if (boxChild != null)
		{
			boxChild.style.display = "none";
		}
	}
	boxChild = document.getElementById("dialogue-combatPresets-" + item);
	if (boxChild != null)
	{
		boxChild.style.display = "";
	}
	FONT_SUFFIX = 1;
	for (; FONT_SUFFIX <= 25; FONT_SUFFIX++)
	{
		theseIcons = FONT_SUFFIX;
		keyToAdd = "";
		if (getItemString("presetWeapon" + theseIcons) != "weapon")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetWeapon" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetShield" + theseIcons) != "shield")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetShield" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetHead" + theseIcons) != "head")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetHead" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetBody" + theseIcons) != "body")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetBody" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetLegs" + theseIcons) != "legs")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetLegs" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetBoots" + theseIcons) != "boots")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetBoots" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetGloves" + theseIcons) != "gloves")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetGloves" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetAmulet" + theseIcons) != "amulet")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetAmulet" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (getItemString("presetArrows" + theseIcons) != "arrows")
		{
			keyToAdd = keyToAdd + ("<img src='images/" + getItemString("presetArrows" + theseIcons) + ".png' class='img-30' /> ");
		}
		if (keyToAdd.length > 0)
		{
			document.getElementById("preset" + theseIcons + "-set").innerHTML = keyToAdd;
		}
		else
		{
			document.getElementById("preset" + theseIcons + "-set").innerHTML = "(Not Set)";
		}
	}
	document.getElementById("dialogue-combatPresets-select").selectedIndex = item;
	document.getElementById("preset-option-0").innerHTML = getPresetSetName(0);
	document.getElementById("preset-option-1").innerHTML = getPresetSetName(1);
	document.getElementById("preset-option-2").innerHTML = getPresetSetName(2);
	document.getElementById("preset-option-3").innerHTML = getPresetSetName(3);
	document.getElementById("preset-option-4").innerHTML = getPresetSetName(4);
	openDialogueOverride("dialogue-combatPresets", "large");
};
