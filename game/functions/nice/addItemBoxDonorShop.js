'use strict';

function addItemBoxDonorShop(name, data, warning, type, content, switchTextDiv)
{
	var newBackgroundCSS = "#262626";
	var color = "#ffcc99";
	var text = document.getElementById(switchTextDiv);
	var node = document.createElement("div");
	node.setAttribute("class", "item-box");
	if (content != "")
	{
		node.setAttribute("data-tooltip-id", content);
	}
	node.setAttribute("onclick", "clicksDonorShopItem('" + name + "')");
	node.setAttribute("id", "item-box-donor-shop-" + name);
	node.style.backgroundColor = newBackgroundCSS;
	node.style.border = "1px solid " + color;
	node.style.height = "220px";
	var div = document.createElement("div");
	div.setAttribute("style", "text-align:center; font-weight: bold;font-size:14pt;");
	div.innerHTML = warning;
	var body = document.createElement("div");
	body.setAttribute("style", "text-align:center");
	var image = document.createElement("img");
	image = getImage(data, "shop-" + name);
	image.setAttribute("class", "img-100");
	var testNode = document.createElement("div");
	testNode.setAttribute("style", "text-align:center");
	var table = getImage("images/donorCoins.png", "shop-" + name + "-coins");
	table.setAttribute("class", "img-20");
	var img = getImage("images/check.png", "shop-" + name + "-check");
	img.setAttribute("class", "img-10");
	var style = getImage("images/x.png", "shop-" + name + "-x");
	style.setAttribute("class", "img-10");
	if (type > 0)
	{
		testNode.appendChild(table);
		testNode.innerHTML = testNode.innerHTML + " " + formatNumber(type) + " ";
		if (getItem("boundDonorCoins", false) >= type)
		{
			testNode.appendChild(img);
		}
		else
		{
			testNode.appendChild(style);
		}
		var body = document.createElement("div");
		body.innerHTML = "<i style='font-size:12pt;color:grey;'>(Lasts 30 days)</i>";
		testNode.appendChild(body);
	}
	else
	{
		body = document.createElement("div");
		body.innerHTML = "<i style='font-size:12pt;color:yellow;'>1.00$ EACH<br /><span style='color:grey;font-size:10pt;'>PayPal</span><br /><span style='color:grey;font-size:10pt;'>(BTC Accepted Too)</span></i>";
		testNode.appendChild(body);
	}
	node.appendChild(div);
	node.appendChild(document.createElement("br"));
	body.appendChild(image);
	node.appendChild(body);
	if (name.length < 12)
	{
		node.appendChild(document.createElement("br"));
	}
	node.appendChild(document.createElement("br"));
	node.appendChild(testNode);
	text.appendChild(node);
};
