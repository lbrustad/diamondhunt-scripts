'use strict';

function addFriend(name)
{
	sendBytes("ADD_FRIEND=" + name);
	document.getElementById("dialogue-friends-list-add-textbox").value = "";
};
