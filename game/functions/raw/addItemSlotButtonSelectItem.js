/**
 * addItemSlotButtonSelectItem extracted from ../../deobfuscated/bundle.js at line 17624-17651
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemSlotButtonSelectItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemSlotButtonSelectItem(_0x3CF0)
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
	_0x3CD3 += "<input id=\'post-item-market-itemName\' value=\'" + _0x3933 + "\' type=\'hidden\'>";
	_0x3CD3 += "Amount to Sell<br />";
	_0x3CD3 += "<input id=\'post-item-market-amount\' placeholder=\'You own: " + getItem(_0x3933) + "\' class=\'input-larger\'>";
	_0x3CD3 += "<br /><br />";
	_0x3CD3 += "<img src=\'images/coins.png\' class=\'img-30\' /> Price each<br />";
	_0x3CD3 += "<input id=\'post-item-market-price\' class=\'input-larger\'>";
	_0x3CD3 += "</div>";
	_0x3CD3 += "<br />";
	_0x3CD3 += "<div class=\'blue-dark-box\'>";
	_0x3CD3 += "<b>Price limits: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x3D0D) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x3D47);
	_0x3CD3 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section").innerHTML = _0x3CD3;
	openDialogue("dialogue-tradables-post-item")
}