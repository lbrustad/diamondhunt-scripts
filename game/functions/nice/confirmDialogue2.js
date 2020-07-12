'use strict';

function confirmDialogue2(value, lines, range, module, data, linkedEntities, force)
{
	if (value == "" || value == "none")
	{
		document.getElementById("dialogue-confirm2-img").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-confirm2-img").src = value;
		document.getElementById("dialogue-confirm2-img").style.display = "";
	}
	document.getElementById("dialogue-confirm2-text").innerHTML = lines;
	document.getElementById("dialogue-confirm2").style.display = "";
	document.getElementById("dialogue-confirm2").style.top = scrollY + 20 + "px";
	document.getElementById("dialogue-confirm2-yes").innerHTML = range;
	document.getElementById("dialogue-confirm2-yes2").innerHTML = module;
	document.getElementById("dialogue-confirm2-no").innerHTML = data;
	document.getElementById("dialogue-confirm2-yes").setAttribute("onclick", "sendBytes('" + linkedEntities + "');closeDialogue('dialogue-confirm2');");
	document.getElementById("dialogue-confirm2-yes2").setAttribute("onclick", "sendBytes('" + force + "');closeDialogue('dialogue-confirm2');");
};
