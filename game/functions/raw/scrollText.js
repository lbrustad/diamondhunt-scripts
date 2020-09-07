/**
 * scrollText extracted from ../../deobfuscated/bundle.js at line 9041-9065
 *
 * If this file doesn't contain a function, there is an error in ../raw/scrollText.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function scrollText(_0x379D, _0x74E6, _0x7520)
{
	var _0x38DC = "";
	if (_0x379D != "none")
	{
		_0x38DC = "<img src=\'" + _0x379D + "\' class=\'img-70\' /> "
	};
	var _0x7503 = $("<div class=\"scroller\" style=\"color:" + _0x74E6 + "\">" + _0x38DC + _0x7520 + "</div>").appendTo("body");
	$(_0x7503).css(
	{
		position: "absolute"
		, left: mouseX - 50
		, top: mouseY - 50
	});
	$(_0x7503).animate(
	{
		top: "-=50px"
	}, function ()
	{
		$(_0x7503).fadeOut(1000, function ()
		{
			$(this).remove()
		})
	})
}