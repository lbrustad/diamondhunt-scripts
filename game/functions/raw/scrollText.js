/**
 * scrollText extracted from ../../deobfuscated/bundle.js at line 11121-11145
 *
 * If this file doesn't contain a function, there is an error in ../raw/scrollText.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function scrollText(_0x14E19, _0x19C4D, _0x19C93)
{
	var _0x14F9A = "";
	if (_0x14E19 != "none")
	{
		_0x14F9A = "<img src=\'" + _0x14E19 + "\' class=\'img-70\' /> "
	};
	var _0x19C70 = $("<div class=\"scroller\" style=\"color:" + _0x19C4D + "\">" + _0x14F9A + _0x19C93 + "</div>").appendTo("body");
	$(_0x19C70).css(
	{
		position: "absolute"
		, left: mouseX - 50
		, top: mouseY - 50
	});
	$(_0x19C70).animate(
	{
		top: "-=50px"
	}, function ()
	{
		$(_0x19C70).fadeOut(1000, function ()
		{
			$(this).remove()
		})
	})
}