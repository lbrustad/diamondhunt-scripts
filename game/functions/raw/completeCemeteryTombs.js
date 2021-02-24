/**
 * completeCemeteryTombs extracted from ../../deobfuscated/bundle.js at line 10325-10336
 *
 * If this file doesn't contain a function, there is an error in ../raw/completeCemeteryTombs.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function completeCemeteryTombs()
{
	$("#combat-map-div").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 3
	}, 2000, function ()
	{
		confirmDialogue("images/magicSkill.png", "A spellscroll has spawned nearby.", "Close", "", "")
	})
}