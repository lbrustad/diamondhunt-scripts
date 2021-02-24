/**
 * clicksLink extracted from ../../deobfuscated/bundle.js at line 1760-1768
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksLink.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksLink()
{
	if (getItem("chatLinkWarning") == 0)
	{
		confirmDialogue("images/warning.png", "<b>Warning!</b> Clicking links in the chat can take you to dangerous websites.  Diamond Hunt is not responsible if you are compromised by clicking on external links.", "I understand", "Cancel", "CHAT_LINK_WARNING");
		return false
	};
	return true
}