/**
 * addItemSlotButtonSelectItem extracted from ../../deobfuscated/bundle.js at line 12681-12708
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemSlotButtonSelectItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemSlotButtonSelectItem(_0x1C9FE)
{
	var _0x1C9D4 = _0x1C83E;
	var _0x1C9C6 = 0;
	var _0x1C9E2 = 0;
	var _0x1CA1A = global_TradablesData[_0x1C9FE];
	var _0x1C83E = _0x1CA1A.itemName;
	var _0x1CA0C = _0x1CA1A.lowerLimit;
	var _0x1CA28 = _0x1CA1A.upperLimit;
	var _0x1C9B8 = _0x1CA1A.category;
	var _0x1C9F0 = "";
	_0x1C9F0 += "<center>" + getItemName(_0x1C83E).toUpperCase() + "<br /><img src=\'images/" + _0x1C83E + ".png\' class=\'img-100\' /></center>";
	_0x1C9F0 += "<hr class=\'hr-thin\' />";
	_0x1C9F0 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x1C9F0 += "<input id=\'post-item-market-itemName\' value=\'" + _0x1C83E + "\' type=\'hidden\'>";
	_0x1C9F0 += "Amount to Sell<br />";
	_0x1C9F0 += "<input id=\'post-item-market-amount\' placeholder=\'You own: " + getItem(_0x1C83E) + "\' class=\'input-larger\'>";
	_0x1C9F0 += "<br /><br />";
	_0x1C9F0 += "<img src=\'images/coins.png\' class=\'img-30\' /> Price each<br />";
	_0x1C9F0 += "<input id=\'post-item-market-price\' class=\'input-larger\'>";
	_0x1C9F0 += "</div>";
	_0x1C9F0 += "<br />";
	_0x1C9F0 += "<div class=\'blue-dark-box\'>";
	_0x1C9F0 += "<b>Price limits: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x1CA0C) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x1CA28);
	_0x1C9F0 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section").innerHTML = _0x1C9F0;
	openDialogue("dialogue-tradables-post-item")
}