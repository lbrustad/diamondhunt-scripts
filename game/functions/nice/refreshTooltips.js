'use strict';

function refreshTooltips()
{
	var value = "[data-tooltip-id]";
	var bcofl_checkbox = $(value);
	var i = 0;
	for (; i < bcofl_checkbox.length; i++)
	{
		$(bcofl_checkbox[i]).bind(
		{
			mousemove: changeTooltipPosition
			, mouseenter: showTooltip
			, mouseleave: hideTooltip
		});
	}
};
