/**
 * refreshTooltips extracted from ../../deobfuscated/bundle.js at line 11171-11188
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
	var _0x1996E = "[data-tooltip-id]";
	var _0x1994B = $(_0x1996E);
	for (var _0x14C0C = 0; _0x14C0C < _0x1994B.length; _0x14C0C++)
	{
		$(_0x1994B[_0x14C0C]).bind(
		{
			mousemove: changeTooltipPosition
			, mouseenter: showTooltip
			, mouseleave: hideTooltip
		})
	}
}