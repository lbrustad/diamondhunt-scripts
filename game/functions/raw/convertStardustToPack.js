/**
 * convertStardustToPack extracted from ../../deobfuscated/bundle.js at line 17796-17810
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
	var _0x15DF5 = 0;
	if (getItem("stardust") >= 1000)
	{
		_0x15DF5 = parseInt(getItem("stardust") / 1000)
	};
	document.getElementById("dialogue-stardust-packs-input").value = _0x15DF5;
	keyListenerStadustPacks(_0x15DF5);
	openDialogue("dialogue-stardust-packs")
}