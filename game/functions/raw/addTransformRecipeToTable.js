/**
 * addTransformRecipeToTable extracted from ../../deobfuscated/bundle.js at line 15735-15805
 *
 * If this file doesn't contain a function, there is an error in ../raw/addTransformRecipeToTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addTransformRecipeToTable(_0x4073, _0x396D)
{
	var _0x4090 = _0x4073.itemName;
	var _0x4056 = _0x4073.stardust;
	var _0x3F8B = _0x4073.level;
	var _0x3FC5 = _0x4073.output1;
	var _0x3FFF = _0x4073.output2;
	var _0x3FE2 = _0x4073.output1Amount;
	var _0x401C = _0x4073.output2Amount;
	var _0x4056 = _0x4073.stardust;
	var _0x3FA8 = _0x4073.obtainedItemVar;
	var _0x40AD = _0x4073.xp;
	if (getItem(_0x3FA8) == 0)
	{
		return "<tr onclick=\'confirmDialogue(\"images/convertMagic.png\",\"You need to have obtained this item yourself before you are able to transform it.\",\"Close\",\"\",\"\")\'><td colspan=\'8\' style=\'font-size:70pt;color:white;background-color:#1f2e2e\'>???</td></tr>"
	};
	var _0x3F6E = true;
	var _0x3E69 = "<td>" + getItemName(_0x4090) + "</td>";
	_0x3E69 += "<td>" + "<img src=\'images/" + _0x4090 + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem("magicXp")) >= _0x3F8B)
	{
		_0x3E69 += "<td style=\'color:green\'>" + _0x3F8B + "</td>"
	}
	else
	{
		_0x3E69 += "<td style=\'color:red\'>" + _0x3F8B + "</td>";
		_0x3F6E = false
	};
	if (getItem(_0x4090) == 0)
	{
		_0x3F6E = false
	};
	_0x3E69 += "<td>";
	for (var _0x3607 = 0; _0x3607 < _0x3FC5.length; _0x3607++)
	{
		var _0x3EDD = _0x3FC5[_0x3607];
		_0x3E69 += "<span title=\'" + getItemName(_0x3EDD) + "\'>" + "<img src=\'images/" + _0x3EDD + ".png\' class=\'img-50\' /> " + _0x3FE2[_0x3607] + "</span>";
		_0x3E69 += "<br />"
	};
	_0x3E69 += "</td>";
	_0x3E69 += "<td>";
	for (var _0x3607 = 0; _0x3607 < _0x3FFF.length; _0x3607++)
	{
		var _0x3EDD = _0x3FFF[_0x3607];
		_0x3E69 += "<span title=\'" + getItemName(_0x3EDD) + "\'>" + "<img src=\'images/" + _0x3EDD + ".png\' class=\'img-50\' />  " + _0x401C[_0x3607] + "</span>";
		_0x3E69 += "<br />"
	};
	_0x3E69 += "</td>";
	var _0x4039 = "style=\'color:green\'";
	if (_0x4056 > getItem("stardust"))
	{
		_0x3F6E = false;
		_0x4039 = "style=\'color:red\'"
	};
	_0x3E69 += "<td>";
	_0x3E69 += "<img src=\'images/stardustIcon.png\' class=\'img-30\' /> " + "<span " + _0x4039 + ">" + formatNumber(_0x4056) + "</span>";
	_0x3E69 += "</td>";
	var _0x3F51 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x3F6E)
	{
		_0x3F51 = "style=\'background-color:#ffc2b3;\'"
	};
	_0x3E69 += "<td>";
	_0x3E69 += formatNumber(_0x40AD) + " XP";
	_0x3E69 += "</td>";
	_0x3E69 += "<td>";
	_0x3E69 += formatNumber(getItem(_0x4090 + "Transformed"));
	_0x3E69 += "</td>";
	var _0x3E4C = "onclick=\'transformItem(\"" + _0x4090 + "\",\"" + _0x4056 + "\", \"" + _0x40AD + "\")\'";
	return "<tr " + _0x3E4C + " " + _0x3F51 + ">" + _0x3E69 + "</tr>"
}