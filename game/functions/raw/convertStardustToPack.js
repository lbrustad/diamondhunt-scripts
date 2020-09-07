/**
 * convertStardustToPack extracted from ../../deobfuscated/bundle.js at line 14386-14400
 *
 * If this file doesn't contain a function, there is an error in ../raw/convertStardustToPack.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function convertStardustToPack()
{
	if (getItem("researcher") == 0)
	{
		return
	};
	var _0x44C1 = 0;
	if (getItem("stardust") >= 1000)
	{
		_0x44C1 = parseInt(getItem("stardust") / 1000)
	};
	document.getElementById("dialogue-stardust-packs-input").value = _0x44C1;
	keyListenerStadustPacks(_0x44C1);
	openDialogue("dialogue-stardust-packs")
}