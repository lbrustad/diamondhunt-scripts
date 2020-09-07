/**
 * refreshTooltips extracted from ../../deobfuscated/bundle.js at line 9091-9108
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTooltips.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTooltips()
{
	if (!global_gameLoaded)
	{
		return
	};
	var _0x72F9 = "[data-tooltip-id]";
	var _0x72DC = $(_0x72F9);
	for (var _0x3607 = 0; _0x3607 < _0x72DC.length; _0x3607++)
	{
		$(_0x72DC[_0x3607]).bind(
		{
			mousemove: changeTooltipPosition
			, mouseenter: showTooltip
			, mouseleave: hideTooltip
		})
	}
}