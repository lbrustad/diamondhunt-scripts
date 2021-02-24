'use strict';

function presetsDropdownChanged()
{
	var cachedPage = document.getElementById("dialogue-combatPresets-select").selectedIndex;
	setItem("presetsSetIndex", cachedPage);
	sendBytes("CHANGE_PRESET_SET=" + cachedPage);
	clicksCombatPresets();
};
