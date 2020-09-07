/**
 * mixSpices extracted from ../../deobfuscated/bundle.js at line 8628-8635
 *
 * If this file doesn't contain a function, there is an error in ../raw/mixSpices.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function mixSpices()
{
	var _0x60D9 = document.getElementById("dialogue-spices-" + "yellow").innerHTML;
	var _0x609F = document.getElementById("dialogue-spices-" + "green").innerHTML;
	var _0x60BC = document.getElementById("dialogue-spices-" + "red").innerHTML;
	var _0x6082 = document.getElementById("dialogue-spices-" + "blue").innerHTML;
	sendBytes("MIX_QUEST_SPICES=" + _0x60D9 + "~" + _0x609F + "~" + _0x60BC + "~" + _0x6082)
}