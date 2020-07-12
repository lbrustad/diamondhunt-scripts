/**
 * addRecipeToTable extracted from ../../deobfuscated/bundle.js at line 11393-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/addRecipeToTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addRecipeToTable(_0x1CA60, _0x1C85A)
{
	var _0x1C83E = _0x1CA60.itemName;
	var _0x1CAFA = _0x1CA60.skill;
	var _0x1CB08 = _0x1CA60.skillLevel;
	var _0x1CAC2 = _0x1CA60.recipe;
	var _0x1CAD0 = _0x1CA60.recipeCost;
	var _0x1CA98 = _0x1CA60.isMultiCraft;
	var _0x1CA8A = _0x1CA60.itemNameDisplay;
	var _0x1CA6E = _0x1CA60.description;
	var _0x1CA52 = true;
	var _0x1CAB4 = "<td>" + _0x1CA8A + "</td>";
	_0x1CAB4 += "<td>" + "<img src=\'images/" + _0x1C83E + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem(_0x1CA60.skill[0] + "Xp")) >= _0x1CB08)
	{
		_0x1CAB4 += "<td style=\'color:green\'>" + _0x1CB08 + "</td>"
	}
	else
	{
		_0x1CAB4 += "<td style=\'color:red\'>" + _0x1CB08 + "</td>";
		_0x1CA52 = false
	};
	_0x1CAB4 += "<td>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CAC2.length; _0x1C6B6++)
	{
		var _0x1CAEC = _0x1CAC2[_0x1C6B6];
		var _0x1CADE = _0x1CAD0[_0x1C6B6];
		var _0x1CA7C = getItem(_0x1CAEC) >= _0x1CADE;
		var _0x1CB16 = "style=\'color:green\'";
		if (!_0x1CA7C)
		{
			_0x1CA52 = false;
			_0x1CB16 = "style=\'color:red\'"
		};
		if (_0x1CAEC != "vial" && _0x1CAEC != "largeVial")
		{
			_0x1CAB4 += "<span title=\'" + getItemName(_0x1CAEC) + "\' " + _0x1CB16 + ">" + "<img src=\'images/" + _0x1CAEC + ".png\' class=\'img-50\' /> " + formatNumber(_0x1CADE) + " </span>";
			_0x1CAB4 += "<br />"
		}
	};
	_0x1CAB4 += "</td>";
	_0x1CAB4 += "<td>" + _0x1CA6E + "</td>";
	if (_0x1CAFA[0] == "cooking")
	{
		_0x1CAB4 += "<td>" + formatTime(_0x1CA60.timeToPrep) + "</td>"
	};
	var _0x1CB24 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x1CA52)
	{
		_0x1CB24 = "style=\'background-color:#ffc2b3;\'"
	};
	var _0x1CAA6 = "onclick=\'craftItem(\"" + _0x1C83E + "\", " + _0x1CA98 + ",\"" + _0x1CA8A + "\",\"" + _0x1CAC2 + "\"" + _0x1CAD0 + ", \")\'";
	return "<tr " + _0x1CAA6 + " " + _0x1CB24 + ">" + _0x1CAB4 + "</tr>"
}