/**
 * addTransformRecipeToTable extracted from ../../deobfuscated/bundle.js at line 11321-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/addTransformRecipeToTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addTransformRecipeToTable(_0x1CBB0, _0x1C85A)
{
	var _0x1CBBE = _0x1CBB0.itemName;
	var _0x1CBA2 = _0x1CBB0.stardust;
	var _0x1CB40 = _0x1CBB0.level;
	var _0x1CB5C = _0x1CBB0.output1;
	var _0x1CB78 = _0x1CBB0.output2;
	var _0x1CB6A = _0x1CBB0.output1Amount;
	var _0x1CB86 = _0x1CBB0.output2Amount;
	var _0x1CBA2 = _0x1CBB0.stardust;
	var _0x1CB4E = _0x1CBB0.obtainedItemVar;
	var _0x1CBCC = _0x1CBB0.xp;
	if (getItem(_0x1CB4E) == 0)
	{
		return "<tr onclick=\'confirmDialogue(\"images/convertMagic.png\",\"You need to have obtained this item yourself before you are able to transform it.\",\"Close\",\"\",\"\")\'><td colspan=\'8\' style=\'font-size:70pt;color:white;background-color:#1f2e2e\'>???</td></tr>"
	};
	var _0x1CB32 = true;
	var _0x1CAB4 = "<td>" + getItemName(_0x1CBBE) + "</td>";
	_0x1CAB4 += "<td>" + "<img src=\'images/" + _0x1CBBE + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem("magicXp")) >= _0x1CB40)
	{
		_0x1CAB4 += "<td style=\'color:green\'>" + _0x1CB40 + "</td>"
	}
	else
	{
		_0x1CAB4 += "<td style=\'color:red\'>" + _0x1CB40 + "</td>";
		_0x1CB32 = false
	};
	if (getItem(_0x1CBBE) == 0)
	{
		_0x1CB32 = false
	};
	_0x1CAB4 += "<td>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CB5C.length; _0x1C6B6++)
	{
		var _0x1CAEC = _0x1CB5C[_0x1C6B6];
		_0x1CAB4 += "<span title=\'" + getItemName(_0x1CAEC) + "\'>" + "<img src=\'images/" + _0x1CAEC + ".png\' class=\'img-50\' /> " + _0x1CB6A[_0x1C6B6] + "</span>";
		_0x1CAB4 += "<br />"
	};
	_0x1CAB4 += "</td>";
	_0x1CAB4 += "<td>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CB78.length; _0x1C6B6++)
	{
		var _0x1CAEC = _0x1CB78[_0x1C6B6];
		_0x1CAB4 += "<span title=\'" + getItemName(_0x1CAEC) + "\'>" + "<img src=\'images/" + _0x1CAEC + ".png\' class=\'img-50\' />  " + _0x1CB86[_0x1C6B6] + "</span>";
		_0x1CAB4 += "<br />"
	};
	_0x1CAB4 += "</td>";
	var _0x1CB94 = "style=\'color:green\'";
	if (_0x1CBA2 > getItem("stardust"))
	{
		_0x1CB32 = false;
		_0x1CB94 = "style=\'color:red\'"
	};
	_0x1CAB4 += "<td>";
	_0x1CAB4 += "<img src=\'images/stardustIcon.png\' class=\'img-30\' /> " + "<span " + _0x1CB94 + ">" + formatNumber(_0x1CBA2) + "</span>";
	_0x1CAB4 += "</td>";
	var _0x1CB24 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x1CB32)
	{
		_0x1CB24 = "style=\'background-color:#ffc2b3;\'"
	};
	_0x1CAB4 += "<td>";
	_0x1CAB4 += formatNumber(_0x1CBCC) + " XP";
	_0x1CAB4 += "</td>";
	_0x1CAB4 += "<td>";
	_0x1CAB4 += formatNumber(getItem(_0x1CBBE + "Transformed"));
	_0x1CAB4 += "</td>";
	var _0x1CAA6 = "onclick=\'transformItem(\"" + _0x1CBBE + "\",\"" + _0x1CBA2 + "\", \"" + _0x1CBCC + "\")\'";
	return "<tr " + _0x1CAA6 + " " + _0x1CB24 + ">" + _0x1CAB4 + "</tr>"
}