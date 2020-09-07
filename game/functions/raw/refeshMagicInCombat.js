/**
 * refeshMagicInCombat extracted from ../../deobfuscated/bundle.js at line 5058-5096
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
	var _0x6A5D = ["heal", "poison", "reflect", "fire", "teleport", "freeze", "ghostScan", "invisibility"];
	var _0x6A23 = [3, 5, 3, 2, 0, 5, 0, 1];
	for (var _0x3607 = 0; _0x3607 < _0x6A5D.length; _0x3607++)
	{
		var _0x6A40 = _0x6A5D[_0x3607];
		if (getItem(_0x6A40) > 0)
		{
			showElement("combat-spell-" + _0x6A40);
			if (getItem(_0x6A40 + "Cooldown") > 0)
			{
				document.getElementById("combat-spell-" + _0x6A40 + "-icon").style.filter = "brightness(10%)";
				showElement("combat-spell-" + _0x6A40 + "-cooldown")
			}
			else
			{
				if (_0x6A23[_0x3607] > getItem("heroMana"))
				{
					document.getElementById("combat-spell-" + _0x6A40 + "-icon").style.filter = "brightness(20%) sepia(100%) hue-rotate(190deg) saturate(500%)";
					hideElement("combat-spell-" + _0x6A40 + "-cooldown")
				}
				else
				{
					document.getElementById("combat-spell-" + _0x6A40 + "-icon").style.filter = "brightness(100%)";
					hideElement("combat-spell-" + _0x6A40 + "-cooldown")
				}
			}
		}
	}
}