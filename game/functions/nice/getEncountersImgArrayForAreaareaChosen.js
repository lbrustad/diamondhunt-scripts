'use strict';

function getEncountersImgArrayForAreaareaChosen(boolStr)
{
	boolStr = boolStr.toLowerCase();
	var numberPolyfill = [];
	var val = "";
	switch (boolStr)
	{
	case "fields":
		var _a_ = false;
		var data = [];
		val = "chicken";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "rat";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "bee";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		var step = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			step = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				step = "images/greenFightMarker.gif";
			}
			else
			{
				var a = 0;
				for (; a < data.length; a++)
				{
					if (data[0] > 0)
					{
						step = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		numberPolyfill.push(step);
		break;
	case "forest":
		_a_ = false;
		data = [];
		val = "snake";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "ent";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "thief";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		step = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			step = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				step = "images/greenFightMarker.gif";
			}
			else
			{
				a = 0;
				for (; a < data.length; a++)
				{
					if (data[0] > 0)
					{
						step = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		numberPolyfill.push(step);
		break;
	case "caves":
		_a_ = false;
		data = [];
		val = "bear";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "spider";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "skeleton";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		step = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			step = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				step = "images/greenFightMarker.gif";
			}
			else
			{
				a = 0;
				for (; a < data.length; a++)
				{
					if (data[0] > 0)
					{
						step = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		numberPolyfill.push(step);
		break;
	case "lavadungeon":
		_a_ = false;
		data = [];
		val = "lavaAlien";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "bat";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "fireMage";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		step = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			step = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				step = "images/greenFightMarker.gif";
			}
			else
			{
				a = 0;
				for (; a < data.length; a++)
				{
					if (data[0] > 0)
					{
						step = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		numberPolyfill.push(step);
		break;
	case "northernfields":
		_a_ = false;
		data = [];
		val = "boneHead";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "mammaPolarBear";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "yeti";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		step = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			step = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				step = "images/greenFightMarker.gif";
			}
			else
			{
				a = 0;
				for (; a < data.length; a++)
				{
					if (data[0] > 0)
					{
						step = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		numberPolyfill.push(step);
		break;
	case "cemetery":
		_a_ = false;
		data = [];
		val = "ghost";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "skeletonGhost";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "reaper";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		step = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			step = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				step = "images/greenFightMarker.gif";
			}
			else
			{
				a = 0;
				for (; a < data.length; a++)
				{
					if (data[0] > 0)
					{
						step = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		numberPolyfill.push(step);
		break;
	case "ocean":
		_a_ = false;
		data = [];
		val = "shark";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(val + "Kills");
		val = "pufferFish";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(val + "Kills");
		val = "tridentSoldier";
		numberPolyfill.push(val);
		if (getItem(val + "Kills") >= 100)
		{
			numberPolyfill.push("images/" + val + "Monster_blue.png");
		}
		else
		{
			if (getItem(val + "Kills") >= 30)
			{
				numberPolyfill.push("images/" + val + "Monster_yellow.png");
			}
			else
			{
				if (getItem(val + "Kills") >= 1)
				{
					numberPolyfill.push("images/" + val + "Monster_green.png");
				}
				else
				{
					numberPolyfill.push("images/" + val + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(val + "Kills");
		step = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			step = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				step = "images/greenFightMarker.gif";
			}
			else
			{
				a = 0;
				for (; a < data.length; a++)
				{
					if (data[0] > 0)
					{
						step = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		numberPolyfill.push(step);
		break;
	}
	return numberPolyfill;
};
