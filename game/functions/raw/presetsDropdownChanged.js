/**
 * presetsDropdownChanged extracted from ../../deobfuscated/bundle.js at line 8563-8569
 *
 * If this file doesn't contain a function, there is an error in ../raw/presetsDropdownChanged.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function presetsDropdownChanged()
{
	var _0x18E38 = document.getElementById("dialogue-combatPresets-select").selectedIndex;
	setItem("presetsSetIndex", _0x18E38);
	sendBytes("CHANGE_PRESET_SET=" + _0x18E38);
	clicksCombatPresets()
}