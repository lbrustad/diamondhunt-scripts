/**
 * hideOtherInterfacesForCombat extracted from ../../deobfuscated/bundle.js at line 14493-14556
 *
 * If this file doesn't contain a function, there is an error in ../raw/hideOtherInterfacesForCombat.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function hideOtherInterfacesForCombat(_0x578F)
{
	if (_0x578F)
	{
		document.getElementById("table-top-main-items").style.display = "none";
		document.getElementById("top-bar-skills").style.display = "none";
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("notification-area").style.display = "none";
		if (getItemString("monsterName") == "bushy")
		{
			changeBodyBackground("images/" + "forest" + "_background.png")
		}
		else
		{
			if (getItemString("monsterName") == "fireHawk")
			{
				changeBodyBackground("images/" + "lavaDungeon" + "_background.png")
			}
			else
			{
				if (getItemString("monsterName") == "piranhas")
				{
					changeBodyBackground("images/" + getItemString("monsterName") + "_background.png")
				}
				else
				{
					if (getItemString("currentFighingArea") != "none")
					{
						changeBodyBackground("images/" + getItemString("currentFighingArea") + "_background.png");
						if (getItemString("currentFighingArea") == "northernFields" || getItemString("monsterName") == "iceHawk")
						{
							if (!snowflakes_loaded)
							{
								generateSnowflakes()
							};
							changeBodyBackground("images/" + "northernFields" + "_background.png");
							document.getElementById("snowflakeContainer").style.display = "block"
						}
						else
						{
							document.getElementById("snowflakeContainer").style.display = "none"
						}
					}
				}
			}
		}
	}
	else
	{
		if (document.getElementById("minimize-btn").style.display != "none")
		{
			document.getElementById("table-top-main-items").style.display = ""
		};
		document.getElementById("top-bar-skills").style.display = "";
		document.getElementById("main-panel").style.display = "";
		document.getElementById("navigation-area-buttons").style.display = "";
		document.getElementById("notification-area").style.display = "";
		document.getElementById("chat-area").style.display = "";
		document.getElementById("snowflakeContainer").style.display = "none";
		resetBodyBackground()
	}
}