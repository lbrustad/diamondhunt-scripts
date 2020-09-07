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
	var crossfilterable_layers = ["heal", "poison", "reflect", "fire", "teleport", "freeze", "ghostScan", "invisibility"];
	var expRecords = [3, 5, 3, 2, 0, 5, 0, 1];
	var layer_i = 0;
	for (; layer_i < crossfilterable_layers.length; layer_i++)
	{
		var id = crossfilterable_layers[layer_i];
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
				if (expRecords[layer_i] > getItem("heroMana"))
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
