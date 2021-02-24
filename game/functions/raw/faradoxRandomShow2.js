/**
 * faradoxRandomShow2 extracted from ../../deobfuscated/bundle.js at line 19395-19404
 *
 * If this file doesn't contain a function, there is an error in ../raw/faradoxRandomShow2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function faradoxRandomShow2()
{
	$("#faradox-random-show").fadeIn(3000, function ()
	{
		$("#faradox-random-show").fadeOut(1000, function ()
		{
			sendBytes("CORRUPTED_KNIGHT_SHOW_FARADOX")
		})
	})
}