/**
 * addItemBoxOreToMine extracted from ../../deobfuscated/bundle.js at line 525-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxOreToMine.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxOreToMine(_0x1C91E, _0x1C92C, _0x1C910)
{
	var _0x1C8F4 = "";
	var _0x1C902 = getImage("images/" + _0x1C91E + ".png", "addItemBoxOreToMine_" + _0x1C91E);
	_0x1C8F4 += "<div onclick=\'clicksOreToMine(\"" + _0x1C91E + "\")\' class=\'div-add-ore-to-mine\' class=\'mining-ore-to-mine-box\'>";
	_0x1C8F4 += "<table class=\'table-add-ore-to-mine\' width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td style=\'font-size:22pt\'>" + _0x1C92C + "</td>";
	_0x1C8F4 += "</tr>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	if (getSkillLevel("mining") < _0x1C910)
	{
		_0x1C8F4 += "<img src=\'images/x.png\' class=\'img-150\' style=\'z-index:1;position:absolute;\' />"
	};
	_0x1C8F4 += "<img src=\'" + _0x1C902.src + "\' class=\'img-150\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</tr>";
	_0x1C8F4 += "<tr>";
	if (getSkillLevel("mining") < _0x1C910)
	{
		_0x1C8F4 += "<td style=\'color:red\'>Level " + _0x1C910 + " Mining</td>"
	};
	_0x1C8F4 += "<td style=\"height:50px;\" id=\"" + _0x1C91E + "-mining-assigned-td\"></td>";
	_0x1C8F4 += "</tr>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	$("#item-section-ore-to-mine-1").append(_0x1C8F4);
	global_oreLevels[_0x1C91E] = new Ore(_0x1C91E, _0x1C910)
}