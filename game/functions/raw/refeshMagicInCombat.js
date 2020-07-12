/**
 * refeshMagicInCombat extracted from ../../deobfuscated/bundle.js at line 3972-4010
 *
 * If this file doesn't contain a function, there is an error in ../raw/refeshMagicInCombat.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refeshMagicInCombat()
{
	if (getItem("heal") == 1)
	{
		showElement("fighting-screen-magic-area")
	}
	else
	{
		return
	};
	var _0x1DD5A = ["heal", "poison", "reflect", "fire", "teleport"];
	var _0x1DD3E = [3, 5, 3, 2, 0];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1DD5A.length; _0x1C6B6++)
	{
		var _0x1DD4C = _0x1DD5A[_0x1C6B6];
		if (getItem(_0x1DD4C) > 0)
		{
			showElement("combat-spell-" + _0x1DD4C);
			if (getItem(_0x1DD4C + "Cooldown") > 0)
			{
				document.getElementById("combat-spell-" + _0x1DD4C + "-icon").style.filter = "brightness(10%)";
				showElement("combat-spell-" + _0x1DD4C + "-cooldown")
			}
			else
			{
				if (_0x1DD3E[_0x1C6B6] > getItem("heroMana"))
				{
					document.getElementById("combat-spell-" + _0x1DD4C + "-icon").style.filter = "brightness(20%) sepia(100%) hue-rotate(190deg) saturate(500%)";
					hideElement("combat-spell-" + _0x1DD4C + "-cooldown")
				}
				else
				{
					document.getElementById("combat-spell-" + _0x1DD4C + "-icon").style.filter = "brightness(100%)";
					hideElement("combat-spell-" + _0x1DD4C + "-cooldown")
				}
			}
		}
	}
}