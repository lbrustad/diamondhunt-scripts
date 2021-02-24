'use strict';

function getEncountersImgArrayForAreaareaChosen(p_Interval)
{
	p_Interval = p_Interval.toLowerCase();
	var path = [];
	var val = "";
	switch (p_Interval)
	{
	case "fields":
		var _a_ = false;
		var data = [];
		val = "chicken";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "rat";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "bee";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		var testFilePath = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			testFilePath = "images/blue2FightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 20)
			{
				testFilePath = "images/blueFightMarker.gif";
			}
			else
			{
				if (Math.min.apply(null, data) >= 20)
				{
					testFilePath = "images/blueFightMarker.gif";
				}
				else
				{
					if (Math.min.apply(null, data) >= 1)
					{
						testFilePath = "images/greenFightMarker.gif";
					}
					else
					{
						var i = 0;
						for (; i < data.length; i++)
						{
							if (data[0] > 0)
							{
								testFilePath = "images/yellowFightMarker.gif";
								break;
							}
						}
					}
				}
			}
		}
		path.push(testFilePath);
		break;
	case "forest":
		_a_ = false;
		data = [];
		val = "snake";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "ent";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "thief";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		testFilePath = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			testFilePath = "images/blue2FightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 20)
			{
				testFilePath = "images/blueFightMarker.gif";
			}
			else
			{
				if (Math.min.apply(null, data) >= 1)
				{
					testFilePath = "images/greenFightMarker.gif";
				}
				else
				{
					i = 0;
					for (; i < data.length; i++)
					{
						if (data[0] > 0)
						{
							testFilePath = "images/yellowFightMarker.gif";
							break;
						}
					}
				}
			}
		}
		path.push(testFilePath);
		break;
	case "caves":
		_a_ = false;
		data = [];
		val = "bear";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "spider";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "skeleton";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		testFilePath = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			testFilePath = "images/blue2FightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 20)
			{
				testFilePath = "images/blueFightMarker.gif";
			}
			else
			{
				if (Math.min.apply(null, data) >= 1)
				{
					testFilePath = "images/greenFightMarker.gif";
				}
				else
				{
					i = 0;
					for (; i < data.length; i++)
					{
						if (data[0] > 0)
						{
							testFilePath = "images/yellowFightMarker.gif";
							break;
						}
					}
				}
			}
		}
		path.push(testFilePath);
		break;
	case "lavadungeon":
		_a_ = false;
		data = [];
		val = "lavaAlien";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "bat";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "fireMage";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		testFilePath = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			testFilePath = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				testFilePath = "images/greenFightMarker.gif";
			}
			else
			{
				i = 0;
				for (; i < data.length; i++)
				{
					if (data[0] > 0)
					{
						testFilePath = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		path.push(testFilePath);
		break;
	case "northernfields":
		_a_ = false;
		data = [];
		val = "boneHead";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "mammaPolarBear";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "yeti";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		testFilePath = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			testFilePath = "images/blue2FightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 20)
			{
				testFilePath = "images/blueFightMarker.gif";
			}
			else
			{
				if (Math.min.apply(null, data) >= 1)
				{
					testFilePath = "images/greenFightMarker.gif";
				}
				else
				{
					i = 0;
					for (; i < data.length; i++)
					{
						if (data[0] > 0)
						{
							testFilePath = "images/yellowFightMarker.gif";
							break;
						}
					}
				}
			}
		}
		path.push(testFilePath);
		break;
	case "cemetery":
		_a_ = false;
		data = [];
		val = "ghost";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "skeletonGhost";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "reaper";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		testFilePath = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			testFilePath = "images/blue2FightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 20)
			{
				testFilePath = "images/blueFightMarker.gif";
			}
			else
			{
				if (Math.min.apply(null, data) >= 1)
				{
					testFilePath = "images/greenFightMarker.gif";
				}
				else
				{
					i = 0;
					for (; i < data.length; i++)
					{
						if (data[0] > 0)
						{
							testFilePath = "images/yellowFightMarker.gif";
							break;
						}
					}
				}
			}
		}
		path.push(testFilePath);
		break;
	case "ocean":
		_a_ = false;
		data = [];
		val = "shark";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "pufferFish";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "tridentSoldier";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		testFilePath = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			testFilePath = "images/blue2FightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 20)
			{
				testFilePath = "images/blueFightMarker.gif";
			}
			else
			{
				if (Math.min.apply(null, data) >= 1)
				{
					testFilePath = "images/greenFightMarker.gif";
				}
				else
				{
					i = 0;
					for (; i < data.length; i++)
					{
						if (data[0] > 0)
						{
							testFilePath = "images/yellowFightMarker.gif";
							break;
						}
					}
				}
			}
		}
		path.push(testFilePath);
		break;
	case "dungeon":
		_a_ = false;
		data = [];
		val = "skeletonMonks";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "dungeonSpider";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "stoneWomen";
		path.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			path.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				path.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					path.push("images/" + val + "Monster_green.png");
				}
				else
				{
					path.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		testFilePath = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			testFilePath = "images/blue2FightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 20)
			{
				testFilePath = "images/blueFightMarker.gif";
			}
			else
			{
				if (Math.min.apply(null, data) >= 1)
				{
					testFilePath = "images/greenFightMarker.gif";
				}
				else
				{
					i = 0;
					for (; i < data.length; i++)
					{
						if (data[0] > 0)
						{
							testFilePath = "images/yellowFightMarker.gif";
							break;
						}
					}
				}
			}
		}
		path.push(testFilePath);
		break;
	}
	return path;
};
