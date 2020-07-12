/**
 * clicksCombatPresets extracted from ../../deobfuscated/bundle.js at line 5471-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCombatPresets.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCombatPresets()
{
	var _0x1CEEA;
	var _0x1CC4A = "";
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 5; _0x1C6B6++)
	{
		_0x1CEEA = _0x1C6B6;
		_0x1CC4A = "";
		if (getItemString("presetWeapon" + _0x1CEEA) != "weapon")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetWeapon" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetShield" + _0x1CEEA) != "shield")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetShield" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetHead" + _0x1CEEA) != "head")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetHead" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBody" + _0x1CEEA) != "body")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetBody" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetLegs" + _0x1CEEA) != "legs")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetLegs" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBoots" + _0x1CEEA) != "boots")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetBoots" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetGloves" + _0x1CEEA) != "gloves")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetGloves" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetAmulet" + _0x1CEEA) != "amulet")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetAmulet" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetArrows" + _0x1CEEA) != "arrows")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetArrows" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (_0x1CC4A.length > 0)
		{
			document.getElementById("preset" + _0x1CEEA + "-set").innerHTML = _0x1CC4A
		}
		else
		{
			document.getElementById("preset" + _0x1CEEA + "-set").innerHTML = "(Not Set)"
		}
	};
	openDialogueOverride("dialogue-combatPresets", "large")
}