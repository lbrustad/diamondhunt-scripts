/**
 * initializeTooltips extracted from ../../deobfuscated/bundle.js at line 6952-7626
 *
 * If this file doesn't contain a function, there is an error in ../raw/initializeTooltips.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function initializeTooltips()
{
	var _0x1C8F4 = "";
	document.getElementById("dynamic-tooltips-area").innerHTML = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_foodMap.length; _0x1C6B6++)
	{
		var _0x1D1A6 = global_foodMap[_0x1C6B6];
		if (_0x1D1A6.rawFoodName != "none")
		{
			_0x1C8F4 += "<div id=\'tooltip-" + _0x1D1A6.rawFoodName + "\' style=\'display:none;\'>";
			_0x1C8F4 += "<h2>" + getItemName(_0x1D1A6.rawFoodName) + "</h2>";
			_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-30\' /> " + formatNumber(_0x1D1A6.heat) + " heat";
			_0x1C8F4 += "<br />";
			_0x1C8F4 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x1D1A6.energy) + " energy";
			_0x1C8F4 += "<br />";
			_0x1C8F4 += "<img src=\'images/cookingSkill.png\' class=\'img-30\' /> Level " + _0x1D1A6.cookLevel + " <span style=\'color:grey\'>(" + formatNumber(_0x1D1A6.xp) + " XP)</span>";
			_0x1C8F4 += "<br />";
			_0x1C8F4 += "<hr class=\'hr-thin\' />";
			_0x1C8F4 += _0x1D1A6.desc;
			_0x1C8F4 += "</div>"
		};
		_0x1C8F4 += "<div id=\'tooltip-" + _0x1D1A6.cookedFoodName + "\' style=\'display:none;\'>";
		_0x1C8F4 += "<h2>" + getItemName(_0x1D1A6.cookedFoodName) + "</h2>";
		_0x1C8F4 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x1D1A6.energy) + " energy";
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<hr class=\'hr-thin\' />";
		_0x1C8F4 += _0x1D1A6.desc;
		_0x1C8F4 += "</div>"
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_seedMap.length; _0x1C6B6++)
	{
		var _0x1D6E6 = global_seedMap[_0x1C6B6];
		_0x1C8F4 += "<div id=\'tooltip-" + _0x1D6E6.name + "\' style=\'display:none;\'>";
		_0x1C8F4 += "<h2>" + getItemName(_0x1D6E6.name) + "</h2>";
		_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/farmingSkill.png\' class=\'img-30\' /> Level " + formatNumber(_0x1D6E6.level) + " <span style=\'color:grey\'>(" + formatNumber(_0x1D6E6.xp) + " xp)</span>";
		_0x1C8F4 += "<br />";
		var _0x1D622 = "";
		if (_0x1D6E6.stopsDieingAtLevel == 0)
		{
			_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/" + _0x1D6E6.name.substr(0, _0x1D6E6.name.length - 5) + ".png\' class=\'img-30\' /> Cannot die <img src=\'images/check.png\' class=\'img-15\' />"
		}
		else
		{
			if (getLevel(getItem("farmingXp")) >= _0x1D6E6.stopsDieingAtLevel)
			{
				_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/" + _0x1D6E6.name.substr(0, _0x1D6E6.name.length - 5) + ".png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x1D6E6.stopsDieingAtLevel) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/deadLeaf.png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x1D6E6.stopsDieingAtLevel) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		if (parseInt(_0x1D6E6.bonemeal) > 0)
		{
			if (getItem("bonemeal") >= parseInt(_0x1D6E6.bonemeal))
			{
				_0x1C8F4 += "<br />";
				_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x1D6E6.bonemeal)) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x1C8F4 += "<br />";
				_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x1D6E6.bonemeal)) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/hourglass_grey.png\' class=\'img-30\' />" + formatTime(_0x1D6E6.timer);
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<hr class=\'hr-thin\' />";
		_0x1C8F4 += _0x1D6E6.desc;
		_0x1C8F4 += "</div>"
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_machineryMap.length; _0x1C6B6++)
	{
		var _0x1D6AE = global_machineryMap[_0x1C6B6];
		_0x1C8F4 += "<div id=\'tooltip-" + _0x1D6AE.machineryName + "\' style=\'display:none;\'>";
		_0x1C8F4 += "<div style=\'font-size:16pt;font-weight:bold;margin-top:10px;\'>" + getItemName(_0x1D6AE.machineryName) + "</div>";
		if (_0x1D6AE.oil > 0)
		{
			_0x1C8F4 += "<br /><img src=\'images/oil.png\' class=\'img-20\' /> " + _0x1D6AE.oil
		};
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<hr class=\'hr-thin\' />";
		var _0x1CEEA = "";
		var _0x1D630 = "";
		var _0x1D63E = "";
		_0x1CEEA = "stone";
		_0x1D630 = _0x1D6AE.stoneChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b><br />"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "copper";
		_0x1D630 = _0x1D6AE.copperChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "iron";
		_0x1D630 = _0x1D6AE.ironChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "silver";
		_0x1D630 = _0x1D6AE.silverChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "gold";
		_0x1D630 = _0x1D6AE.goldChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "promethium";
		_0x1D630 = _0x1D6AE.promethiumChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "</div>"
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_equipmentMap.length; _0x1C6B6++)
	{
		var _0x1D676 = global_equipmentMap[_0x1C6B6];
		_0x1C8F4 += "<div id=\'tooltip-" + _0x1D676.name + "\' style=\'display:none;\'>";
		_0x1C8F4 += "<h2>" + getItemName(_0x1D676.name) + "</h2>";
		_0x1C8F4 += "<span style=\'font-size:14pt\'>";
		if (_0x1D676.type != "none")
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1D676.type + ".png\' class=\'img-20\' /> " + getItemName(_0x1D676.type) + " Attack";
			_0x1C8F4 += "<br />";
			_0x1C8F4 += "<br />"
		};
		if (_0x1D676.attack != "0")
		{
			_0x1C8F4 += "<img src=\'images/attack_black.png\' class=\'img-30\' /> " + (_0x1D676.attack);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		if (_0x1D676.accuracy != "0")
		{
			_0x1C8F4 += "<img src=\'images/accuracy_black.png\' class=\'img-30\' /> " + (_0x1D676.accuracy);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		if (_0x1D676.speed != "0")
		{
			_0x1C8F4 += "<img src=\'images/speed_black.png\' class=\'img-30\' /> " + (_0x1D676.speed);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		if (_0x1D676.defence != "0")
		{
			_0x1C8F4 += "<img src=\'images/defence_black.png\' class=\'img-30\' /> " + (_0x1D676.defence);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		if (_0x1D676.magic != "0")
		{
			_0x1C8F4 += "<img src=\'images/magic_black.png\' class=\'img-30\' /> " + (_0x1D676.magic);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		_0x1C8F4 += "</span>";
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<hr class=\'hr-thin\' />";
		_0x1C8F4 += _0x1D676.desc;
		_0x1C8F4 += "</div>"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-feather", "feather", "Feathers", "Can be used to make arrows with the crafting skill.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-30\' /> <b>Click to craft arrows.</b>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustPickaxe", "stardustPickaxe", "Stardust Pickaxe", "Can be used to convert ores into <img src=\'images/miningSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>mining</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustHammer", "stardustHammer", "Stardust Hammer", "Can be used to convert bars into <img src=\'images/craftingSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>crafting</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-furnace", "stoneFurnace", "Furnace", "<b>Capacity:</b> " + "<item-furnaceCapacity>0</item-furnaceCapacity>" + "<br /><br /><img src=\'images/bronzeBars.png\' class=\'img-20\' /> <item-copperSmeltedTotal type=\'number\'>0</item-copperSmeltedTotal><br /><img src=\'images/ironBars.png\' class=\'img-20\' /> <item-ironSmeltedTotal type=\'number\'>0</item-ironSmeltedTotal><br /><img src=\'images/silverBars.png\' class=\'img-20\' /> <item-silverSmeltedTotal type=\'number\'>0</item-silverSmeltedTotal><br /><img src=\'images/goldBars.png\' class=\'img-20\' /> <item-goldSmeltedTotal type=\'number\'>0</item-goldSmeltedTotal><br /><img src=\'images/promethiumBars.png\' class=\'img-20\' /> <item-promethiumSmeltedTotal type=\'number\'>0</item-promethiumSmeltedTotal>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stone", "stone", "Stone", "A common ore.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-copper", "copper", "Copper", "Can be smelted into <img src=\'images/bronzeBars.png\' class=\'img-20\' /> bronze bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-iron", "iron", "Iron", "Can be smelted into <img src=\'images/ironBars.png\' class=\'img-20\' />  iron bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-silver", "silver", "Silver", "Can be smelted into <img src=\'images/silverBars.png\' class=\'img-20\' />  silver bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-gold", "gold", "Gold", "Can be smelted into <img src=\'images/goldBars.png\' class=\'img-20\' />  gold bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-promethium", "promethium", "Promethium", "Can be smelted into <img src=\'images/promethiumBars.png\' class=\'img-20\' />  promethium bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-pearl", "pearl", "Pearl", "Found inside of an oyster.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-oyster", "oyster", "Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-bronzeBars", "bronzeBars", "Bronze Bar", "A bar made of copper.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-ironBars", "ironBars", "Iron Bar", "A bar made of iron.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-silverBars", "silverBars", "Silver Bar", "A bar made of silver.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-goldBars", "goldBars", "Gold Bar", "A bar made of gold.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-promethiumBars", "promethiumBars", "Promethium Bar", "A bar made of promethium.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-snakeskin", "snakeskin", "Snakeskin", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-bearFur", "bearFur", "Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-polarBearFur", "polarBearFur", "Polar Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-bluePrints", "bluePrints", "Blueprints", "Click to follow and craft.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-strangeLeaf", "strangeLeaf", "Strange Leaf", "A rare secondary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-ironBucket", "ironBucket", "Silver Bucket", "Killing a lava type monster will let you collect a bucket of lava.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorWoodcuttingPatch", "", "Donor Perk", "Unlocks an extra woodcutting patch.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorFarmingPlot", "", "Donor Perk", "Unlocks an extra farming patch.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorMoreOfflineTime", "", "Donor Perk", "Grants you 12h of offline time instead of 8h.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorBonusXp", "", "Donor Perk", "Every source of XP is increased by 10%.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustBox1", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 2000 Stardust.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustBox2", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 15000 Stardust.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-sapphireGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Shiny from every angle!");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-emeraldGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Very shiny from every angle!");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-brokenStinger", "", "Broken Stinger", "<img src=\'images/museum.png\' class=\'img-20\' /> Normally, I would be able to use this as a weapon.  Too bad it\'s broken.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-snakeBones", "", "Snake Bones", "<img src=\'images/museum.png\' class=\'img-20\' /> The remains of a giant snake who roamed the forest.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-skeletonSkull", "", "Skull", "<img src=\'images/museum.png\' class=\'img-20\' /> Obtained from a skeleton in the caves.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-ghostClothes", "", "Ghost Clothes", "<img src=\'images/museum.png\' class=\'img-20\' /> This belonged to the roaming ghost around the farm lands.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-cockroach", "", "Giant Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Crunch.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-goldenCockroach", "", "Golden Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Perhaps this can be smelted into a gold bar.  Wait no, that\'s cruel.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-yetiLeftFoot", "", "Yeti\'s Left Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s still cold.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-yetiRightFoot", "", "Yeti\'s Right Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> Yep, still cold.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-smallSeaShell", "", "Small Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-mediumSeaShell", "", "Medium Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-largeSeaShell", "", "Large Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-mould", "craftingMould", "Crafting Mould", "Can be used to craft a specific item.<br /><br /><i>Click to operate</i>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-carePackage", "carePackage", "Care Package", "I can buy one of these everytime I upgrade the shop!");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-gem", "gem", "Gem", "I can use these to socket tools granting them more power.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-smallManaStar", "", "Mana Star <span style=\'color:grey\'>(Small)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 1.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-mediumManaStar", "", "Mana Star <span style=\'color:grey\'>(Medium)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 2.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-largeManaStar", "", "Mana Star <span style=\'color:grey\'>(Large)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 3.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-hugeManaStar", "", "Mana Star <span style=\'color:grey\'>(Huge)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' />  Permanently increases mana by 5.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorCoins", "", "Tradable Donor Coins", "Donor coins may be used to buy temporary buffs that last for 30 days.<br /><br />These are currently tradable on the market, to use them in the donor shop; you must first bind them to your account.<br /><br /><span style=\'color:green\'>Click to bind coins to your account</span>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-colorCrystal", "useless", "Sky Crystal", "It seems to be attracted to the dark crystal.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-shovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(4000) + "<span style=\'color:grey\'> (~" + 21 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-sapphireShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3500) + "<span style=\'color:grey\'> (~" + 24 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-emeraldShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3000) + "<span style=\'color:grey\'> (~" + 28 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-rubyShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2500) + "<span style=\'color:grey\'> (~" + 34 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-diamondShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2000) + "<span style=\'color:grey\'> (~" + 43 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-logs", "logs", "Logs", "Obtained from cutting a tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-oakLogs", "oakLogs", "Oak Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-willowLogs", "willowLogs", "Willow Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-mapleLogs", "mapleLogs", "Maple Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-bambooLogs", "bambooLogs", "Bamboo Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-lavaLogs", "lavaLogs", "Lava Logs", "Obtained from cutting a specific tree.<br /><br /><img src=\'images/ironBucket.png\' class=\'img-30\' /> 2% chance of getting lava when used with oven, assuming you have empty buckets.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustLogs", "stardustLogs", "Stardust Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-oven", "oven", "COOKING OVEN", "<b>Burn rate: " + parseInt(getBurnRate() * 100) + "%</b>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-dottedGreenLeaf", "dottedGreenLeaf", "DOTTED GREEN LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-greenLeaf", "greenLeaf", "GREEN LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-limeLeaf", "limeLeaf", "LIME LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-goldLeaf", "goldLeaf", "GOLD LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-crystalLeaf", "crystalLeaf", "CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stripedGoldLeaf", "stripedGoldLeaf", "STRIPED GOLD LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stripedCrystalLeaf", "stripedCrystalLeaf", "STRIPED CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-redMushroom", "redMushroom", "RED MUSHROOM", "A secondary brewing ingredient.");
	var _0x1D6F4 = "";
	_0x1D6F4 += "<br /><img src=\'images/rawShrimp.png\' class=\'img-30\' /> Shrimp";
	if (getItem("sapphireSmallFishingNetTotal") > 0 || getItem("sapphireSmallFishingNet") > 0)
	{
		_0x1D6F4 += "<br /><img src=\'images/rawAnchovy.png\' class=\'img-30\' /> Anchovy"
	};
	if (getItem("emeraldSmallFishingNetTotal") > 0 || getItem("emeraldSmallFishingNet") > 0)
	{
		_0x1D6F4 += "<br /><img src=\'images/rawSardine.png\' class=\'img-30\' /> Sardine"
	};
	if (getItem("rubySmallFishingNetTotal") > 0 || getItem("rubySmallFishingNet") > 0)
	{
		_0x1D6F4 += "<br /><img src=\'images/rawCrab.png\' class=\'img-30\' /> Crab"
	};
	if (getItem("diamondSmallFishingNetTotal") > 0 || getItem("diamondSmallFishingNet") > 0)
	{
		_0x1D6F4 += "<br /><img src=\'images/rawPiranha.png\' class=\'img-30\' /> Piranhas"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-smallFishingNet", "varNameIfSellable", "Small Fishing Net", "<b>Catch size: </b> Small<br />" + _0x1D6F4);
	var _0x1D684 = "";
	_0x1D684 += "<br /><img src=\'images/rawTrout.png\' class=\'img-30\' /> Trout";
	if (getItem("sapphireFishingRodTotal") > 0 || getItem("sapphireFishingRod") > 0)
	{
		_0x1D684 += "<br /><img src=\'images/rawSalmon.png\' class=\'img-30\' /> Salmon"
	};
	if (getItem("emeraldFishingRodTotal") > 0 || getItem("emeraldFishingRod") > 0)
	{
		_0x1D684 += "<br /><img src=\'images/rawEel.png\' class=\'img-30\' /> Eel"
	};
	if (getItem("rubyFishingRodTotal") > 0 || getItem("rubyFishingRod") > 0)
	{
		_0x1D684 += "<br /><img src=\'images/rawSeaTurtle.png\' class=\'img-30\' /> Sea Turtle"
	};
	if (getItem("diamondFishingRodTotal") > 0 || getItem("diamondFishingRod") > 0)
	{
		_0x1D684 += "<br /><img src=\'images/rawRainbowFish.png\' class=\'img-30\' /> Rainbow Fish"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-fishingRod", "varNameIfSellable", "Fishing Rod", "<b>Catch size: </b> Medium<br />" + _0x1D684);
	var _0x1D692 = "";
	_0x1D692 += "<br /><img src=\'images/rawTuna.png\' class=\'img-30\' /> Tuna";
	if (getItem("sapphireHarpoonTotal") > 0 || getItem("sapphireHarpoon") > 0)
	{
		_0x1D692 += "<br /><img src=\'images/rawSwordfish.png\' class=\'img-30\' /> Swordfish"
	};
	if (getItem("emeraldHarpoonTotal") > 0 || getItem("emeraldHarpoon") > 0)
	{
		_0x1D692 += "<br /><img src=\'images/rawMantaRay.png\' class=\'img-30\' /> Manta Ray"
	};
	if (getItem("rubyHarpoonTotal") > 0 || getItem("rubyHarpoon") > 0)
	{
		_0x1D692 += "<br /><img src=\'images/rawShark.png\' class=\'img-30\' /> Shark"
	};
	if (getItem("diamondHarpoonTotal") > 0 || getItem("diamondHarpoon") > 0)
	{
		_0x1D692 += "<br /><img src=\'images/rawWhale.png\' class=\'img-30\' /> Whale"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-harpoon", "varNameIfSellable", "Harpoon", "<b>Catch size: </b> Large<br />" + _0x1D692);
	var _0x1D6A0 = 0;
	var _0x1D64C = "<img src=\'images/check.png\' class=\'img-20\'  />";
	_0x1D6A0 = 1;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollHeal", "spellScrollHeal", "HEAL", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + 1 + " magic required. " + _0x1D64C);
	_0x1D6A0 = 10;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollPoison", "", "POISON", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x1D6A0 + " magic required. " + _0x1D64C);
	_0x1D6A0 = 15;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollReflect", "", "REFLECT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x1D6A0 + " magic required. " + _0x1D64C);
	_0x1D6A0 = 20;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollFire", "", "FIRE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x1D6A0 + " magic required. " + _0x1D64C);
	_0x1D6A0 = 25;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollTeleport", "", "TELEPORT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x1D6A0 + " magic required. " + _0x1D64C);
	var _0x1D1EC;
	var _0x1D6BC;
	var _0x1C7CE;
	var _0x1D668;
	var _0x1D614;
	var _0x1D6D8;
	var _0x1CC4A;
	_0x1CC4A = "";
	_0x1D1EC = "HEAL";
	_0x1D6BC = 3;
	_0x1C7CE = "Heal instantly during combat.";
	_0x1D668 = 10;
	_0x1D614 = "<b>Base heal:</b> 2 health.";
	_0x1D6D8 = "<b>Multiplier:</b> Heal an additional 1 health per 5 magic bonus.";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-healCasted>0</item-healCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x1D6BC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x1D668 + " seconds";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1D614;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x1D6D8;
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	_0x1CC4A = "";
	_0x1D1EC = "POISON";
	_0x1D6BC = 5;
	_0x1C7CE = "Poisons your enemy, dealing 1 damage every 7 seconds.";
	_0x1D668 = 10;
	_0x1D614 = "<b>Base poison:</b> 1 damage.";
	_0x1D6D8 = "<b>Multiplier:</b> Poison damaged increased by 1 per 10 magic bonus.";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-poisonCasted>0</item-poisonCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x1D6BC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x1D668 + " seconds";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1D614;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x1D6D8;
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	_0x1CC4A = "";
	_0x1D1EC = "REFLECT";
	_0x1D6BC = 3;
	_0x1C7CE = "Reflects the next attack from the enemy back to them.";
	_0x1D668 = 30;
	_0x1D614 = "<b>Base damage:</b> N/A";
	_0x1D6D8 = "<b>Buff:</b> Having a magic bonus greater than 20 will not trigger reflect if the enemy hits a 0.";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-reflectCasted>0</item-reflectCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x1D6BC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x1D668 + " seconds";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1D614;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x1D6D8;
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	_0x1CC4A = "";
	_0x1D1EC = "FIRE";
	_0x1D6BC = 2;
	_0x1C7CE = "Instantly deals fire damage to your enemy.";
	_0x1D668 = 10;
	_0x1D614 = "<b>Base damage:</b> 0 - 2";
	_0x1D6D8 = "<b>Buff:</b> +1 damage per 3 magic bonus.";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-fireCasted>0</item-fireCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x1D6BC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x1D668 + " seconds";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1D614;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x1D6D8;
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	_0x1CC4A = "";
	_0x1D1EC = "TELEPORT";
	_0x1D6BC = 0;
	_0x1C7CE = "Teleports you out of combat, fully recovering HP and mana allowing you to fight again.";
	_0x1D668 = 900;
	_0x1D614 = "<b>Base damage:</b> n/a";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-teleportCasted>0</item-teleportCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 15 + " minutes.";
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	if (getItem("treeUnlocked2") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-treeSection2", "treeSection2", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("treeUnlocked3") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-treeSection3", "treeSection3", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("treeUnlocked4") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-treeSection4", "treeSection4", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/woodcuttingSkill.png\' class=\'img-30\' /> 50 woodcutting.")
	};
	if (getItem("treeUnlocked6") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-treeSection5and6", "treeSection5and6", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	if (getItem("plotUnlocked2") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-plotSection2", "plotSection2", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("plotUnlocked3") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-plotSection3", "plotSection3", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("plotUnlocked4") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-plotSection4", "plotSection4", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/farmingSkill.png\' class=\'img-30\' /> 50 farming.")
	};
	if (getItem("plotUnlocked6") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-plotSection5and6", "plotSection5and6", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	var _0x1D65A = "";
	var _0x1D606 = "Fields";
	var _0x1D6CA = [];
	_0x1D65A = "";
	_0x1D606 = "Fields";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 50 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 15:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Chickens &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Rats &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Bees";
	document.getElementById(_0x1D606.toLowerCase() + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606.toLowerCase(), "", _0x1D606, _0x1D65A);
	_0x1D65A = "";
	_0x1D606 = "Forest";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 200 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 30:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Snake &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Ent &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Thief";
	document.getElementById(_0x1D606.toLowerCase() + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606.toLowerCase(), "", _0x1D606, _0x1D65A);
	_0x1D65A = "";
	_0x1D606 = "Caves";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 500 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 1:00:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Spider &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Skeleton";
	document.getElementById(_0x1D606.toLowerCase() + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606.toLowerCase(), "", _0x1D606, _0x1D65A);
	_0x1D65A = "";
	_0x1D606 = "lavaDungeon";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 2000 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 1:30:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Lava Alien &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Bat &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Fire Mage";
	document.getElementById(_0x1D606 + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606, "", _0x1D606, _0x1D65A);
	_0x1D65A = "";
	_0x1D606 = "northernFields";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 5000 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 2:00:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Bonehead &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Mamma Polar Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Yeti";
	document.getElementById(_0x1D606 + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606, "", _0x1D606, _0x1D65A);
	var _0x1CF4C = "";
	_0x1D65A = "";
	_0x1CF4C = "bushy";
	if (getItem(_0x1CF4C + "Kills") == 0)
	{
		_0x1D65A = "<center><img src=\'images/energy.png\' class=\'img-30\' /> 1000</center><br /><img src=\'images/" + _0x1CF4C + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1CF4C + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-bushy").src = "images/bossMarkerCompleted.gif";
			_0x1D65A = "<img src=\'images/" + _0x1CF4C + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-bushy", "", "BUSHY <span style=\'color:grey\'>(BOSS)</span>", _0x1D65A);
	_0x1CF4C = "fireHawk";
	if (getItem(_0x1CF4C + "Kills") == 0)
	{
		_0x1D65A = "<center><img src=\'images/energy.png\' class=\'img-30\' /> 6000</center><br /><img src=\'images/" + _0x1CF4C + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1CF4C + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x1CF4C).src = "images/bossMarkerCompleted.gif";
			_0x1D65A = "<img src=\'images/" + _0x1CF4C + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x1CF4C, "", getItemName(_0x1CF4C).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span>", _0x1D65A);
	document.getElementById("dynamic-tooltips-area").innerHTML = _0x1C8F4
}