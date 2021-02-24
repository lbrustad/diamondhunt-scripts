/**
 * refeshMagicInCombat extracted from ../../deobfuscated/bundle.js at line 5794-5832
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
	var _0x18EA1 = ["heal", "poison", "reflect", "fire", "teleport", "freeze", "ghostScan", "invisibility"];
	var _0x18E5B = [3, 5, 3, 2, 0, 5, 0, 1];
	for (var _0x14C0C = 0; _0x14C0C < _0x18EA1.length; _0x14C0C++)
	{
		var _0x18E7E = _0x18EA1[_0x14C0C];
		if (getItem(_0x18E7E) > 0)
		{
			showElement("combat-spell-" + _0x18E7E);
			if (getItem(_0x18E7E + "Cooldown") > 0)
			{
				document.getElementById("combat-spell-" + _0x18E7E + "-icon").style.filter = "brightness(10%)";
				showElement("combat-spell-" + _0x18E7E + "-cooldown")
			}
			else
			{
				if (_0x18E5B[_0x14C0C] > getItem("heroMana"))
				{
					document.getElementById("combat-spell-" + _0x18E7E + "-icon").style.filter = "brightness(20%) sepia(100%) hue-rotate(190deg) saturate(500%)";
					hideElement("combat-spell-" + _0x18E7E + "-cooldown")
				}
				else
				{
					document.getElementById("combat-spell-" + _0x18E7E + "-icon").style.filter = "brightness(100%)";
					hideElement("combat-spell-" + _0x18E7E + "-cooldown")
				}
			}
		}
	}
}