/**
 * scrollText extracted from ../../deobfuscated/bundle.js at line 6900-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/scrollText.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function scrollText(_0x1C77A, _0x1E1E4, _0x1E200)
{
	var _0x1C814 = "";
	if (_0x1C77A != "none")
	{
		_0x1C814 = "<img src=\'" + _0x1C77A + "\' class=\'img-70\' /> "
	};
	var _0x1E1F2 = $("<div class=\"scroller\" style=\"color:" + _0x1E1E4 + "\">" + _0x1C814 + _0x1E200 + "</div>").appendTo("body");
	$(_0x1E1F2).css(
	{
		position: "absolute"
		, left: mouseX - 50
		, top: mouseY - 50
	});
	$(_0x1E1F2).animate(
	{
		top: "-=50px"
	}, function ()
	{
		$(_0x1E1F2).fadeOut(1000, function ()
		{
			$(this).remove()
		})
	})
}