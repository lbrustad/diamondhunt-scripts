/**
 * modifyPresetNameDialogue extracted from ../../deobfuscated/bundle.js at line 6590-6598
 *
 * If this file doesn't contain a function, there is an error in ../raw/modifyPresetNameDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function modifyPresetNameDialogue()
{
	var _0x18302 = document.getElementById("dialogue-combatPresets-select").selectedIndex;
	var _0x15A44 = "";
	_0x15A44 += "<span style=\'color:grey\'>Enter New Name</span><br /><input type=\'text\' maxlength=\'20\' style=\'font-size:18pt;\' value=\'" + getPresetSetName(_0x18302) + "\' id=\'change-preset-name-text\' /><br /><br />";
	document.getElementById("dialogue-combatPresetsModify-section").innerHTML = _0x15A44;
	document.getElementById("dialogue-combatPresetsModify-hidden").value = _0x18302;
	openDialogue("dialogue-combatPresetsModify")
}