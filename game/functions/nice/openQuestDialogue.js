'use strict';

function openQuestDialogue(pollProfileId, userId, text, room_id, parent, index, label, id, name, language, context, startingDict)
{
	document.getElementById("dialogue-quest-title").innerHTML = text;
	document.getElementById("dialogue-quest-text").innerHTML = "<table><tr><td class='dialogue-quest-text-td'>" + room_id + "</td><td><img src='" + pollProfileId + "' class='img-150' /> </td></table>";
	document.getElementById("dialogue-quest-btn1").style.display = "none";
	document.getElementById("dialogue-quest-btn2").style.display = "none";
	document.getElementById("dialogue-quest-btn3").style.display = "none";
	document.getElementById("dialogue-quest-btn4").style.display = "none";
	if (parent != "")
	{
		document.getElementById("dialogue-quest-btn1").style.display = "";
		if (name == "")
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue('dialogue-quest');");
		}
		else
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue('dialogue-quest');sendBytes('QUEST=" + userId + "~" + name + "')");
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn1").style.display = "none";
	}
	if (index != "")
	{
		document.getElementById("dialogue-quest-btn2").style.display = "";
		if (language == "")
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue('dialogue-quest');");
		}
		else
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue('dialogue-quest');sendBytes('QUEST=" + userId + "~" + language + "')");
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn2").style.display = "none";
	}
	if (label != "")
	{
		document.getElementById("dialogue-quest-btn3").style.display = "";
		if (context == "")
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue('dialogue-quest');");
		}
		else
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue('dialogue-quest');sendBytes('QUEST=" + userId + "~" + context + "')");
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn3").style.display = "none";
	}
	if (id != "")
	{
		document.getElementById("dialogue-quest-btn4").style.display = "";
		if (startingDict == "")
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue('dialogue-quest');");
		}
		else
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue('dialogue-quest');sendBytes('QUEST=" + userId + "~" + startingDict + "')");
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn4").style.display = "none";
	}
	var s = "<img src='images/bubbleChat.png' class='img-30' /> ";
	document.getElementById("dialogue-quest-btn1").innerHTML = s + parent;
	document.getElementById("dialogue-quest-btn2").innerHTML = s + index;
	document.getElementById("dialogue-quest-btn3").innerHTML = s + label;
	document.getElementById("dialogue-quest-btn4").innerHTML = s + id;
	openDialogueOverride("dialogue-quest", "large");
};
