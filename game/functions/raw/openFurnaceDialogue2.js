/**
 * openFurnaceDialogue2 extracted from ../../deobfuscated/bundle.js at line 12193-12217
 *
 * If this file doesn't contain a function, there is an error in ../raw/openFurnaceDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openFurnaceDialogue2(_0x16F0C, _0x15233)
{
	global_tracker_furnaceDialgoue_furnace = _0x16F0C;
	global_tracker_furnaceDialgoue_ore = _0x15233;
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	var _0x15A44 = "";
	_0x15A44 += "<div class=\'dialogue-furnace-enterOre\'>";
	_0x15A44 += "<table width=\'90%\'>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x16F0C + ".png\' class=\'img-100\' /> ";
	_0x15A44 += "<img src=\'images/" + _0x15233 + ".png\' class=\'img-100\' /> ";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "<input type=\'text\' id=\'dialogue-furnace-smelt-amount\' class=\'enter-amount-text\' onkeyup=\'furnaceDialogueValueOnKeyUp(this.value)\' placeholder=\'amount\' />";
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	_0x15A44 += "</div>";
	document.getElementById("dialogue-furnace-enterOre").innerHTML = _0x15A44;
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><table width=\'80%\'><tr><td><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div></td><td><div onclick=\'closeDialogue(\"dialogue-furnace\");smelt(\"" + _0x15233 + "\", document.getElementById(\"dialogue-furnace-smelt-amount\").value)\' style=\'background-color:#b3ffff\' class=\'dialogue-button\'>Smelt</div></td></tr></table>";
	setMaxOreThatCanSmelt(_0x15233, _0x16F0C);
	furnaceDialogueValueOnKeyUp(document.getElementById("dialogue-furnace-smelt-amount").value)
}