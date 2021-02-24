/**
 * openOilFactoryDialogue extracted from ../../deobfuscated/bundle.js at line 21616-21639
 *
 * If this file doesn't contain a function, there is an error in ../raw/openOilFactoryDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openOilFactoryDialogue()
{
	if (getItem("oilFactory") == 1)
	{
		document.getElementById("dialogue-oilFactory-image").src = "images/" + "oilFactory" + ".png"
	}
	else
	{
		if (getItem("promethiumOilFactory") == 1)
		{
			document.getElementById("dialogue-oilFactory-image").src = "images/" + "promethiumOilFactory" + ".png"
		}
		else
		{
			if (getItem("titaniumOilFactory") == 1)
			{
				document.getElementById("dialogue-oilFactory-image").src = "images/" + "titaniumOilFactory" + ".png"
			}
		}
	};
	document.getElementById("dialogue-oilFactory-capacity").innerHTML = getOilFactoryCapacity();
	document.getElementById("dialogue-oilFactory-input").value = getOilFactoryCapacity() - getItem("oilFactoryWorkers");
	openDialogue("dialogue-oilFactory")
}