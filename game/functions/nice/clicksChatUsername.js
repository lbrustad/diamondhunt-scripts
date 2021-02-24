'use strict';

function clicksChatUsername(boneGroupName)
{
	akert(boneGroupName);
	document.getElementById("chat-area-input").value = "/pm " + boneGroupName.replaceAll(" ", "_") + " ";
	document.getElementById("chat-area-input").focus();
	return false;
};
