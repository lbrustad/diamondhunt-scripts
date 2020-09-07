'use strict';

function initializeTooltips()
{
	if (!global_gameLoaded)
	{
		return;
	}
	var s = "";
	document.getElementById("dynamic-tooltips-area").innerHTML = "";
	var id = 0;
	for (; id < global_foodMap.length; id++)
	{
		var o = global_foodMap[id];
		if (o.rawFoodName != "none")
		{
			s = s + ("<div id='tooltip-" + o.rawFoodName + "' style='display:none;'>");
			s = s + ("<h2>" + getItemName(o.rawFoodName) + "</h2>");
			s = s + ("<img src='images/heat.png' class='img-30' /> " + formatNumber(o.heat) + " heat");
			s = s + "<br />";
			s = s + ("<img src='images/energy.png' class='img-30' /> " + formatNumber(o.energy) + " energy");
			s = s + "<br />";
			s = s + ("<img src='images/cookingSkill.png' class='img-30' /> Level " + o.cookLevel + " <span style='color:grey'>(" + formatNumber(o.xp) + " XP)</span>");
			s = s + "<br />";
			s = s + "<hr class='hr-thin' />";
			s = s + o.desc;
			s = s + "</div>";
		}
		s = s + ("<div id='tooltip-" + o.cookedFoodName + "' style='display:none;'>");
		s = s + ("<h2>" + getItemName(o.cookedFoodName) + "</h2>");
		s = s + ("<img src='images/energy.png' class='img-30' /> " + formatNumber(o.energy) + " energy");
		s = s + "<br />";
		s = s + "<hr class='hr-thin' />";
		s = s + o.desc;
		s = s + "</div>";
	}
	id = 0;
	for (; id < global_seedMap.length; id++)
	{
		var data = global_seedMap[id];
		s = s + ("<div id='tooltip-" + data.name + "' style='display:none;'>");
		s = s + ("<h2>" + getItemName(data.name) + "</h2>");
		s = s + ("<img style='margin:3px;' src='images/farmingSkill.png' class='img-30' /> Level " + formatNumber(data.level) + " <span style='color:grey'>(" + formatNumber(data.xp) + " xp)</span>");
		s = s + "<br />";
		var th_field = "";
		if (data.stopsDieingAtLevel == 0)
		{
			s = s + ("<img style='margin:3px;' src='images/" + data.name.substr(0, data.name.length - 5) + ".png' class='img-30' /> Cannot die <img src='images/check.png' class='img-15' />");
		}
		else
		{
			if (getLevel(getItem("farmingXp")) >= data.stopsDieingAtLevel)
			{
				s = s + ("<img style='margin:3px;' src='images/" + data.name.substr(0, data.name.length - 5) + ".png' class='img-30' /> Stops dying level: " + formatNumber(data.stopsDieingAtLevel) + " <img src='images/check.png' class='img-15' />");
			}
			else
			{
				s = s + ("<img style='margin:3px;' src='images/deadLeaf.png' class='img-30' /> Stops dying level: " + formatNumber(data.stopsDieingAtLevel) + " <img src='images/x.png' class='img-15' />");
			}
		}
		if (parseInt(data.bonemeal) > 0)
		{
			if (getItem("bonemeal") >= parseInt(data.bonemeal))
			{
				s = s + "<br />";
				s = s + ("<img style='margin:3px;' src='images/bonemeal.png' class='img-30' /> Bonemeal: " + formatNumber(parseInt(data.bonemeal)) + " <img src='images/check.png' class='img-15' />");
			}
			else
			{
				s = s + "<br />";
				s = s + ("<img style='margin:3px;' src='images/bonemeal.png' class='img-30' /> Bonemeal: " + formatNumber(parseInt(data.bonemeal)) + " <img src='images/x.png' class='img-15' />");
			}
		}
		s = s + "<br />";
		s = s + ("<img style='margin:3px;' src='images/hourglass_grey.png' class='img-30' />" + formatTime(data.timer));
		s = s + "<br />";
		s = s + "<hr class='hr-thin' />";
		s = s + data.desc;
		s = s + "</div>";
	}
	id = 0;
	for (; id < global_machineryMap.length; id++)
	{
		var options = global_machineryMap[id];
		s = s + ("<div id='tooltip-" + options.machineryName + "' style='display:none;'>");
		s = s + ("<div style='font-size:16pt;font-weight:bold;margin-top:10px;'>" + getItemName(options.machineryName) + "</div>");
		if (options.oil > 0)
		{
			s = s + ("<br /><img src='images/oil.png' class='img-20' /> " + options.oil);
		}
		s = s + "<br />";
		s = s + "<hr class='hr-thin' />";
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
			s = s + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			s = s + "<img src='images/ore_black.png' class='img-20' /> <b>???</b><br />";
		}
		s = s + "<br />";
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
			s = s + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			s = s + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		s = s + "<br />";
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
			s = s + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			s = s + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		s = s + "<br />";
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
			s = s + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			s = s + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		s = s + "<br />";
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
			s = s + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			s = s + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		s = s + "<br />";
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
			s = s + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			s = s + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		s = s + "<br />";
		color = "titanium";
		precision = options.titaniumChance;
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
			s = s + ("<img src='images/" + color + ".png' class='img-20' /> <b>" + capitalizeFirstLetter(color) + ": </b> " + (1 + "/" + formatNumber(precision) + "<span style='color:grey'> (~" + number + " per day)</span>"));
		}
		else
		{
			s = s + "<img src='images/ore_black.png' class='img-20' /> <b>???</b>";
		}
		s = s + "<br />";
		s = s + "</div>";
	}
	id = 0;
	for (; id < global_equipmentMap.length; id++)
	{
		var options = global_equipmentMap[id];
		s = s + ("<div id='tooltip-" + options.name + "' style='display:none;'>");
		s = s + ("<h2>" + getItemName(options.name) + "</h2>");
		s = s + "<span style='font-size:14pt'>";
		if (options.type != "none")
		{
			s = s + ("<img src='images/" + options.type + ".png' class='img-20' /> " + getItemName(options.type) + " Attack");
			s = s + "<br />";
			s = s + "<br />";
		}
		if (options.attack != "0")
		{
			s = s + ("<img src='images/attack_black.png' class='img-30' /> " + options.attack);
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
		}
		if (options.accuracy != "0")
		{
			s = s + ("<img src='images/accuracy_black.png' class='img-30' /> " + options.accuracy);
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
		}
		if (options.speed != "0")
		{
			s = s + ("<img src='images/speed_black.png' class='img-30' /> " + options.speed);
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
		}
		if (options.defence != "0")
		{
			s = s + ("<img src='images/defence_black.png' class='img-30' /> " + options.defence);
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
		}
		if (options.magic != "0")
		{
			s = s + ("<img src='images/magic_black.png' class='img-30' /> " + options.magic);
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
			s = s + "&nbsp;";
		}
		s = s + "</span>";
		s = s + "<br />";
		s = s + "<hr class='hr-thin' />";
		s = s + options.desc;
		s = s + "</div>";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-feather", "feather", "Feathers", "Can be used to make arrows with the crafting skill.<br /><br /><img src='images/craftingSkill.png' class='img-30' /> <b>Click to craft arrows.</b>");
	s = s + generateHTMLGeneralTooltip("tooltip-stardustPickaxe", "stardustPickaxe", "Stardust Pickaxe", "Can be used to convert ores into <img src='images/miningSkill.png' class='img-20' /> <span style='color:#804000'>mining</span> XP at the cost of <img src='images/stardustIcon.png' class='img-20' /> <span style='color:#804000'>stardust</span>.");
	s = s + generateHTMLGeneralTooltip("tooltip-stardustHammer", "stardustHammer", "Stardust Hammer", "Can be used to convert bars into <img src='images/craftingSkill.png' class='img-20' /> <span style='color:#804000'>crafting</span> XP at the cost of <img src='images/stardustIcon.png' class='img-20' /> <span style='color:#804000'>stardust</span>.");
	s = s + generateHTMLGeneralTooltip("tooltip-stone", "stone", "Stone", "A common ore.");
	s = s + generateHTMLGeneralTooltip("tooltip-copper", "copper", "Copper", "Can be smelted into <img src='images/bronzeBars.png' class='img-20' /> bronze bars.");
	s = s + generateHTMLGeneralTooltip("tooltip-iron", "iron", "Iron", "Can be smelted into <img src='images/ironBars.png' class='img-20' />  iron bars.");
	s = s + generateHTMLGeneralTooltip("tooltip-silver", "silver", "Silver", "Can be smelted into <img src='images/silverBars.png' class='img-20' />  silver bars.");
	s = s + generateHTMLGeneralTooltip("tooltip-gold", "gold", "Gold", "Can be smelted into <img src='images/goldBars.png' class='img-20' />  gold bars.");
	s = s + generateHTMLGeneralTooltip("tooltip-promethium", "promethium", "Promethium", "Can be smelted into <img src='images/promethiumBars.png' class='img-20' />  promethium bars.");
	s = s + generateHTMLGeneralTooltip("tooltip-titanium", "titanium", "Titanium", "Can be smelted into <img src='images/titaniumBars.png' class='img-20' />  titanium bars.");
	s = s + generateHTMLGeneralTooltip("tooltip-moonstone", "moonstone", "Moonstone", "A common rock found on the moon.  It can be converted into mining XP.");
	s = s + generateHTMLGeneralTooltip("tooltip-limeQuartzMineral", "limeQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-jadeMineral", "jadeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-amethystMineral", "amethystMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-blueMarbleMineral", "blueMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-limoniteMineral", "limoniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-tashmarineMineral", "tashmarineMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-denseMarbleMineral", "denseMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-fluoriteMineral", "fluoriteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-purpleQuartzMineral", "purpleQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-crystalPrismeMineral", "crystalPrismeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-amberMineral", "amberMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-tanzaniteMineral", "tanzaniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	s = s + generateHTMLGeneralTooltip("tooltip-pearl", "pearl", "Pearl", "Found inside of an oyster.");
	s = s + generateHTMLGeneralTooltip("tooltip-giantPearl", "", "Giant Pearl", "<img src='images/museum.png' class='img-20' /> It's huge!");
	s = s + generateHTMLGeneralTooltip("tooltip-oyster", "oyster", "Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don't want to gamble.");
	s = s + generateHTMLGeneralTooltip("tooltip-rarePearl", "rarePearl", "Rare Pearl", "Found inside of a oyster found along the beaches.");
	s = s + generateHTMLGeneralTooltip("tooltip-rareGiantPearl", "", "Rare Giant Pearl", "<img src='images/museum.png' class='img-20' /> It's huge, and it looks special!");
	s = s + generateHTMLGeneralTooltip("tooltip-specialOyster", "oyster", "Rare Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don't want to gamble.");
	s = s + generateHTMLGeneralTooltip("tooltip-sharkTooth", "sharkTooth", "Shark's Tooth", "<img src='images/museum.png' class='img-20' /> A bite from a shark does over 100 damage!  Ouch!");
	s = s + generateHTMLGeneralTooltip("tooltip-bronzeBars", "bronzeBars", "Bronze Bar", "A bar made of copper.");
	s = s + generateHTMLGeneralTooltip("tooltip-ironBars", "ironBars", "Iron Bar", "A bar made of iron.");
	s = s + generateHTMLGeneralTooltip("tooltip-silverBars", "silverBars", "Silver Bar", "A bar made of silver.");
	s = s + generateHTMLGeneralTooltip("tooltip-goldBars", "goldBars", "Gold Bar", "A bar made of gold.");
	s = s + generateHTMLGeneralTooltip("tooltip-promethiumBars", "promethiumBars", "Promethium Bar", "A bar made of promethium.");
	s = s + generateHTMLGeneralTooltip("tooltip-titaniumBars", "titaniumBars", "Titanium Bar", "A bar made of titanium.");
	s = s + generateHTMLGeneralTooltip("tooltip-snakeskin", "snakeskin", "Snakeskin", "<img src='images/craftingSkill.png' class='img-20' /> Click to craft.");
	s = s + generateHTMLGeneralTooltip("tooltip-bearFur", "bearFur", "Bear Fur", "<img src='images/craftingSkill.png' class='img-20' /> Click to craft.");
	s = s + generateHTMLGeneralTooltip("tooltip-polarBearFur", "polarBearFur", "Polar Bear Fur", "<img src='images/craftingSkill.png' class='img-20' /> Click to craft.");
	s = s + generateHTMLGeneralTooltip("tooltip-blackSilk", "blackSilk", "Black Silk", "Obtained from a reaper.<br /><br /><img src='images/craftingSkill.png' class='img-20' /> Click to craft.");
	s = s + generateHTMLGeneralTooltip("tooltip-pirate", "", "Pirate", "1/600,000 chance of finding a treasure map.<br /><br /><span style='color:grey'>I can only hold one map at a time.</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-bluePrints", "bluePrints", "Blueprints", "Click to follow and craft.");
	s = s + generateHTMLGeneralTooltip("tooltip-strangeLeaf", "strangeLeaf", "Strange Leaf", "A rare secondary brewing ingredient.");
	s = s + generateHTMLGeneralTooltip("tooltip-ironBucket", "ironBucket", "Silver Bucket", "Killing a lava type monster will let you collect a bucket of lava.");
	s = s + generateHTMLGeneralTooltip("tooltip-lumberJack", "lumberJack", "Lumberjack", "Chop all your trees in one click.");
	s = s + generateHTMLGeneralTooltip("tooltip-cooldownRing1", "cooldownRing1", "Cooldown Ring (1)", "Reduces combat cooldown by 1%.<br /><br /><span style='color:grey;font-size:8pt;'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-energyRing1", "energyRing1", "Energy Ring (1)", "Reduces energy use by 1%.<br /><br /><span style='color:grey;font-size:8pt;'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-manaRing1", "manaRing1", "Mana Ring (1)", "Increases maximum mana by 1.<br /><br /><span style='color:grey;font-size:8pt;'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-cooldownRing2", "cooldownRing2", "Cooldown Ring (2)", "Reduces combat cooldown by 4%.<br /><br /><span style='color:grey;font-size:8pt;'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-energyRing2", "energyRing2", "Energy Ring (2)", "Reduces energy use by 4%.");
	s = s + generateHTMLGeneralTooltip("tooltip-manaRing2", "manaRing2", "Mana Ring (2)", "Increases maximum mana by 2.");
	s = s + generateHTMLGeneralTooltip("tooltip-cooldownRing3", "cooldownRing3", "Cooldown Ring (3)", "Reduces combat cooldown by 10%.<br /><br /><span style='color:grey;font-size:8pt;'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-energyRing3", "energyRing3", "Energy Ring (3)", "Reduces energy use by 10%.<br /><br /><span style='color:grey;font-size:8pt;'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-manaRing3", "manaRing3", "Mana Ring (3)", "Increases maximum mana by 3.<br /><br /><span style='color:grey;font-size:8pt;'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-donorWoodcuttingPatch", "", "Donor Perk", "Unlocks an extra woodcutting patch.");
	s = s + generateHTMLGeneralTooltip("tooltip-donorFarmingPlot", "", "Donor Perk", "Unlocks an extra farming patch.");
	s = s + generateHTMLGeneralTooltip("tooltip-donorMoreOfflineTime", "", "Donor Perk", "Grants you 12h of offline time instead of 8h.");
	s = s + generateHTMLGeneralTooltip("tooltip-donorBonusXp", "", "Donor Perk", "Every source of XP is increased by 10%.");
	s = s + generateHTMLGeneralTooltip("tooltip-stardustBox1", "", "Stardust Box", "<img src='images/stardustIcon.png' class='img-20' /> 0 - 2000 Stardust.");
	s = s + generateHTMLGeneralTooltip("tooltip-stardustBox2", "", "Stardust Box", "<img src='images/stardustIcon.png' class='img-20' /> 0 - 15000 Stardust.");
	s = s + generateHTMLGeneralTooltip("tooltip-sapphireGlassHand", "", "Glass Hand", "<img src='images/museum.png' class='img-20' /> Shiny from every angle!");
	s = s + generateHTMLGeneralTooltip("tooltip-emeraldGlassHand", "", "Glass Hand", "<img src='images/museum.png' class='img-20' /> Very shiny from every angle!");
	s = s + generateHTMLGeneralTooltip("tooltip-rubyGlassHand", "", "Glass Hand", "<img src='images/museum.png' class='img-20' /> Extremely shiny from every angle!");
	s = s + generateHTMLGeneralTooltip("tooltip-snowmanCrafted", "", "Snowman", "<img src='images/museum.png' class='img-20' /> I think it spoke to me once!");
	s = s + generateHTMLGeneralTooltip("tooltip-brokenStinger", "", "Broken Stinger", "<img src='images/museum.png' class='img-20' /> Normally, I would be able to use this as a weapon.  Too bad it's broken.");
	s = s + generateHTMLGeneralTooltip("tooltip-snakeBones", "", "Snake Bones", "<img src='images/museum.png' class='img-20' /> The remains of a giant snake who roamed the forest.");
	s = s + generateHTMLGeneralTooltip("tooltip-skeletonSkull", "", "Skull", "<img src='images/museum.png' class='img-20' /> Obtained from a skeleton in the caves.");
	s = s + generateHTMLGeneralTooltip("tooltip-ghostClothes", "", "Ghost Clothes", "<img src='images/museum.png' class='img-20' /> This belonged to the roaming ghost around the farm lands.");
	s = s + generateHTMLGeneralTooltip("tooltip-cockroach", "", "Giant Cockroach", "<img src='images/museum.png' class='img-20' /> Crunch.");
	s = s + generateHTMLGeneralTooltip("tooltip-goldenCockroach", "", "Golden Cockroach", "<img src='images/museum.png' class='img-20' /> Perhaps this can be smelted into a gold bar.  Wait no, that's cruel.");
	s = s + generateHTMLGeneralTooltip("tooltip-yetiLeftFoot", "", "Yeti's Left Foot", "<img src='images/museum.png' class='img-20' /> It's still cold.");
	s = s + generateHTMLGeneralTooltip("tooltip-yetiRightFoot", "", "Yeti's Right Foot", "<img src='images/museum.png' class='img-20' /> Yep, still cold.");
	s = s + generateHTMLGeneralTooltip("tooltip-smallSeaShell", "", "Small Shell", "<img src='images/museum.png' class='img-20' /> Found on the ocean floors.");
	s = s + generateHTMLGeneralTooltip("tooltip-mediumSeaShell", "", "Medium Shell", "<img src='images/museum.png' class='img-20' /> Found on the ocean floors.");
	s = s + generateHTMLGeneralTooltip("tooltip-largeSeaShell", "", "Large Shell", "<img src='images/museum.png' class='img-20' /> Found on the ocean floors.");
	s = s + generateHTMLGeneralTooltip("tooltip-mould", "craftingMould", "Crafting Mould", "Can be used to craft a specific item.<br /><br /><i>Click to operate</i>");
	s = s + generateHTMLGeneralTooltip("tooltip-carePackage", "carePackage", "Care Package", "I can buy one of these everytime I upgrade the shop!");
	s = s + generateHTMLGeneralTooltip("tooltip-gem", "gem", "Gem", "I can use these to socket tools granting them more power.");
	s = s + generateHTMLGeneralTooltip("tooltip-smallManaStar", "", "Mana Star <span style='color:grey'>(Small)</span>", "<img src='images/largeManaStar.png' class='img-30' /> Permanently increases mana by 1.");
	s = s + generateHTMLGeneralTooltip("tooltip-mediumManaStar", "", "Mana Star <span style='color:grey'>(Medium)</span>", "<img src='images/largeManaStar.png' class='img-30' /> Permanently increases mana by 2.");
	s = s + generateHTMLGeneralTooltip("tooltip-largeManaStar", "", "Mana Star <span style='color:grey'>(Large)</span>", "<img src='images/largeManaStar.png' class='img-30' /> Permanently increases mana by 3.");
	s = s + generateHTMLGeneralTooltip("tooltip-hugeManaStar", "", "Mana Star <span style='color:grey'>(Huge)</span>", "<img src='images/largeManaStar.png' class='img-30' />  Permanently increases mana by 5.");
	s = s + generateHTMLGeneralTooltip("tooltip-donorCoins", "", "Tradable Donor Coins", "Donor coins may be used to buy temporary buffs that last for 30 days.<br /><br />These are currently tradable on the market, to use them in the donor shop; you must first bind them to your account.<br /><br /><span style='color:green'>Click to bind coins to your account</span>");
	s = s + generateHTMLGeneralTooltip("tooltip-colorCrystal", "useless", "Sky Crystal", "It seems to be attracted to the dark crystal.");
	s = s + generateHTMLGeneralTooltip("tooltip-shovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(4000) + "<span style='color:grey'> (~" + 21 + " per day)</span>"));
	s = s + generateHTMLGeneralTooltip("tooltip-sapphireShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(3500) + "<span style='color:grey'> (~" + 24 + " per day)</span>"));
	s = s + generateHTMLGeneralTooltip("tooltip-emeraldShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(3000) + "<span style='color:grey'> (~" + 28 + " per day)</span>"));
	s = s + generateHTMLGeneralTooltip("tooltip-rubyShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(2500) + "<span style='color:grey'> (~" + 34 + " per day)</span>"));
	s = s + generateHTMLGeneralTooltip("tooltip-diamondShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src='images/sand.png' class='img-20' /> " + getItem("sandShovelTotal") + "<hr class='hr-thin' />" + (1 + "/" + formatNumber(2000) + "<span style='color:grey'> (~" + 43 + " per day)</span>"));
	s = s + generateHTMLGeneralTooltip("tooltip-chisel", "useless", "Chisel", "<img src='images/geode_black.png' class='img-20' /> <b>Chance of failing to open a geode: </b> " + "50%");
	s = s + generateHTMLGeneralTooltip("tooltip-sapphireChisel", "useless", "Chisel", "<img src='images/geode_black.png' class='img-20' /> <b>Chance of failing to open a geode: </b> " + "40%");
	s = s + generateHTMLGeneralTooltip("tooltip-emeraldChisel", "useless", "Chisel", "<img src='images/geode_black.png' class='img-20' /> <b>Chance of failing to open a geode: </b> " + "30%");
	s = s + generateHTMLGeneralTooltip("tooltip-rubyChisel", "useless", "Chisel", "<img src='images/geode_black.png' class='img-20' /> <b>Chance of failing to open a geode: </b> " + "20%");
	s = s + generateHTMLGeneralTooltip("tooltip-diamondChisel", "useless", "Chisel", "<img src='images/geode_black.png' class='img-20' /> <b>Chance of failing to open a geode: </b> " + "0%");
	s = s + generateHTMLGeneralTooltip("tooltip-logs", "logs", "Logs", "Obtained from cutting a tree.");
	s = s + generateHTMLGeneralTooltip("tooltip-oakLogs", "oakLogs", "Oak Logs", "Obtained from cutting a specific tree.");
	s = s + generateHTMLGeneralTooltip("tooltip-willowLogs", "willowLogs", "Willow Logs", "Obtained from cutting a specific tree.");
	s = s + generateHTMLGeneralTooltip("tooltip-mapleLogs", "mapleLogs", "Maple Logs", "Obtained from cutting a specific tree.");
	s = s + generateHTMLGeneralTooltip("tooltip-bambooLogs", "bambooLogs", "Bamboo Logs", "Obtained from cutting a specific tree.");
	s = s + generateHTMLGeneralTooltip("tooltip-lavaLogs", "lavaLogs", "Lava Logs", "Obtained from cutting a specific tree.<br /><br /><img src='images/ironBucket.png' class='img-30' /> 2% chance of getting lava when used with oven, assuming you have empty buckets.");
	s = s + generateHTMLGeneralTooltip("tooltip-pineLogs", "pineLogs", "Pine Logs", "Obtained from cutting a specific tree.  It has snow sitting on top.");
	s = s + generateHTMLGeneralTooltip("tooltip-stardustLogs", "stardustLogs", "Stardust Logs", "Obtained from cutting a specific tree.");
	s = s + generateHTMLGeneralTooltip("tooltip-oven", "oven", "COOKING OVEN", "<b>Burn rate: " + parseInt(getBurnRate() * 100) + "%</b>");
	s = s + generateHTMLGeneralTooltip("tooltip-dottedGreenLeaf", "dottedGreenLeaf", "DOTTED GREEN LEAF", "A primary brewing ingredient.");
	s = s + generateHTMLGeneralTooltip("tooltip-greenLeaf", "greenLeaf", "GREEN LEAF", "A primary brewing ingredient.");
	s = s + generateHTMLGeneralTooltip("tooltip-limeLeaf", "limeLeaf", "LIME LEAF", "A primary brewing ingredient.");
	s = s + generateHTMLGeneralTooltip("tooltip-goldLeaf", "goldLeaf", "GOLD LEAF", "A primary brewing ingredient.");
	s = s + generateHTMLGeneralTooltip("tooltip-crystalLeaf", "crystalLeaf", "CRYSTAL LEAF", "A primary brewing ingredient.");
	s = s + generateHTMLGeneralTooltip("tooltip-stripedGoldLeaf", "stripedGoldLeaf", "STRIPED GOLD LEAF", "A primary brewing ingredient.");
	s = s + generateHTMLGeneralTooltip("tooltip-stripedCrystalLeaf", "stripedCrystalLeaf", "STRIPED CRYSTAL LEAF", "A primary brewing ingredient.");
	s = s + generateHTMLGeneralTooltip("tooltip-stew", "stew", "STEW", "<img src='images/hourglass.png' class='img-20' /> Reduces cooldown by 15 minutes.");
	s = s + generateHTMLGeneralTooltip("tooltip-redMushroom", "redMushroom", "RED MUSHROOM", "A secondary brewing ingredient.");
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
	s = s + generateHTMLGeneralTooltip("tooltip-smallFishingNet", "varNameIfSellable", "Small Fishing Net", "<b>Catch size: </b> Small<br />" + pix_color);
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
	s = s + generateHTMLGeneralTooltip("tooltip-fishingRod", "varNameIfSellable", "Fishing Rod", "<b>Catch size: </b> Medium<br />" + summaryHtml);
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
	s = s + generateHTMLGeneralTooltip("tooltip-harpoon", "varNameIfSellable", "Harpoon", "<b>Catch size: </b> Large<br />" + gltp);
	var _a_ = 0;
	var _b_ = "<img src='images/check.png' class='img-20'  />";
	_a_ = 1;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-spellScrollHeal", "spellScrollHeal", "HEAL", "<img src='images/magicSkill.png' class='img-20' /> " + 1 + " magic required. " + _b_);
	_a_ = 5;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-spellScrollPoison", "", "POISON", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 10;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-spellScrollReflect", "", "REFLECT", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 15;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-spellScrollFire", "", "FIRE", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 20;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-spellScrollTeleport", "", "TELEPORT", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 30;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-spellScrollFreeze", "", "FREEZE", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 40;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-spellScrollGhostScan", "", "GHOST SCAN", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	_a_ = 50;
	_b_ = "<img src='images/x.png' class='img-20' />";
	if (getLevel(getItem("magicXp")) >= _a_)
	{
		_b_ = "<img src='images/check.png' class='img-20' />";
	}
	s = s + generateHTMLGeneralTooltip("tooltip-spellScrollInvisibility", "", "INVISIBILITY", "<img src='images/magicSkill.png' class='img-20' /> " + _a_ + " magic required. " + _b_);
	var currentNick;
	var _c_;
	var _d_;
	var _e_;
	var spacingX;
	var spacingY;
	var used;
	used = "";
	currentNick = "HEAL";
	_c_ = 3;
	_d_ = "Heal instantly during combat.";
	_e_ = 10;
	spacingX = "<b>Base heal:</b> 2 health.";
	spacingY = "<b>Multiplier:</b> Heal an additional 1 health per 5 magic bonus.";
	used = used + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	used = used + ("<div>" + _d_ + "</div>");
	used = used + "<br />";
	used = used + "<b>Total Casts: </b> <item-healCasted>0</item-healCasted>";
	used = used + "<br />";
	used = used + "<br />";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + _c_);
	used = used + "<br />";
	used = used + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _e_ + " seconds");
	used = used + "</div>";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/magic_black.png' class='img-20' /> " + spacingX);
	used = used + "<br />";
	used = used + ("<img src='images/magic_grey.png' class='img-20' /> " + spacingY);
	used = used + "</div>";
	s = s + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", used);
	used = "";
	currentNick = "POISON";
	_c_ = 5;
	_d_ = "Poisons your enemy, dealing 1 damage every 7 seconds.";
	_e_ = 300;
	spacingX = "<b>Base poison:</b> 1 damage.";
	spacingY = "<b>Multiplier:</b> Poison damaged increased by 1 per 10 magic bonus.";
	used = used + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	used = used + ("<div>" + _d_ + "</div>");
	used = used + "<br />";
	used = used + "<b>Total Casts: </b> <item-poisonCasted>0</item-poisonCasted>";
	used = used + "<br />";
	used = used + "<br />";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + _c_);
	used = used + "<br />";
	used = used + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _e_ + " seconds");
	used = used + "</div>";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/magic_black.png' class='img-20' /> " + spacingX);
	used = used + "<br />";
	used = used + ("<img src='images/magic_grey.png' class='img-20' /> " + spacingY);
	used = used + "</div>";
	s = s + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", used);
	used = "";
	currentNick = "REFLECT";
	_c_ = 3;
	_d_ = "Reflects the next attack from the enemy back to them.";
	_e_ = 30;
	spacingX = "<b>Base damage:</b> N/A";
	spacingY = "<b>Buff:</b> Having a magic bonus greater than 20 will not trigger reflect if the enemy hits a 0.";
	used = used + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	used = used + ("<div>" + _d_ + "</div>");
	used = used + "<br />";
	used = used + "<b>Total Casts: </b> <item-reflectCasted>0</item-reflectCasted>";
	used = used + "<br />";
	used = used + "<br />";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + _c_);
	used = used + "<br />";
	used = used + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _e_ + " seconds");
	used = used + "</div>";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/magic_black.png' class='img-20' /> " + spacingX);
	used = used + "<br />";
	used = used + ("<img src='images/magic_grey.png' class='img-20' /> " + spacingY);
	used = used + "</div>";
	s = s + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", used);
	used = "";
	currentNick = "FIRE";
	_c_ = 2;
	_d_ = "Instantly deals fire damage to your enemy.";
	_e_ = 10;
	spacingX = "<b>Base damage:</b> 0 - 2";
	spacingY = "<b>Buff:</b> +1 damage per 3 magic bonus.";
	used = used + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	used = used + ("<div>" + _d_ + "</div>");
	used = used + "<br />";
	used = used + "<b>Total Casts: </b> <item-fireCasted>0</item-fireCasted>";
	used = used + "<br />";
	used = used + "<br />";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + _c_);
	used = used + "<br />";
	used = used + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _e_ + " seconds");
	used = used + "</div>";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/magic_black.png' class='img-20' /> " + spacingX);
	used = used + "<br />";
	used = used + ("<img src='images/magic_grey.png' class='img-20' /> " + spacingY);
	used = used + "</div>";
	s = s + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", used);
	used = "";
	currentNick = "TELEPORT";
	_c_ = 0;
	_d_ = "Teleports you out of combat, fully recovering HP and mana allowing you to fight again.";
	_e_ = 900;
	spacingX = "<b>Base damage:</b> n/a";
	used = used + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	used = used + ("<div>" + _d_ + "</div>");
	used = used + "<br />";
	used = used + "<b>Total Casts: </b> <item-teleportCasted>0</item-teleportCasted>";
	used = used + "<br />";
	used = used + "<br />";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + "(none)");
	used = used + "<br />";
	used = used + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + 15 + " minutes.");
	used = used + "</div>";
	s = s + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", used);
	used = "";
	currentNick = "GHOST SCAN";
	_c_ = 0;
	_d_ = "Ability to see ghosts.";
	_e_ = 300;
	spacingX = "<b>Base damage:</b> n/a";
	used = used + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	used = used + ("<div>" + _d_ + "</div>");
	used = used + "<br />";
	used = used + "<b>Total Casts: </b> <item-ghostScanCasted>0</item-ghostScanCasted>";
	used = used + "<br />";
	used = used + "<br />";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + "(none)");
	used = used + "<br />";
	used = used + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + 5 + " minutes.");
	used = used + "</div>";
	s = s + generateHTMLGeneralTooltip("tooltip-" + "ghostScan", currentNick.toLowerCase(), "", used);
	used = "";
	currentNick = "FREEZE";
	_c_ = 5;
	_d_ = "Freezes your enemy for a short duration";
	_e_ = 15;
	spacingX = "<b>Base Freeze Time:</b> 3 seconds";
	spacingY = "<b>Buff:</b> +1 seconds per 5 magic bonus.";
	used = used + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	used = used + ("<div>" + _d_ + "</div>");
	used = used + "<br />";
	used = used + ("<b>Total Casts: </b> <item-" + currentNick.toLowerCase() + "Casted>0</item-" + currentNick.toLowerCase() + "Casted>");
	used = used + "<br />";
	used = used + "<br />";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + _c_);
	used = used + "<br />";
	used = used + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _e_ + " seconds");
	used = used + "</div>";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/magic_black.png' class='img-20' /> " + spacingX);
	used = used + "<br />";
	used = used + ("<img src='images/magic_grey.png' class='img-20' /> " + spacingY);
	used = used + "</div>";
	s = s + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", used);
	used = "";
	currentNick = "INVISIBILITY";
	_c_ = 1;
	_d_ = "Become invisibile, making your enemy miss.";
	_e_ = 30;
	spacingX = "<b>Invisibility time:</b> 2 second";
	spacingY = "<b>Buff:</b> No mana cost at 20 magic bonus.";
	used = used + ("<div style='font-size:16pt;font-weight:bold;'>" + currentNick + "</div>");
	used = used + ("<div>" + _d_ + "</div>");
	used = used + "<br />";
	used = used + ("<b>Total Casts: </b> <item-" + currentNick.toLowerCase() + "Casted>0</item-" + currentNick.toLowerCase() + "Casted>");
	used = used + "<br />";
	used = used + "<br />";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/hugeManaStar.png' class='img-20' /> <b>Mana cost:</b> " + _c_);
	used = used + "<br />";
	used = used + ("<img src='images/hourglass_grey.png' class='img-20' /> <b>Cooldown:</b> " + _e_ + " seconds");
	used = used + "</div>";
	used = used + "<div style='border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;'>";
	used = used + ("<img src='images/magic_black.png' class='img-20' /> " + spacingX);
	used = used + "<br />";
	used = used + ("<img src='images/magic_grey.png' class='img-20' /> " + spacingY);
	used = used + "</div>";
	s = s + generateHTMLGeneralTooltip("tooltip-" + currentNick.toLowerCase(), currentNick.toLowerCase(), "", used);
	if (getItem("treeUnlocked2") == 0)
	{
		s = s + generateHTMLGeneralTooltip("tooltip-treeSection2", "treeSection2", "Tree Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 100 coins.");
	}
	if (getItem("treeUnlocked3") == 0)
	{
		s = s + generateHTMLGeneralTooltip("tooltip-treeSection3", "treeSection3", "Tree Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 10,000 coins.");
	}
	if (getItem("treeUnlocked4") == 0)
	{
		s = s + generateHTMLGeneralTooltip("tooltip-treeSection4", "treeSection4", "Tree Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 100,000 coins and <img src='images/woodcuttingSkill.png' class='img-30' /> 50 woodcutting.");
	}
	if (getItem("treeUnlocked6") == 0)
	{
		s = s + generateHTMLGeneralTooltip("tooltip-treeSection5and6", "treeSection5and6", "Tree Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/donorCoins.png' class='img-30' /> 2 donor coins.");
	}
	if (getItem("plotUnlocked2") == 0)
	{
		s = s + generateHTMLGeneralTooltip("tooltip-plotSection2", "plotSection2", "Farming Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 100 coins.");
	}
	if (getItem("plotUnlocked3") == 0)
	{
		s = s + generateHTMLGeneralTooltip("tooltip-plotSection3", "plotSection3", "Farming Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 10,000 coins.");
	}
	if (getItem("plotUnlocked4") == 0)
	{
		s = s + generateHTMLGeneralTooltip("tooltip-plotSection4", "plotSection4", "Farming Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/coins.png' class='img-30' /> 100,000 coins and <img src='images/farmingSkill.png' class='img-30' /> 50 farming.");
	}
	if (getItem("plotUnlocked6") == 0)
	{
		s = s + generateHTMLGeneralTooltip("tooltip-plotSection5and6", "plotSection5and6", "Farming Patch", "<img src='images/unlocked.png' class='img-30' /> Unlock for <img src='images/donorCoins.png' class='img-30' /> 2 donor coins.");
	}
	var argValue = "";
	var i = "Fields";
	var a = [];
	argValue = "";
	i = "Fields";
	a = [];
	a = getEncountersImgArrayForAreaareaChosen(i);
	argValue = argValue + ("<img src='images/energy.png' class='img-30' /> " + getEnergyReduction(50) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> " + formatTime(getAreaTimer(15 * 60)));
	argValue = argValue + "<br /><br />";
	argValue = argValue + ("<img src='" + a[1] + "' class='img-30' /> Chickens &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[3] + "' class='img-30' /> Rats &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[5] + "' class='img-30' /> Bees");
	document.getElementById(i.toLowerCase() + "-fightMarker-gif").src = a[6];
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + i.toLowerCase(), "", i, argValue);
	argValue = "";
	i = "Forest";
	a = [];
	a = getEncountersImgArrayForAreaareaChosen(i);
	argValue = argValue + ("<img src='images/energy.png' class='img-30' /> " + getEnergyReduction(200) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> " + formatTime(getAreaTimer(30 * 60)));
	argValue = argValue + "<br /><br />";
	argValue = argValue + ("<img src='" + a[1] + "' class='img-30' /> Snake &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[3] + "' class='img-30' /> Ent &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[5] + "' class='img-30' /> Thief");
	document.getElementById(i.toLowerCase() + "-fightMarker-gif").src = a[6];
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + i.toLowerCase(), "", i, argValue);
	argValue = "";
	i = "Caves";
	a = [];
	a = getEncountersImgArrayForAreaareaChosen(i);
	argValue = argValue + ("<img src='images/energy.png' class='img-30' /> " + getEnergyReduction(500) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> " + formatTime(getAreaTimer(60 * 60)));
	argValue = argValue + "<br /><br />";
	argValue = argValue + ("<img src='" + a[1] + "' class='img-30' /> Bear &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[3] + "' class='img-30' /> Spider &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[5] + "' class='img-30' /> Skeleton");
	document.getElementById(i.toLowerCase() + "-fightMarker-gif").src = a[6];
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + i.toLowerCase(), "", i, argValue);
	argValue = "";
	i = "lavaDungeon";
	a = [];
	a = getEncountersImgArrayForAreaareaChosen(i);
	argValue = argValue + ("<img src='images/energy.png' class='img-30' /> " + getEnergyReduction(2000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> " + formatTime(getAreaTimer(90 * 60)));
	argValue = argValue + "<br /><br />";
	argValue = argValue + ("<img src='" + a[1] + "' class='img-30' /> Lava Alien &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[3] + "' class='img-30' /> Bat &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[5] + "' class='img-30' /> Fire Mage");
	document.getElementById(i + "-fightMarker-gif").src = a[6];
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + i, "", i, argValue);
	argValue = "";
	i = "northernFields";
	a = [];
	a = getEncountersImgArrayForAreaareaChosen(i);
	argValue = argValue + ("<img src='images/energy.png' class='img-30' /> " + getEnergyReduction(5000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> " + formatTime(getAreaTimer(120 * 60)));
	argValue = argValue + "<br /><br />";
	argValue = argValue + ("<img src='" + a[1] + "' class='img-30' /> Bonehead &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[3] + "' class='img-30' /> Mamma Polar Bear &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[5] + "' class='img-30' /> Yeti");
	document.getElementById(i + "-fightMarker-gif").src = a[6];
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + i, "", "Northern Fields", argValue);
	argValue = "";
	i = "cemetery";
	a = [];
	a = getEncountersImgArrayForAreaareaChosen(i);
	argValue = argValue + ("<img src='images/energy.png' class='img-30' /> " + getEnergyReduction(10000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> " + formatTime(getAreaTimer(150 * 60)));
	argValue = argValue + "<br /><br />";
	argValue = argValue + ("<img src='" + a[1] + "' class='img-30' /> Ghost &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[3] + "' class='img-30' /> Skeleton Ghost &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[5] + "' class='img-30' /> Reaper");
	document.getElementById(i + "-fightMarker-gif").src = a[6];
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + i, "", i, argValue);
	argValue = "";
	i = "ocean";
	a = [];
	a = getEncountersImgArrayForAreaareaChosen(i);
	argValue = argValue + ("<img src='images/energy.png' class='img-30' /> " + getEnergyReduction(16000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src='images/hourglass_grey.png' class='img-30' /> " + formatTime(getAreaTimer(180 * 60)));
	argValue = argValue + "<br /><br />";
	argValue = argValue + ("<img src='" + a[1] + "' class='img-30' /> Shark &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[3] + "' class='img-30' /> Puffer Fish &nbsp;&nbsp;&nbsp;&nbsp;");
	argValue = argValue + ("<img src='" + a[5] + "' class='img-30' /> Trident Soldier");
	document.getElementById(i + "-fightMarker-gif").src = a[6];
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + i, "", i, argValue);
	var b = "";
	argValue = "";
	b = "bushy";
	if (getItem(b + "Kills") == 0)
	{
		argValue = "<center><img src='images/energy.png' class='img-30' /> " + getEnergyReduction(1000) + "</center><br /><img src='images/" + b + "Monster_black.png' class='img-50' /> Defeated " + "<img src='images/x.png' class='img-20' />";
	}
	else
	{
		if (getItem(b + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-bushy").src = "images/bossMarkerCompleted.gif";
			argValue = "<img src='images/" + b + "_monster_idle_0.png' class='img-50' /> Defeated " + "<img src='images/check.png' class='img-20' />";
		}
	}
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-bushy", "", "BUSHY <span style='color:grey'>(BOSS)</span><br /><span style='color:brown;font-size:8pt'><b>Weakness:</b> None</span>", argValue);
	b = "fireHawk";
	if (getItem(b + "Kills") == 0)
	{
		argValue = "<center><img src='images/energy.png' class='img-30' /> " + getEnergyReduction(6000) + "</center><br /><img src='images/" + b + "Monster_black.png' class='img-50' /> Defeated " + "<img src='images/x.png' class='img-20' />";
	}
	else
	{
		if (getItem(b + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + b).src = "images/bossMarkerCompleted.gif";
			argValue = "<img src='images/" + b + "_monster_idle_0.png' class='img-50' /> Defeated " + "<img src='images/check.png' class='img-20' />";
		}
	}
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + b, "", getItemName(b).toUpperCase() + " <span style='color:grey'>(BOSS)</span><br /><span style='color:brown;font-size:8pt'><b>Weakness:</b> Water or Ice</span>", argValue);
	b = "iceHawk";
	if (getItem(b + "Kills") == 0)
	{
		argValue = "<center><img src='images/energy.png' class='img-30' /> " + formatNumber(getEnergyReduction(10000)) + "</center><br /><img src='images/" + b + "Monster_black.png' class='img-50' /> Defeated " + "<img src='images/x.png' class='img-20' />";
	}
	else
	{
		if (getItem(b + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + b).src = "images/bossMarkerCompleted.gif";
			argValue = "<img src='images/" + b + "_monster_idle_0.png' class='img-50' /> Defeated " + "<img src='images/check.png' class='img-20' />";
		}
	}
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + b, "", getItemName(b).toUpperCase() + " <span style='color:grey'>(BOSS)</span><br /><span style='color:brown;font-size:8pt'><b>Weakness:</b> Fire</span>", argValue);
	b = "piranhas";
	if (getItem(b + "Kills") == 0)
	{
		argValue = "<center><img src='images/energy.png' class='img-30' /> " + formatNumber(getEnergyReduction(25000)) + "</center><br /><img src='images/" + b + "Monster_black.png' class='img-50' /> Defeated " + "<img src='images/x.png' class='img-20' />";
	}
	else
	{
		if (getItem(b + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + b).src = "images/bossMarkerCompletedMany.gif";
			argValue = "<img src='images/" + b + "_monster_idle_0.png' class='img-50' /> Defeated " + "<img src='images/check.png' class='img-20' />";
		}
	}
	s = s + generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + b, "", getItemName(b).toUpperCase() + " <span style='color:grey'>(BOSS)</span><br /><span style='color:brown;font-size:8pt'><b>Weakness:</b> None</span>", argValue);
	document.getElementById("dynamic-tooltips-area").innerHTML = s;
};
