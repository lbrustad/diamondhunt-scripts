/**
 * clicksCombatPresets extracted from ../../deobfuscated/bundle.js at line 8487-8561
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCombatPresets.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCombatPresets()
{
	var _0x1613D;
	var _0x15A44 = "";
	var _0x16183 = getItem("presetsSetIndex");
	for (var _0x14C0C = 0; _0x14C0C <= 4; _0x14C0C++)
	{
		var _0x161A6 = document.getElementById("dialogue-combatPresets-" + _0x14C0C);
		if (_0x161A6 != null)
		{
			_0x161A6.style.display = "none"
		}
	};
	var _0x161A6 = document.getElementById("dialogue-combatPresets-" + _0x16183);
	if (_0x161A6 != null)
	{
		_0x161A6.style.display = ""
	};
	for (var _0x14C0C = 1; _0x14C0C <= 25; _0x14C0C++)
	{
		_0x1613D = _0x14C0C;
		_0x15A44 = "";
		if (getItemString("presetWeapon" + _0x1613D) != "weapon")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetWeapon" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetShield" + _0x1613D) != "shield")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetShield" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetHead" + _0x1613D) != "head")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetHead" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBody" + _0x1613D) != "body")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetBody" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetLegs" + _0x1613D) != "legs")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetLegs" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBoots" + _0x1613D) != "boots")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetBoots" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetGloves" + _0x1613D) != "gloves")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetGloves" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetAmulet" + _0x1613D) != "amulet")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetAmulet" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetArrows" + _0x1613D) != "arrows")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetArrows" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (_0x15A44.length > 0)
		{
			document.getElementById("preset" + _0x1613D + "-set").innerHTML = _0x15A44
		}
		else
		{
			document.getElementById("preset" + _0x1613D + "-set").innerHTML = "(Not Set)"
		}
	};
	document.getElementById("dialogue-combatPresets-select").selectedIndex = _0x16183;
	document.getElementById("preset-option-0").innerHTML = getPresetSetName(0);
	document.getElementById("preset-option-1").innerHTML = getPresetSetName(1);
	document.getElementById("preset-option-2").innerHTML = getPresetSetName(2);
	document.getElementById("preset-option-3").innerHTML = getPresetSetName(3);
	document.getElementById("preset-option-4").innerHTML = getPresetSetName(4);
	openDialogueOverride("dialogue-combatPresets", "large")
}