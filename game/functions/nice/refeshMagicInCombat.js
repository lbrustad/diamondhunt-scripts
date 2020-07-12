'use strict';

function refeshMagicInCombat()
{
	if (getItem("heal") == 1)
	{
		showElement("fighting-screen-magic-area");
	}
	else
	{
		return;
	}
	var mapboxIds = ["heal", "poison", "reflect", "fire", "teleport"];
	var conf_shortcuts_icon = [3, 5, 3, 2, 0];
	var i = 0;
	for (; i < mapboxIds.length; i++)
	{
		var id = mapboxIds[i];
		if (getItem(id) > 0)
		{
			showElement("combat-spell-" + id);
			if (getItem(id + "Cooldown") > 0)
			{
				document.getElementById("combat-spell-" + id + "-icon").style.filter = "brightness(10%)";
				showElement("combat-spell-" + id + "-cooldown");
			}
			else
			{
				if (conf_shortcuts_icon[i] > getItem("heroMana"))
				{
					document.getElementById("combat-spell-" + id + "-icon").style.filter = "brightness(20%) sepia(100%) hue-rotate(190deg) saturate(500%)";
					hideElement("combat-spell-" + id + "-cooldown");
				}
				else
				{
					document.getElementById("combat-spell-" + id + "-icon").style.filter = "brightness(100%)";
					hideElement("combat-spell-" + id + "-cooldown");
				}
			}
		}
	}
};
