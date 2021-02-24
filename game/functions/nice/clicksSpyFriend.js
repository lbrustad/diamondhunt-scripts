'use strict';

function clicksSpyFriend(canCreateDiscussions)
{
	confirmDialogue("images/eyeIcon.png", "Do you want to log into this account under view mode?<br /><br /><span style='color:grey;font-size:10pt'>You'll be able to see this friends account as if you were logged into it, but will not be able to interact with it.", "View Account", "Cancel", "SPY_PROFILE=" + canCreateDiscussions);
};
