/**
 * refreshMarketGUI extracted from ../../deobfuscated/bundle.js at line 12577-12607
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMarketGUI.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMarketGUI()
{
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 3; _0x1C6B6++)
	{
		var _0x1DDE6 = getPlayerSlotData(_0x1C6B6);
		if (!_0x1DDE6)
		{
			document.getElementById("market-slot-empty-" + _0x1C6B6).style.display = "";
			document.getElementById("market-slot-" + _0x1C6B6).style.display = "none"
		}
		else
		{
			document.getElementById("market-slot-empty-" + _0x1C6B6).style.display = "none";
			document.getElementById("market-slot-" + _0x1C6B6).style.display = "";
			document.getElementById("market-slot-name-" + _0x1C6B6).innerHTML = getItemName(_0x1DDE6.itemName).toUpperCase();
			document.getElementById("market-slot-img-" + _0x1C6B6).src = "images/" + _0x1DDE6.itemName + ".png";
			document.getElementById("market-slot-amount-" + _0x1C6B6).innerHTML = formatNumber(_0x1DDE6.itemAmount);
			document.getElementById("market-slot-price-" + _0x1C6B6).innerHTML = formatNumber(_0x1DDE6.price);
			document.getElementById("market-slot-collect-" + _0x1C6B6).innerHTML = formatNumber(_0x1DDE6.itemCollect);
			postDate = formatTime((_0x1DDE6.postDate - getCurrentMillis()) / 1000);
			if (postDate == 0)
			{
				document.getElementById("market-slot-timeleft-" + _0x1C6B6).innerHTML = "<b style=\'color:#ff8566\'>EXPIRED!</b>"
			}
			else
			{
				document.getElementById("market-slot-timeleft-" + _0x1C6B6).innerHTML = "<b style=\'color:orange\'>Expires in</b> " + postDate
			}
		}
	}
}