/**
 * addRecipeToTable extracted from ../../deobfuscated/bundle.js at line 15807-15861
 *
 * If this file doesn't contain a function, there is an error in ../raw/addRecipeToTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addRecipeToTable(_0x3DBB, _0x396D)
{
	var _0x3933 = _0x3DBB.itemName;
	var _0x3EFA = _0x3DBB.skill;
	var _0x3F17 = _0x3DBB.skillLevel;
	var _0x3E86 = _0x3DBB.recipe;
	var _0x3EA3 = _0x3DBB.recipeCost;
	var _0x3E2F = _0x3DBB.isMultiCraft;
	var _0x3E12 = _0x3DBB.itemNameDisplay;
	var _0x3DD8 = _0x3DBB.description;
	var _0x3D9E = true;
	var _0x3E69 = "<td>" + _0x3E12 + "</td>";
	_0x3E69 += "<td>" + "<img src=\'images/" + _0x3933 + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem(_0x3DBB.skill[0] + "Xp")) >= _0x3F17)
	{
		_0x3E69 += "<td style=\'color:green\'>" + _0x3F17 + "</td>"
	}
	else
	{
		_0x3E69 += "<td style=\'color:red\'>" + _0x3F17 + "</td>";
		_0x3D9E = false
	};
	_0x3E69 += "<td>";
	for (var _0x3607 = 0; _0x3607 < _0x3E86.length; _0x3607++)
	{
		var _0x3EDD = _0x3E86[_0x3607];
		var _0x3EC0 = _0x3EA3[_0x3607];
		var _0x3DF5 = getItem(_0x3EDD) >= _0x3EC0;
		var _0x3F34 = "style=\'color:green\'";
		if (!_0x3DF5)
		{
			_0x3D9E = false;
			_0x3F34 = "style=\'color:red\'"
		};
		if (_0x3EDD != "vial" && _0x3EDD != "largeVial" && _0x3EDD != "hugeVial")
		{
			_0x3E69 += "<span title=\'" + getItemName(_0x3EDD) + "\' " + _0x3F34 + ">" + "<img src=\'images/" + _0x3EDD + ".png\' class=\'img-50\' /> " + formatNumber(_0x3EC0) + " </span>";
			_0x3E69 += "<br />"
		}
	};
	_0x3E69 += "</td>";
	_0x3E69 += "<td>" + _0x3DD8 + "</td>";
	if (_0x3EFA[0] == "cooking")
	{
		_0x3E69 += "<td>" + formatTime(_0x3DBB.timeToPrep) + "</td>"
	};
	var _0x3F51 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x3D9E)
	{
		_0x3F51 = "style=\'background-color:#ffc2b3;\'"
	};
	var _0x3E4C = "onclick=\'craftItem(\"" + _0x3933 + "\", " + _0x3E2F + ",\"" + _0x3E12 + "\",\"" + _0x3E86 + "\"+ _0x3EA3+ "
		, ")\'";
	return "<tr " + _0x3E4C + " " + _0x3F51 + ">" + _0x3E69 + "</tr>"
}