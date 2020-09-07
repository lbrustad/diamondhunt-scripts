/**
 * addItemBoxDonorShop extracted from ../../deobfuscated/bundle.js at line 4147-4212
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxDonorShop.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxDonorShop(_0x39C4, _0x3A1B, _0x3A8F, _0x39E1, _0x39A7, _0x396D)
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
	_0x3885.setAttribute("onclick", "clicksDonorShopItem(\'" + _0x39C4 + "\')");
	_0x3885.setAttribute("id", "item-box-donor-shop-" + _0x39C4);
	_0x3885.style.backgroundColor = _0x3729;
	_0x3885.style.border = "1px solid " + _0x370C;
	_0x3885.style.height = "220px";
	var _0x38BF = document.createElement("div");
	_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:14pt;");
	_0x38BF.innerHTML = _0x3A8F;
	var _0x38A2 = document.createElement("div");
	_0x38A2.setAttribute("style", "text-align:center");
	var _0x38DC = document.createElement("img");
	var _0x38DC = getImage(_0x3A1B, "shop-" + _0x39C4);
	_0x38DC.setAttribute("class", "img-100");
	var _0x3868 = document.createElement("div");
	_0x3868.setAttribute("style", "text-align:center");
	var _0x3A55 = getImage("images/donorCoins.png", "shop-" + _0x39C4 + "-coins");
	_0x3A55.setAttribute("class", "img-20");
	var _0x3A38 = getImage("images/check.png", "shop-" + _0x39C4 + "-check");
	_0x3A38.setAttribute("class", "img-10");
	var _0x3A72 = getImage("images/x.png", "shop-" + _0x39C4 + "-x");
	_0x3A72.setAttribute("class", "img-10");
	if (_0x39E1 > 0)
	{
		_0x3868.appendChild(_0x3A55);
		_0x3868.innerHTML = _0x3868.innerHTML + " " + formatNumber(_0x39E1) + " ";
		if (getItem("boundDonorCoins", false) >= _0x39E1)
		{
			_0x3868.appendChild(_0x3A38)
		}
		else
		{
			_0x3868.appendChild(_0x3A72)
		};
		var _0x39FE = document.createElement("div");
		_0x39FE.innerHTML = "<i style=\'font-size:12pt;color:grey;\'>(Lasts 30 days)</i>";
		_0x3868.appendChild(_0x39FE)
	}
	else
	{
		var _0x39FE = document.createElement("div");
		_0x39FE.innerHTML = "<i style=\'font-size:12pt;color:yellow;\'>1.00$ EACH<br /><span style=\'color:grey;font-size:10pt;\'>PayPal</span><br /><span style=\'color:grey;font-size:10pt;\'>(BTC Accepted Too)</span></i>";
		_0x3868.appendChild(_0x39FE)
	};
	_0x3885.appendChild(_0x38BF);
	_0x3885.appendChild(document.createElement("br"));
	_0x38A2.appendChild(_0x38DC);
	_0x3885.appendChild(_0x38A2);
	if (_0x39C4.length < 12)
	{
		_0x3885.appendChild(document.createElement("br"))
	};
	_0x3885.appendChild(document.createElement("br"));
	_0x3885.appendChild(_0x3868);
	_0x398A.appendChild(_0x3885)
}