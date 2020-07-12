'use strict';

function refreshMiningAllocationIcons()
{
	if (loaded_loadMiningOreBoxes)
	{
		var color = "";
		var setting = "";
		color = "stone";
		document.getElementById(color + "-mining-assigned-td").innerHTML = "";
		var prefix = 0;
		for (; prefix < 5; prefix++)
		{
			setting = "miner";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				var image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "drills";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "crushers";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
		}
		color = "copper";
		document.getElementById(color + "-mining-assigned-td").innerHTML = "";
		prefix = 0;
		for (; prefix < 5; prefix++)
		{
			setting = "miner";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "drills";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "crushers";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
		}
		color = "iron";
		document.getElementById(color + "-mining-assigned-td").innerHTML = "";
		prefix = 0;
		for (; prefix < 5; prefix++)
		{
			setting = "miner";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "drills";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "crushers";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
		}
		color = "silver";
		document.getElementById(color + "-mining-assigned-td").innerHTML = "";
		prefix = 0;
		for (; prefix < 5; prefix++)
		{
			setting = "miner";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "drills";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "crushers";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
		}
		color = "gold";
		document.getElementById(color + "-mining-assigned-td").innerHTML = "";
		prefix = 0;
		for (; prefix < 5; prefix++)
		{
			setting = "miner";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "drills";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "crushers";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
		}
		color = "promethium";
		document.getElementById(color + "-mining-assigned-td").innerHTML = "";
		prefix = 0;
		for (; prefix < 5; prefix++)
		{
			setting = "miner";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "drills";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
			setting = "crushers";
			if (getItem(setting + "Allocation" + prefix) == color)
			{
				image = getImage("images/" + setting + ".gif", "refreshMiningAllocationIcons_" + color + "_" + setting + "_" + prefix);
				image.setAttribute("class", "img-50");
				document.getElementById(color + "-mining-assigned-td").append(image);
			}
		}
	}
};
