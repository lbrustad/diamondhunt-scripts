/**
 * addItemBoxDonorShop extracted from ../../deobfuscated/bundle.js at line 4835-4900
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxDonorShop.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxDonorShop(_0x150B2, _0x1511B, _0x151A7, _0x150D5, _0x1508F, _0x15049)
{
	var _0x14D8D = "#262626";
	var _0x14D6A = "#ffcc99";
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	_0x14F31.setAttribute("class", "item-box");
	if (_0x1508F != "")
	{
		_0x14F31.setAttribute("data-tooltip-id", _0x1508F)
	};
	_0x14F31.setAttribute("onclick", "clicksDonorShopItem(\'" + _0x150B2 + "\')");
	_0x14F31.setAttribute("id", "item-box-donor-shop-" + _0x150B2);
	_0x14F31.style.backgroundColor = _0x14D8D;
	_0x14F31.style.border = "1px solid " + _0x14D6A;
	_0x14F31.style.height = "220px";
	var _0x14F77 = document.createElement("div");
	_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:14pt;");
	_0x14F77.innerHTML = _0x151A7;
	var _0x14F54 = document.createElement("div");
	_0x14F54.setAttribute("style", "text-align:center");
	var _0x14F9A = document.createElement("img");
	var _0x14F9A = getImage(_0x1511B, "shop-" + _0x150B2);
	_0x14F9A.setAttribute("class", "img-100");
	var _0x14F0E = document.createElement("div");
	_0x14F0E.setAttribute("style", "text-align:center");
	var _0x15161 = getImage("images/donorCoins.png", "shop-" + _0x150B2 + "-coins");
	_0x15161.setAttribute("class", "img-20");
	var _0x1513E = getImage("images/check.png", "shop-" + _0x150B2 + "-check");
	_0x1513E.setAttribute("class", "img-10");
	var _0x15184 = getImage("images/x.png", "shop-" + _0x150B2 + "-x");
	_0x15184.setAttribute("class", "img-10");
	if (_0x150D5 > 0)
	{
		_0x14F0E.appendChild(_0x15161);
		_0x14F0E.innerHTML = _0x14F0E.innerHTML + " " + formatNumber(_0x150D5) + " ";
		if (getItem("boundDonorCoins", false) >= _0x150D5)
		{
			_0x14F0E.appendChild(_0x1513E)
		}
		else
		{
			_0x14F0E.appendChild(_0x15184)
		};
		var _0x150F8 = document.createElement("div");
		_0x150F8.innerHTML = "<i style=\'font-size:12pt;color:grey;\'>(Lasts 30 days)</i>";
		_0x14F0E.appendChild(_0x150F8)
	}
	else
	{
		var _0x150F8 = document.createElement("div");
		_0x150F8.innerHTML = "<i style=\'font-size:12pt;color:yellow;\'>1.00$ EACH<br /><span style=\'color:grey;font-size:10pt;\'>PayPal</span><br /><span style=\'color:grey;font-size:10pt;\'>(BTC Accepted Too)</span></i>";
		_0x14F0E.appendChild(_0x150F8)
	};
	_0x14F31.appendChild(_0x14F77);
	_0x14F31.appendChild(document.createElement("br"));
	_0x14F54.appendChild(_0x14F9A);
	_0x14F31.appendChild(_0x14F54);
	if (_0x150B2.length < 12)
	{
		_0x14F31.appendChild(document.createElement("br"))
	};
	_0x14F31.appendChild(document.createElement("br"));
	_0x14F31.appendChild(_0x14F0E);
	_0x1506C.appendChild(_0x14F31)
}