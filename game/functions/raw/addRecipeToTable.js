/**
 * addRecipeToTable extracted from ../../deobfuscated/bundle.js at line 19478-19532
 *
 * If this file doesn't contain a function, there is an error in ../raw/addRecipeToTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addRecipeToTable(_0x1557B, _0x15049)
{
	var _0x15003 = _0x1557B.itemName;
	var _0x156FC = _0x1557B.skill;
	var _0x1571F = _0x1557B.skillLevel;
	var _0x15670 = _0x1557B.recipe;
	var _0x15693 = _0x1557B.recipeCost;
	var _0x15607 = _0x1557B.isMultiCraft;
	var _0x155E4 = _0x1557B.itemNameDisplay;
	var _0x1559E = _0x1557B.description;
	var _0x15558 = true;
	var _0x1564D = "<td>" + _0x155E4 + "</td>";
	_0x1564D += "<td>" + "<img src=\'images/" + _0x15003 + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem(_0x1557B.skill[0] + "Xp")) >= _0x1571F)
	{
		_0x1564D += "<td style=\'color:green\'>" + _0x1571F + "</td>"
	}
	else
	{
		_0x1564D += "<td style=\'color:red\'>" + _0x1571F + "</td>";
		_0x15558 = false
	};
	_0x1564D += "<td>";
	for (var _0x14C0C = 0; _0x14C0C < _0x15670.length; _0x14C0C++)
	{
		var _0x156D9 = _0x15670[_0x14C0C];
		var _0x156B6 = _0x15693[_0x14C0C];
		var _0x155C1 = getItem(_0x156D9) >= _0x156B6;
		var _0x15742 = "style=\'color:green\'";
		if (!_0x155C1)
		{
			_0x15558 = false;
			_0x15742 = "style=\'color:red\'"
		};
		if (_0x156D9 != "vial" && _0x156D9 != "largeVial" && _0x156D9 != "hugeVial")
		{
			_0x1564D += "<span title=\'" + getItemName(_0x156D9) + "\' " + _0x15742 + ">" + "<img src=\'images/" + _0x156D9 + ".png\' class=\'img-50\' /> " + formatNumber(_0x156B6) + " </span>";
			_0x1564D += "<br />"
		}
	};
	_0x1564D += "</td>";
	_0x1564D += "<td>" + _0x1559E + "</td>";
	if (_0x156FC[0] == "cooking")
	{
		_0x1564D += "<td>" + formatTime(_0x1557B.timeToPrep) + "</td>"
	};
	var _0x15765 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x15558)
	{
		_0x15765 = "style=\'background-color:#ffc2b3;\'"
	};
	var _0x1562A = "onclick=\'craftItem(\"" + _0x15003 + "\", " + _0x15607 + ",\"" + _0x155E4 + "\",\"" + _0x15670 + "\"+ _0x15693+ "
		, ")\'";
	return "<tr " + _0x1562A + " " + _0x15765 + ">" + _0x1564D + "</tr>"
}