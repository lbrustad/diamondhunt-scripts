'use strict';

function refreshMarketGUI()
{
	var FONT_SUFFIX = 1;
	for (; FONT_SUFFIX <= 3; FONT_SUFFIX++)
	{
		var opts = getPlayerSlotData(FONT_SUFFIX);
		if (!opts)
		{
			document.getElementById("market-slot-empty-" + FONT_SUFFIX).style.display = "";
			document.getElementById("market-slot-" + FONT_SUFFIX).style.display = "none";
		}
		else
		{
			document.getElementById("market-slot-empty-" + FONT_SUFFIX).style.display = "none";
			document.getElementById("market-slot-" + FONT_SUFFIX).style.display = "";
			document.getElementById("market-slot-name-" + FONT_SUFFIX).innerHTML = getItemName(opts.itemName).toUpperCase();
			document.getElementById("market-slot-img-" + FONT_SUFFIX).src = "images/" + opts.itemName + ".png";
			document.getElementById("market-slot-amount-" + FONT_SUFFIX).innerHTML = formatNumber(opts.itemAmount);
			document.getElementById("market-slot-price-" + FONT_SUFFIX).innerHTML = formatNumber(opts.price);
			document.getElementById("market-slot-collect-" + FONT_SUFFIX).innerHTML = formatNumber(opts.itemCollect);
			postDate = formatTime((opts.postDate - getCurrentMillis()) / 1000);
			if (postDate == 0)
			{
				document.getElementById("market-slot-timeleft-" + FONT_SUFFIX).innerHTML = "<b style='color:#ff8566'>EXPIRED!</b>";
			}
			else
			{
				document.getElementById("market-slot-timeleft-" + FONT_SUFFIX).innerHTML = "<b style='color:orange'>Expires in</b> " + postDate;
			}
		}
	}
};
