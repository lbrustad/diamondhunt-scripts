'use strict';

function usePreset(id)
{
	closeDialogue("dialogue-combatPresets");
	sendBytes("USE_PRESET=" + id);
};
