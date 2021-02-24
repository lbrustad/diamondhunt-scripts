/**
 * initializeTooltips extracted from ../../deobfuscated/bundle.js at line 11190-12129
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
	var _0x151CA = "";
	document.getElementById("dynamic-tooltips-area").innerHTML = "";
	for (var _0x14C0C = 0; _0x14C0C < global_foodMap.length; _0x14C0C++)
	{
		var _0x16AF2 = global_foodMap[_0x14C0C];
		if (_0x16AF2.rawFoodName != "none")
		{
			_0x151CA += "<div id=\'tooltip-" + _0x16AF2.rawFoodName + "\' style=\'display:none;\'>";
			_0x151CA += "<h2>" + getItemName(_0x16AF2.rawFoodName) + "</h2>";
			_0x151CA += "<img src=\'images/heat.png\' class=\'img-30\' /> " + formatNumber(_0x16AF2.heat) + " heat";
			_0x151CA += "<br />";
			_0x151CA += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x16AF2.energy) + " energy";
			_0x151CA += "<br />";
			_0x151CA += "<img src=\'images/cookingSkill.png\' class=\'img-30\' /> Level " + _0x16AF2.cookLevel + " <span style=\'color:grey\'>(" + formatNumber(_0x16AF2.xp) + " XP)</span>";
			_0x151CA += "<br />";
			_0x151CA += "<hr class=\'hr-thin\' />";
			_0x151CA += _0x16AF2.desc;
			_0x151CA += "</div>"
		};
		_0x151CA += "<div id=\'tooltip-" + _0x16AF2.cookedFoodName + "\' style=\'display:none;\'>";
		_0x151CA += "<h2>" + getItemName(_0x16AF2.cookedFoodName) + "</h2>";
		_0x151CA += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x16AF2.energy) + " energy";
		_0x151CA += "<br />";
		_0x151CA += "<hr class=\'hr-thin\' />";
		_0x151CA += _0x16AF2.desc;
		_0x151CA += "</div>"
	};
	for (var _0x14C0C = 0; _0x14C0C < global_seedMap.length; _0x14C0C++)
	{
		var _0x17ACE = global_seedMap[_0x14C0C];
		_0x151CA += "<div id=\'tooltip-" + _0x17ACE.name + "\' style=\'display:none;\'>";
		_0x151CA += "<h2>" + getItemName(_0x17ACE.name) + "</h2>";
		_0x151CA += "<img style=\'margin:3px;\' src=\'images/farmingSkill.png\' class=\'img-30\' /> Level " + formatNumber(_0x17ACE.level) + " <span style=\'color:grey\'>(" + formatNumber(_0x17ACE.xp) + " xp)</span>";
		_0x151CA += "<br />";
		var _0x178C1 = "";
		if (_0x17ACE.stopsDieingAtLevel == 0)
		{
			_0x151CA += "<img style=\'margin:3px;\' src=\'images/" + _0x17ACE.name.substr(0, _0x17ACE.name.length - 5) + ".png\' class=\'img-30\' /> Cannot die <img src=\'images/check.png\' class=\'img-15\' />"
		}
		else
		{
			if (getLevel(getItem("farmingXp")) >= _0x17ACE.stopsDieingAtLevel)
			{
				_0x151CA += "<img style=\'margin:3px;\' src=\'images/" + _0x17ACE.name.substr(0, _0x17ACE.name.length - 5) + ".png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x17ACE.stopsDieingAtLevel) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x151CA += "<img style=\'margin:3px;\' src=\'images/deadLeaf.png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x17ACE.stopsDieingAtLevel) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		if (parseInt(_0x17ACE.bonemeal) > 0)
		{
			if (getItem("bonemeal") >= parseInt(_0x17ACE.bonemeal))
			{
				_0x151CA += "<br />";
				_0x151CA += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x17ACE.bonemeal)) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x151CA += "<br />";
				_0x151CA += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x17ACE.bonemeal)) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		_0x151CA += "<br />";
		_0x151CA += "<img style=\'margin:3px;\' src=\'images/hourglass_grey.png\' class=\'img-30\' />" + formatTime(_0x17ACE.timer);
		_0x151CA += "<br />";
		_0x151CA += "<hr class=\'hr-thin\' />";
		_0x151CA += _0x17ACE.desc;
		_0x151CA += "</div>"
	};
	for (var _0x14C0C = 0; _0x14C0C < global_machineryMap.length; _0x14C0C++)
	{
		var _0x17A42 = global_machineryMap[_0x14C0C];
		_0x151CA += "<div id=\'tooltip-" + _0x17A42.machineryName + "\' style=\'display:none;\'>";
		_0x151CA += "<div style=\'font-size:16pt;font-weight:bold;margin-top:10px;\'>" + getItemName(_0x17A42.machineryName) + "</div>";
		if (_0x17A42.oil > 0)
		{
			_0x151CA += "<br /><img src=\'images/oil.png\' class=\'img-20\' /> " + _0x17A42.oil
		};
		_0x151CA += "<br />";
		_0x151CA += "<hr class=\'hr-thin\' />";
		var _0x1613D = "";
		var _0x178E4 = "";
		var _0x17907 = "";
		_0x1613D = "stone";
		_0x178E4 = _0x17A42.stoneChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b><br />"
		};
		_0x151CA += "<br />";
		_0x1613D = "copper";
		_0x178E4 = _0x17A42.copperChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "iron";
		_0x178E4 = _0x17A42.ironChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "silver";
		_0x178E4 = _0x17A42.silverChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "gold";
		_0x178E4 = _0x17A42.goldChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "promethium";
		_0x178E4 = _0x17A42.promethiumChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "titanium";
		_0x178E4 = _0x17A42.titaniumChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x151CA += "</div>"
	};
	for (var _0x14C0C = 0; _0x14C0C < global_equipmentMap.length; _0x14C0C++)
	{
		var _0x17993 = global_equipmentMap[_0x14C0C];
		_0x151CA += "<div id=\'tooltip-" + _0x17993.name + "\' style=\'display:none;\'>";
		_0x151CA += "<h2>" + getItemName(_0x17993.name) + "</h2>";
		_0x151CA += "<span style=\'font-size:14pt\'>";
		if (_0x17993.type != "none")
		{
			_0x151CA += "<img src=\'images/" + _0x17993.type + ".png\' class=\'img-20\' /> " + getItemName(_0x17993.type) + " Attack";
			_0x151CA += "<br />";
			_0x151CA += "<br />"
		};
		if (_0x17993.attack != "0")
		{
			_0x151CA += "<img src=\'images/attack_black.png\' class=\'img-30\' /> " + (_0x17993.attack);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		if (_0x17993.accuracy != "0")
		{
			_0x151CA += "<img src=\'images/accuracy_black.png\' class=\'img-30\' /> " + (_0x17993.accuracy);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		if (_0x17993.speed != "0")
		{
			_0x151CA += "<img src=\'images/speed_black.png\' class=\'img-30\' /> " + (_0x17993.speed);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		if (_0x17993.defence != "0")
		{
			_0x151CA += "<img src=\'images/defence_black.png\' class=\'img-30\' /> " + (_0x17993.defence);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		if (_0x17993.magic != "0")
		{
			_0x151CA += "<img src=\'images/magic_black.png\' class=\'img-30\' /> " + (_0x17993.magic);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		_0x151CA += "</span>";
		_0x151CA += "<br />";
		_0x151CA += "<hr class=\'hr-thin\' />";
		_0x151CA += _0x17993.desc;
		_0x151CA += "</div>"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-feather", "feather", "Feathers", "Can be used to make arrows with the crafting skill.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-30\' /> <b>Click to craft arrows.</b>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustPickaxe", "stardustPickaxe", "Stardust Pickaxe", "Can be used to convert ores into <img src=\'images/miningSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>mining</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustHammer", "stardustHammer", "Stardust Hammer", "Can be used to convert bars into <img src=\'images/craftingSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>crafting</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stone", "stone", "Stone", "A common ore.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-copper", "copper", "Copper", "Can be smelted into <img src=\'images/bronzeBars.png\' class=\'img-20\' /> bronze bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-iron", "iron", "Iron", "Can be smelted into <img src=\'images/ironBars.png\' class=\'img-20\' />  iron bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-silver", "silver", "Silver", "Can be smelted into <img src=\'images/silverBars.png\' class=\'img-20\' />  silver bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-gold", "gold", "Gold", "Can be smelted into <img src=\'images/goldBars.png\' class=\'img-20\' />  gold bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-promethium", "promethium", "Promethium", "Can be smelted into <img src=\'images/promethiumBars.png\' class=\'img-20\' />  promethium bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-titanium", "titanium", "Titanium", "Can be smelted into <img src=\'images/titaniumBars.png\' class=\'img-20\' />  titanium bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-moonstone", "moonstone", "Moonstone", "A common rock found on the moon.  It can be converted into mining XP.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-marsRock", "marsRock", "Mars Rock", "A common rock found on the moon.  It can be converted into mining XP.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-piratesParrot", "", "Pirate\'s Parrot", "Permanently increases your chance of finding maps from pirate\'s by 50%.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-limeQuartzMineral", "limeQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-jadeMineral", "jadeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-amethystMineral", "amethystMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-blueMarbleMineral", "blueMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-limoniteMineral", "limoniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-tashmarineMineral", "tashmarineMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-denseMarbleMineral", "denseMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-fluoriteMineral", "fluoriteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-purpleQuartzMineral", "purpleQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-crystalPrismeMineral", "crystalPrismeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-amberMineral", "amberMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-tanzaniteMineral", "tanzaniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-pearl", "pearl", "Pearl", "Found inside of an oyster.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-giantPearl", "", "Giant Pearl", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s huge!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-oyster", "oyster", "Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rarePearl", "rarePearl", "Rare Pearl", "Found inside of a oyster found along the beaches.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rareGiantPearl", "", "Rare Giant Pearl", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s huge, and it looks special!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-specialOyster", "oyster", "Rare Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-sharkTooth", "sharkTooth", "Shark\'s Tooth", "<img src=\'images/museum.png\' class=\'img-20\' /> A bite from a shark does over 100 damage!  Ouch!");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-heal-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 3</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-poison-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 5</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-reflect-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 3</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-fire-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 2</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-freeze-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 5</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-ghostScan-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 0</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-teleport-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 0</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-invisibility-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 1</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-monsterSigil", "", "Monster Sigil", "Monster sigils are extremely rare drops obtained from fighting in any zone.<br /><br />The drop rate is 1/10\'000.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-holidaySigil", "", "Holiday Sigil", "Holiday sigils can only be obtained during holiday events.  They become tradable every year during their respective holiday.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-eventSigil", "", "Event Sigil", "Event sigils are only obtained after joining none-holiday related events, such as diamond hunt mmo and other.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-bronzeBars", "bronzeBars", "Bronze Bar", "A bar made of copper.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-ironBars", "ironBars", "Iron Bar", "A bar made of iron.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-silverBars", "silverBars", "Silver Bar", "A bar made of silver.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-goldBars", "goldBars", "Gold Bar", "A bar made of gold.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-promethiumBars", "promethiumBars", "Promethium Bar", "A bar made of promethium.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-titaniumBars", "titaniumBars", "Titanium Bar", "A bar made of titanium.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-snakeskin", "snakeskin", "Snakeskin", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-bearFur", "bearFur", "Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-polarBearFur", "polarBearFur", "Polar Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-blackSilk", "blackSilk", "Black Silk", "Obtained from a reaper.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-pirate", "", "Pirate", "Arrr, let\'s find some treasures!<br /><br /><span style=\'color:grey\'>Your pirate is constantly looking for maps.  They are very rare.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-treasureMap", "", "Treasure Map", "A treasure map!  These are quite rare!<br /><br /><span style=\'color:grey\'>You can only hold one of these at a time.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-greenTreasureMap", "", "Green Treasure Map", "A treasure map!  These maps are very rare!<br /><br /><span style=\'color:grey\'>You can only hold one of these at a time.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-bluePrints", "bluePrints", "Blueprints", "Click to follow and craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-strangeLeaf", "strangeLeaf", "Strange Leaf", "A rare secondary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-ironBucket", "ironBucket", "Silver Bucket", "Killing a lava type monster will let you collect a bucket of lava.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-lumberJack", "lumberJack", "Lumberjack", "Chop all your trees in one click.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-cooldownRing1", "cooldownRing1", "Cooldown Ring (1)", "Reduces combat cooldown by 1%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-energyRing1", "energyRing1", "Energy Ring (1)", "Reduces energy use by 1%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-manaRing1", "manaRing1", "Mana Ring (1)", "Increases maximum mana by 1.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-cooldownRing2", "cooldownRing2", "Cooldown Ring (2)", "Reduces combat cooldown by 4%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-energyRing2", "energyRing2", "Energy Ring (2)", "Reduces energy use by 4%.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-manaRing2", "manaRing2", "Mana Ring (2)", "Increases maximum mana by 2.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-cooldownRing3", "cooldownRing3", "Cooldown Ring (3)", "Reduces combat cooldown by 10%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-energyRing3", "energyRing3", "Energy Ring (3)", "Reduces energy use by 10%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-manaRing3", "manaRing3", "Mana Ring (3)", "Increases maximum mana by 3.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorWoodcuttingPatch", "", "Donor Perk", "Unlocks an extra woodcutting patch.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorFarmingPlot", "", "Donor Perk", "Unlocks an extra farming patch.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorMoreOfflineTime", "", "Donor Perk", "Grants you 12h of offline time instead of 8h.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorBonusXp", "", "Donor Perk", "Every source of XP is increased by 10%.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustBox1", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 2000 Stardust.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustBox2", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 15000 Stardust.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-sapphireGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Shiny from every angle!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-emeraldGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Very shiny from every angle!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rubyGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Extremely shiny from every angle!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-diamondGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Wow! It\'s shiny even if I\'m not looking towards the hand!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-snowmanCrafted", "", "Snowman", "<img src=\'images/museum.png\' class=\'img-20\' /> I think it spoke to me once!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-brokenStinger", "", "Broken Stinger", "<img src=\'images/museum.png\' class=\'img-20\' /> Normally, I would be able to use this as a weapon.  Too bad it\'s broken.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-glowingGoldBar", "", "Broken Stinger", "<img src=\'images/museum.png\' class=\'img-20\' /> This gold bar seems quite unusual.  Almost like it\'s glowing.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-snakeBones", "", "Snake Bones", "<img src=\'images/museum.png\' class=\'img-20\' /> The remains of a giant snake who roamed the forest.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-skeletonSkull", "", "Skull", "<img src=\'images/museum.png\' class=\'img-20\' /> Obtained from a skeleton in the caves.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-ghostClothes", "", "Ghost Clothes", "<img src=\'images/museum.png\' class=\'img-20\' /> This belonged to the roaming ghost around the farm lands.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-cockroach", "", "Giant Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Crunch.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-goldenCockroach", "", "Golden Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Perhaps this can be smelted into a gold bar.  Wait no, that\'s cruel.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stoneEyes", "", "Stone Eyes", "<img src=\'images/museum.png\' class=\'img-20\' /> A good defence against an attack is to go for the eyes.  Except these.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-burntRemains", "", "Burnt Remains", "<img src=\'images/museum.png\' class=\'img-20\' /> The dragon must have gotten to this poor fellow.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-yetiLeftFoot", "", "Yeti\'s Left Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s still cold.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-yetiRightFoot", "", "Yeti\'s Right Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> Yep, still cold.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-smallSeaShell", "", "Small Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-mediumSeaShell", "", "Medium Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-largeSeaShell", "", "Large Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-mould", "craftingMould", "Crafting Mould", "Can be used to craft a specific item.<br /><br /><i>Click to operate</i>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-carePackage", "carePackage", "Care Package", "I can buy one of these everytime I upgrade the shop!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-gem", "gem", "Gem", "I can use these to socket tools granting them more power.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-smallManaStar", "", "Mana Star <span style=\'color:grey\'>(Small)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 1.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-mediumManaStar", "", "Mana Star <span style=\'color:grey\'>(Medium)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 2.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-largeManaStar", "", "Mana Star <span style=\'color:grey\'>(Large)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 3.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-hugeManaStar", "", "Mana Star <span style=\'color:grey\'>(Huge)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' />  Permanently increases mana by 5.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorCoins", "", "Tradable Donor Coins", "Donor coins may be used to buy temporary buffs that last for 30 days.<br /><br />These are currently tradable on the market, to use them in the donor shop; you must first bind them to your account.<br /><br /><span style=\'color:green\'>Click to bind coins to your account</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-colorCrystal", "useless", "Sky Crystal", "It seems to be attracted to the dark crystal.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-shovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(4000) + "<span style=\'color:grey\'> (~" + 21 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-sapphireShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3500) + "<span style=\'color:grey\'> (~" + 24 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-emeraldShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3000) + "<span style=\'color:grey\'> (~" + 28 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rubyShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2500) + "<span style=\'color:grey\'> (~" + 34 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-diamondShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2000) + "<span style=\'color:grey\'> (~" + 43 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-chisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "50%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-sapphireChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "40%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-emeraldChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "30%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rubyChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "20%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-diamondChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "0%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-watch", "useless", "Watch", "To set the desired seed, click on the seed first (as if you were planting them) and then click on the watch.<br /><br /><span style=\'color:grey;font-size:10pt;\'>Bob will automatically harvest crops that are ready, and replant the seed that has been set.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-logs", "logs", "Logs", "Obtained from cutting a tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-oakLogs", "oakLogs", "Oak Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-willowLogs", "willowLogs", "Willow Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-mapleLogs", "mapleLogs", "Maple Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-bambooLogs", "bambooLogs", "Bamboo Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-lavaLogs", "lavaLogs", "Lava Logs", "Obtained from cutting a specific tree.<br /><br /><img src=\'images/ironBucket.png\' class=\'img-30\' /> 2% chance of getting lava when used with oven, assuming you have empty buckets.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-pineLogs", "pineLogs", "Pine Logs", "Obtained from cutting a specific tree.  It has snow sitting on top.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustLogs", "stardustLogs", "Stardust Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-oven", "oven", "COOKING OVEN", "<b>Burn rate: " + parseInt(getBurnRate() * 100) + "%</b>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-dottedGreenLeaf", "dottedGreenLeaf", "DOTTED GREEN LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-greenLeaf", "greenLeaf", "GREEN LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-limeLeaf", "limeLeaf", "LIME LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-goldLeaf", "goldLeaf", "GOLD LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-crystalLeaf", "crystalLeaf", "CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stripedGoldLeaf", "stripedGoldLeaf", "STRIPED GOLD LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stripedCrystalLeaf", "stripedCrystalLeaf", "STRIPED CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stew", "stew", "STEW", "<img src=\'images/hourglass.png\' class=\'img-20\' /> Reduces cooldown by 15 minutes.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-redMushroom", "redMushroom", "RED MUSHROOM", "A secondary brewing ingredient.");
	var _0x17AF1 = "";
	_0x17AF1 += "<br /><img src=\'images/rawShrimp.png\' class=\'img-30\' /> Shrimp";
	if (getItem("sapphireSmallFishingNetTotal") > 0 || getItem("sapphireSmallFishingNet") > 0)
	{
		_0x17AF1 += "<br /><img src=\'images/rawAnchovy.png\' class=\'img-30\' /> Anchovy"
	};
	if (getItem("emeraldSmallFishingNetTotal") > 0 || getItem("emeraldSmallFishingNet") > 0)
	{
		_0x17AF1 += "<br /><img src=\'images/rawSardine.png\' class=\'img-30\' /> Sardine"
	};
	if (getItem("rubySmallFishingNetTotal") > 0 || getItem("rubySmallFishingNet") > 0)
	{
		_0x17AF1 += "<br /><img src=\'images/rawCrab.png\' class=\'img-30\' /> Crab"
	};
	if (getItem("diamondSmallFishingNetTotal") > 0 || getItem("diamondSmallFishingNet") > 0)
	{
		_0x17AF1 += "<br /><img src=\'images/rawPiranha.png\' class=\'img-30\' /> Piranhas"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-smallFishingNet", "varNameIfSellable", "Small Fishing Net", "<b>Catch size: </b> Small<br />" + _0x17AF1);
	var _0x179B6 = "";
	_0x179B6 += "<br /><img src=\'images/rawTrout.png\' class=\'img-30\' /> Trout";
	if (getItem("sapphireFishingRodTotal") > 0 || getItem("sapphireFishingRod") > 0)
	{
		_0x179B6 += "<br /><img src=\'images/rawSalmon.png\' class=\'img-30\' /> Salmon"
	};
	if (getItem("emeraldFishingRodTotal") > 0 || getItem("emeraldFishingRod") > 0)
	{
		_0x179B6 += "<br /><img src=\'images/rawEel.png\' class=\'img-30\' /> Eel"
	};
	if (getItem("rubyFishingRodTotal") > 0 || getItem("rubyFishingRod") > 0)
	{
		_0x179B6 += "<br /><img src=\'images/rawSeaTurtle.png\' class=\'img-30\' /> Sea Turtle"
	};
	if (getItem("diamondFishingRodTotal") > 0 || getItem("diamondFishingRod") > 0)
	{
		_0x179B6 += "<br /><img src=\'images/rawRainbowFish.png\' class=\'img-30\' /> Rainbow Fish"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-fishingRod", "varNameIfSellable", "Fishing Rod", "<b>Catch size: </b> Medium<br />" + _0x179B6);
	var _0x179D9 = "";
	_0x179D9 += "<br /><img src=\'images/rawTuna.png\' class=\'img-30\' /> Tuna";
	if (getItem("sapphireHarpoonTotal") > 0 || getItem("sapphireHarpoon") > 0)
	{
		_0x179D9 += "<br /><img src=\'images/rawSwordfish.png\' class=\'img-30\' /> Swordfish"
	};
	if (getItem("emeraldHarpoonTotal") > 0 || getItem("emeraldHarpoon") > 0)
	{
		_0x179D9 += "<br /><img src=\'images/rawMantaRay.png\' class=\'img-30\' /> Manta Ray"
	};
	if (getItem("rubyHarpoonTotal") > 0 || getItem("rubyHarpoon") > 0)
	{
		_0x179D9 += "<br /><img src=\'images/rawShark.png\' class=\'img-30\' /> Shark"
	};
	if (getItem("diamondHarpoonTotal") > 0 || getItem("diamondHarpoon") > 0)
	{
		_0x179D9 += "<br /><img src=\'images/rawWhale.png\' class=\'img-30\' /> Whale"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-harpoon", "varNameIfSellable", "Harpoon", "<b>Catch size: </b> Large<br />" + _0x179D9);
	var _0x17A1F = 0;
	var _0x1792A = "<img src=\'images/check.png\' class=\'img-20\'  />";
	_0x17A1F = 1;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollHeal", "spellScrollHeal", "HEAL", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + 1 + " magic required. " + _0x1792A);
	_0x17A1F = 5;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollPoison", "", "POISON", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 10;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollReflect", "", "REFLECT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 15;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollFire", "", "FIRE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 20;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollTeleport", "", "TELEPORT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 30;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollFreeze", "", "FREEZE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 40;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollGhostScan", "", "GHOST SCAN", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 50;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollInvisibility", "", "INVISIBILITY", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	var _0x14D47;
	var _0x17A65;
	var _0x14EEB;
	var _0x17970;
	var _0x1789E;
	var _0x17AAB;
	var _0x15A44;
	var _0x179FC;
	_0x15A44 = "";
	_0x14D47 = "HEAL";
	_0x17A65 = 3;
	_0x14EEB = "Heal instantly during combat.";
	_0x17970 = 10;
	_0x1789E = "<b>Base heal:</b> 2 health.";
	_0x179FC = "q";
	_0x17AAB = "<b>Multiplier:</b> Heal an additional 1 health per 5 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-healCasted>0</item-healCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "POISON";
	_0x17A65 = 5;
	_0x14EEB = "Poisons your enemy, dealing 1 damage every 7 seconds.";
	_0x17970 = 300;
	_0x1789E = "<b>Base poison:</b> 1 damage.";
	_0x179FC = "w";
	_0x17AAB = "<b>Multiplier:</b> Poison damaged increased by 1 per 10 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-poisonCasted>0</item-poisonCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "REFLECT";
	_0x17A65 = 3;
	_0x14EEB = "Reflects the next attack from the enemy back to them.  Does not work on poison attacks.";
	_0x17970 = 30;
	_0x1789E = "<b>Base damage:</b> N/A";
	_0x179FC = "e";
	_0x17AAB = "<b>Buff:</b> Having a magic bonus greater than 20 will not trigger reflect if the enemy hits a 0.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-reflectCasted>0</item-reflectCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "FIRE";
	_0x17A65 = 2;
	_0x14EEB = "Instantly deals fire damage to your enemy.";
	_0x17970 = 10;
	_0x1789E = "<b>Base damage:</b> 0 - 2";
	_0x179FC = "r";
	_0x17AAB = "<b>Buff:</b> +1 damage per 3 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-fireCasted>0</item-fireCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "TELEPORT";
	_0x17A65 = 0;
	_0x14EEB = "Teleports you out of combat, fully recovering HP and mana allowing you to fight again.";
	_0x17970 = 900;
	_0x1789E = "<b>Base damage:</b> n/a";
	_0x179FC = "t";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-teleportCasted>0</item-teleportCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 15 + " minutes.";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "GHOST SCAN";
	_0x17A65 = 0;
	_0x14EEB = "Ability to see ghosts.";
	_0x17970 = 300;
	_0x1789E = "<b>Base damage:</b> n/a";
	_0x179FC = "y";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-ghostScanCasted>0</item-ghostScanCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 5 + " minutes.";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + "ghostScan", _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "FREEZE";
	_0x17A65 = 5;
	_0x14EEB = "Freezes your enemy for a short duration";
	_0x17970 = 15;
	_0x1789E = "<b>Base Freeze Time:</b> 3 seconds";
	_0x179FC = "u";
	_0x17AAB = "<b>Buff:</b> +1 seconds per 5 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-" + _0x14D47.toLowerCase() + "Casted>0</item-" + _0x14D47.toLowerCase() + "Casted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "INVISIBILITY";
	_0x17A65 = 1;
	_0x14EEB = "Become invisibile, making your enemy miss.";
	_0x17970 = 30;
	_0x1789E = "<b>Invisibility time:</b> 2 second";
	_0x179FC = "i";
	_0x17AAB = "<b>Buff:</b> No mana cost at 20 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-" + _0x14D47.toLowerCase() + "Casted>0</item-" + _0x14D47.toLowerCase() + "Casted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	if (getItem("treeUnlocked2") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-treeSection2", "treeSection2", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("treeUnlocked3") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-treeSection3", "treeSection3", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("treeUnlocked4") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-treeSection4", "treeSection4", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/woodcuttingSkill.png\' class=\'img-30\' /> 50 woodcutting.")
	};
	if (getItem("treeUnlocked6") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-treeSection5and6", "treeSection5and6", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	if (getItem("plotUnlocked2") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-plotSection2", "plotSection2", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("plotUnlocked3") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-plotSection3", "plotSection3", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("plotUnlocked4") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-plotSection4", "plotSection4", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/farmingSkill.png\' class=\'img-30\' /> 50 farming.")
	};
	if (getItem("plotUnlocked6") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-plotSection5and6", "plotSection5and6", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	var _0x1794D = "";
	var _0x1787B = "Fields";
	var _0x17A88 = [];
	_0x1794D = "";
	_0x1787B = "Fields";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(50) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(15 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Chickens &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Rats &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Bees";
	document.getElementById(_0x1787B.toLowerCase() + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B.toLowerCase(), "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "Forest";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(200) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(30 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Snake &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Ent &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Thief";
	document.getElementById(_0x1787B.toLowerCase() + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B.toLowerCase(), "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "Caves";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(500) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(60 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Spider &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Skeleton";
	document.getElementById(_0x1787B.toLowerCase() + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B.toLowerCase(), "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "lavaDungeon";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(2000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(90 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Lava Alien &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Bat &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Fire Mage";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "northernFields";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(5000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(120 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Bonehead &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Mamma Polar Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Yeti";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", "Northern Fields", _0x1794D);
	_0x1794D = "";
	_0x1787B = "cemetery";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(10000)) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(150 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Ghost &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Skeleton Ghost &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Reaper";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "ocean";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(16000)) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(180 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Shark &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Puffer Fish &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Trident Soldier";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "dungeon";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(30000)) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(220 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Skeleton Monks &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Dungeon Spider &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Stone Women";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", _0x1787B, _0x1794D);
	var _0x1634A = "";
	_0x1794D = "";
	_0x1634A = "bushy";
	if (getItem(_0x1634A + "Kills") == 0)
	{
		_0x1794D = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(1000) + "</center><br /><img src=\'images/" + _0x1634A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1634A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-bushy").src = "images/bossMarkerCompleted.gif";
			_0x1794D = "<img src=\'images/" + _0x1634A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-bushy", "", "BUSHY <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> None</span>", _0x1794D);
	_0x1634A = "fireHawk";
	if (getItem(_0x1634A + "Kills") == 0)
	{
		_0x1794D = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(6000) + "</center><br /><img src=\'images/" + _0x1634A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1634A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x1634A).src = "images/bossMarkerCompleted.gif";
			_0x1794D = "<img src=\'images/" + _0x1634A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x1634A, "", getItemName(_0x1634A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> Water or Ice</span>", _0x1794D);
	_0x1634A = "iceHawk";
	if (getItem(_0x1634A + "Kills") == 0)
	{
		_0x1794D = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(10000)) + "</center><br /><img src=\'images/" + _0x1634A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1634A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x1634A).src = "images/bossMarkerCompleted.gif";
			_0x1794D = "<img src=\'images/" + _0x1634A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x1634A, "", getItemName(_0x1634A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> Fire</span>", _0x1794D);
	_0x1634A = "piranhas";
	if (getItem(_0x1634A + "Kills") == 0)
	{
		_0x1794D = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(25000)) + "</center><br /><img src=\'images/" + _0x1634A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1634A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x1634A).src = "images/bossMarkerCompletedMany.gif";
			_0x1794D = "<img src=\'images/" + _0x1634A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x1634A, "", getItemName(_0x1634A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> None</span>", _0x1794D);
	document.getElementById("dynamic-tooltips-area").innerHTML = _0x151CA
}