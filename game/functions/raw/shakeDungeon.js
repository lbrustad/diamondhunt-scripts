/**
 * shakeDungeon extracted from ../../deobfuscated/bundle.js at line 9418-9430
 *
 * If this file doesn't contain a function, there is an error in ../raw/shakeDungeon.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function shakeDungeon()
{
	$("#body").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 10
	}, 5000);
	setTimeout(function ()
	{
		confirmDialogue("images/kingsKnightIcon.png", "OH NO!", "Close", "", "")
	}, 6000)
}