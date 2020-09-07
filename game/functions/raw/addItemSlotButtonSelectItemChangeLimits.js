/**
 * addItemSlotButtonSelectItemChangeLimits extracted from ../../deobfuscated/bundle.js at line 17653-17680
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemSlotButtonSelectItemChangeLimits.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemSlotButtonSelectItemChangeLimits(_0x3CF0)
{
	var _0x3C99 = _0x3933;
	var _0x3C7C = 0;
	var _0x3CB6 = 0;
	var _0x3D2A = global_TradablesData[_0x3CF0];
	var _0x3933 = _0x3D2A.itemName;
	var _0x3D0D = _0x3D2A.lowerLimit;
	var _0x3D47 = _0x3D2A.upperLimit;
	var _0x3C5F = _0x3D2A.category;
	var _0x3CD3 = "";
	_0x3CD3 += "<center>" + getItemName(_0x3933).toUpperCase() + "<br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-100\' /></center>";
	_0x3CD3 += "<hr class=\'hr-thin\' />";
	_0x3CD3 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x3CD3 += "<input id=\'post-item-market-itemName-changePrice\' value=\'" + _0x3933 + "\' type=\'hidden\'>";
	_0x3CD3 += "New Lower Limit<br />";
	_0x3CD3 += "<input id=\'post-item-market-price-lowerLimit\' value=\'" + _0x3D0D + "\' placeholder=\'Currently: " + formatNumber(_0x3D0D) + "\' class=\'input-larger\'>";
	_0x3CD3 += "<br /><br />";
	_0x3CD3 += "New Upper Limit<br />";
	_0x3CD3 += "<input id=\'post-item-market-price-upperLimit\' value=\'" + _0x3D47 + "\'  placeholder=\'Currently: " + formatNumber(_0x3D47) + "\' class=\'input-larger\'>";
	_0x3CD3 += "</div>";
	_0x3CD3 += "<br />";
	_0x3CD3 += "<div class=\'blue-dark-box\'>";
	_0x3CD3 += "<b>CURRENT LIMITS: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x3D0D) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x3D47);
	_0x3CD3 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section-limits").innerHTML = _0x3CD3;
	openDialogue("dialogue-tradables-change-item-limits")
}