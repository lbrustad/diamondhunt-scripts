/**
 * addItemSlotButtonSelectItemChangeLimits extracted from ../../deobfuscated/bundle.js at line 21403-21430
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemSlotButtonSelectItemChangeLimits.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemSlotButtonSelectItemChangeLimits(_0x15486)
{
	var _0x1541D = _0x15003;
	var _0x153FA = 0;
	var _0x15440 = 0;
	var _0x154CC = global_TradablesData[_0x15486];
	var _0x15003 = _0x154CC.itemName;
	var _0x154A9 = _0x154CC.lowerLimit;
	var _0x154EF = _0x154CC.upperLimit;
	var _0x153D7 = _0x154CC.category;
	var _0x15463 = "";
	_0x15463 += "<center>" + getItemName(_0x15003).toUpperCase() + "<br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-100\' /></center>";
	_0x15463 += "<hr class=\'hr-thin\' />";
	_0x15463 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x15463 += "<input id=\'post-item-market-itemName-changePrice\' value=\'" + _0x15003 + "\' type=\'hidden\'>";
	_0x15463 += "New Lower Limit<br />";
	_0x15463 += "<input id=\'post-item-market-price-lowerLimit\' value=\'" + _0x154A9 + "\' placeholder=\'Currently: " + formatNumber(_0x154A9) + "\' class=\'input-larger\'>";
	_0x15463 += "<br /><br />";
	_0x15463 += "New Upper Limit<br />";
	_0x15463 += "<input id=\'post-item-market-price-upperLimit\' value=\'" + _0x154EF + "\'  placeholder=\'Currently: " + formatNumber(_0x154EF) + "\' class=\'input-larger\'>";
	_0x15463 += "</div>";
	_0x15463 += "<br />";
	_0x15463 += "<div class=\'blue-dark-box\'>";
	_0x15463 += "<b>CURRENT LIMITS: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x154A9) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x154EF);
	_0x15463 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section-limits").innerHTML = _0x15463;
	openDialogue("dialogue-tradables-change-item-limits")
}