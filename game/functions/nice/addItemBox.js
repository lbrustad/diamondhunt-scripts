'use strict';

function addItemBox(name, getterOrType, setterOrGetter, switchTextDiv, p_color, itemVal, itemDisplay, data, itemStyle)
{
	var text = document.getElementById(switchTextDiv);
	var element = document.createElement("div");
	element.setAttribute("class", "item-box");
	element.setAttribute("onclick", "clicksItem('" + name + "')");
	element.setAttribute("oncontextmenu", "return rightClicksItem('" + name + "');");
	element.setAttribute("id", "item-box-" + name);
	if (data != "")
	{
		element.setAttribute("data-tooltip-id", data);
	}
	element.style.backgroundColor = p_color;
	element.style.border = "1px solid " + itemVal;
	var img = document.createElement("div");
	img.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	if (name.startsWith("stardust") && !name.endsWith("Potion") && !name.endsWith("Seeds"))
	{
		var image = getImage("images/stardustIcon.png", "item-" + name + "-box-image-title-icon");
		image.setAttribute("class", "img-20");
		img.appendChild(image);
	}
	if (name == "sapphire" || name == "ruby" || name == "emerald" || name == "diamond" || name == "bloodDiamond")
	{
		img.setAttribute("style", "text-align:center; font-weight: bold;color:cyan;");
	}
	img.innerHTML += itemDisplay;
	if (itemStyle)
	{
		img.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;");
	}
	var thisSystemDiv = document.createElement("div");
	thisSystemDiv.setAttribute("style", "text-align:center");
	var style = getImage("images/" + name + getImageExtention(name), "item-" + name + "-box-image");
	style.setAttribute("id", "item-box-" + name + "-image");
	style.setAttribute("class", "img-100");
	var wrapper = document.createElement("item-" + name);
	wrapper.setAttribute("type", "number");
	wrapper.setAttribute("style", "text-align:center;display:block;");
	wrapper.innerHTML = formatNumber(getItem(name), false);
	if (getterOrType == 1)
	{
		wrapper = document.createElement("div");
		wrapper.setAttribute("style", "text-align:center");
		wrapper.setAttribute("id", "itemBox-" + name + "-amount");
		wrapper.innerHTML = "";
	}
	if (name == "researcher")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<b style='color:orange;'>Completed: </b>" + "<span id='research-completed-label'>" + getTotalResearches() + "</span>";
	}
	if (getOilPerSecondForAItem(name) > 0)
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<div style='margin-top:7px;'><img src='images/oil.png' class='img-20' /> " + formatNumber(getOilPerSecondForAItem(name)) + "</div>";
	}
	if (name.toLowerCase().endsWith("oxygentank"))
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<span id='oxygenTank-itemBox-value'></span>";
	}
	if (name.toLowerCase().endsWith("chef"))
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<span id='chef-itemBox-value'></span>";
	}
	if (name.toLowerCase().endsWith("bonemealbin"))
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/bonemeal.png' class='img-20' /> " + "<item-bonemeal>0</item-bonemeal>";
	}
	if (name == "axe")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> 5 - 10";
	}
	if (name == "sapphireAxe")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> 10 - 15";
	}
	if (name == "emeraldAxe")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> 15 - 20";
	}
	if (name == "rubyAxe")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> 20 - 25";
	}
	if (name == "diamondAxe")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> 25 - 30";
	}
	if (name == "chainsaw")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> +5";
	}
	if (name == "pirate")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:none;color:grey");
		wrapper.setAttribute("id", "item-box-data-pirate");
		wrapper.innerHTML = "<img src='images/spyglass.png' class='img-20' />";
	}
	if (name == "oilFactory" || name == "promethiumOilFactory" || name == "titaniumOilFactory")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<img src='images/oil.png' class='img-20' /> <item-oilFactoryWorkers>0</item-oilFactoryWorkers>";
	}
	if (name == "sapphireChainsaw")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> +10";
	}
	if (name == "emeraldChainsaw")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> +15";
	}
	if (name == "rubyChainsaw")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> +20";
	}
	if (name == "diamondChainsaw")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/logs.png' class='img-20' /> +25";
	}
	if (name == "trowel")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/seedList.png' class='img-20' /> +5%";
	}
	if (name == "explorer")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/lootBag_black.png' class='img-20' /> <span id='" + name + "-status'>0</span>";
	}
	if (name == "watch" || name == "sapphireWatch" || name == "emeraldWatch" || name == "rubyWatch" || name == "diamondWatch")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<div id='" + name + "-status'>Not Set</div>";
	}
	if (name == "sapphireTrowel")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/seedList.png' class='img-20' /> +10%";
	}
	if (name == "emeraldTrowel")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/seedList.png' class='img-20' /> +15%";
	}
	if (name == "rubyTrowel")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/seedList.png' class='img-20' /> +20%";
	}
	if (name == "diamondTrowel")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<img src='images/seedList.png' class='img-20' /> +25%";
	}
	if (name == "museum")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;color:grey");
		wrapper.innerHTML = "<span id='museum-info-itembox'>" + getMuseumItemsCount()[0] + "/" + getMuseumItemsCount()[1] + "</span>";
	}
	if (name == "puzzleChest1")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<b>Difficulty:</b> <img src='images/easyIcon.png' class='img-20' /> " + "Easy";
	}
	if (name == "manaStars")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<span id='span-manaStarsLabel'></span>";
	}
	if (name.endsWith("Oven"))
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("type", "number");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<img src='images/heat.png' class='img-20' /> " + "<item-heat>0</item-heat>";
	}
	if (name == "darkCrystalUsed")
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("style", "text-align:center;display:block;");
		wrapper.innerHTML = "<span id='darkCrystalUsed-label'></span>";
	}
	if (name.toLowerCase().endsWith("stew"))
	{
		wrapper = document.createElement("span");
		wrapper.setAttribute("style", "text-align:center;display:block;font-size:9pt;");
		wrapper.innerHTML = "<img src='images/energy.png' class='img-20' /> <item-stewEnergy type='number'>0</item-stewEnergy> " + "<br /> <img src='images/hourglass_grey.png' class='img-20' /> <item-stewCooldownReduction type='timer'>0</item-stewCooldownReduction>";
	}
	element.appendChild(img);
	thisSystemDiv.appendChild(style);
	element.appendChild(thisSystemDiv);
	if (!itemStyle)
	{
		if (getItem(name, false) == 0)
		{
			element.style.display = "none";
		}
		element.appendChild(wrapper);
	}
	text.appendChild(element);
};
