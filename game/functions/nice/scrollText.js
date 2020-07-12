'use strict';

function scrollText(val, e, islongclick)
{
	var th_field = "";
	if (val != "none")
	{
		th_field = "<img src='" + val + "' class='img-70' /> ";
	}
	var versionEditor = $('<div class="scroller" style="color:' + e + '">' + th_field + islongclick + "</div>").appendTo("body");
	$(versionEditor).css(
	{
		position: "absolute"
		, left: mouseX - 50
		, top: mouseY - 50
	});
	$(versionEditor).animate(
	{
		top: "-=50px"
	}, function ()
	{
		$(versionEditor).fadeOut(1000, function ()
		{
			$(this).remove();
		});
	});
};
