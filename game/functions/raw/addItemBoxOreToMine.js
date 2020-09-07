/**
 * addItemBoxOreToMine extracted from ../../deobfuscated/bundle.js at line 580-609
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxOreToMine.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxOreToMine(_0x3B03, _0x3B20, _0x3AE6)
{
	var _0x3AAC = "";
	var _0x3AC9 = getImage("images/" + _0x3B03 + ".png", "addItemBoxOreToMine_" + _0x3B03);
	_0x3AAC += "<div onclick=\'clicksOreToMine(\"" + _0x3B03 + "\")\' class=\'div-add-ore-to-mine\' class=\'mining-ore-to-mine-box\'>";
	_0x3AAC += "<table class=\'table-add-ore-to-mine\' width=\'100%\'>";
	_0x3AAC += "<tr>";
	_0x3AAC += "<td style=\'font-size:22pt\'>" + _0x3B20 + "</td>";
	_0x3AAC += "</tr>";
	_0x3AAC += "<tr>";
	_0x3AAC += "<td>";
	if (getSkillLevel("mining") < _0x3AE6)
	{
		_0x3AAC += "<img src=\'images/x.png\' class=\'img-150\' style=\'z-index:1;position:absolute;\' />"
	};
	_0x3AAC += "<img src=\'" + _0x3AC9.src + "\' class=\'img-150\' />";
	_0x3AAC += "</td>";
	_0x3AAC += "</tr>";
	_0x3AAC += "<tr>";
	if (getSkillLevel("mining") < _0x3AE6)
	{
		_0x3AAC += "<td style=\'color:red\'>Level " + _0x3AE6 + " Mining</td>"
	};
	_0x3AAC += "<td style=\"height:50px;\" id=\"" + _0x3B03 + "-mining-assigned-td\"></td>";
	_0x3AAC += "</tr>";
	_0x3AAC += "</table>";
	_0x3AAC += "</div>";
	$("#item-section-ore-to-mine-1").append(_0x3AAC);
	global_oreLevels[_0x3B03] = new Ore(_0x3B03, _0x3AE6)
}