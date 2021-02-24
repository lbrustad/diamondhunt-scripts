/**
 * addMuseumItemBox extracted from ../../deobfuscated/bundle.js at line 5703-5743
 *
 * If this file doesn't contain a function, there is an error in ../raw/addMuseumItemBox.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addMuseumItemBox(_0x14FE0, _0x15535, _0x15026, _0x14EEB, _0x15049, _0x14D8D, _0x14D6A, _0x15003, _0x1508F, _0x14EC8)
{
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	_0x14F31.setAttribute("class", "item-box");
	_0x14F31.setAttribute("onclick", "clicksItem(\'" + _0x15535 + "\')");
	_0x14F31.setAttribute("id", "item-box-" + _0x14FE0);
	if (_0x1508F != "")
	{
		_0x14F31.setAttribute("data-tooltip-id", _0x1508F)
	};
	_0x14F31.style.backgroundColor = _0x14D8D;
	_0x14F31.style.border = "1px solid " + _0x14D6A;
	var _0x14F77 = document.createElement("div");
	_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	_0x14F77.innerHTML += _0x15003;
	if (_0x14EC8)
	{
		_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x14F54 = document.createElement("div");
	_0x14F54.setAttribute("style", "text-align:center");
	var _0x14F9A = getImage("images/" + _0x14FE0 + getImageExtention(_0x14FE0), "item-" + _0x14FE0 + "-box-image-" + getRandomInt(100000));
	_0x14F9A.setAttribute("class", "img-100");
	var _0x14F0E = document.createElement("item-" + _0x14FE0);
	_0x14F0E.setAttribute("type", "number");
	_0x14F0E.setAttribute("style", "text-align:center;display:block;");
	_0x14F0E.innerHTML = formatNumber(getItem(_0x14FE0), false);
	_0x14F31.appendChild(_0x14F77);
	_0x14F54.appendChild(_0x14F9A);
	_0x14F31.appendChild(_0x14F54);
	if (!_0x14EC8)
	{
		if (getItem(_0x14FE0, false) == 0)
		{
			_0x14F31.style.display = "none"
		};
		_0x14F31.appendChild(_0x14F0E)
	};
	_0x1506C.appendChild(_0x14F31)
}