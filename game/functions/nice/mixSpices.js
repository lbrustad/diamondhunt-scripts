'use strict';

function mixSpices()
{
	var termshot = document.getElementById("dialogue-spices-" + "yellow").innerHTML;
	var trackResponse = document.getElementById("dialogue-spices-" + "green").innerHTML;
	var expMsg = document.getElementById("dialogue-spices-" + "red").innerHTML;
	var originalH1Html = document.getElementById("dialogue-spices-" + "blue").innerHTML;
	sendBytes("MIX_QUEST_SPICES=" + termshot + "~" + trackResponse + "~" + expMsg + "~" + originalH1Html);
};
