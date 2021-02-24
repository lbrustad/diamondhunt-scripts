/**
 * refreshMarketGUI extracted from ../../deobfuscated/bundle.js at line 21270-21300
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMarketGUI.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMarketGUI()
{
	for (var _0x14C0C = 1; _0x14C0C <= 3; _0x14C0C++)
	{
		var _0x190D1 = getPlayerSlotData(_0x14C0C);
		if (!_0x190D1)
		{
			document.getElementById("market-slot-empty-" + _0x14C0C).style.display = "";
			document.getElementById("market-slot-" + _0x14C0C).style.display = "none"
		}
		else
		{
			document.getElementById("market-slot-empty-" + _0x14C0C).style.display = "none";
			document.getElementById("market-slot-" + _0x14C0C).style.display = "";
			document.getElementById("market-slot-name-" + _0x14C0C).innerHTML = getItemName(_0x190D1.itemName).toUpperCase();
			document.getElementById("market-slot-img-" + _0x14C0C).src = "images/" + _0x190D1.itemName + ".png";
			document.getElementById("market-slot-amount-" + _0x14C0C).innerHTML = formatNumber(_0x190D1.itemAmount);
			document.getElementById("market-slot-price-" + _0x14C0C).innerHTML = formatNumber(_0x190D1.price);
			document.getElementById("market-slot-collect-" + _0x14C0C).innerHTML = formatNumber(_0x190D1.itemCollect);
			postDate = formatTime((_0x190D1.postDate - getCurrentMillis()) / 1000);
			if (postDate == 0)
			{
				document.getElementById("market-slot-timeleft-" + _0x14C0C).innerHTML = "<b style=\'color:#ff8566\'>EXPIRED!</b>"
			}
			else
			{
				document.getElementById("market-slot-timeleft-" + _0x14C0C).innerHTML = "<b style=\'color:orange\'>Expires in</b> " + postDate
			}
		}
	}
}