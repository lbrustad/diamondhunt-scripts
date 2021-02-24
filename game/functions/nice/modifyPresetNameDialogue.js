'use strict';

function modifyPresetNameDialogue()
{
	var _startingFret = document.getElementById("dialogue-combatPresets-select").selectedIndex;
	var pix_color = "";
	pix_color = pix_color + ("<span style='color:grey'>Enter New Name</span><br /><input type='text' maxlength='20' style='font-size:18pt;' value='" + getPresetSetName(_startingFret) + "' id='change-preset-name-text' /><br /><br />");
	document.getElementById("dialogue-combatPresetsModify-section").innerHTML = pix_color;
	document.getElementById("dialogue-combatPresetsModify-hidden").value = _startingFret;
	openDialogue("dialogue-combatPresetsModify");
};
