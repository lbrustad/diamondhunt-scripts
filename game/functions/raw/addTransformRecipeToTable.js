/**
 * addTransformRecipeToTable extracted from ../../deobfuscated/bundle.js at line 19406-19476
 *
 * If this file doesn't contain a function, there is an error in ../raw/addTransformRecipeToTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addTransformRecipeToTable(_0x158C3, _0x15049)
{
	var _0x158E6 = _0x158C3.itemName;
	var _0x158A0 = _0x158C3.stardust;
	var _0x157AB = _0x158C3.level;
	var _0x157F1 = _0x158C3.output1;
	var _0x15837 = _0x158C3.output2;
	var _0x15814 = _0x158C3.output1Amount;
	var _0x1585A = _0x158C3.output2Amount;
	var _0x158A0 = _0x158C3.stardust;
	var _0x157CE = _0x158C3.obtainedItemVar;
	var _0x15909 = _0x158C3.xp;
	if (getItem(_0x157CE) == 0)
	{
		return "<tr onclick=\'confirmDialogue(\"images/convertMagic.png\",\"You need to have obtained this item yourself before you are able to transform it.\",\"Close\",\"\",\"\")\'><td colspan=\'8\' style=\'font-size:70pt;color:white;background-color:#1f2e2e\'>???</td></tr>"
	};
	var _0x15788 = true;
	var _0x1564D = "<td>" + getItemName(_0x158E6) + "</td>";
	_0x1564D += "<td>" + "<img src=\'images/" + _0x158E6 + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem("magicXp")) >= _0x157AB)
	{
		_0x1564D += "<td style=\'color:green\'>" + _0x157AB + "</td>"
	}
	else
	{
		_0x1564D += "<td style=\'color:red\'>" + _0x157AB + "</td>";
		_0x15788 = false
	};
	if (getItem(_0x158E6) == 0)
	{
		_0x15788 = false
	};
	_0x1564D += "<td>";
	for (var _0x14C0C = 0; _0x14C0C < _0x157F1.length; _0x14C0C++)
	{
		var _0x156D9 = _0x157F1[_0x14C0C];
		_0x1564D += "<span title=\'" + getItemName(_0x156D9) + "\'>" + "<img src=\'images/" + _0x156D9 + ".png\' class=\'img-50\' /> " + _0x15814[_0x14C0C] + "</span>";
		_0x1564D += "<br />"
	};
	_0x1564D += "</td>";
	_0x1564D += "<td>";
	for (var _0x14C0C = 0; _0x14C0C < _0x15837.length; _0x14C0C++)
	{
		var _0x156D9 = _0x15837[_0x14C0C];
		_0x1564D += "<span title=\'" + getItemName(_0x156D9) + "\'>" + "<img src=\'images/" + _0x156D9 + ".png\' class=\'img-50\' />  " + _0x1585A[_0x14C0C] + "</span>";
		_0x1564D += "<br />"
	};
	_0x1564D += "</td>";
	var _0x1587D = "style=\'color:green\'";
	if (_0x158A0 > getItem("stardust"))
	{
		_0x15788 = false;
		_0x1587D = "style=\'color:red\'"
	};
	_0x1564D += "<td>";
	_0x1564D += "<img src=\'images/stardustIcon.png\' class=\'img-30\' /> " + "<span " + _0x1587D + ">" + formatNumber(_0x158A0) + "</span>";
	_0x1564D += "</td>";
	var _0x15765 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x15788)
	{
		_0x15765 = "style=\'background-color:#ffc2b3;\'"
	};
	_0x1564D += "<td>";
	_0x1564D += formatNumber(_0x15909) + " XP";
	_0x1564D += "</td>";
	_0x1564D += "<td>";
	_0x1564D += formatNumber(getItem(_0x158E6 + "Transformed"));
	_0x1564D += "</td>";
	var _0x1562A = "onclick=\'transformItem(\"" + _0x158E6 + "\",\"" + _0x158A0 + "\", \"" + _0x15909 + "\")\'";
	return "<tr " + _0x1562A + " " + _0x15765 + ">" + _0x1564D + "</tr>"
}