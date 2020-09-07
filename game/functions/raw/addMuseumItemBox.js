/**
 * addMuseumItemBox extracted from ../../deobfuscated/bundle.js at line 4967-5007
 *
 * If this file doesn't contain a function, there is an error in ../raw/addMuseumItemBox.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addMuseumItemBox(_0x3916, _0x3D81, _0x3950, _0x384B, _0x396D, _0x3729, _0x370C, _0x3933, _0x39A7, _0x382E)
{
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	_0x3885.setAttribute("class", "item-box");
	_0x3885.setAttribute("onclick", "clicksItem(\'" + _0x3D81 + "\')");
	_0x3885.setAttribute("id", "item-box-" + _0x3916);
	if (_0x39A7 != "")
	{
		_0x3885.setAttribute("data-tooltip-id", _0x39A7)
	};
	_0x3885.style.backgroundColor = _0x3729;
	_0x3885.style.border = "1px solid " + _0x370C;
	var _0x38BF = document.createElement("div");
	_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	_0x38BF.innerHTML += _0x3933;
	if (_0x382E)
	{
		_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x38A2 = document.createElement("div");
	_0x38A2.setAttribute("style", "text-align:center");
	var _0x38DC = getImage("images/" + _0x3916 + getImageExtention(_0x3916), "item-" + _0x3916 + "-box-image-" + getRandomInt(100000));
	_0x38DC.setAttribute("class", "img-100");
	var _0x3868 = document.createElement("item-" + _0x3916);
	_0x3868.setAttribute("type", "number");
	_0x3868.setAttribute("style", "text-align:center;display:block;");
	_0x3868.innerHTML = formatNumber(getItem(_0x3916), false);
	_0x3885.appendChild(_0x38BF);
	_0x38A2.appendChild(_0x38DC);
	_0x3885.appendChild(_0x38A2);
	if (!_0x382E)
	{
		if (getItem(_0x3916, false) == 0)
		{
			_0x3885.style.display = "none"
		};
		_0x3885.appendChild(_0x3868)
	};
	_0x398A.appendChild(_0x3885)
}