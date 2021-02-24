/**
 * addItemBoxOreToMine extracted from ../../deobfuscated/bundle.js at line 713-742
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxOreToMine.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxOreToMine(_0x15233, _0x15256, _0x15210)
{
	var _0x151CA = "";
	var _0x151ED = getImage("images/" + _0x15233 + ".png", "addItemBoxOreToMine_" + _0x15233);
	_0x151CA += "<div onclick=\'clicksOreToMine(\"" + _0x15233 + "\")\' class=\'div-add-ore-to-mine\' class=\'mining-ore-to-mine-box\'>";
	_0x151CA += "<table class=\'table-add-ore-to-mine\' width=\'100%\'>";
	_0x151CA += "<tr>";
	_0x151CA += "<td style=\'font-size:22pt\'>" + _0x15256 + "</td>";
	_0x151CA += "</tr>";
	_0x151CA += "<tr>";
	_0x151CA += "<td>";
	if (getSkillLevel("mining") < _0x15210)
	{
		_0x151CA += "<img src=\'images/x.png\' class=\'img-150\' style=\'z-index:1;position:absolute;\' />"
	};
	_0x151CA += "<img src=\'" + _0x151ED.src + "\' class=\'img-150\' />";
	_0x151CA += "</td>";
	_0x151CA += "</tr>";
	_0x151CA += "<tr>";
	if (getSkillLevel("mining") < _0x15210)
	{
		_0x151CA += "<td style=\'color:red\'>Level " + _0x15210 + " Mining</td>"
	};
	_0x151CA += "<td style=\"height:50px;\" id=\"" + _0x15233 + "-mining-assigned-td\"></td>";
	_0x151CA += "</tr>";
	_0x151CA += "</table>";
	_0x151CA += "</div>";
	$("#item-section-ore-to-mine-1").append(_0x151CA);
	global_oreLevels[_0x15233] = new Ore(_0x15233, _0x15210)
}