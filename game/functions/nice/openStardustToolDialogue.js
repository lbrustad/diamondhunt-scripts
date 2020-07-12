'use strict';

function openStardustToolDialogue(opt_type)
{
	var div = document.getElementById("dialogue-stardust-tools-socket-button");
	var playGraphic = document.getElementById("dialogue-stardust-tools-socket-image");
	var settingDiv = document.getElementById("dialogue-stardust-tools-socket-gem-label");
	var settings;
	if (opt_type == "stardustPickaxe")
	{
		settings = getPickaxeTypeData();
		var setting = settings[2];
	}
	if (opt_type == "stardustHammer")
	{
		settings = getHammerTypeData();
		setting = settings[2];
	}
	if (setting == "none")
	{
		div.style.display = "none";
	}
	else
	{
		playGraphic.src = "images/" + setting + ".png";
		div.style.display = "";
		div.setAttribute("onclick", "confirmSocketDialogue('" + opt_type + "','images/" + settings[0] + ".png','" + setting + "');closeDialogue('dialogue-stardust-tools')");
		settingDiv.innerHTML = setting;
	}
	var map = global_stardustToolsMap[opt_type];
	var crossfilterable_layers = map.arrayItemsToConvertArray;
	var typeSuper = map.arrayItemsConvetXpArray;
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = "";
	var fsHTML = "";
	var layer_i = 0;
	for (; layer_i < crossfilterable_layers.length; layer_i++)
	{
		fsHTML = fsHTML + generateHTMLToSelectToolConversionItem(opt_type, crossfilterable_layers[layer_i], typeSuper[layer_i]);
	}
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = fsHTML;
	openDialogueOverride("dialogue-stardust-tools", "large");
};
