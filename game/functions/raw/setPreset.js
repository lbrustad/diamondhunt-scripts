/**
 * setPreset extracted from ../../deobfuscated/bundle.js at line 7227-7231
 *
 * If this file doesn't contain a function, there is an error in ../raw/setPreset.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setPreset(_0x4178)
{
	closeDialogue("dialogue-combatPresets");
	confirmDialogue("images/combatPresetsIcon.png", "Set this preset to what you\'re currently wearing?", "Set Preset", "Cancel", "SET_PRESET=" + _0x4178)
}