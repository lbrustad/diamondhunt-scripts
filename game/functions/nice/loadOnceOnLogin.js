'use strict';

function loadOnceOnLogin()
{
	if (getItemString("username").startsWith("guest"))
	{
		document.getElementById("top-options-bar-after-username").innerHTML = " <span onclick='openProfileDialogue()' class='change-username-label'>(Change username)</u>";
	}
	else
	{
		document.getElementById("top-options-bar-after-username").innerHTML = " <span onclick='openProfileDialogue()' class='change-username-label'>(profile)</u>";
	}
};
