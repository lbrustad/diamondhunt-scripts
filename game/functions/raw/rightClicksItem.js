/**
 * rightClicksItem extracted from ../../deobfuscated/bundle.js at line 7192-7296
 *
 * If this file doesn't contain a function, there is an error in ../raw/rightClicksItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function rightClicksItem(_0x16255)
{
	if (global_equipmentMap[_0x16255] != null)
	{
		if (getItem("needle") > 0)
		{
			if (_0x16255.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
				return false
			}
			else
			{
				if (_0x16255.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
					return false
				}
				else
				{
					if (_0x16255.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
						return false
					}
					else
					{
						if (_0x16255.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
							return false
						}
						else
						{
							if (_0x16255.startsWith("reaper"))
							{
								confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
								return false
							}
						}
					}
				}
			}
		}
	};
	if (global_foodMap[_0x16255] != null)
	{
		if (_0x16255.startsWith("raw"))
		{
			if (global_foodMap[_0x16255].heat != null)
			{
				var _0x19B58 = global_foodMap[_0x16255].heat;
				var _0x19B7B = getItem("heat") / global_foodMap[_0x16255].heat;
				_0x19B7B = parseInt(_0x19B7B);
				if (_0x19B7B > getItem(_0x16255))
				{
					_0x19B7B = getItem(_0x16255)
				};
				if (_0x19B7B > 0)
				{
					sendBytes("COOK=" + _0x16255 + "~" + _0x19B7B)
				};
				return false
			}
		}
	};
	if (_0x16255 == "monsterCanvas")
	{
		if (getItem("greenShinyMonsterOrbBound") > 0)
		{
			sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyMonsterOrbBound~none")
		};
		return false
	};
	if (_0x16255.startsWith("PLOT_"))
	{
		var _0x19B9E = _0x16255.split("_")[1];
		if (_0x16255.endsWith("WOODCUTTING"))
		{
			if (getItem("greenShinyWoodcuttingOrbBound") > 0)
			{
				sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyWoodcuttingOrbBound~" + _0x19B9E)
			}
		};
		if (_0x16255.endsWith("FARMING"))
		{
			if (getItem("greenShinyFarmingOrbBound") > 0)
			{
				sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyFarmingOrbBound~" + _0x19B9E)
			}
		};
		return false
	};
	if (_0x16255.endsWith("Seeds") && getItem("planter") == 1)
	{
		sendBytes("PLANTER=" + _0x16255);
		return false
	};
	switch (_0x16255)
	{
	case "planter":
		sendBytes("HARVEST_PLANTER");
		return false
	}
}