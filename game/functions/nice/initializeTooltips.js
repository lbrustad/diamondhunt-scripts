'use strict';

function initializeTooltips()
{
	var text = "";
	document.getElementById("dynamic-tooltips-area").innerHTML = "";
	var id = 0;
	for (; id < global_foodMap.length; id++)
	{
		var data = global_foodMap[id];
		if (data.rawFoodName != "none")
		{
			text = text + ("<div id='tooltip-" + data.rawFoodName + "' style='display:none;'>");
			text = text + ("<h2>" + getItemName(data.rawFoodName) + "</h2>");
			text = text + ("<img src='images/heat.png' class='img-30' /> " + formatNumber(data.heat) + " heat");
			text = text + "<br />";
			text = text + ("<img src='images/energy.png' class='img-30' /> " + formatNumber(data.energy) + " energy");
			text = text + "<br />";
			text = text + ("<img src='images/cookingSkill.png' class='img-30' /> Level " + data.cookLevel + " <span style='color:grey'>(" + formatNumber(data.xp) + " XP)</span>");
			text = text + "<br />";
			text = text + "<hr class='hr-thin' />";
			text = text + data.desc;
			text = text + "</div>";
		}
		text = text + ("<div id='tooltip-" + data.cookedFoodName + "' style='display:none;'>");
		text = text + ("<h2>" + getItemName(data.cookedFoodName) + "</h2>");
		text = text + ("<img src='images/energy.png' class='img-30' /> " + formatNumber(data.energy) + " energy");
		text = text + "<br />";
		text = text + "<hr class='hr-thin' />";
		text = text + data.desc;
		text = text + "</div>";
	}
	id = 0;
	for (; id < global_seedMap.length; id++)
	{
		var data = global_seedMap[id];
		text = text + ("<div id='tooltip-" + data.name + "' style='display:none;'>");
		text = text + ("<h2>" + getItemName(data.name) + "</h2>");
		text = text + ("<img style='margin:3px;' src='images/farmingSkill.png' class='img-30' /> Level " + formatNumber(data.level) + " <span style='color:grey'>(" + formatNumber(data.xp) + " xp)</span>");
		text = text + "<br />";
		var th_field = "";
		if (data.stopsDieingAtLevel == 0)
		{
			text = text + ("<img style='margin:3px;' src='images/" + data.name.substr(0, data.name.length - 5) + ".png' class='img-30' /> Cannot die <img src='images/check.png' class='img-15' />");
		}
		else
		{
			if (getLevel(getItem("farmingXp")) >= data.stopsDieingAtLevel)
			{
				text = text + ("<img style='margin:3px;' src='images/" + data.name.substr(0, data.name.length - 5) + ".png' class='img-30' /> Stops dying level: " + formatNumber(data.stopsDieingAtLevel) + " <img src='images/check.png' class='img-15' />");
			}
			else
			{
				text = text + ("<img style='margin:3px;' src='images/deadLeaf.png' class='img-30' /> Stops dying level: " + formatNumber(data.stopsDieingAtLevel) + " <img src='images/x.png' class='img-15' />");
			}
		}
		if (parseInt(data.bonemeal) > 0)
		{
			if (getItem("bonemeal") >= parseInt(data.bonemeal))
			{
				text = text + "<br />";
				text = text + ("<img style='margin:3px;' src='images/bonemeal.png' class='img-30' /> Bonemeal: " + formatNumber(parseInt(data.bonemeal)) + " <img src='images/check.png' class='img-15' />");
			}
			else
			{
				text = text + "<br />";
				text = text + ("<img style='margin:3px;' src='images/bonemeal.png' class='img-30' /> Bonemeal: " + formatNumber(parseInt(data.bonemeal)) + " <img src='images/x.png' class='img-15' />");
			}
		}
		text = text + "<br />";
		text = text + ("<img style='margin:3px;' src='images/hourglass_grey.png' class='img-30' />" + formatTime(data.timer));
		text = text + "<br />";
		text = text + "<hr class='hr-thin' />";
		text = text + data.desc;
		text = text + "</div>";
	}
	id = 0;
	for (; id < global_machineryMap.length; id++)
	{
		var options = global_machineryMap[id];
		text = text + ("<div id='tooltip-" + options.machineryName + "' style='display:none;'>");
		text = text + ("<div style='font-size:16pt;font-weight:bold;margin-top:10px;'>" + getItemName(options.machineryName) + "</div>");
		if (options.oil > 0)
		{
			text = text + ("<br /><img src='images/oil.png' class='img-20' /> " + options.oil);
		}
		text = text + "<br />";
		text = text + "<hr class='hr-thin' />";
		var color = "";
		var precision = "";
		var number = "";
		color = "stone";
		precision = options.stoneChance;
		number = 86400 / precision;
		if (number % 1 != 0)
		{
			number = number.toFixed(2);
		}
		if (number >= 10)
		{
			number = formatNumber(parseInt(number));
		}
		if (getItem(color + "Total") > 0)
		{
			text = text + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			text = text + "<img src='images/ore_black.png' class='img-20' /> <b>???</b><br />";
		}
		text = text + "<br />";
		color = "copper";
		precision = options.copperChance;
		number = 86400 / precision;
		if (number % 1 != 0)
		{
			number = number.toFixed(2);
		}
		if (number >= 10)
		{
			number = formatNumber(parseInt(number));
		}
		if (getItem(color + "Total") > 0)
		{
			text = text + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			text = text + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		text = text + "<br />";
		color = "iron";
		precision = options.ironChance;
		number = 86400 / precision;
		if (number % 1 != 0)
		{
			number = number.toFixed(2);
		}
		if (number >= 10)
		{
			number = formatNumber(parseInt(number));
		}
		if (getItem(color + "Total") > 0)
		{
			text = text + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			text = text + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		text = text + "<br />";
		color = "silver";
		precision = options.silverChance;
		number = 86400 / precision;
		if (number % 1 != 0)
		{
			number = number.toFixed(2);
		}
		if (number >= 10)
		{
			number = formatNumber(parseInt(number));
		}
		if (getItem(color + "Total") > 0)
		{
			text = text + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			text = text + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		text = text + "<br />";
		color = "gold";
		precision = options.goldChance;
		number = 86400 / precision;
		if (number % 1 != 0)
		{
			number = number.toFixed(2);
		}
		if (number >= 10)
		{
			number = formatNumber(parseInt(number));
		}
		if (getItem(color + "Total") > 0)
		{
			text = text + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			text = text + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		text = text + "<br />";
		color = "promethium";
		precision = options.promethiumChance;
		number = 86400 / precision;
		if (number % 1 != 0)
		{
			number = number.toFixed(2);
		}
		if (number >= 10)
		{
			number = formatNumber(parseInt(number));
		}
		if (getItem(color + "Total") > 0)
		{
			text = text + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			text = text + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		text = text + "<br />";
		text = text + "</div>";
	}
	id = 0;
	for (; id < global_equipmentMap.length; id++)
	{
		var item = global_equipmentMap[id];
		text = text + ("<div id='tooltip-" + item.name + "' style='display:none;'>");
		text = text + ("<h2>" + getItemName(item.name) + "</h2>");
		text = text + "<span style='font-size:14pt'>";
		if (item.type != "none")
		{
			text = text + ("<img src='images/" + item.type + ".png' class='img-20' /> " + getItemName(item.type) + " Attack");
			text = text + "<br />";
			text = text + "<br />";
		}
		if (item.attack != "0")
		{
			text = text + ("<img src='images/attack_black.png' class='img-30' /> " + item.attack);
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
		}
		if (item.accuracy != "0")
		{
			text = text + ("<img src='images/accuracy_black.png' class='img-30' /> " + item.accuracy);
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
		}
		if (item.speed != "0")
		{
			text = text + ("<img src='images/speed_black.png' class='img-30' /> " + item.speed);
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
		}
		if (item.defence != "0")
		{
			text = text + ("<img src='images/defence_black.png' class='img-30' /> " + item.defence);
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
		}
		if (item.magic != "0")
		{
			text = text + ("<img src='images/magic_black.png' class='img-30' /> " + item.magic);
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
			text = text + "&nbsp;";
		}
		text = text + "</span>";
		text = text + "<br />";
		text = text + "<hr class='hr-thin' />";
		text = text + item.desc;
		text = text + "</div>";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-feather", "feather", "Feathers", "Can be used to make arrows with the crafting skill.<br /><br /><img src='images/craftingSkill.png' class='img-30' /> <b>Click to craft arrows.</b>");
	text = text + generateHTMLGeneralTooltip("tooltip-stardustPickaxe", "stardustPickaxe", "Stardust Pickaxe", "Can be used to convert ores into <img src='images/miningSkill.png' class='img-20' /> <span style='color:#804000'>mining</span> XP at the cost of <img src='images/stardustIcon.png' class='img-20' /> <span style='color:#804000'>stardust</span>.");
	text = text + generateHTMLGeneralTooltip("tooltip-stardustHammer", "stardustHammer", "Stardust Hammer", "Can be used to convert bars into <img src='images/craftingSkill.png' class='img-20' /> <span style='color:#804000'>crafting</span> XP at the cost of <img src='images/stardustIcon.png' class='img-20' /> <span style='color:#804000'>stardust</span>.");
	text = text + generateHTMLGeneralTooltip("tooltip-furnace", "stoneFurnace", "Furnace", "<b>Capacity:</b> " + "<item-furnaceCapacity>0</item-furnaceCapacity>" + "<br /><br /><img src='images/bronzeBars.png' class='img-20' /> <item-copperSmeltedTotal type='number'>0</item-copperSmeltedTotal><br /><img src='images/ironBars.png' class='img-20' /> <item-ironSmeltedTotal type='number'>0</item-ironSmeltedTotal><br /><img src='images/silverBars.png' class='img-20' /> <item-silverSmeltedTotal type='number'>0</item-silverSmeltedTotal><br /><img src='images/goldBars.png' class='img-20' /> <item-goldSmeltedTotal type='number'>0</item-goldSmeltedTotal><br /><img src='images/promethiumBars.png' class='img-20' /> <item-promethiumSmeltedTotal type='number'>0</item-promethiumSmeltedTotal>");
	text = text + generateHTMLGeneralTooltip("tooltip-stone", "stone", "Stone", "A common ore.");
	text = text + generateHTMLGeneralTooltip("tooltip-copper", "copper", "Copper", "Can be smelted into <img src='images/bronzeBars.png' class='img-20' /> bronze bars.");
	text = text + generateHTMLGeneralTooltip("tooltip-iron", "iron", "Iron", "Can be smelted into <img src='images/ironBars.png' class='img-20' />  iron bars.");
	text = text + generateHTMLGeneralTooltip("tooltip-silver", "silver", "Silver", "Can be smelted into <img src='images/silverBars.png' class='img-20' />  silver bars.");
	text = text + generateHTMLGeneralTooltip("tooltip-gold", "gold", "Gold", "Can be smelted into <img src='images/goldBars.png' class='img-20' />  gold bars.");
	text = text + generateHTMLGeneralTooltip("tooltip-promethium", "promethium", "Promethium", "Can be smelted into <img src='images/promethiumBars.png' class='img-20' />  promethium bars.");
	text = text + generateHTMLGeneralTooltip("tooltip-pearl", "pearl", "Pearl", "Found inside of an oyster.");
	text = text + generateHTMLGeneralTooltip("tooltip-oyster", "oyster", "Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don't want to gamble.");
	text = text + generateHTMLGeneralTooltip("tooltip-bronzeBars", "bronzeBars", "Bronze Bar", "A bar made of copper.");
	text = text + generateHTMLGeneralTooltip("tooltip-ironBars", "ironBars", "Iron Bar", "A bar made of iron.");
	text = text + generateHTMLGeneralTooltip("tooltip-silverBars", "silverBars", "Silver Bar", "A bar made of silver.");
	text = text + generateHTMLGeneralTooltip("tooltip-goldBars", "goldBars", "Gold Bar", "A bar made of gold.");
	text = text + generateHTMLGeneralTooltip("tooltip-promethiumBars", "promethiumBars", "Promethium Bar", "A bar made of promethium.");
	text = text + generateHTMLGeneralTooltip("tooltip-snakeskin", "snakeskin", "Snakeskin", "<img src='images/craftingSkill.png' class='img-20' /> Click to craft.");
	text = text + generateHTMLGeneralTooltip("tooltip-bearFur", "bearFur", "Bear Fur", "<img src='images/craftingSkill.png' class='img-20' /> Click to craft.");
	text = text + generateHTMLGeneralTooltip("tooltip-polarBearFur", "polarBearFur", "Polar Bear Fur", "<img src='images/craftingSkill.png' class='img-20' /> Click to craft.");
	text = text + generateHTMLGeneralTooltip("tooltip-bluePrints", "bluePrints", "Blueprints", "Click to follow and craft.");
	text = text + generateHTMLGeneralTooltip("tooltip-strangeLeaf", "strangeLeaf", "Strange Leaf", "A rare secondary brewing ingredient.");
	text = text + generateHTMLGeneralTooltip("tooltip-ironBucket", "ironBucket", "Silver Bucket", "Killing a lava type monster will let you collect a bucket of lava.");
	text = text + generateHTMLGeneralTooltip("tooltip-donorWoodcuttingPatch", "", "Donor Perk", "Unlocks an extra woodcutting patch.");
	text = text + generateHTMLGeneralTooltip("tooltip-donorFarmingPlot", "", "Donor Perk", "Unlocks an extra farming patch.");
	text = text + generateHTMLGeneralTooltip("tooltip-donorMoreOfflineTime", "", "Donor Perk", "Grants you 12h of offline time instead of 8h.");
	text = text + generateHTMLGeneralTooltip("tooltip-donorBonusXp", "", "Donor Perk", "Every source of XP is increased by 10%.");
	text = text + generateHTMLGeneralTooltip("tooltip-stardustBox1", "", "Stardust Box", "<img src='images/stardustIcon.png' class='img-20' /> 0 - 2000 Stardust.");
	text = text + generateHTMLGeneralTooltip("tooltip-stardustBox2", "", "Stardust Box", "<img src='images/stardustIcon.png' class='img-20' /> 0 - 15000 Stardust.");
	text = text + generateHTMLGeneralTooltip("tooltip-sapphireGlassHand", "", "Glass Hand", "<img src='images/museum.png' class='img-20' /> Shiny from every angle!");
	text = text + generateHTMLGeneralTooltip("tooltip-emeraldGlassHand", "", "Glass Hand", "<img src='images/museum.png' class='img-20' /> Very shiny from every angle!");
	text = text + generateHTMLGeneralTooltip("tooltip-brokenStinger", "", "Broken Stinger", "<img src='images/museum.png' class='img-20' /> Normally, I would be able to use this as a weapon.  Too bad it's broken.");
	text = text + generateHTMLGeneralTooltip("tooltip-snakeBones", "", "Snake Bones", "<img src='images/museum.png' class='img-20' /> The remains of a giant snake who roamed the forest.");
	text = text + generateHTMLGeneralTooltip("tooltip-skeletonSkull", "", "Skull", "<img src='images/museum.png' class='img-20' /> Obtained from a skeleton in the caves.");
	text = text + generateHTMLGeneralTooltip("tooltip-ghostClothes", "", "Ghost Clothes", "<img src='images/museum.png' class='img-20' /> This belonged to the roaming ghost around the farm lands.");
	text = text + generateHTMLGeneralTooltip("tooltip-cockroach", "", "Giant Cockroach", "<img src='images/museum.png' class='img-20' /> Crunch.");
	text = text + generateHTMLGeneralTooltip("tooltip-goldenCockroach", "", "Golden Cockroach", "<img src='images/museum.png' class='img-20' /> Perhaps this can be smelted into a gold bar.  Wait no, that's cruel.");
	text = text + generateHTMLGeneralTooltip("tooltip-yetiLeftFoot", "", "Yeti's Left Foot", "<img src='images/museum.png' class='img-20' /> It's still cold.");
	text = text + generateHTMLGeneralTooltip("tooltip-yetiRightFoot", "", "Yeti's Right Foot", "<img src='images/museum.png' class='img-20' /> Yep, still cold.");
	text = text + generateHTMLGeneralTooltip("tooltip-smallSeaShell", "", "Small Shell", "<img src='images/museum.png' class='img-20' /> Found on the ocean floors.");
	text = text + generateHTMLGeneralTooltip("tooltip-mediumSeaShell", "", "Medium Shell", "<img src='images/museum.png' class='img-20' /> Found on the ocean floors.");
	text = text + generateHTMLGeneralTooltip("tooltip-largeSeaShell", "", "Large Shell", "<img src='images/museum.png' class='img-20' /> Found on the ocean floors.");
	text = text + generateHTMLGeneralTooltip("tooltip-mould", "craftingMould", "Crafting Mould", "Can be used to craft a specific item.<br /><br /><i>Click to operate</i>");
	text = text + generateHTMLGeneralTooltip("tooltip-carePackage", "carePackage", "Care Package", "I can buy one of these everytime I upgrade the shop!");
	text = text + generateHTMLGeneralTooltip("tooltip-gem", "gem", "Gem", "I can use these to socket tools granting them more power.");
	text = text + generateHTMLGeneralTooltip("tooltip-smallManaStar", "", "Mana Star <span style='color:grey'>(Small)</span>", "<img src='images/largeManaStar.png' class='img-30' /> Permanently increases mana by 1.");
	text = text + generateHTMLGeneralTooltip("tooltip-mediumManaStar", "", "Mana Star <span style='color:grey'>(Medium)</span>", "<img src='images/largeManaStar.png' class='img-30' /> Permanently increases mana by 2.");
	text = text + generateHTMLGeneralTooltip("tooltip-largeManaStar", "", "Mana Star <span style='color:grey'>(Large)</span>", "<img src='images/largeManaStar.png' class='img-30' /> Permanently increases mana by 3.");
	text = text + generateHTMLGeneralTooltip("tooltip-hugeManaStar", "", "Mana Star <span style='color:grey'>(Huge)</span>", "<img src='images/largeManaStar.png' class='img-30' />  Permanently increases mana by 5.");
	text = text + generateHTMLGeneralTooltip("tooltip-donorCoins", "", "Tradable Donor Coins", "Donor coins may be used to buy temporary buffs that last for 30 days.<br /><br />These are currently tradable on the market, to use them in the donor shop; you must first bind them to your account.<br /><br /><span style='color:green'>Click to bind coins to your account</span>");
	text = text + generateHTMLGeneralTooltip("tooltip-colorCrystal", "useless", "Sky Crystal", "It seems to be attracted to the dark crystal.");
	text = text + generateHTMLGeneralTooltip("tooltip-shovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(4000) + "<span style='color:grey'> (~" + 21 + " per day)</span>"));
	text = text + generateHTMLGeneralTooltip("tooltip-sapphireShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(3500) + "<span style='color:grey'> (~" + 24 + " per day)</span>"));
	text = text + generateHTMLGeneralTooltip("tooltip-emeraldShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(3000) + "<span style='color:grey'> (~" + 28 + " per day)</span>"));
	text = text + generateHTMLGeneralTooltip("tooltip-rubyShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(2500) + "<span style='color:grey'> (~" + 34 + " per day)</span>"));
	text = text + generateHTMLGeneralTooltip("tooltip-diamondShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(2000) + "<span style='color:grey'> (~" + 43 + " per day)</span>"));
	text = text + generateHTMLGeneralTooltip("tooltip-logs", "logs", "Logs", "Obtained from cutting a tree.");
	text = text + generateHTMLGeneralTooltip("tooltip-oakLogs", "oakLogs", "Oak Logs", "Obtained from cutting a specific tree.");
	text = text + generateHTMLGeneralTooltip("tooltip-willowLogs", "willowLogs", "Willow Logs", "Obtained from cutting a specific tree.");
	text = text + generateHTMLGeneralTooltip("tooltip-mapleLogs", "mapleLogs", "Maple Logs", "Obtained from cutting a specific tree.");
	text = text + generateHTMLGeneralTooltip("tooltip-bambooLogs", "bambooLogs", "Bamboo Logs", "Obtained from cutting a specific tree.");
	text = text + generateHTMLGeneralTooltip("tooltip-lavaLogs", "lavaLogs", "Lava Logs", "Obtained from cutting a specific tree.<br /><br /><img src='images/ironBucket.png' class='img-30' /> 2% chance of getting lava when used with oven, assuming you have empty buckets.");
	text = text + generateHTMLGeneralTooltip("tooltip-stardustLogs", "stardustLogs", "Stardust Logs", "Obtained from cutting a specific tree.");
	text = text + generateHTMLGeneralTooltip("tooltip-oven", "oven", "COOKING OVEN", "<b>Burn rate: " + parseInt(getBurnRate() * 100) + "%</b>");
	text = text + generateHTMLGeneralTooltip("tooltip-dottedGreenLeaf", "dottedGreenLeaf", "DOTTED GREEN LEAF", "A primary brewing ingredient.");
	text = text + generateHTMLGeneralTooltip("tooltip-greenLeaf", "greenLeaf", "GREEN LEAF", "A primary brewing ingredient.");
	text = text + generateHTMLGeneralTooltip("tooltip-limeLeaf", "limeLeaf", "LIME LEAF", "A primary brewing ingredient.");
	text = text + generateHTMLGeneralTooltip("tooltip-goldLeaf", "goldLeaf", "GOLD LEAF", "A primary brewing ingredient.");
	text = text + generateHTMLGeneralTooltip("tooltip-crystalLeaf", "crystalLeaf", "CRYSTAL LEAF", "A primary brewing ingredient.");
	text = text + generateHTMLGeneralTooltip("tooltip-stripedGoldLeaf", "stripedGoldLeaf", "STRIPED GOLD LEAF", "A primary brewing ingredient.");
	text = text + generateHTMLGeneralTooltip("tooltip-stripedCrystalLeaf", "stripedCrystalLeaf", "STRIPED CRYSTAL LEAF", "A primary brewing ingredient.");
	text = text + generateHTMLGeneralTooltip("tooltip-redMushroom", "redMushroom", "RED MUSHROOM", "A secondary brewing ingredient.");
	var pix_color = "";
	pix_color = pix_color + "<br /><img src='images/rawShrimp.png' class='img-30' /> Shrimp";
	if (getItem("sapphireSmallFishingNetTotal") > 0 || getItem("sapphireSmallFishingNet") > 0)
	{
		pix_color = pix_color + "<br /><img src='images/rawAnchovy.png' class='img-30' /> Anchovy";
	}
	if (getItem("emeraldSmallFishingNetTotal") > 0 || getItem("emeraldSmallFishingNet") > 0)
	{
		pix_color = pix_color + "<br /><img src='images/rawSardine.png' class='img-30' /> Sardine";
	}
	if (getItem("rubySmallFishingNetTotal") > 0 || getItem("rubySmallFishingNet") > 0)
	{
		pix_color = pix_color + "<br /><img src='images/rawCrab.png' class='img-30' /> Crab";
	}
	if (getItem("diamondSmallFishingNetTotal") > 0 || getItem("diamondSmallFishingNet") > 0)
	{
		pix_color = pix_color + "<br /><img src='images/rawPiranha.png' class='img-30' /> Piranhas";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-smallFishingNet", "varNameIfSellable", "Small Fishing Net", "<b>Catch size: </b> Small<br />" + pix_color);
	var summaryHtml = "";
	summaryHtml = summaryHtml + "<br /><img src='images/rawTrout.png' class='img-30' /> Trout";
	if (getItem("sapphireFishingRodTotal") > 0 || getItem("sapphireFishingRod") > 0)
	{
		summaryHtml = summaryHtml + "<br /><img src='images/rawSalmon.png' class='img-30' /> Salmon";
	}
	if (getItem("emeraldFishingRodTotal") > 0 || getItem("emeraldFishingRod") > 0)
	{
		summaryHtml = summaryHtml + "<br /><img src='images/rawEel.png' class='img-30' /> Eel";
	}
	if (getItem("rubyFishingRodTotal") > 0 || getItem("rubyFishingRod") > 0)
	{
		summaryHtml = summaryHtml + "<br /><img src='images/rawSeaTurtle.png' class='img-30' /> Sea Turtle";
	}
	if (getItem("diamondFishingRodTotal") > 0 || getItem("diamondFishingRod") > 0)
	{
		summaryHtml = summaryHtml + "<br /><img src='images/rawRainbowFish.png' class='img-30' /> Rainbow Fish";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-fishingRod", "varNameIfSellable", "Fishing Rod", "<b>Catch size: </b> Medium<br />" + summaryHtml);
	var gltp = "";
	gltp = gltp + "<br /><img src='images/rawTuna.png' class='img-30' /> Tuna";
	if (getItem("sapphireHarpoonTotal") > 0 || getItem("sapphireHarpoon") > 0)
	{
		gltp = gltp + "<br /><img src='images/rawSwordfish.png' class='img-30' /> Swordfish";
	}
	if (getItem("emeraldHarpoonTotal") > 0 || getItem("emeraldHarpoon") > 0)
	{
		gltp = gltp + "<br /><img src='images/rawMantaRay.png' class='img-30' /> Manta Ray";
	}
	if (getItem("rubyHarpoonTotal") > 0 || getItem("rubyHarpoon") > 0)
	{
		gltp = gltp + "<br /><img src='images/rawShark.png' class='img-30' /> Shark";
	}
	if (getItem("diamondHarpoonTotal") > 0 || getItem("diamondHarpoon") > 0)
	{
		gltp = gltp + "<br /><img src='images/rawWhale.png' class='img-30' /> Whale";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-harpoon", "varNameIfSellable", "Harpoon", "<b>Catch size: </b> Large<br />" + gltp);
	var _a_ = 0;
	var _b_ = "<img src='images/check.png' class='img-20'  />";
	_a_ = 1;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-spellScrollHeal", "spellScrollHeal", "HEAL", "<img src='images/magicSkill.png' class='img-20' /> " + 1 + " magic required. " + _b_);
	_a_ = 10;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-spellScrollPoison", "", "POISON", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 15;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-spellScrollReflect", "", "REFLECT", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 20;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-spellScrollFire", "", "FIRE", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 25;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	text = text + generateHTMLGeneralTooltip("tooltip-spellScrollTeleport", "", "TELEPORT", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	var currentNick;
	var moduleUri;
	var _c_;
	var _d_;
	var iMG;
	var substituteString;
	var msg;
	msg = "";
	currentNick = "HEAL";
	moduleUri = 3;
	_c_ = "Heal instantly during combat.";
	_d_ = 10;
	iMG = "<b>Base heal:</b> 2 health.";
	substituteString = "<b>Multiplier:</b> Heal an additional 1 health per 5 magic bonus.";
	msg = msg + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	msg = msg + ("<div>" + _c_ + "</div>");
	msg = msg + "<br />";
	msg = msg + "<b>Total Casts: </b> <item-healCasted>0</item-healCasted>";
	msg = msg + "<br />";
	msg = msg + "<br />";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + moduleUri);
	msg = msg + "<br />";
	msg = msg + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _d_ + " seconds");
	msg = msg + "</div>";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/magic_black.png' class='img-20' /> " + iMG);
	msg = msg + "<br />";
	msg = msg + ("<img src='images/magic_grey.png' class='img-20' /> " + substituteString);
	msg = msg + "</div>";
	text = text + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", msg);
	msg = "";
	currentNick = "POISON";
	moduleUri = 5;
	_c_ = "Poisons your enemy, dealing 1 damage every 7 seconds.";
	_d_ = 10;
	iMG = "<b>Base poison:</b> 1 damage.";
	substituteString = "<b>Multiplier:</b> Poison damaged increased by 1 per 10 magic bonus.";
	msg = msg + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	msg = msg + ("<div>" + _c_ + "</div>");
	msg = msg + "<br />";
	msg = msg + "<b>Total Casts: </b> <item-poisonCasted>0</item-poisonCasted>";
	msg = msg + "<br />";
	msg = msg + "<br />";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + moduleUri);
	msg = msg + "<br />";
	msg = msg + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _d_ + " seconds");
	msg = msg + "</div>";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/magic_black.png' class='img-20' /> " + iMG);
	msg = msg + "<br />";
	msg = msg + ("<img src='images/magic_grey.png' class='img-20' /> " + substituteString);
	msg = msg + "</div>";
	text = text + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", msg);
	msg = "";
	currentNick = "REFLECT";
	moduleUri = 3;
	_c_ = "Reflects the next attack from the enemy back to them.";
	_d_ = 30;
	iMG = "<b>Base damage:</b> N/A";
	substituteString = "<b>Buff:</b> Having a magic bonus greater than 20 will not trigger reflect if the enemy hits a 0.";
	msg = msg + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	msg = msg + ("<div>" + _c_ + "</div>");
	msg = msg + "<br />";
	msg = msg + "<b>Total Casts: </b> <item-reflectCasted>0</item-reflectCasted>";
	msg = msg + "<br />";
	msg = msg + "<br />";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + moduleUri);
	msg = msg + "<br />";
	msg = msg + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _d_ + " seconds");
	msg = msg + "</div>";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/magic_black.png' class='img-20' /> " + iMG);
	msg = msg + "<br />";
	msg = msg + ("<img src='images/magic_grey.png' class='img-20' /> " + substituteString);
	msg = msg + "</div>";
	text = text + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", msg);
	msg = "";
	currentNick = "FIRE";
	moduleUri = 2;
	_c_ = "Instantly deals fire damage to your enemy.";
	_d_ = 10;
	iMG = "<b>Base damage:</b> 0 - 2";
	substituteString = "<b>Buff:</b> +1 damage per 3 magic bonus.";
	msg = msg + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	msg = msg + ("<div>" + _c_ + "</div>");
	msg = msg + "<br />";
	msg = msg + "<b>Total Casts: </b> <item-fireCasted>0</item-fireCasted>";
	msg = msg + "<br />";
	msg = msg + "<br />";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + moduleUri);
	msg = msg + "<br />";
	msg = msg + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _d_ + " seconds");
	msg = msg + "</div>";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/magic_black.png' class='img-20' /> " + iMG);
	msg = msg + "<br />";
	msg = msg + ("<img src='images/magic_grey.png' class='img-20' /> " + substituteString);
	msg = msg + "</div>";
	text = text + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", msg);
	msg = "";
	currentNick = "TELEPORT";
	moduleUri = 0;
	_c_ = "Teleports you out of combat, fully recovering HP and mana allowing you to fight again.";
	_d_ = 900;
	iMG = "<b>Base damage:</b> n/a";
	msg = msg + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	msg = msg + ("<div>" + _c_ + "</div>");
	msg = msg + "<br />";
	msg = msg + "<b>Total Casts: </b> <item-teleportCasted>0</item-teleportCasted>";
	msg = msg + "<br />";
	msg = msg + "<br />";
	msg = msg + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	msg = msg + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + "(none)");
	msg = msg + "<br />";
	msg = msg + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + 15 + " minutes.");
	msg = msg + "</div>";
	text = text + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", msg);
	if (getItem("treeUnlocked2") == 0)
	{
		text = text + generateHTMLGeneralTooltip("tooltip-treeSection2", "treeSection2", "Tree Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 100 coins.");
	}
	if (getItem("treeUnlocked3") == 0)
	{
		text = text + generateHTMLGeneralTooltip("tooltip-treeSection3", "treeSection3", "Tree Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 10,000 coins.");
	}
	if (getItem("treeUnlocked4") == 0)
	{
		text = text + generateHTMLGeneralTooltip("tooltip-treeSection4", "treeSection4", "Tree Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 100,000 coins and <img src='images/woodcuttingSkill.png' class='img-30' /> 50 woodcutting.");
	}
	if (getItem("treeUnlocked6") == 0)
	{
		text = text + generateHTMLGeneralTooltip("tooltip-treeSection5and6", "treeSection5and6", "Tree Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/donorCoins.png' class='img-30' /> 2 donor coins.");
	}
	if (getItem("plotUnlocked2") == 0)
	{
		text = text + generateHTMLGeneralTooltip("tooltip-plotSection2", "plotSection2", "Farming Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 100 coins.");
	}
	if (getItem("plotUnlocked3") == 0)
	{
		text = text + generateHTMLGeneralTooltip("tooltip-plotSection3", "plotSection3", "Farming Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 10,000 coins.");
	}
	if (getItem("plotUnlocked4") == 0)
	{
		text = text + generateHTMLGeneralTooltip("tooltip-plotSection4", "plotSection4", "Farming Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 100,000 coins and <img src='images/farmingSkill.png' class='img-30' /> 50 farming.");
	}
	if (getItem("plotUnlocked6") == 0)
	{
		text = text + generateHTMLGeneralTooltip("tooltip-plotSection5and6", "plotSection5and6", "Farming Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/donorCoins.png' class='img-30' /> 2 donor coins.");
	}
	var j = "";
	var language = "Fields";
	var target = [];
	j = "";
	language = "Fields";
	target = [];
	target = getEncountersImgArrayForAreaareaChosen(language);
	j = j + "<img src='images/energy.png' class='img-30' /> 50 &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> 15:00";
	j = j + "<br /><br />";
	j = j + ("<img src='" + target[0] + "' class='img-30' /> Chickens &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[1] + "' class='img-30' /> Rats &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[2] + "' class='img-30' /> Bees");
	document.getElementById(language.toLowerCase() + "-fightMarker-gif").src = target[3];
	text = text + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + language.toLowerCase(), "", language, j);
	j = "";
	language = "Forest";
	target = [];
	target = getEncountersImgArrayForAreaareaChosen(language);
	j = j + "<img src='images/energy.png' class='img-30' /> 200 &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> 30:00";
	j = j + "<br /><br />";
	j = j + ("<img src='" + target[0] + "' class='img-30' /> Snake &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[1] + "' class='img-30' /> Ent &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[2] + "' class='img-30' /> Thief");
	document.getElementById(language.toLowerCase() + "-fightMarker-gif").src = target[3];
	text = text + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + language.toLowerCase(), "", language, j);
	j = "";
	language = "Caves";
	target = [];
	target = getEncountersImgArrayForAreaareaChosen(language);
	j = j + "<img src='images/energy.png' class='img-30' /> 500 &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> 1:00:00";
	j = j + "<br /><br />";
	j = j + ("<img src='" + target[0] + "' class='img-30' /> Bear &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[1] + "' class='img-30' /> Spider &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[2] + "' class='img-30' /> Skeleton");
	document.getElementById(language.toLowerCase() + "-fightMarker-gif").src = target[3];
	text = text + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + language.toLowerCase(), "", language, j);
	j = "";
	language = "lavaDungeon";
	target = [];
	target = getEncountersImgArrayForAreaareaChosen(language);
	j = j + "<img src='images/energy.png' class='img-30' /> 2000 &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> 1:30:00";
	j = j + "<br /><br />";
	j = j + ("<img src='" + target[0] + "' class='img-30' /> Lava Alien &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[1] + "' class='img-30' /> Bat &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[2] + "' class='img-30' /> Fire Mage");
	document.getElementById(language + "-fightMarker-gif").src = target[3];
	text = text + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + language, "", language, j);
	j = "";
	language = "northernFields";
	target = [];
	target = getEncountersImgArrayForAreaareaChosen(language);
	j = j + "<img src='images/energy.png' class='img-30' /> 5000 &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> 2:00:00";
	j = j + "<br /><br />";
	j = j + ("<img src='" + target[0] + "' class='img-30' /> Bonehead &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[1] + "' class='img-30' /> Mamma Polar Bear &nbsp;&nbsp;&nbsp;&nbsp;");
	j = j + ("<img src='" + target[2] + "' class='img-30' /> Yeti");
	document.getElementById(language + "-fightMarker-gif").src = target[3];
	text = text + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + language, "", language, j);
	var b = "";
	j = "";
	b = "bushy";
	if (getItem(b + "Kills") == 0)
	{
		j = "<center><img src='images/energy.png' class='img-30' /> 1000</center><br /><img src='images/" + b + "Monster_black.png' class='img-50' /> Defeated " + "<img src='images/x.png' class='img-20' />";
	}
	else
	{
		if (getItem(b + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-bushy").src = "images/bossMarkerCompleted.gif";
			j = "<img src='images/" + b + "_monster_idle_0.png' class='img-50' /> Defeated " + "<img src='images/check.png' class='img-20' />";
		}
	}
	text = text + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-bushy", "", "BUSHY <span style='color:grey'>(BOSS)</span>", j);
	b = "fireHawk";
	if (getItem(b + "Kills") == 0)
	{
		j = "<center><img src='images/energy.png' class='img-30' /> 6000</center><br /><img src='images/" + b + "Monster_black.png' class='img-50' /> Defeated " + "<img src='images/x.png' class='img-20' />";
	}
	else
	{
		if (getItem(b + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + b).src = "images/bossMarkerCompleted.gif";
			j = "<img src='images/" + b + "_monster_idle_0.png' class='img-50' /> Defeated " + "<img src='images/check.png' class='img-20' />";
		}
	}
	text = text + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + b, "", getItemName(b).toUpperCase() + " <span style='color:grey'>(BOSS)</span>", j);
	document.getElementById("dynamic-tooltips-area").innerHTML = text;
};
