'use strict';

function clicksLink()
{
	if (getItem("chatLinkWarning") == 0)
	{
		confirmDialogue("images/warning.png", "<b>Warning!</b> Clicking links in the chat can take you to dangerous websites.  Diamond Hunt is not responsible if you are compromised by clicking on external links.", "I understand", "Cancel", "CHAT_LINK_WARNING");
		return false;
	}
	return true;
};
