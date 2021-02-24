'use strict';

function addIgnore(fn)
{
	sendBytes("ADD_IGNORE=" + fn);
	document.getElementById("dialogue-ignore-list-add-textbox").value = "";
};
