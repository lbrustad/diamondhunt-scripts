/**
 * setOrBuyChatTag extracted from ../../deobfuscated/bundle.js at line 3977-3987
 *
 * If this file doesn't contain a function, there is an error in ../raw/setOrBuyChatTag.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setOrBuyChatTag(_0x19EA0, _0x19E7D)
{
	if (_0x19E7D == "SET" || _0x19E7D == "UNSET")
	{
		sendBytes("SET_PRICE_TAG=" + _0x19EA0)
	}
	else
	{
		confirmDialogue("images/chatIcon.png", "Are you sure you wanna purchase this with tradable donor coins?", "Purchase", "Cancel", "BUY_PRICE_TAG=" + _0x19EA0)
	}
}