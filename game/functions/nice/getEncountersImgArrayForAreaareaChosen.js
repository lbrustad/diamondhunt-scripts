'use strict';

function getEncountersImgArrayForAreaareaChosen(p_Interval)
{
	p_Interval = p_Interval.toLowerCase();
	var newNodeLists = [];
	var iconURL = "";
	switch (p_Interval)
	{
	case "fields":
		var _a_ = false;
		var data = [];
		iconURL = "chicken";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(iconURL + "Kills");
		iconURL = "rat";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(iconURL + "Kills");
		iconURL = "bee";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(iconURL + "Kills");
		var itemNodeList = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			itemNodeList = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				itemNodeList = "images/greenFightMarker.gif";
			}
			else
			{
				var i = 0;
				for (; i < data.length; i++)
				{
					if (data[0] > 0)
					{
						itemNodeList = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		newNodeLists.push(itemNodeList);
		break;
	case "forest":
		_a_ = false;
		data = [];
		iconURL = "snake";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(iconURL + "Kills");
		iconURL = "ent";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(iconURL + "Kills");
		iconURL = "thief";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(iconURL + "Kills");
		itemNodeList = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			itemNodeList = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				itemNodeList = "images/greenFightMarker.gif";
			}
			else
			{
				i = 0;
				for (; i < data.length; i++)
				{
					if (data[0] > 0)
					{
						itemNodeList = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		newNodeLists.push(itemNodeList);
		break;
	case "caves":
		_a_ = false;
		data = [];
		iconURL = "bear";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(iconURL + "Kills");
		iconURL = "spider";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(iconURL + "Kills");
		iconURL = "skeleton";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(iconURL + "Kills");
		itemNodeList = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			itemNodeList = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				itemNodeList = "images/greenFightMarker.gif";
			}
			else
			{
				i = 0;
				for (; i < data.length; i++)
				{
					if (data[0] > 0)
					{
						itemNodeList = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		newNodeLists.push(itemNodeList);
		break;
	case "lavadungeon":
		_a_ = false;
		data = [];
		iconURL = "lavaAlien";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(iconURL + "Kills");
		iconURL = "bat";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(iconURL + "Kills");
		iconURL = "fireMage";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(iconURL + "Kills");
		itemNodeList = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			itemNodeList = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				itemNodeList = "images/greenFightMarker.gif";
			}
			else
			{
				i = 0;
				for (; i < data.length; i++)
				{
					if (data[0] > 0)
					{
						itemNodeList = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		newNodeLists.push(itemNodeList);
		break;
	case "northernfields":
		_a_ = false;
		data = [];
		iconURL = "boneHead";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[0] = getItem(iconURL + "Kills");
		iconURL = "mammaPolarBear";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[1] = getItem(iconURL + "Kills");
		iconURL = "yeti";
		if (getItem(iconURL + "Kills") >= 100)
		{
			newNodeLists.push("images/" + iconURL + "Monster_blue.png");
		}
		else
		{
			if (getItem(iconURL + "Kills") >= 30)
			{
				newNodeLists.push("images/" + iconURL + "Monster_yellow.png");
			}
			else
			{
				if (getItem(iconURL + "Kills") >= 1)
				{
					newNodeLists.push("images/" + iconURL + "Monster_green.png");
				}
				else
				{
					newNodeLists.push("images/" + iconURL + "Monster_black.png");
				}
			}
		}
		data[2] = getItem(iconURL + "Kills");
		itemNodeList = "images/redFightMarker.gif";
		if (Math.min.apply(null, data) >= 100)
		{
			itemNodeList = "images/blueFightMarker.gif";
		}
		else
		{
			if (Math.min.apply(null, data) >= 1)
			{
				itemNodeList = "images/greenFightMarker.gif";
			}
			else
			{
				i = 0;
				for (; i < data.length; i++)
				{
					if (data[0] > 0)
					{
						itemNodeList = "images/yellowFightMarker.gif";
						break;
					}
				}
			}
		}
		newNodeLists.push(itemNodeList);
		break;
	}
	return newNodeLists;
};
