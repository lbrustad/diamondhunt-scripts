/**
 * setOrBuyChatTag extracted from ../../deobfuscated/bundle.js at line 3338-3348
 *
 * If this file doesn't contain a function, there is an error in ../raw/setOrBuyChatTag.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setOrBuyChatTag(_0x7764, _0x7747)
{
	if (_0x7747 == "SET" || _0x7747 == "UNSET")
	{
		sendBytes("SET_PRICE_TAG=" + _0x7764)
	}
	else
	{
		confirmDialogue("images/chatIcon.png", "Are you sure you wanna purchase this with tradable donor coins?", "Purchase", "Cancel", "BUY_PRICE_TAG=" + _0x7764)
	}
}