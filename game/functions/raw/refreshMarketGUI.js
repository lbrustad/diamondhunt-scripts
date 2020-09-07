/**
 * refreshMarketGUI extracted from ../../deobfuscated/bundle.js at line 17520-17550
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMarketGUI.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMarketGUI()
{
	for (var _0x3607 = 1; _0x3607 <= 3; _0x3607++)
	{
		var _0x6BF3 = getPlayerSlotData(_0x3607);
		if (!_0x6BF3)
		{
			document.getElementById("market-slot-empty-" + _0x3607).style.display = "";
			document.getElementById("market-slot-" + _0x3607).style.display = "none"
		}
		else
		{
			document.getElementById("market-slot-empty-" + _0x3607).style.display = "none";
			document.getElementById("market-slot-" + _0x3607).style.display = "";
			document.getElementById("market-slot-name-" + _0x3607).innerHTML = getItemName(_0x6BF3.itemName).toUpperCase();
			document.getElementById("market-slot-img-" + _0x3607).src = "images/" + _0x6BF3.itemName + ".png";
			document.getElementById("market-slot-amount-" + _0x3607).innerHTML = formatNumber(_0x6BF3.itemAmount);
			document.getElementById("market-slot-price-" + _0x3607).innerHTML = formatNumber(_0x6BF3.price);
			document.getElementById("market-slot-collect-" + _0x3607).innerHTML = formatNumber(_0x6BF3.itemCollect);
			postDate = formatTime((_0x6BF3.postDate - getCurrentMillis()) / 1000);
			if (postDate == 0)
			{
				document.getElementById("market-slot-timeleft-" + _0x3607).innerHTML = "<b style=\'color:#ff8566\'>EXPIRED!</b>"
			}
			else
			{
				document.getElementById("market-slot-timeleft-" + _0x3607).innerHTML = "<b style=\'color:orange\'>Expires in</b> " + postDate
			}
		}
	}
}