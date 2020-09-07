/**
 * clicksCombatPresets extracted from ../../deobfuscated/bundle.js at line 7171-7225
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCombatPresets.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCombatPresets()
{
	var _0x473F;
	var _0x41B2 = "";
	for (var _0x3607 = 1; _0x3607 <= 5; _0x3607++)
	{
		_0x473F = _0x3607;
		_0x41B2 = "";
		if (getItemString("presetWeapon" + _0x473F) != "weapon")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetWeapon" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetShield" + _0x473F) != "shield")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetShield" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetHead" + _0x473F) != "head")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetHead" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBody" + _0x473F) != "body")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetBody" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetLegs" + _0x473F) != "legs")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetLegs" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBoots" + _0x473F) != "boots")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetBoots" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetGloves" + _0x473F) != "gloves")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetGloves" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetAmulet" + _0x473F) != "amulet")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetAmulet" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetArrows" + _0x473F) != "arrows")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetArrows" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (_0x41B2.length > 0)
		{
			document.getElementById("preset" + _0x473F + "-set").innerHTML = _0x41B2
		}
		else
		{
			document.getElementById("preset" + _0x473F + "-set").innerHTML = "(Not Set)"
		}
	};
	openDialogueOverride("dialogue-combatPresets", "large")
}