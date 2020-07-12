'use strict';

function setPreset(callback)
{
	closeDialogue("dialogue-combatPresets");
	confirmDialogue("images/combatPresetsIcon.png", "Set this preset to what you're currently wearing?", "Set Preset", "Cancel", "SET_PRESET=" + callback);
};
