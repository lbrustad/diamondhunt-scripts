'use strict';

function generateHTMLGeneralTooltip(mmCoreLogEnabledDefault, mmCoreLogEnabledConfigName, curVolume, delta)
{
	var raw_unread_count = "";
	raw_unread_count = raw_unread_count + ("<div id='" + mmCoreLogEnabledDefault + "' style='display:none;'>");
	raw_unread_count = raw_unread_count + ("<h2>" + curVolume + "</h2>");
	raw_unread_count = raw_unread_count + "<hr class='hr-thin' />";
	raw_unread_count = raw_unread_count + delta;
	raw_unread_count = raw_unread_count + getTooltipSellsForLabel(mmCoreLogEnabledConfigName);
	raw_unread_count = raw_unread_count + "</div>";
	return raw_unread_count;
};
