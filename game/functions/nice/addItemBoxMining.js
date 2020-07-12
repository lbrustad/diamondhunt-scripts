'use strict';

function addItemBoxMining(name, setting, n, fill, color, title, duration, result)
{
	var h = document.getElementById(n);
	var node = document.createElement("div");
	node.setAttribute("class", "item-box");
	node.setAttribute("onclick", "clicksItem('" + name + "')");
	node.setAttribute("id", "item-box-" + name);
	if (duration != "")
	{
		node.setAttribute("data-tooltip-id", duration);
	}
	node.style.backgroundColor = fill;
	node.style.border = "1px solid " + color;
	var div = document.createElement("div");
	div.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;");
	div.innerHTML = title;
	if (result)
	{
		div.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;");
	}
	var img = document.createElement("div");
	img.setAttribute("style", "text-align:center");
	var image = getImage("images/" + name + ".png", "item-" + name + "-box-image");
	image.setAttribute("class", "img-100");
	var wrapper = document.createElement("item-" + name);
	wrapper.setAttribute("type", "number");
	wrapper.setAttribute("style", "text-align:center;display:block;");
	wrapper.innerHTML = formatNumber(getItem(name), false);
	node.appendChild(div);
	img.appendChild(image);
	node.appendChild(img);
	if (!result)
	{
		if (getItem(name, false) == 0)
		{
			node.style.display = "none";
		}
		node.appendChild(wrapper);
	}
	h.appendChild(node);
};
