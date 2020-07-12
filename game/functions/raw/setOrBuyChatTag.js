/**
 * setOrBuyChatTag extracted from ../../deobfuscated/bundle.js at line 2563-2573
 *
 * If this file doesn't contain a function, there is an error in ../raw/setOrBuyChatTag.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setOrBuyChatTag(_0x1E30A, _0x1E2FC)
{
	if (_0x1E2FC == "SET")
	{
		sendBytes("SET_PRICE_TAG=" + _0x1E30A)
	}
	else
	{
		confirmDialogue("images/chatIcon.png", "Are you sure you wanna purchase this with tradable donor coins?", "Purchase", "Cancel", "BUY_PRICE_TAG=" + _0x1E30A)
	}
}