/**
 * setPreset extracted from ../../deobfuscated/bundle.js at line 5514-5518
 *
 * If this file doesn't contain a function, there is an error in ../raw/setPreset.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setPreset(_0x1CC2E)
{
	closeDialogue("dialogue-combatPresets");
	confirmDialogue("images/combatPresetsIcon.png", "Set this preset to what you\'re currently wearing?", "Set Preset", "Cancel", "SET_PRESET=" + _0x1CC2E)
}