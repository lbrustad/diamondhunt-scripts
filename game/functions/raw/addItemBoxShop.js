/**
 * addItemBoxShop extracted from ../../deobfuscated/bundle.js at line 4214-4275
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxShop.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxShop(_0x3916, _0x3A1B, _0x3933, _0x39E1, _0x39A7, _0x396D)
{
	var _0x3729 = "#262626";
	var _0x370C = "#ffcc99";
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	_0x3885.setAttribute("class", "item-box");
	if (_0x39A7 != "")
	{
		_0x3885.setAttribute("data-tooltip-id", _0x39A7)
	};
	_0x3885.setAttribute("onclick", "clicksShopItem(\'" + _0x3916 + "\')");
	_0x3885.setAttribute("id", "item-box-shop-" + _0x3916);
	_0x3885.style.backgroundColor = _0x3729;
	_0x3885.style.border = "1px solid " + _0x370C;
	_0x3885.style.height = "220px";
	var _0x38BF = document.createElement("div");
	_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;");
	_0x38BF.innerHTML = _0x3933;
	var _0x38A2 = document.createElement("div");
	_0x38A2.setAttribute("style", "text-align:center");
	var _0x38DC = document.createElement("img");
	if (_0x3A1B == "")
	{
		_0x3A1B = "images/" + _0x3916 + ".png"
	};
	var _0x38DC = getImage(_0x3A1B, "shop-" + _0x3916);
	_0x38DC.setAttribute("class", "img-100");
	var _0x3868 = document.createElement("div");
	_0x3868.setAttribute("style", "text-align:center");
	var _0x3A55 = getImage("images/coins.png", "shop-" + _0x3916 + "-coins");
	_0x3A55.setAttribute("class", "img-20");
	var _0x3A38 = getImage("images/check.png", "shop-" + _0x3916 + "-check");
	_0x3A38.setAttribute("class", "img-10");
	var _0x3A72 = getImage("images/x.png", "shop-" + _0x3916 + "-x");
	_0x3A72.setAttribute("class", "img-10");
	_0x3868.appendChild(_0x3A55);
	_0x3868.innerHTML = _0x3868.innerHTML + " " + formatNumber(_0x39E1) + " ";
	if (getItem("coins", false) >= _0x39E1)
	{
		_0x3868.appendChild(_0x3A38)
	}
	else
	{
		_0x3868.appendChild(_0x3A72)
	};
	_0x3885.appendChild(_0x38BF);
	_0x3885.appendChild(document.createElement("br"));
	_0x38A2.appendChild(_0x38DC);
	_0x3885.appendChild(_0x38A2);
	if (getItem("bought_" + _0x3916, false) > 0)
	{
		_0x3885.style.display = "none"
	};
	if (_0x3933.length < 12)
	{
		_0x3885.appendChild(document.createElement("br"))
	};
	_0x3885.appendChild(document.createElement("br"));
	_0x3885.appendChild(_0x3868);
	_0x398A.appendChild(_0x3885)
}