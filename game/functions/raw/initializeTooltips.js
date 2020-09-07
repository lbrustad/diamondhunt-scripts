/**
 * initializeTooltips extracted from ../../deobfuscated/bundle.js at line 9110-9985
 *
 * If this file doesn't contain a function, there is an error in ../raw/initializeTooltips.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function initializeTooltips()
{
	if (!global_gameLoaded)
	{
		return
	};
	var _0x3AAC = "";
	document.getElementById("dynamic-tooltips-area").innerHTML = "";
	for (var _0x3607 = 0; _0x3607 < global_foodMap.length; _0x3607++)
	{
		var _0x4E45 = global_foodMap[_0x3607];
		if (_0x4E45.rawFoodName != "none")
		{
			_0x3AAC += "<div id=\'tooltip-" + _0x4E45.rawFoodName + "\' style=\'display:none;\'>";
			_0x3AAC += "<h2>" + getItemName(_0x4E45.rawFoodName) + "</h2>";
			_0x3AAC += "<img src=\'images/heat.png\' class=\'img-30\' /> " + formatNumber(_0x4E45.heat) + " heat";
			_0x3AAC += "<br />";
			_0x3AAC += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x4E45.energy) + " energy";
			_0x3AAC += "<br />";
			_0x3AAC += "<img src=\'images/cookingSkill.png\' class=\'img-30\' /> Level " + _0x4E45.cookLevel + " <span style=\'color:grey\'>(" + formatNumber(_0x4E45.xp) + " XP)</span>";
			_0x3AAC += "<br />";
			_0x3AAC += "<hr class=\'hr-thin\' />";
			_0x3AAC += _0x4E45.desc;
			_0x3AAC += "</div>"
		};
		_0x3AAC += "<div id=\'tooltip-" + _0x4E45.cookedFoodName + "\' style=\'display:none;\'>";
		_0x3AAC += "<h2>" + getItemName(_0x4E45.cookedFoodName) + "</h2>";
		_0x3AAC += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x4E45.energy) + " energy";
		_0x3AAC += "<br />";
		_0x3AAC += "<hr class=\'hr-thin\' />";
		_0x3AAC += _0x4E45.desc;
		_0x3AAC += "</div>"
	};
	for (var _0x3607 = 0; _0x3607 < global_seedMap.length; _0x3607++)
	{
		var _0x5A64 = global_seedMap[_0x3607];
		_0x3AAC += "<div id=\'tooltip-" + _0x5A64.name + "\' style=\'display:none;\'>";
		_0x3AAC += "<h2>" + getItemName(_0x5A64.name) + "</h2>";
		_0x3AAC += "<img style=\'margin:3px;\' src=\'images/farmingSkill.png\' class=\'img-30\' /> Level " + formatNumber(_0x5A64.level) + " <span style=\'color:grey\'>(" + formatNumber(_0x5A64.xp) + " xp)</span>";
		_0x3AAC += "<br />";
		var _0x58CE = "";
		if (_0x5A64.stopsDieingAtLevel == 0)
		{
			_0x3AAC += "<img style=\'margin:3px;\' src=\'images/" + _0x5A64.name.substr(0, _0x5A64.name.length - 5) + ".png\' class=\'img-30\' /> Cannot die <img src=\'images/check.png\' class=\'img-15\' />"
		}
		else
		{
			if (getLevel(getItem("farmingXp")) >= _0x5A64.stopsDieingAtLevel)
			{
				_0x3AAC += "<img style=\'margin:3px;\' src=\'images/" + _0x5A64.name.substr(0, _0x5A64.name.length - 5) + ".png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x5A64.stopsDieingAtLevel) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x3AAC += "<img style=\'margin:3px;\' src=\'images/deadLeaf.png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x5A64.stopsDieingAtLevel) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		if (parseInt(_0x5A64.bonemeal) > 0)
		{
			if (getItem("bonemeal") >= parseInt(_0x5A64.bonemeal))
			{
				_0x3AAC += "<br />";
				_0x3AAC += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x5A64.bonemeal)) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x3AAC += "<br />";
				_0x3AAC += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x5A64.bonemeal)) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		_0x3AAC += "<br />";
		_0x3AAC += "<img style=\'margin:3px;\' src=\'images/hourglass_grey.png\' class=\'img-30\' />" + formatTime(_0x5A64.timer);
		_0x3AAC += "<br />";
		_0x3AAC += "<hr class=\'hr-thin\' />";
		_0x3AAC += _0x5A64.desc;
		_0x3AAC += "</div>"
	};
	for (var _0x3607 = 0; _0x3607 < global_machineryMap.length; _0x3607++)
	{
		var _0x59F0 = global_machineryMap[_0x3607];
		_0x3AAC += "<div id=\'tooltip-" + _0x59F0.machineryName + "\' style=\'display:none;\'>";
		_0x3AAC += "<div style=\'font-size:16pt;font-weight:bold;margin-top:10px;\'>" + getItemName(_0x59F0.machineryName) + "</div>";
		if (_0x59F0.oil > 0)
		{
			_0x3AAC += "<br /><img src=\'images/oil.png\' class=\'img-20\' /> " + _0x59F0.oil
		};
		_0x3AAC += "<br />";
		_0x3AAC += "<hr class=\'hr-thin\' />";
		var _0x473F = "";
		var _0x58EB = "";
		var _0x5908 = "";
		_0x473F = "stone";
		_0x58EB = _0x59F0.stoneChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b><br />"
		};
		_0x3AAC += "<br />";
		_0x473F = "copper";
		_0x58EB = _0x59F0.copperChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "iron";
		_0x58EB = _0x59F0.ironChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "silver";
		_0x58EB = _0x59F0.silverChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "gold";
		_0x58EB = _0x59F0.goldChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "promethium";
		_0x58EB = _0x59F0.promethiumChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "titanium";
		_0x58EB = _0x59F0.titaniumChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x3AAC += "</div>"
	};
	for (var _0x3607 = 0; _0x3607 < global_equipmentMap.length; _0x3607++)
	{
		var _0x597C = global_equipmentMap[_0x3607];
		_0x3AAC += "<div id=\'tooltip-" + _0x597C.name + "\' style=\'display:none;\'>";
		_0x3AAC += "<h2>" + getItemName(_0x597C.name) + "</h2>";
		_0x3AAC += "<span style=\'font-size:14pt\'>";
		if (_0x597C.type != "none")
		{
			_0x3AAC += "<img src=\'images/" + _0x597C.type + ".png\' class=\'img-20\' /> " + getItemName(_0x597C.type) + " Attack";
			_0x3AAC += "<br />";
			_0x3AAC += "<br />"
		};
		if (_0x597C.attack != "0")
		{
			_0x3AAC += "<img src=\'images/attack_black.png\' class=\'img-30\' /> " + (_0x597C.attack);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		if (_0x597C.accuracy != "0")
		{
			_0x3AAC += "<img src=\'images/accuracy_black.png\' class=\'img-30\' /> " + (_0x597C.accuracy);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		if (_0x597C.speed != "0")
		{
			_0x3AAC += "<img src=\'images/speed_black.png\' class=\'img-30\' /> " + (_0x597C.speed);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		if (_0x597C.defence != "0")
		{
			_0x3AAC += "<img src=\'images/defence_black.png\' class=\'img-30\' /> " + (_0x597C.defence);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		if (_0x597C.magic != "0")
		{
			_0x3AAC += "<img src=\'images/magic_black.png\' class=\'img-30\' /> " + (_0x597C.magic);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		_0x3AAC += "</span>";
		_0x3AAC += "<br />";
		_0x3AAC += "<hr class=\'hr-thin\' />";
		_0x3AAC += _0x597C.desc;
		_0x3AAC += "</div>"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-feather", "feather", "Feathers", "Can be used to make arrows with the crafting skill.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-30\' /> <b>Click to craft arrows.</b>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustPickaxe", "stardustPickaxe", "Stardust Pickaxe", "Can be used to convert ores into <img src=\'images/miningSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>mining</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustHammer", "stardustHammer", "Stardust Hammer", "Can be used to convert bars into <img src=\'images/craftingSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>crafting</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stone", "stone", "Stone", "A common ore.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-copper", "copper", "Copper", "Can be smelted into <img src=\'images/bronzeBars.png\' class=\'img-20\' /> bronze bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-iron", "iron", "Iron", "Can be smelted into <img src=\'images/ironBars.png\' class=\'img-20\' />  iron bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-silver", "silver", "Silver", "Can be smelted into <img src=\'images/silverBars.png\' class=\'img-20\' />  silver bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-gold", "gold", "Gold", "Can be smelted into <img src=\'images/goldBars.png\' class=\'img-20\' />  gold bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-promethium", "promethium", "Promethium", "Can be smelted into <img src=\'images/promethiumBars.png\' class=\'img-20\' />  promethium bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-titanium", "titanium", "Titanium", "Can be smelted into <img src=\'images/titaniumBars.png\' class=\'img-20\' />  titanium bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-moonstone", "moonstone", "Moonstone", "A common rock found on the moon.  It can be converted into mining XP.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-limeQuartzMineral", "limeQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-jadeMineral", "jadeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-amethystMineral", "amethystMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-blueMarbleMineral", "blueMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-limoniteMineral", "limoniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-tashmarineMineral", "tashmarineMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-denseMarbleMineral", "denseMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-fluoriteMineral", "fluoriteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-purpleQuartzMineral", "purpleQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-crystalPrismeMineral", "crystalPrismeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-amberMineral", "amberMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-tanzaniteMineral", "tanzaniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-pearl", "pearl", "Pearl", "Found inside of an oyster.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-giantPearl", "", "Giant Pearl", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s huge!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-oyster", "oyster", "Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rarePearl", "rarePearl", "Rare Pearl", "Found inside of a oyster found along the beaches.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rareGiantPearl", "", "Rare Giant Pearl", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s huge, and it looks special!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-specialOyster", "oyster", "Rare Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-sharkTooth", "sharkTooth", "Shark\'s Tooth", "<img src=\'images/museum.png\' class=\'img-20\' /> A bite from a shark does over 100 damage!  Ouch!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-bronzeBars", "bronzeBars", "Bronze Bar", "A bar made of copper.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-ironBars", "ironBars", "Iron Bar", "A bar made of iron.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-silverBars", "silverBars", "Silver Bar", "A bar made of silver.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-goldBars", "goldBars", "Gold Bar", "A bar made of gold.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-promethiumBars", "promethiumBars", "Promethium Bar", "A bar made of promethium.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-titaniumBars", "titaniumBars", "Titanium Bar", "A bar made of titanium.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-snakeskin", "snakeskin", "Snakeskin", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-bearFur", "bearFur", "Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-polarBearFur", "polarBearFur", "Polar Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-blackSilk", "blackSilk", "Black Silk", "Obtained from a reaper.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-pirate", "", "Pirate", "1/600,000 chance of finding a treasure map.<br /><br /><span style=\'color:grey\'>I can only hold one map at a time.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-bluePrints", "bluePrints", "Blueprints", "Click to follow and craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-strangeLeaf", "strangeLeaf", "Strange Leaf", "A rare secondary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-ironBucket", "ironBucket", "Silver Bucket", "Killing a lava type monster will let you collect a bucket of lava.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-lumberJack", "lumberJack", "Lumberjack", "Chop all your trees in one click.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-cooldownRing1", "cooldownRing1", "Cooldown Ring (1)", "Reduces combat cooldown by 1%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-energyRing1", "energyRing1", "Energy Ring (1)", "Reduces energy use by 1%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-manaRing1", "manaRing1", "Mana Ring (1)", "Increases maximum mana by 1.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-cooldownRing2", "cooldownRing2", "Cooldown Ring (2)", "Reduces combat cooldown by 4%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-energyRing2", "energyRing2", "Energy Ring (2)", "Reduces energy use by 4%.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-manaRing2", "manaRing2", "Mana Ring (2)", "Increases maximum mana by 2.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-cooldownRing3", "cooldownRing3", "Cooldown Ring (3)", "Reduces combat cooldown by 10%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-energyRing3", "energyRing3", "Energy Ring (3)", "Reduces energy use by 10%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-manaRing3", "manaRing3", "Mana Ring (3)", "Increases maximum mana by 3.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorWoodcuttingPatch", "", "Donor Perk", "Unlocks an extra woodcutting patch.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorFarmingPlot", "", "Donor Perk", "Unlocks an extra farming patch.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorMoreOfflineTime", "", "Donor Perk", "Grants you 12h of offline time instead of 8h.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorBonusXp", "", "Donor Perk", "Every source of XP is increased by 10%.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustBox1", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 2000 Stardust.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustBox2", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 15000 Stardust.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-sapphireGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Shiny from every angle!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-emeraldGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Very shiny from every angle!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rubyGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Extremely shiny from every angle!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-snowmanCrafted", "", "Snowman", "<img src=\'images/museum.png\' class=\'img-20\' /> I think it spoke to me once!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-brokenStinger", "", "Broken Stinger", "<img src=\'images/museum.png\' class=\'img-20\' /> Normally, I would be able to use this as a weapon.  Too bad it\'s broken.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-snakeBones", "", "Snake Bones", "<img src=\'images/museum.png\' class=\'img-20\' /> The remains of a giant snake who roamed the forest.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-skeletonSkull", "", "Skull", "<img src=\'images/museum.png\' class=\'img-20\' /> Obtained from a skeleton in the caves.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-ghostClothes", "", "Ghost Clothes", "<img src=\'images/museum.png\' class=\'img-20\' /> This belonged to the roaming ghost around the farm lands.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-cockroach", "", "Giant Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Crunch.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-goldenCockroach", "", "Golden Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Perhaps this can be smelted into a gold bar.  Wait no, that\'s cruel.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-yetiLeftFoot", "", "Yeti\'s Left Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s still cold.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-yetiRightFoot", "", "Yeti\'s Right Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> Yep, still cold.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-smallSeaShell", "", "Small Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-mediumSeaShell", "", "Medium Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-largeSeaShell", "", "Large Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-mould", "craftingMould", "Crafting Mould", "Can be used to craft a specific item.<br /><br /><i>Click to operate</i>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-carePackage", "carePackage", "Care Package", "I can buy one of these everytime I upgrade the shop!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-gem", "gem", "Gem", "I can use these to socket tools granting them more power.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-smallManaStar", "", "Mana Star <span style=\'color:grey\'>(Small)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 1.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-mediumManaStar", "", "Mana Star <span style=\'color:grey\'>(Medium)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 2.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-largeManaStar", "", "Mana Star <span style=\'color:grey\'>(Large)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 3.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-hugeManaStar", "", "Mana Star <span style=\'color:grey\'>(Huge)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' />  Permanently increases mana by 5.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorCoins", "", "Tradable Donor Coins", "Donor coins may be used to buy temporary buffs that last for 30 days.<br /><br />These are currently tradable on the market, to use them in the donor shop; you must first bind them to your account.<br /><br /><span style=\'color:green\'>Click to bind coins to your account</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-colorCrystal", "useless", "Sky Crystal", "It seems to be attracted to the dark crystal.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-shovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(4000) + "<span style=\'color:grey\'> (~" + 21 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-sapphireShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3500) + "<span style=\'color:grey\'> (~" + 24 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-emeraldShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3000) + "<span style=\'color:grey\'> (~" + 28 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rubyShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2500) + "<span style=\'color:grey\'> (~" + 34 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-diamondShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2000) + "<span style=\'color:grey\'> (~" + 43 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-chisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "50%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-sapphireChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "40%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-emeraldChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "30%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rubyChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "20%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-diamondChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "0%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-logs", "logs", "Logs", "Obtained from cutting a tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-oakLogs", "oakLogs", "Oak Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-willowLogs", "willowLogs", "Willow Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-mapleLogs", "mapleLogs", "Maple Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-bambooLogs", "bambooLogs", "Bamboo Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-lavaLogs", "lavaLogs", "Lava Logs", "Obtained from cutting a specific tree.<br /><br /><img src=\'images/ironBucket.png\' class=\'img-30\' /> 2% chance of getting lava when used with oven, assuming you have empty buckets.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-pineLogs", "pineLogs", "Pine Logs", "Obtained from cutting a specific tree.  It has snow sitting on top.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustLogs", "stardustLogs", "Stardust Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-oven", "oven", "COOKING OVEN", "<b>Burn rate: " + parseInt(getBurnRate() * 100) + "%</b>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-dottedGreenLeaf", "dottedGreenLeaf", "DOTTED GREEN LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-greenLeaf", "greenLeaf", "GREEN LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-limeLeaf", "limeLeaf", "LIME LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-goldLeaf", "goldLeaf", "GOLD LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-crystalLeaf", "crystalLeaf", "CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stripedGoldLeaf", "stripedGoldLeaf", "STRIPED GOLD LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stripedCrystalLeaf", "stripedCrystalLeaf", "STRIPED CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stew", "stew", "STEW", "<img src=\'images/hourglass.png\' class=\'img-20\' /> Reduces cooldown by 15 minutes.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-redMushroom", "redMushroom", "RED MUSHROOM", "A secondary brewing ingredient.");
	var _0x5A81 = "";
	_0x5A81 += "<br /><img src=\'images/rawShrimp.png\' class=\'img-30\' /> Shrimp";
	if (getItem("sapphireSmallFishingNetTotal") > 0 || getItem("sapphireSmallFishingNet") > 0)
	{
		_0x5A81 += "<br /><img src=\'images/rawAnchovy.png\' class=\'img-30\' /> Anchovy"
	};
	if (getItem("emeraldSmallFishingNetTotal") > 0 || getItem("emeraldSmallFishingNet") > 0)
	{
		_0x5A81 += "<br /><img src=\'images/rawSardine.png\' class=\'img-30\' /> Sardine"
	};
	if (getItem("rubySmallFishingNetTotal") > 0 || getItem("rubySmallFishingNet") > 0)
	{
		_0x5A81 += "<br /><img src=\'images/rawCrab.png\' class=\'img-30\' /> Crab"
	};
	if (getItem("diamondSmallFishingNetTotal") > 0 || getItem("diamondSmallFishingNet") > 0)
	{
		_0x5A81 += "<br /><img src=\'images/rawPiranha.png\' class=\'img-30\' /> Piranhas"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-smallFishingNet", "varNameIfSellable", "Small Fishing Net", "<b>Catch size: </b> Small<br />" + _0x5A81);
	var _0x5999 = "";
	_0x5999 += "<br /><img src=\'images/rawTrout.png\' class=\'img-30\' /> Trout";
	if (getItem("sapphireFishingRodTotal") > 0 || getItem("sapphireFishingRod") > 0)
	{
		_0x5999 += "<br /><img src=\'images/rawSalmon.png\' class=\'img-30\' /> Salmon"
	};
	if (getItem("emeraldFishingRodTotal") > 0 || getItem("emeraldFishingRod") > 0)
	{
		_0x5999 += "<br /><img src=\'images/rawEel.png\' class=\'img-30\' /> Eel"
	};
	if (getItem("rubyFishingRodTotal") > 0 || getItem("rubyFishingRod") > 0)
	{
		_0x5999 += "<br /><img src=\'images/rawSeaTurtle.png\' class=\'img-30\' /> Sea Turtle"
	};
	if (getItem("diamondFishingRodTotal") > 0 || getItem("diamondFishingRod") > 0)
	{
		_0x5999 += "<br /><img src=\'images/rawRainbowFish.png\' class=\'img-30\' /> Rainbow Fish"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-fishingRod", "varNameIfSellable", "Fishing Rod", "<b>Catch size: </b> Medium<br />" + _0x5999);
	var _0x59B6 = "";
	_0x59B6 += "<br /><img src=\'images/rawTuna.png\' class=\'img-30\' /> Tuna";
	if (getItem("sapphireHarpoonTotal") > 0 || getItem("sapphireHarpoon") > 0)
	{
		_0x59B6 += "<br /><img src=\'images/rawSwordfish.png\' class=\'img-30\' /> Swordfish"
	};
	if (getItem("emeraldHarpoonTotal") > 0 || getItem("emeraldHarpoon") > 0)
	{
		_0x59B6 += "<br /><img src=\'images/rawMantaRay.png\' class=\'img-30\' /> Manta Ray"
	};
	if (getItem("rubyHarpoonTotal") > 0 || getItem("rubyHarpoon") > 0)
	{
		_0x59B6 += "<br /><img src=\'images/rawShark.png\' class=\'img-30\' /> Shark"
	};
	if (getItem("diamondHarpoonTotal") > 0 || getItem("diamondHarpoon") > 0)
	{
		_0x59B6 += "<br /><img src=\'images/rawWhale.png\' class=\'img-30\' /> Whale"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-harpoon", "varNameIfSellable", "Harpoon", "<b>Catch size: </b> Large<br />" + _0x59B6);
	var _0x59D3 = 0;
	var _0x5925 = "<img src=\'images/check.png\' class=\'img-20\'  />";
	_0x59D3 = 1;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollHeal", "spellScrollHeal", "HEAL", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + 1 + " magic required. " + _0x5925);
	_0x59D3 = 5;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollPoison", "", "POISON", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 10;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollReflect", "", "REFLECT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 15;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollFire", "", "FIRE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 20;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollTeleport", "", "TELEPORT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 30;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollFreeze", "", "FREEZE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 40;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollGhostScan", "", "GHOST SCAN", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 50;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollInvisibility", "", "INVISIBILITY", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	var _0x4ED6;
	var _0x5A0D;
	var _0x384B;
	var _0x595F;
	var _0x58B1;
	var _0x5A47;
	var _0x41B2;
	_0x41B2 = "";
	_0x4ED6 = "HEAL";
	_0x5A0D = 3;
	_0x384B = "Heal instantly during combat.";
	_0x595F = 10;
	_0x58B1 = "<b>Base heal:</b> 2 health.";
	_0x5A47 = "<b>Multiplier:</b> Heal an additional 1 health per 5 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-healCasted>0</item-healCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "POISON";
	_0x5A0D = 5;
	_0x384B = "Poisons your enemy, dealing 1 damage every 7 seconds.";
	_0x595F = 300;
	_0x58B1 = "<b>Base poison:</b> 1 damage.";
	_0x5A47 = "<b>Multiplier:</b> Poison damaged increased by 1 per 10 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-poisonCasted>0</item-poisonCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "REFLECT";
	_0x5A0D = 3;
	_0x384B = "Reflects the next attack from the enemy back to them.";
	_0x595F = 30;
	_0x58B1 = "<b>Base damage:</b> N/A";
	_0x5A47 = "<b>Buff:</b> Having a magic bonus greater than 20 will not trigger reflect if the enemy hits a 0.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-reflectCasted>0</item-reflectCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "FIRE";
	_0x5A0D = 2;
	_0x384B = "Instantly deals fire damage to your enemy.";
	_0x595F = 10;
	_0x58B1 = "<b>Base damage:</b> 0 - 2";
	_0x5A47 = "<b>Buff:</b> +1 damage per 3 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-fireCasted>0</item-fireCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "TELEPORT";
	_0x5A0D = 0;
	_0x384B = "Teleports you out of combat, fully recovering HP and mana allowing you to fight again.";
	_0x595F = 900;
	_0x58B1 = "<b>Base damage:</b> n/a";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-teleportCasted>0</item-teleportCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 15 + " minutes.";
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "GHOST SCAN";
	_0x5A0D = 0;
	_0x384B = "Ability to see ghosts.";
	_0x595F = 300;
	_0x58B1 = "<b>Base damage:</b> n/a";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-ghostScanCasted>0</item-ghostScanCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 5 + " minutes.";
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + "ghostScan", _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "FREEZE";
	_0x5A0D = 5;
	_0x384B = "Freezes your enemy for a short duration";
	_0x595F = 15;
	_0x58B1 = "<b>Base Freeze Time:</b> 3 seconds";
	_0x5A47 = "<b>Buff:</b> +1 seconds per 5 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-" + _0x4ED6.toLowerCase() + "Casted>0</item-" + _0x4ED6.toLowerCase() + "Casted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "INVISIBILITY";
	_0x5A0D = 1;
	_0x384B = "Become invisibile, making your enemy miss.";
	_0x595F = 30;
	_0x58B1 = "<b>Invisibility time:</b> 2 second";
	_0x5A47 = "<b>Buff:</b> No mana cost at 20 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-" + _0x4ED6.toLowerCase() + "Casted>0</item-" + _0x4ED6.toLowerCase() + "Casted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	if (getItem("treeUnlocked2") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-treeSection2", "treeSection2", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("treeUnlocked3") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-treeSection3", "treeSection3", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("treeUnlocked4") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-treeSection4", "treeSection4", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/woodcuttingSkill.png\' class=\'img-30\' /> 50 woodcutting.")
	};
	if (getItem("treeUnlocked6") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-treeSection5and6", "treeSection5and6", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	if (getItem("plotUnlocked2") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-plotSection2", "plotSection2", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("plotUnlocked3") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-plotSection3", "plotSection3", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("plotUnlocked4") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-plotSection4", "plotSection4", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/farmingSkill.png\' class=\'img-30\' /> 50 farming.")
	};
	if (getItem("plotUnlocked6") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-plotSection5and6", "plotSection5and6", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	var _0x5942 = "";
	var _0x5894 = "Fields";
	var _0x5A2A = [];
	_0x5942 = "";
	_0x5894 = "Fields";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(50) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(15 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Chickens &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Rats &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Bees";
	document.getElementById(_0x5894.toLowerCase() + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894.toLowerCase(), "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "Forest";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(200) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(30 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Snake &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Ent &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Thief";
	document.getElementById(_0x5894.toLowerCase() + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894.toLowerCase(), "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "Caves";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(500) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(60 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Spider &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Skeleton";
	document.getElementById(_0x5894.toLowerCase() + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894.toLowerCase(), "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "lavaDungeon";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(2000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(90 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Lava Alien &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Bat &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Fire Mage";
	document.getElementById(_0x5894 + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894, "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "northernFields";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(5000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(120 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Bonehead &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Mamma Polar Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Yeti";
	document.getElementById(_0x5894 + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894, "", "Northern Fields", _0x5942);
	_0x5942 = "";
	_0x5894 = "cemetery";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(10000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(150 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Ghost &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Skeleton Ghost &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Reaper";
	document.getElementById(_0x5894 + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894, "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "ocean";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(16000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(180 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Shark &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Puffer Fish &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Trident Soldier";
	document.getElementById(_0x5894 + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894, "", _0x5894, _0x5942);
	var _0x480A = "";
	_0x5942 = "";
	_0x480A = "bushy";
	if (getItem(_0x480A + "Kills") == 0)
	{
		_0x5942 = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(1000) + "</center><br /><img src=\'images/" + _0x480A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x480A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-bushy").src = "images/bossMarkerCompleted.gif";
			_0x5942 = "<img src=\'images/" + _0x480A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-bushy", "", "BUSHY <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> None</span>", _0x5942);
	_0x480A = "fireHawk";
	if (getItem(_0x480A + "Kills") == 0)
	{
		_0x5942 = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(6000) + "</center><br /><img src=\'images/" + _0x480A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x480A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x480A).src = "images/bossMarkerCompleted.gif";
			_0x5942 = "<img src=\'images/" + _0x480A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x480A, "", getItemName(_0x480A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> Water or Ice</span>", _0x5942);
	_0x480A = "iceHawk";
	if (getItem(_0x480A + "Kills") == 0)
	{
		_0x5942 = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(10000)) + "</center><br /><img src=\'images/" + _0x480A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x480A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x480A).src = "images/bossMarkerCompleted.gif";
			_0x5942 = "<img src=\'images/" + _0x480A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x480A, "", getItemName(_0x480A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> Fire</span>", _0x5942);
	_0x480A = "piranhas";
	if (getItem(_0x480A + "Kills") == 0)
	{
		_0x5942 = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(25000)) + "</center><br /><img src=\'images/" + _0x480A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x480A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x480A).src = "images/bossMarkerCompletedMany.gif";
			_0x5942 = "<img src=\'images/" + _0x480A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x480A, "", getItemName(_0x480A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> None</span>", _0x5942);
	document.getElementById("dynamic-tooltips-area").innerHTML = _0x3AAC
}