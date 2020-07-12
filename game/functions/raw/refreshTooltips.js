/**
 * refreshTooltips extracted from ../../deobfuscated/bundle.js at line 6937-6950
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTooltips.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTooltips()
{
	var _0x1E0E8 = "[data-tooltip-id]";
	var _0x1E0DA = $(_0x1E0E8);
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E0DA.length; _0x1C6B6++)
	{
		$(_0x1E0DA[_0x1C6B6]).bind(
		{
			mousemove: changeTooltipPosition
			, mouseenter: showTooltip
			, mouseleave: hideTooltip
		})
	}
}