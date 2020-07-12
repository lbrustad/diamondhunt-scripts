'use strict';

function addMuseumItemBox(name, requiredFrom, listExpression, h, id, color, lineColor, fileName, content, extraPropSource)
{
	var domElement = document.getElementById(id);
	var elem = document.createElement("div");
	elem.setAttribute("class", "item-box");
	elem.setAttribute("onclick", "clicksItem('" + requiredFrom + "')");
	elem.setAttribute("id", "item-box-" + name);
	if (content != "")
	{
		elem.setAttribute("data-tooltip-id", content);
	}
	elem.style.backgroundColor = color;
	elem.style.border = "1px solid " + lineColor;
	var li = document.createElement("div");
	li.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	li.innerHTML += fileName;
	if (extraPropSource)
	{
		li.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;");
	}
	var div = document.createElement("div");
	div.setAttribute("style", "text-align:center");
	var img = getImage("images/" + name + getImageExtention(name), "item-" + name + "-box-image-" + getRandomInt(100000));
	img.setAttribute("class", "img-100");
	var wrapper = document.createElement("item-" + name);
	wrapper.setAttribute("type", "number");
	wrapper.setAttribute("style", "text-align:center;display:block;");
	wrapper.innerHTML = formatNumber(getItem(name), false);
	elem.appendChild(li);
	div.appendChild(img);
	elem.appendChild(div);
	if (!extraPropSource)
	{
		if (getItem(name, false) == 0)
		{
			elem.style.display = "none";
		}
		elem.appendChild(wrapper);
	}
	domElement.appendChild(elem);
};
