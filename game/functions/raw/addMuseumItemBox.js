/**
 * addMuseumItemBox extracted from ../../deobfuscated/bundle.js at line 3901-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/addMuseumItemBox.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addMuseumItemBox(_0x1C830, _0x1CA44, _0x1C84C, _0x1C7CE, _0x1C85A, _0x1C742, _0x1C734, _0x1C83E, _0x1C876, _0x1C7C0)
{
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	_0x1C7EA.setAttribute("class", "item-box");
	_0x1C7EA.setAttribute("onclick", "clicksItem(\'" + _0x1CA44 + "\')");
	_0x1C7EA.setAttribute("id", "item-box-" + _0x1C830);
	if (_0x1C876 != "")
	{
		_0x1C7EA.setAttribute("data-tooltip-id", _0x1C876)
	};
	_0x1C7EA.style.backgroundColor = _0x1C742;
	_0x1C7EA.style.border = "1px solid " + _0x1C734;
	var _0x1C806 = document.createElement("div");
	_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	_0x1C806.innerHTML += _0x1C83E;
	if (_0x1C7C0)
	{
		_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x1C7F8 = document.createElement("div");
	_0x1C7F8.setAttribute("style", "text-align:center");
	var _0x1C814 = getImage("images/" + _0x1C830 + getImageExtention(_0x1C830), "item-" + _0x1C830 + "-box-image-" + getRandomInt(100000));
	_0x1C814.setAttribute("class", "img-100");
	var _0x1C7DC = document.createElement("item-" + _0x1C830);
	_0x1C7DC.setAttribute("type", "number");
	_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
	_0x1C7DC.innerHTML = formatNumber(getItem(_0x1C830), false);
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C7F8.appendChild(_0x1C814);
	_0x1C7EA.appendChild(_0x1C7F8);
	if (!_0x1C7C0)
	{
		if (getItem(_0x1C830, false) == 0)
		{
			_0x1C7EA.style.display = "none"
		};
		_0x1C7EA.appendChild(_0x1C7DC)
	};
	_0x1C868.appendChild(_0x1C7EA)
}