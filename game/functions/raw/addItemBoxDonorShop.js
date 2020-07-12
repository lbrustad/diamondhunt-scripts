/**
 * addItemBoxDonorShop extracted from ../../deobfuscated/bundle.js at line 3219-3284
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxDonorShop.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxDonorShop(_0x1C884, _0x1C8AE, _0x1C8E6, _0x1C892, _0x1C876, _0x1C85A)
{
	var _0x1C742 = "#262626";
	var _0x1C734 = "#ffcc99";
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	_0x1C7EA.setAttribute("class", "item-box");
	if (_0x1C876 != "")
	{
		_0x1C7EA.setAttribute("data-tooltip-id", _0x1C876)
	};
	_0x1C7EA.setAttribute("onclick", "clicksDonorShopItem(\'" + _0x1C884 + "\')");
	_0x1C7EA.setAttribute("id", "item-box-donor-shop-" + _0x1C884);
	_0x1C7EA.style.backgroundColor = _0x1C742;
	_0x1C7EA.style.border = "1px solid " + _0x1C734;
	_0x1C7EA.style.height = "220px";
	var _0x1C806 = document.createElement("div");
	_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:14pt;");
	_0x1C806.innerHTML = _0x1C8E6;
	var _0x1C7F8 = document.createElement("div");
	_0x1C7F8.setAttribute("style", "text-align:center");
	var _0x1C814 = document.createElement("img");
	var _0x1C814 = getImage(_0x1C8AE, "shop-" + _0x1C884);
	_0x1C814.setAttribute("class", "img-100");
	var _0x1C7DC = document.createElement("div");
	_0x1C7DC.setAttribute("style", "text-align:center");
	var _0x1C8CA = getImage("images/donorCoins.png", "shop-" + _0x1C884 + "-coins");
	_0x1C8CA.setAttribute("class", "img-20");
	var _0x1C8BC = getImage("images/check.png", "shop-" + _0x1C884 + "-check");
	_0x1C8BC.setAttribute("class", "img-10");
	var _0x1C8D8 = getImage("images/x.png", "shop-" + _0x1C884 + "-x");
	_0x1C8D8.setAttribute("class", "img-10");
	if (_0x1C892 > 0)
	{
		_0x1C7DC.appendChild(_0x1C8CA);
		_0x1C7DC.innerHTML = _0x1C7DC.innerHTML + " " + formatNumber(_0x1C892) + " ";
		if (getItem("boundDonorCoins", false) >= _0x1C892)
		{
			_0x1C7DC.appendChild(_0x1C8BC)
		}
		else
		{
			_0x1C7DC.appendChild(_0x1C8D8)
		};
		var _0x1C8A0 = document.createElement("div");
		_0x1C8A0.innerHTML = "<i style=\'font-size:12pt;color:grey;\'>(Lasts 30 days)</i>";
		_0x1C7DC.appendChild(_0x1C8A0)
	}
	else
	{
		var _0x1C8A0 = document.createElement("div");
		_0x1C8A0.innerHTML = "<i style=\'font-size:12pt;color:yellow;\'>1.00$ EACH</i>";
		_0x1C7DC.appendChild(_0x1C8A0)
	};
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C7EA.appendChild(document.createElement("br"));
	_0x1C7F8.appendChild(_0x1C814);
	_0x1C7EA.appendChild(_0x1C7F8);
	if (_0x1C884.length < 12)
	{
		_0x1C7EA.appendChild(document.createElement("br"))
	};
	_0x1C7EA.appendChild(document.createElement("br"));
	_0x1C7EA.appendChild(_0x1C7DC);
	_0x1C868.appendChild(_0x1C7EA)
}